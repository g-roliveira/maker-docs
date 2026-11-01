---
title: "Abrir Consulta Navegável"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Executa um comando de Seleção no Banco de Dados e permite navegação nesses dados.
Permite o uso das funções "Próximo Registro", "Registro Anterior", "Último Registro", "Primeiro Registro" e "Ir para Registro" da categoria Banco de Dados e também o uso na função "Modificar Consulta do Formulário ou Grade".

## Parâmetro(s)

1. Comando de Seleção SQL. (SQL Consulta)
2. Conexão. (Variante, Opcional)

## Retorno

Retorna uma Consulta. (Tabela)

## Observações

1. A partir da versão 1.0.0.2 a função passa a validar se a consulta passada por parâmetro contém apenas a instrução SELECT.
2. Essa função é usada para fazer um SELECT (seleção) no banco de dados desejado.
3. Caso seja utilizada a função "Obter Conexão Adicional" no segundo parâmetro, as entidades do banco de dados da conexão adicional aparecerão automaticamente no "Wizard SQL".
4. Caso seja utilizada funções de "Abrir Conexão MySQL/FireBird/Oracle..." não será possível montar a consulta por diagrama.
5. Caso seja necessário executar a consulta em um outro banco de dados, é necessário
passar a conexão para este. Para criar essa conexão consulte a ajuda sobre a função "Abrir Conexão MSSQL" ou "Abrir Conexão Firebird".
6. Esta função não suporta :: para conversão de dados.

## Exemplo

Assumindo como 1º parâmetro o comando de seleção que será passado para o banco de dados para motn, 2°parâmetro(conexão), sendo opcional.
