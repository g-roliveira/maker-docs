---
title: "Ler caracteres do arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Lê a quantidade de caracteres passada no segundo parâmetro, mesmo que tenha quebra de linha.

## Parâmetro(s)

1. Caminho do arquivo ou referência do arquivo. (Variante) (Ver observação 1)
2. Quantidade de caracteres a serem lidos. (Inteiro)
3. Verdadeiro ou falso para indicar se desejar fechar o arquivo após a leitura. (Lógico, Opcional) (Ver observação 3)

## Retorno

Texto lido. (Letras)

## Observações

1. No primeiro parâmetro pode ser informado a referência para o arquivo por meio da função Abrir Arquivo para Leitura ou o caminho para o arquivo.
2. A leitura é sempre realizada a partir do início do arquivo até a quantidade de caracteres definida.
3. Caso o terceiro parâmetro não seja informado o arquivo permanecerá aberto após a leitura.

## Exemplos

1. Assumindo como parâmetro a referência para um arquivo que tem o texto "Maker ALL" , o retorno será "Maker
ALL" caso a quantidade de caracteres passada no segundo parâmetro tenha sido igual a 9.
2. Assumindo como parâmetro a referência para um arquivo que tem o texto "Softwell Maker ALL" , o retorno será "Softwell" caso a quantidade de caracteres passada no segundo parâmetro tenha sido igual a 8.
