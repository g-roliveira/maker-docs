---
title: "Abrir Consulta Dinâmica Avançada"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Executa uma consulta SQL e retorna uma tabela com os dados. Caso a consulta possua parâmetros avançados a
mesma será convertida retornando os dados de acordo o valor passado por parâmetro.

## Parâmetro(s)

1. Consulta SQL. (Letras)
2. Conexão Adicional. (Variante, Opcional)
3. Quantidade de Parâmetros. (Inteiro, Opcional)
4. Lista de Parâmetros. (Variante, Opcional)

## Retorno

Tabela. (Tabela)

## Observação

Esta função não suporta :: para conversão de dados.

## Exemplo

Assumindo o script SELECT ACO_CODIGO,ACO_NOME FROM FR_ACAO WHERE (ACO_CODIGO =: FUNCAO_sessao_VALOR); o retorno será o(s)
dado(s) de acordo o valor da Variável de Sessão.
