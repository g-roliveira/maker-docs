---
title: "Incrementar Hora/Minuto/Segundo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=4"
---

**Categoria:** [Data e Hora](../../categorias/data-e-hora)

**Compatibilidade:** Cliente, Servidor

## Descrição

Incrementa a hora, minuto ou segundo de uma data com hora.

## Parâmetro(s)

1. Data com a hora que será incrementada.
2. Quantidade a ser incrementada. (Inteiro)
3. Qual parte da hora deve ser incrementada. (Letras) (Ver observação 1)

## Retorno

Data com a hora incrementada. (Data)

## Observações

1. No 3º Parâmetro use H para hora, M para minuto e S para segundo.
2. Utilizando a função na Camada Cliente se for passada no 1º parâmetro somente a data o retorno da função será a data e
a hora com o valor incrementado na parte da hora informada.

## Exemplo

Assumindo no 1º parâmetro 10/12/2013, 2º parâmetro 30, 3º parâmetro M
retorno da função será 10/12/2013 00:30:00.
