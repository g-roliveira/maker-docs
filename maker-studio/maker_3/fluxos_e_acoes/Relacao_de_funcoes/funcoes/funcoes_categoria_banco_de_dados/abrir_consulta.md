---
title: "Abrir Consulta"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/abrir_consulta.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Executa um comando de Seleção no Banco de Dados.

Parâmetros:

1. Comando de Seleção ou Wizard.

2. Conexão com o banco de dados. É  opcional (se passado nulo, a função assume que a consulta será feita na conexão principal).

![image1426.gif](../../_assets/image1426.gif)

Retorno:

Retorna uma Consulta  que pode ser atribuída a uma Variável Tabela.

Observação:

Essa função é usada para fazer um SELECT (seleção) no banco de dados desejado.

Exemplo:

1º Parâmetro - o comando de Seleção que será passado para o banco de dados. Para montar esse comando visualmente é necessário clicar no botão "Wizard SQL" que se localiza do lado direito da tela.

2º Parâmetro (conexão) - é opcional. Caso seja necessário executar a consulta em um outro banco de dados, é necessário passar a conexão para este. Para criar essa conexão consulte a ajuda sobre a função "Abrir Conexão MSSQL" ou "Abrir Conexão Firebird"

Nome real:

ebfSQLExecuteQuery

Compatibilidade:

Banco de dados e Servidor.
