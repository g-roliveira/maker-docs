import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { unified } from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import { VFile } from "vfile";

const excludedDirectories = new Set([
  ".agents",
  ".git",
  ".mintlify",
  "node_modules",
  "playwright-report",
  "reports",
  "test-results",
  "tests",
]);

const knownRules = {
  "migration-heading-link": {
    severity: "error",
    message: "Um marcador de título está dentro do texto de um link.",
    suggestion:
      "Mova o título para um bloco de heading e use um rótulo curto no link ou em um componente Card.",
  },
  "literal-markdown": {
    severity: "error",
    message: "Uma sequência de Markdown suspeita será exibida como texto literal.",
    suggestion:
      "Corrija a sintaxe do link ou do título; mantenha exemplos intencionais em código inline ou bloco de código.",
  },
  "markdown-file-link": {
    severity: "error",
    message: "O link interno aponta para um arquivo Markdown em vez de uma rota Mintlify.",
    suggestion: "Remova a extensão .md ou .mdx e use o caminho da página na navegação.",
  },
  "empty-link": {
    severity: "error",
    message: "O link não tem rótulo visível.",
    suggestion: "Adicione um texto descritivo ou um texto alternativo à imagem do link.",
  },
  "empty-image-source": {
    severity: "error",
    message: "A imagem não tem um caminho de origem.",
    suggestion: "Defina o destino da imagem ou remova o elemento vazio.",
  },
  "image-alt": {
    severity: "warning",
    message: "A imagem não declara texto alternativo.",
    suggestion:
      "Descreva a informação da imagem no texto alternativo ou use alt vazio para uma imagem decorativa.",
  },
  "empty-heading": {
    severity: "error",
    message: "O título não tem texto.",
    suggestion: "Adicione um texto ao título ou remova o bloco vazio.",
  },
  "heading-level": {
    severity: "warning",
    message: "A hierarquia de títulos pula um nível.",
    suggestion: "Use o nível seguinte da hierarquia, sem pular de H2 para H4, por exemplo.",
  },
  "multiple-h1": {
    severity: "warning",
    message: "O documento contém mais de um título H1 no corpo.",
    suggestion: "Mantenha um H1 e use H2 ou níveis menores nas seções.",
  },
  "legacy-html-heading": {
    severity: "warning",
    message: "Foi encontrado um título HTML em um documento Markdown/MDX.",
    suggestion: "Use a sintaxe Markdown de título, por exemplo ## Título.",
  },
};

function textContent(node) {
  if (!node) return "";
  if (node.type === "text" || node.type === "inlineCode" || node.type === "code") {
    return node.value ?? "";
  }
  if (node.type === "image") return node.alt ?? "";
  if (node.type === "break") return " ";
  return (node.children ?? []).map(textContent).join("");
}

function addFinding(file, ruleId, node, extraMessage) {
  const rule = knownRules[ruleId];
  const message = file.message(extraMessage ?? rule.message, node, {
    source: "markdown-ast-audit",
    ruleId,
  });
  message.source = "markdown-ast-audit";
  message.ruleId = ruleId;
  message.data = {
    ...(message.data ?? {}),
    severity: rule.severity,
    suggestion: rule.suggestion,
  };
}

function markdownAuditPlugin() {
  return function transform(tree, file) {
    let lastHeadingLevel = 0;
    let lastRawHeadingLine = 0;
    let h1Count = 0;
    let firstH1Node;

    function visit(node, parent) {
      if (!node || node.type === "code" || node.type === "inlineCode") return;

      if (node.type === "heading") {
        const label = textContent(node).trim();
        if (!label) addFinding(file, "empty-heading", node);
        if (node.depth === 1) {
          h1Count += 1;
          firstH1Node ??= node;
        }
        if (lastHeadingLevel && node.depth > lastHeadingLevel + 1) {
          addFinding(file, "heading-level", node);
        }
        lastHeadingLevel = node.depth;
      }

      if (node.type === "link") {
        const label = textContent(node).trim();
        if (!label) addFinding(file, "empty-link", node);
        if (/^#{1,6}\s+\S/u.test(label)) {
          addFinding(file, "migration-heading-link", node);
        }
        if (/^(?:\.\.\/|\.\/|\/)?[^?#]+\.mdx?(?:[?#].*)?$/iu.test(node.url ?? "")) {
          addFinding(file, "markdown-file-link", node);
        }
      }

      if (node.type === "image") {
        if (!node.url?.trim()) addFinding(file, "empty-image-source", node);
        if (node.alt === null || node.alt === undefined) {
          addFinding(file, "image-alt", node);
        }
      }

      if (node.type === "text") {
        const visibleText = node.value ?? "";
        const rawLinkTail = /\b\d+\s+items\]\s*\\?\(/iu.test(visibleText);
        const rawHeadingLink = /\[\s*#{1,6}\s+\S/u.test(visibleText);
        if (rawHeadingLink && parent?.type !== "link") {
          addFinding(file, "migration-heading-link", node);
          lastRawHeadingLine = node.position?.start?.line ?? 0;
        } else if (
          rawLinkTail &&
          parent?.type !== "link" &&
          (node.position?.start?.line ?? 0) > lastRawHeadingLine + 4
        ) {
          addFinding(file, "literal-markdown", node);
        }
      }

      if (
        (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
        /^h[1-6]$/iu.test(node.name ?? "")
      ) {
        addFinding(file, "legacy-html-heading", node);
      }

      for (const child of node.children ?? []) visit(child, node);
    }

    visit(tree);
    if (h1Count > 1) addFinding(file, "multiple-h1", firstH1Node);
  };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkFrontmatter, ["yaml"])
  .use(remarkMdx)
  .use(markdownAuditPlugin);

export async function auditMarkdown(value, filePath = "<fixture>.md") {
  const file = new VFile({ path: filePath, value });
  const tree = processor.parse(file);
  await processor.run(tree, file);
  return file.messages.map((message) => ({
    file: filePath,
    line: message.place?.start?.line ?? message.line ?? 1,
    column: message.place?.start?.column ?? message.column ?? 1,
    severity: message.data?.severity ?? "error",
    rule: message.ruleId ?? "mdx-parse",
    message: message.message,
    suggestion: message.data?.suggestion ?? "Corrija a sintaxe MDX/Markdown na posição indicada.",
  }));
}

async function collectMarkdown(target) {
  const absoluteTarget = path.resolve(target);
  let stat;
  try {
    stat = await import("node:fs/promises").then(({ stat: getStat }) => getStat(absoluteTarget));
  } catch {
    return [];
  }

  if (stat.isFile()) {
    return /\.(?:md|mdx)$/iu.test(absoluteTarget) ? [absoluteTarget] : [];
  }

  const entries = await readdir(absoluteTarget, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) continue;
    const fullPath = path.join(absoluteTarget, entry.name);
    if (entry.isDirectory()) files.push(...(await collectMarkdown(fullPath)));
    else if (entry.isFile() && /\.(?:md|mdx)$/iu.test(entry.name)) files.push(fullPath);
  }
  return files;
}

function locationOf(error) {
  return error?.position?.start ?? error?.place?.start ?? { line: 1, column: 1 };
}

export async function auditFiles(targets = ["."]) {
  const files = [...new Set((await Promise.all(targets.map(collectMarkdown))).flat())].sort();
  const findings = [];
  for (const filePath of files) {
    const displayPath = path.relative(process.cwd(), filePath) || path.basename(filePath);
    try {
      findings.push(...(await auditMarkdown(await readFile(filePath, "utf8"), displayPath)));
    } catch (error) {
      const position = locationOf(error);
      findings.push({
        file: displayPath,
        line: position.line ?? 1,
        column: position.column ?? 1,
        severity: "error",
        rule: "mdx-parse",
        message: error.message,
        suggestion: "Corrija a sintaxe MDX/Markdown indicada pelo parser.",
      });
    }
  }
  return findings;
}

async function main() {
  const args = process.argv.slice(2);
  const reportIndex = args.indexOf("--report");
  const reportPath = reportIndex >= 0 ? args[reportIndex + 1] : undefined;
  if (reportIndex >= 0) args.splice(reportIndex, 2);
  const targets = args.length ? args.filter((arg) => !arg.startsWith("--")) : ["."];
  const findings = await auditFiles(targets);

  if (reportPath) {
    await mkdir(path.dirname(path.resolve(reportPath)), { recursive: true });
    await writeFile(reportPath, `${JSON.stringify({ findings }, null, 2)}\n`);
  }

  for (const finding of findings) {
    const at = `${finding.file}:${finding.line}:${finding.column}`;
    console.log(`${at} ${finding.severity} [${finding.rule}] ${finding.message}`);
    console.log(`  Sugestão: ${finding.suggestion}`);
  }

  const counts = findings.reduce((result, finding) => {
    result[finding.severity] = (result[finding.severity] ?? 0) + 1;
    return result;
  }, {});
  console.log(
    `Auditoria Markdown/MDX: ${findings.length} ocorrência(s) ` +
      `(${counts.error ?? 0} erro(s), ${counts.warning ?? 0} aviso(s)).`,
  );
  if (findings.some((finding) => finding.severity === "error")) process.exitCode = 1;
}

if (
  process.argv[1] &&
  import.meta.url === new URL(`file://${path.resolve(process.argv[1])}`).href
) {
  await main();
}
