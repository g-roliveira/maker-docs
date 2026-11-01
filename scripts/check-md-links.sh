#!/usr/bin/env bash
set -euo pipefail

if grep -RIn \
  --include='*.md' \
  --exclude-dir=node_modules \
  --exclude-dir=.git \
  --exclude-dir=.mintlify \
  --exclude-dir=test-results \
  --exclude-dir=reports \
  -E '\]\([^)]*\.md(#[^)]*)?( "[^"]*")?\)' .; then
  echo
  echo "Erro: links internos não devem terminar em .md."
  echo "Use a rota sem extensão: /pagina em vez de /pagina.md."
  exit 1
fi

echo "OK: nenhum link interno terminando em .md"
