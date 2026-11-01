---
title: "Ler Intervalo de Linhas de um Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Esta função lê uma determinada quantidade de linhas de um arquivo a partir de uma linha inicial.

## Parâmetro(s)

1. Caminho do arquivo ou referência do arquivo. (Variante) (Ver observação 1)
2. Linha Inicial. (Inteiro)
3. Quantidade de Linhas. (Inteiro)
4. Verdadeiro ou falso para indicar se desejar fechar o arquivo após a leitura (Lógico, Opcional) (Ver observação 2)

## Retorno

Linhas lidas do arquivo. (Letras)

## Observações

1. No primeiro parâmetro pode ser informado a referência para o arquivo por meio da função "Abrir arquivo para Leitura", ou o caminho para o arquivo.
2. Caso o quarto parâmetro não seja informado o arquivo permanecerá aberto após a leitura.
