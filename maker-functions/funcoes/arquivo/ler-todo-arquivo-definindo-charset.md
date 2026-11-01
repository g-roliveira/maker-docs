---
title: "Ler Todo Arquivo Definindo Charset"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Lê todo o conteúdo do arquivo passado no parâmetro, mesmo que tenha quebra de linha, definindo o charset.

## Parâmetro(s)

1. Referência do arquivo ou caminho para o arquivo. (Ver observação 1)
2. Charset a ser utilizado. Ex: ISO-8859-1, UTF-8. (Ver observação 2)

## Retorno

Conteúdo de todo o arquivo. (Letras)

## Observações

1. No primeiro parâmetro pode ser informado a referência para o arquivo por meio da função Abrir Arquivo para Leitura, ou o caminho para o arquivo.
2. Caso o 2º parâmetro não seja definido o mesmo assumirá o Charset do Webrun.

## Exemplo

Assumindo como parâmetro a referência para um arquivo que tem o texto "Maker ALL" , o retorno será "Maker
ALL".
