---
title: "Adicionar a arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Essa função adiciona um conteúdo ao arquivo passado por parâmetro.

## Parâmetro(s)

1. Caminho do arquivo ou referência do arquivo. (Variante) (Ver observação 1)
2. Conteúdo que será adicionado ao arquivo. (Letras)
3. Charset. (Letras, Opcional) (Ver observação 2)
4. Falso, para abrir o arquivo para edição sobrepondo o seu conteúdo original, ou verdadeiro, para abrir e apenas inserir novos dados ao conteúdo existente. (Lógico, Opcional)
5. Verdadeiro ou falso para indicar se desejar fechar o arquivo após a escrita. (Lógico, Opcional) (Ver Observação 3)

## Retorno

Referência do arquivo ou nulo. (Variante)

## Observações

1. No primeiro parâmetro pode ser informado a referência para o arquivo por meio da função "Abrir arquivo para Escrita", ou o caminho para o arquivo.
2. No segundo parâmetro, deverá ser informado o charset do arquivo exemplo: (UTF-8, ISO-8859-1).
3. Quando o valor para o quinto parâmetro for falso o arquivo será fechado e o retorno será nulo, caso seja verdadeiro o arquivo permanecerá aberto e retornará a referência do mesmo.
4. Caso o quarto parâmetro não seja informado o conteúdo do arquivo possuirá o Charset do Webrun.
