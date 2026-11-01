---
title: "Abrir Conexão Postgres"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/abrir_conexao_postgres.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Essa função abre uma conexão com um banco de dados em Postgres, para a  partir da mesma, o usuário poder executar comandos ou seleções no banco de dados. Essa função recebe como parâmetro o servidor do banco de dados, o nome do banco de dados, o usuário para conectar no banco de dados e por último a senha do usuário definido no parâmetro anterior.

Parâmetros:

1. Servidor

2. Banco

3. Usuário

4. Senha

![image1406.gif](../../_assets/image1406.gif)

Retorno:

Retorna a referência da conexão (Variante)

Exemplo:

1º Parâmetro: localhost

2º Parâmetro: teste

3º Parâmetro: postgres

4º Parâmetro: softwell

Nome Real:

ebfSQLPostgresOpenConnection

Compatibilidade:

Servidor
