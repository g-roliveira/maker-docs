import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { auditFiles, auditMarkdown } from "./markdown-ast-audit.mjs";

const brokenLinkPatterns = [
  /^\[(?<marker>#{1,6})[ \t]+(?<title>(?:(?!\]\()[^\r\n])+?)\r?\n(?:[ \t]*\r?\n)(?<description>[\s\S]*?)\]\((?<destination>[^)\r\n]+)\)[ \t]*(?=\r?\n|$)/gm,
  /^\[(?<marker>#{1,6})[ \t]+(?<title>[^\r\n]+?)\]\((?<destination>[^)\r\n]+)\)[ \t]*(?=\r?\n|$)/gm,
  /^\[(?<emphasis>\*{1,3}|_{1,3})(?<marker>#{1,6})[ \t]+(?<title>[^\r\n]+?)(?:\k<emphasis>)\]\((?<destination>[^)\r\n]+)\)[ \t]*(?=\r?\n|$)/gm,
];
const targetedRules = new Set(["migration-heading-link", "literal-markdown", "empty-heading"]);

function lineAtOffset(source, offset) {
  return source.slice(0, offset).split(/\r?\n/u).length;
}

function escapeLinkLabel(value) {
  return value.replace(/\\/gu, "\\\\").replace(/([\[\]])/gu, "\\$1");
}

export async function repairMigrationMarkdown(source, filePath = "<fixture>.md") {
  const initialFindings = await auditMarkdown(source, filePath);
  const emptyHeadingLines = new Set(
    initialFindings
      .filter((finding) => finding.rule === "empty-heading")
      .map((finding) => finding.line),
  );

  const newline = source.includes("\r\n") ? "\r\n" : "\n";
  const lines = source.split(/\r?\n/u);
  for (const lineNumber of emptyHeadingLines) {
    const line = lines[lineNumber - 1] ?? "";
    if (!/^[ \t]{0,3}#{1,6}[ \t]*$/u.test(line)) {
      throw new Error(
        `${filePath}:${lineNumber}: marcador de título vazio não reconhecido com segurança`,
      );
    }
    lines[lineNumber - 1] = "";
  }
  let repaired = lines.join(newline);
  const afterEmptyHeadings = await auditMarkdown(repaired, filePath);
  const migrationLines = new Set(
    afterEmptyHeadings
      .filter((finding) => finding.rule === "migration-heading-link")
      .map((finding) => finding.line),
  );

  const matches = brokenLinkPatterns.flatMap((pattern) => [...repaired.matchAll(pattern)]);
  matches.sort((left, right) => left.index - right.index);
  const selected = matches.filter((match) =>
    migrationLines.has(lineAtOffset(repaired, match.index)),
  );
  const matchedLines = new Set(selected.map((match) => lineAtOffset(repaired, match.index)));
  const unmatchedLines = [...migrationLines].filter((line) => !matchedLines.has(line));
  if (unmatchedLines.length) {
    throw new Error(
      `${filePath}: não foi possível identificar com segurança os links das linhas ${unmatchedLines.join(", ")}`,
    );
  }

  for (const match of selected.reverse()) {
    const { marker, title, description = "", destination, emphasis = "" } = match.groups;
    const label = emphasis
      ? `${emphasis}${escapeLinkLabel(title.trim())}${emphasis}`
      : escapeLinkLabel(title.trim());
    const replacement = description
      ? `${marker} [${label}](${destination.trim()})\n\n${description}`
      : `${marker} [${label}](${destination.trim()})`;
    repaired =
      repaired.slice(0, match.index) + replacement + repaired.slice(match.index + match[0].length);
  }

  const remaining = (await auditMarkdown(repaired, filePath)).filter((finding) =>
    targetedRules.has(finding.rule),
  );
  if (remaining.length) {
    const first = remaining[0];
    throw new Error(
      `${filePath}:${first.line}:${first.column}: a correção deixou ${remaining.length} problema(s) estrutural(is)`,
    );
  }

  return {
    content: repaired,
    linksRepaired: selected.length,
    emptyHeadingsRemoved: emptyHeadingLines.size,
    changed: repaired !== source,
  };
}

async function main() {
  const write = process.argv.includes("--write");
  const findings = await auditFiles(["."]);
  const files = [
    ...new Set(
      findings.filter((finding) => targetedRules.has(finding.rule)).map((finding) => finding.file),
    ),
  ];
  const summary = [];

  for (const filePath of files) {
    const absolutePath = path.resolve(filePath);
    const source = await readFile(absolutePath, "utf8");
    const result = await repairMigrationMarkdown(source, filePath);
    if (write && result.changed) await writeFile(absolutePath, result.content);
    if (result.changed) {
      summary.push({
        file: filePath,
        linksRepaired: result.linksRepaired,
        emptyHeadingsRemoved: result.emptyHeadingsRemoved,
      });
    }
  }

  console.log(`${write ? "Corrigidos" : "Prévia"}: ${summary.length} arquivo(s).`);
  console.log(
    `Links reestruturados: ${summary.reduce((total, item) => total + item.linksRepaired, 0)}; ` +
      `marcadores de título vazios removidos: ${summary.reduce((total, item) => total + item.emptyHeadingsRemoved, 0)}.`,
  );
  for (const item of summary) {
    console.log(
      `${item.file}: ${item.linksRepaired} link(s), ${item.emptyHeadingsRemoved} heading(s) vazio(s)`,
    );
  }
}

if (
  process.argv[1] &&
  import.meta.url === new URL(`file://${path.resolve(process.argv[1])}`).href
) {
  await main();
}
