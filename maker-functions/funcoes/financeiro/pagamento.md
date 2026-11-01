---
title: "Pagamento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=49"
---

**Categoria:** [Financeiro](../../categorias/financeiro)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função calcula um pagamento, o qual retorna o valor das parcelas adicionando o juros.

## Parâmetro(s)

1. Valor. (Número)
2. Quantidade de Meses. (Inteiro)
3. Porcentagem dos Juros. (Número)

## Retorno

Retorna o valor das parcelas adicionando o juros. (Fracionado.

## Observação

A porcentagem tem que ser passada com as casas decimais, Ex: 1% é 0,01, 10% 0,1 etc.

## Exemplo

Assumindo o 1º parâmetro sendo 1000 (fracionado), o 2º parâmetro sendo 5 e o 3º parâmetro sendo 0,2. O retorno será 334,38.
