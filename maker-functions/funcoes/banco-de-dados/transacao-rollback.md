---
title: "Transação: Rollback"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para desfazer todas as alterações feitas no Banco de Dados após a abertura de uma transação.

Parâmetro:
1. Conexão com o Banco de Dados. (Variante)

## Retorno

Não possui.

## Observação

Esta função deve ser usada após a função "Transação: Abrir". Vide descrição da função "Transação: Abrir".

## Exemplo

Transação aberta com a função "Transação: Abrir", atualize alguma tabela do sistema com a função "Executar atualização" e desfaça as mudanças feitas no banco de dados, no caso a atualização, com a função "Transação; Roolback".
