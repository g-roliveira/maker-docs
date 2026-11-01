---
title: "Monitorar Exceções"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=10"
---

**Categoria:** [Fluxo](../../categorias/fluxo)

**Compatibilidade:** Cliente, Servidor

## Descrição

A partir do ponto em que se define essa função, os erros serão monitorados e poderão ser capturados na função "Capturar Exceções".
Uma função depende da outra, portanto ao usar "Monitorar" é obrigado o uso da "Capturar". Esta função é conhecida como o metodo "try".

Parâmetro:
Não possui.

## Retorno

Não possui.

## Observações

1. Pelo fato de o controle do erro ser do desenvolvedor, o fluxo não será interrompido. Este continuará com sua normal execução.
2. O procedimento correto para se utilizar uma cláusula condicional entre um try-catch é inserir esse trecho em um subfluxo.
