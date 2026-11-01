---
title: "Posição"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para obter em qual posição corrente da consulta passada como parâmetro.
Vide descrições das funções "Próximo Registro", "Primeiro Registro", "Último Registro" e "Registro Anterior".

Parâmetro:
1. Consulta. (Tabela)

## Retorno

Retorna em a posição do registro corrente (primeiro registro da consulta retorna 1). (Inteiro)

## Observações

1. Uma consulta que não sofreu nenhuma alteração, retornará a posição corrente 1.
2. A depender do banco de dados, a posição inicial pode variar.

## Exemplo

Defina uma consulta com a função "Abrir Consulta", usando o Wizard SQL, como essa função tem retorno uma variável do tipo tabela,
pode-se usá-la diretamente na função "Posição", insira a função "Posição" e clique no botão salvar, atribua o retorno a uma variável do tipo inteiro.
Observe que a variável escolhida receberá o retorno da função "Posição".
