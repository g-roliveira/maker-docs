---
title: "Tamanho do Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Retorna o tamanho em bytes do arquivo passado por parâmetro.

## Parâmetro(s)

1. Caminho do arquivo ou referência do arquivo. (Variante) (Ver observação 1)
2. Verdadeiro ou falso para indicar se desejar fechar o arquivo após a leitura. (Lógico, Opcional) (Ver observação 2)

## Retorno

Tamanho do arquivo em bytes. (Inteiro)

## Observações

1. No primeiro parâmetro pode ser informado a referência para o arquivo por meio da função "Abrir Arquivo para Leitura", ou o caminho para o arquivo.
2. Caso o segundo parâmetro não seja informado o arquivo permanecerá aberto após a leitura.

## Exemplo

Assumindo como parâmetro a referência para um arquivo que tem 100 bytes, o retorno será 100.
