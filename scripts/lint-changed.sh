#!/usr/bin/env bash
set -euo pipefail

base="${1:-${GITHUB_BASE_REF:-}}"
if [[ -z "$base" ]]; then
  base="origin/main"
fi

if git rev-parse --verify "$base" >/dev/null 2>&1; then
  mapfile -t files < <(git diff --name-only --diff-filter=ACMR "$base"...HEAD -- '*.md' '*.mdx')
else
  mapfile -t files < <(git diff --name-only --diff-filter=ACMR HEAD^ HEAD -- '*.md' '*.mdx')
fi

if [[ ${#files[@]} -eq 0 ]]; then
  echo "OK: nenhum Markdown alterado"
  exit 0
fi

printf 'Markdown alterado: %s arquivo(s)\n' "${#files[@]}"
npx markdownlint-cli2 --config .markdownlint-changed.yaml "${files[@]}"
