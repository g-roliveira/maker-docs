---
title: "Capturar Exceções"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=10"
---

**Categoria:** [Fluxo](../../categorias/fluxo)

**Compatibilidade:** Cliente, Servidor

## Descrição

A partir do ponto em que se define a função "Monitorar Exceções", os erros serão monitorados e poderão ser capturados nesta função. Esta função depende do uso anterior da função "Monitorar Exceções".

## Parâmetro(s)

1. Fluxo que deve ser executado em caso de ocorrência de exceções.
Este fluxo automaticamente receberá por parâmetro de entrada as seguintes informações, em ordem:
1. Mensagem da exceção.
2. Causa da exceção.
3. Exceção (Objeto). -> Apenas Servidor
3. 1. Servidor (java.lang.Exception).
2. Parâmetro adicional para o fluxo. (Variante) (Ver observação 1)

## Retorno

Não possui.

## Observações

1. No 2º Parâmetro pode ser Lista, Mapa, Letras, Inteiro, dentre outros.
2. Pelo fato de o controle do erro ser do desenvolvedor, o fluxo não será interrompido. Este continuará com sua normal execução.
3. O procedimento correto para se utilizar uma cláusula condicional entre um try-catch é inserir esse trecho em um subfluxo.
4. Exemplo de uso da função no link: suporte.softwell.com.br/maker/manual2_7/pt/ - pesquise pelo nome da função.
