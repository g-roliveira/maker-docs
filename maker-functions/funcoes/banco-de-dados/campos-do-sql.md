---
title: "Campos do SQL"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função recebe como parâmetro um comando de Seleção e retorna em uma lista com os campos selecionados.

## Parâmetro(s)

1. Comando de Seleção do Banco de Dados. (Letras)
2. Fonte de Dados (Nome da Conexão Adicional). (Letras)

## Retorno

Retorna os Nomes dos Campos Desejados. (Variante)

## Observações

1. Essa função é usada para obter os campos de uma SELECT (Comando de Seleção do Banco de Dados), retornando uma lista com os títulos dos campos.
2. Cada vez que esta função for executada, uma nova consulta será realizada no banco de dados para obter a lista de campos.

## Exemplo

Assumindo como 1º Parâmetro: SELECT TAB_COD, TAB_NOME FROM TABELA
Retorno será: [TAB_COD,TAB_NOME]
