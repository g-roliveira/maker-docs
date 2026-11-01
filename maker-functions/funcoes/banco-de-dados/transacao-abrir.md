---
title: "Transação: Abrir"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para abrir uma transação no Banco de Dados.

Parâmetro:
1. Conexão com o Banco de Dados. (Variante)

## Retorno

Não possui.

## Observações

1. Deve ser fechada ou concluída pelo uso da função Transação: Commit ou Transação: Rollback.
2. Vide descrição das funções Transação: Commit e Transação: Rollback.
3. Caso nenhum parâmetro seja passado, a transação identificará a conexão principal.

## Exemplo

Transação aberta com a função "Transação: Abrir", atualize alguma tabela do sistema com a função "Executar Atualização" e confirme as mudanças feitas no banco de dados, no caso da atualização com a função "Transação: Commit".
