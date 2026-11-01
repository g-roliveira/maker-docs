---
title: "Ler todo arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Lê todo o conteúdo do arquivo passado no parâmetro, mesmo que tenha quebra de linha.

## Parâmetro(s)

1. Caminho do arquivo ou referência do arquivo. (Variante) (Ver observação 1)
2. Verdadeiro ou falso para indicar se desejar fechar o arquivo após a leitura. (Lógico, Opcional) (Ver observação 2)

## Retorno

Conteúdo de todo o arquivo. (Letras)

## Observações

1. No primeiro parâmetro pode ser informado a referência para o arquivo por meio da função "Abrir arquivo para Leitura", ou o caminho do arquivo.
2. Caso o segundo parâmetro não seja informado o arquivo permanecerá aberto após a leitura.

## Exemplo

Assumindo como parâmetro a referência para um arquivo que tem o texto "Maker ALL" , o retorno será "Maker
ALL".
