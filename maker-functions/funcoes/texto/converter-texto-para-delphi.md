---
title: "Converter Texto para Delphi"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=3"
---

**Categoria:** [Texto](../../categorias/texto)

**Compatibilidade:** Cliente, Servidor

## Descrição

Transforma o texto normal em um texto para Delphi com a indentação passada no segundo parâmetro.
(Coloca os caracteres especiais para serem executados em Delphi, como por exemplo caracteres de quebra de linha e
etc.).

## Parâmetro(s)

1. Texto que será transformado para Delphi. (Letras)
2. Parâmetro: Indentação. (Letras)

## Retorno

Texto em Delphi. (Letras)

## Exemplo

A quebra de linha em Delphi é representada por "#13#10". Assim, passando como parâmetros "Maker(Quebra de Linha)
All " (Letras) e " " (3 espaços em branco), o resultado será ( '"Maker'#13#10'All "').
