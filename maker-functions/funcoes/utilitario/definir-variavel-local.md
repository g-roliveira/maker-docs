---
title: "Definir Variável Local"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Define uma variável local. As variáveis definidas com esta função ficarão disponíveis somente para o formulário onde o
fluxo foi executado.

## Parâmetro(s)

1. Nome da variável. (Letras)
2. Valor a ser armazenado. (Variante)

## Retorno

Retorna o antigo valor da variável. Caso a variável não exista, retorna Nulo.

## Observações

1. A função que acessa a variável local é: 'Obter Variável Local'.
2. Ao definir essa função em formulário flutuante a mesma estará acessível para os demais formulários flutuantes.
3. Ao definir essa função para formulários pop up, as variáveis estarão disponíveis para o formulário corrente.

## Exemplo

Assumindo como parâmetros: TESTE (Letras) e Valor (Letras), quando a função for executada vai ser criada uma
variável local chamada TESTE com o conteúdo Valor.
