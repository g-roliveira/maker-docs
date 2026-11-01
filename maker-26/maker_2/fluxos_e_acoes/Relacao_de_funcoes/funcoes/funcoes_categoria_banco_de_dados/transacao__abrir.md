---
title: "Transação: Abrir"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/transacao__abrir.htm"
---

Descrição:

Função usada para abrir uma transação no Banco de Dados, que deve ser fechada ou pela função (Transação: Commit) ou (Transação: Rollback). Usada para fazer procedimentos no Banco de Dados, os quais podem ser confirmados se tudo ocorrer corretamente (commit) ou desfeitos se ocorrer algo errado (rollback). Definição de transação: É um conjunto de procedimentos que é executado em um banco de dados que para o usuário é visto como uma única ação. Vide descrição das funções (Transação: Commit) e (Transação: Rollback).

Parâmetros:

1. Conexão com o Banco de Dados (Opcional).

![image1438.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1438.gif)

Retorno:

Esta função não tem retorno.

Observação:

Deve ter ser fechada ou pela função (Transação: Commit) ou (Transação: Rollback).

Exemplo:

1. Transação aberta com a função (Transação: Abrir).

2. Atualizada alguma tabela do sistema com a função (Executar Atualização).

3. Confirmação das mudanças feitas no Bando de Dados, no caso a atualização, com a função (Transação: Commit).

Nome Real:

ebfSQLOpenTransaction

Compatibilidade:

Banco de dados e Servidor
