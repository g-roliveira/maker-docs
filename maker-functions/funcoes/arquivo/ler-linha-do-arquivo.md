---
title: "Ler linha do arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Lê a linha do arquivo passado por parâmetro.

## Parâmetro(s)

1. Referência do arquivo ou caminho do arquivo. (Ver observação 1)
2. Verdadeiro ou falso para indicar se desejar fechar o arquivo após a leitura. (Opcional) (Ver observação 3)

## Retorno

Conteúdo lido. (Letras)

## Observações

1. No primeiro parâmetro pode ser informado a referência para o arquivo por meio da função "Abrir arquivo para Leitura", ou o caminho para o arquivo.
2. Ao utilizar esta função a linha é incrementada, ou seja, na primeira utilização a leitura da primeira linha será realizada, na segunda vez o retorno será o conteúdo da segunda linha.
3. Caso o segundo parâmetro não seja informado o arquivo permanecerá aberto após a leitura.

## Exemplo

Assumindo como primeiro parâmetro a referência para um arquivo que tem o texto "Maker Flow" na primeira
linha e o texto "Softwares" na segunda linha, o retorno será "Maker Flow". Na segunda vez que a função for
usada o retorno será "Softwares", pois ao realizar a leitura a linha é incrementada.
