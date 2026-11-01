---
title: "Ler Linha do Arquivo Definindo Charset"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Lê a linha do arquivo passado no parâmetro de acordo o Charset informado.

## Parâmetro(s)

1. Caminho do arquivo ou referência do arquivo. (Variante) (Ver observação 1)
2. Charset a ser utilizado. (Letras, Opcional) (Ver observação 3)
3. Verdadeiro ou falso para indicar se desejar fechar o arquivo após a leitura (Lógico, Opcional) (Ver observação 4)

## Retorno

Conteúdo lido. (Letras)

## Observações

1. No primeiro parâmetro pode ser informado a referência para o arquivo por meio da função Abrir Arquivo para Leitura, ou o caminho para o arquivo.
2. Ao utilizar esta função a linha é incrementada, ou seja, na primeira utilização a leitura da primeira linha será realizada, na segunda vez o retorno será o conteúdo da segunda linha.
3. No segundo parâmetro, deverá ser informado o charset do arquivo, exemplo: (UTF-8, ISO-8859-1). Caso ele não seja definido o mesmo assumirá o Charset do Webrun.
4. Caso o terceiro parâmetro não seja informado o arquivo permanecerá aberto após a leitura.

## Exemplo

Assumindo como primeiro parâmetro a referência para um arquivo que tem o texto "Maker Flow" na primeira
linha e o texto "Softwares" na segunda linha, o retorno será "Maker Flow". Na segunda vez que a função for
usada o retorno será "Softwares", pois ao realizar a leitura a linha é incrementada.
