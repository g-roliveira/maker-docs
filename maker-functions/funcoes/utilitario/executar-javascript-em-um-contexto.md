---
title: "Executar JavaScript em um Contexto"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Executa um comando JavaScript a partir de um contexto específico.

## Parâmetro(s)

1. Referência do contexto. (Variante)
2. Comando JavaScript. (Letras)

## Retorno

Retorna o resultado do comando executado. (Variante)

## Observações

1. Caso o primeiro parâmetro seja nulo, a função será executada a partir do contexto principal do formulário.
2. O primeiro parâmetro pode ser a referência do contexto (objeto window) ou do iframe (elemento HTML).

## Exemplo

1º Parâmetro: referência de um elemento iframe;
2° Parâmetro: alert("Messagem a ser enviada");
