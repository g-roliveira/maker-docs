---
title: "Abrir Consulta Não Gerenciada"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para abrir uma consulta no Banco de Dados, atribuindo esta consulta em uma variável do tipo tabela.
Exerce quase a mesmo papel da função "Abrir Consulta", com a única diferença que a consulta não é fechada automaticamente,
sendo necessário o uso da função "Fechar Consulta". Vide descrições das funções "Abrir Consulta" e "Fechar Consulta".

## Parâmetro(s)

1. SQL Consulta.
2. Conexão ao Banco de Dados. (Variante)

## Retorno

Retorna a consulta passada no 1º Parâmetro. (Tabela)

## Observações

1. A partir da versão 1.0.0.1 a função passa a validar se a consulta passada por parâmetro contém apenas a instrução SELECT.
2. É necessário que após a utilização da consulta criada pela função "Abrir Consulta Não Gerenciada" a mesma seja fechada com a função "Fechar Consulta".
3. Caso seja utilizada a função "Obter Conexão Adicional" no 2º Parâmetro, as entidades do banco de dados.
da conexão adicional aparecerão automaticamente no "Wizard SQL".
4. Caso seja utilizada funções de "Abrir Conexão MySQL/FireBird/Oracle..." não será possível montar a consulta por diagrama.
5. Esta função não suporta :: para conversão de dados.

## Exemplo

Assumindo como 1° Parâmetro a função Abrir Consulta Não Gerenciada, 2° Parâmetro: consulta a ser realizada no Wizard SQL, atribua seu retorno a variável tabela e feche a consulta com a função (Fechar Consulta).
