---
title: "Executar Atualização"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/executar_atualizacao.htm"
---

Descrição:

Executa um comando SQL de inserção, atualização ou exclusão no banco de dados.

Parâmetros:

1. Comando de Seleção do Banco de Dados

2. Conexão - Opcional

![image1415.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1415.gif)

Retorno:

Não Possui.

Observação:

1. Para criar essa conexão consulte a ajuda sobre a função "Abrir Conexão MSSQL" ou "Abrir Conexão Firebird".

2. Caso seja utilizada a função "Obter Conexão Adicional" no segundo parâmetro, as entidades do banco de dados

da conexão adicional aparecerão automaticamente no "Wizard SQL"

3. É possível utilizar as funções try/catch com esta função para a captura e tratamento dos erros.

Exemplos:

1º Parâmetro - é o comando de inserção, atualização ou exclusão que será passado para o banco de dados. Para montar esse

comando visualmente, é necessário clicar no botão "Wizard SQL" que se localiza do lado direito da tela.

2º Parâmetro (conexão) - é opcional. Caso seja necessário executar a consulta em um outro banco de dados, é necessário

passar a conexão para este.

Nome Real:

ebfSQLExecuteUpdate

Compatibilidade:

Banco de dados e Servidor

# Função Executar Atualização

A função Executar Atualização executa um comando SQL de atualização, atuando na camada Banco de Dados.

A função apresenta dois parâmetros:

1º Parâmetro - informar o comando que será aplicado pela função;

2º Parâmetro - é opcional, pode-se escolher a conexão.

![image746.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image746.gif)

Clique no 1º Parâmetro e certifique que a opção Atualização, do campo Tipo do SQL, esteja marcada. Então clique no botão Wizard SQL.

![image1398.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1398.jpg)

Na tela Construtor SQL: Atualização, selecione a Tabela e os Campos para atualização. Utilize o Montador de Expressões para definir a expressão que será executada.

![image617.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image617.jpg)

Existe uma particularidade no comportamento da tela Propriedades para esta função: observe que, além das abas Identificadores e Fluxos e Funções, temos a aba Campo. Nesta aba, é possível selecionar um campo da tabela origem, que será o atualizador, ou seja, em vez de construir uma expressão, o usuário pode optar que o conteúdo tenha origem em um campo da mesma tabela.

![image1399.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1399.jpg)
