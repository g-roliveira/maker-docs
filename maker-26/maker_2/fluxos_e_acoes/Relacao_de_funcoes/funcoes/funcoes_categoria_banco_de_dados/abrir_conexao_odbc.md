---
title: "Abrir Conexão ODBC"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/abrir_conexao_odbc.htm"
---

Descrição:

Essa função abre uma conexão com um banco de dados ODBC, para a partir da mesma, o usuário poder executar comandos ou seleções no banco de dados. Essa função recebe como parâmetro o Servidor onde o banco é acessado, o Nome do ODBC onde se encontra o banco de dados, o usuário para conectar no banco de dados, a senha do usuário definido no parâmetro anterior. Ademais, a fonte de dados ODBC a ser definida para o 2º parâmetro deve ter sido configurada como "Fonte de dados de sistema" no Sistema Operacional.

Parâmetros:

1. Servidor

2. Banco

3. Usuário

4. Senha

![image1404.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1404.gif)

Retorno:

Retorna a referência da conexão (Variante)

Exemplo:

1º Parâmetro: localhost

2º Parâmetro: MeuBanco

3º Parâmetro: sa

4º Parâmetro: 123456

Nome Real:

ebfSQLODBCOpenConnection

Compatibilidade:

Banco de dados e Servidor
