import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { auditMarkdown } from "../scripts/markdown-ast-audit.mjs";
import { repairMigrationMarkdown } from "../scripts/repair-migration-markdown.mjs";

const root = path.resolve(import.meta.dirname, "..");

async function fixture(name) {
  return readFile(path.join(root, "tests/fixtures/markdown", name), "utf8");
}

test("detecta o padrão real no fixture e confirma a página Webrun corrigida", async () => {
  const content = await readFile(
    path.join(root, "maker-ai/docs/webrun/estrutura_de_pastas_e_arquivos.md"),
    "utf8",
  );
  const findings = await auditMarkdown(
    content,
    "maker-ai/docs/webrun/estrutura_de_pastas_e_arquivos.md",
  );

  const fixtureFindings = await auditMarkdown(
    await fixture("broken-webrun.mdx"),
    "broken-webrun.mdx",
  );
  assert.ok(
    fixtureFindings.some((finding) => finding.rule === "migration-heading-link"),
    "o fixture do padrão real precisa continuar falhando no validador",
  );
  assert.equal(
    findings.some((finding) => finding.rule === "migration-heading-link"),
    false,
    "a página de produção deve permanecer sem o defeito após a correção",
  );
});

test("registra linha, coluna, severidade e uma sugestão para o fixture Webrun", async () => {
  const findings = await auditMarkdown(await fixture("broken-webrun.mdx"), "broken-webrun.mdx");
  const finding = findings.find((item) => item.rule === "migration-heading-link");

  assert.ok(finding);
  assert.equal(finding.line, 5);
  assert.ok(finding.column > 0);
  assert.equal(finding.severity, "error");
  assert.match(finding.suggestion, /título|heading/i);
});

test("reestrutura o padrão Webrun sem perder título, descrição ou destino", async () => {
  const source = await fixture("broken-webrun.mdx");
  const result = await repairMigrationMarkdown(source, "broken-webrun.mdx");

  assert.match(
    result.content,
    /## \[🗃️ Estrutura de pastas e arquivos\]\(webrun\/estrutura_de_pastas_e_arquivos\)/u,
  );
  assert.match(result.content, /7 items/u);
  assert.equal(
    (await auditMarkdown(result.content, "broken-webrun.mdx")).some(
      (finding) => finding.severity === "error",
    ),
    false,
  );
});

test("não sinaliza Markdown válido em código inline, bloco de código ou MDX", async () => {
  const findings = await auditMarkdown(await fixture("valid-examples.mdx"), "valid-examples.mdx");
  const errors = findings.filter((finding) => finding.severity === "error");

  assert.deepEqual(errors, []);
});

test("rejeita links internos com extensão Markdown", async () => {
  const findings = await auditMarkdown("[Página](/maker-ai/docs/intro.md)\n", "broken-link.md");

  assert.ok(findings.some((finding) => finding.rule === "markdown-file-link"));
});
