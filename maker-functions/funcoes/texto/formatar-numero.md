---
title: "Formatar Número"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=3"
---

**Categoria:** [Texto](../../categorias/texto)

**Compatibilidade:** Cliente, Servidor

## Descrição

Formata um número de acordo com uma máscara.

## Parâmetro(s)

1. Número. (Inteiro)
2. Máscara. (Letras)

## Retorno

Número formatado. (Letras)

## Observações

1. Deve ser seguido os padrões da classe. Para mais informações sobre as máscaras acesse:
http://java.sun.com/j2se/1.4.2/docs/api/java/text/DecimalFormat.html
2. Caso o número passado seja uma dízima, é recomendado o arredondamento do mesmo para a quantidade de casas decimais da máscara utilizada.
Exemplo: 17,60 x 100 = 1760.0000000000002
