---
title: "Abrir Conexão Firebird"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/abrir_conexao_firebird.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Essa função abre uma conexão com um banco de dados "Firebird", para a partir da mesma, o usuário poder executar

comandos ou seleções no banco de dados.

Parâmetros:

1. Caminho do Banco (Ex: 127.0.0.1:Nome do Banco).

2. Login do Banco.

3. Senha do Banco.

![image1401.gif](../../_assets/image1401.gif)

Retorno:

Retorna uma conexão para uma variável do Tipo Variante.

Observações:

Essa função é usada para abrir um conexão com um banco Firebird.

Exemplos:

1º Parâmetro: 127.0.0.1:Nome do Banco

2º Parâmetro: SYSDBA.

3º Parâmetro: masterkey.

Retorno:

Conexão com um Banco FireBird.

Nome Real:

ebfSQLFirebirdOpenConnection

Compatibilidade:

Servidor
