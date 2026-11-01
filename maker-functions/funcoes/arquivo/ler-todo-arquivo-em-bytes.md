---
title: "Ler todo arquivo em bytes"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Ler em bytes todo o conteúdo do arquivo passado no parâmetro, mesmo que tenha quebra de linha.

Parâmetro:
1. Referência do arquivo ou caminho do arquivo. (Variante) (Ver observação 1)

## Retorno

Array de bytes lido. (Variante)

## Observações

1. No primeiro parâmetro pode ser informado a referência para o arquivo por meio da função "Abrir Arquivo para Leitura", ou o caminho para o arquivo.
2. Antes de manipular os elementos do array de bytes retornados por esta função utilizando a categoria lista, é
necessário utilizar a função "Array para Lista" da categoria conversão.

## Exemplo

Assumindo como parâmetro a referência para um arquivo que tem o texto "Maker", o retorno será
[77, 97, 107, 101, 114].
