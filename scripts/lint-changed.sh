#!/usr/bin/env bash
set -euo pipefail

base="${1:-${GITHUB_BASE_REF:-}}"
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
if [[ -z "$base" ]]; then
  base="origin/main"
fi

if git rev-parse --verify "$base" >/dev/null 2>&1; then
  mapfile -d '' -t files < <(git diff --name-only --diff-filter=ACMR -z "$base" -- '*.md' '*.mdx')
else
  mapfile -d '' -t files < <(git diff --name-only --diff-filter=ACMR -z HEAD^ HEAD -- '*.md' '*.mdx')
fi

if [[ ${#files[@]} -eq 0 ]]; then
  echo "OK: nenhum Markdown alterado"
  exit 0
fi

printf 'Markdown alterado: %s arquivo(s)\n' "${#files[@]}"

temp_dir="$(mktemp -d)"
trap 'rm -rf "$temp_dir"' EXIT
# Isolate the changed-file profile from the repository-wide legacy defaults.
for file in "${files[@]}"; do
  mkdir -p "$temp_dir/$(dirname "$file")"
  cp "$file" "$temp_dir/$file"
done

(
  cd "$temp_dir"
  "$repo_root/node_modules/.bin/markdownlint-cli2" \
    --config "$repo_root/.markdownlint-changed.yaml" "${files[@]}"
)
