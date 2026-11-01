---
title: "Alterar Charset"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=8"
---

**Categoria:** [Conversão](../../categorias/conversao)

**Compatibilidade:** Servidor

## Descrição

Altera o charset do texto passado por parâmetro.

## Parâmetro(s)

1. Texto a ser alterado. (Letras)
2. Charset de origem. (Letras)
3. Charset de destino. (Letras)

## Retorno

Texto com o charset convertido, conforme opção escolhida no 3° parâmetro. (Letras)

## Observação

Tipos de charset: iso-8859-1, utf-8, utf-16, utf-32 e.t.c

## Exemplo

Assumindo no 1º Parâmetro o texto: "Computadores só trabalham com números binários", " ISO-8859-1 " no 2º Parâmetro
e " utf-8 " no 3º Parâmetro, o retorno será: "Computadores s? trabalham com n?meros bin?rios".
