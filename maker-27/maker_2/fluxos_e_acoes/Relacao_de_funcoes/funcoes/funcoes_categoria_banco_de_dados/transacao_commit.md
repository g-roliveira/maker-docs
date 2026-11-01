---
title: "Transação: Commit"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/transacao_commit.htm"
---

Descrição:

Função usada para a confirmação de todas as alterações feitas no Banco de Dados após a abertura de uma transação.  Deve-se primeiro abrir a transação com a função (Transação: Abrir). Informações sobre transação na descrição da função (Transação: Abrir). Vide descrição da função (Transação: Abrir).

Parâmetros:

1. Conexão com o Banco de Dados (Opcional).

![image1439.gif](../../../../../image1439.gif)

Retorno:

Esta função não tem retorno.

Observação:

Deve ser usada após a função (Transação: Abrir).

Exemplo:

1. Transação aberta com a função (Transação: Abrir).

2. Atualizada alguma tabela do sistema com a função (Executar Atualização).

3. Confirmação das mudanças feitas no Bando de Dados, no caso a atualização, com a função (Transação: Commit).

Nome Real:

ebfSQLCommitTransaction

Compatibilidade:

Banco de dados e Servidor
