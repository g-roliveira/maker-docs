---
title: "Executar Atualização"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Executa um comando SQL de Inserção, Atualização ou Exclusão no banco de dados.

## Parâmetro(s)

1. SQL Atualização. (Wizard SQL)
2. Conexão (Variante, Opcional)

## Retorno

ID da tabela (Para o banco MSSQL e MySQL). (Inteiro)

## Observações

1. Para criar essa conexão consulte a ajuda sobre a função "Abrir Conexão MSSQL", "Abrir Conexão Firebird" ou outro banco.
2. Caso seja utilizada a função "Obter Conexão Adicional" no segundo parâmetro, as entidades do banco de dados da conexão adicional aparecerão automaticamente no "Wizard SQL"
3. É possível utilizar as funções try/catch com esta função para a captura e tratamento dos erros.
4. Para fazer Exclusão/Alteração/Inserção em conexões adicionais é necessário utilizar as funções de transação "Transação: Abrir" e "Transação: Commit".

## Exemplo

Assumindo como 1° Parâmetro o comando de inserção, atualização ou exclusão que será passado para o banco de dados e o 2° parâmetro (conexão).
O retorno será o id (Para o banco MSSQL e MySQL)
