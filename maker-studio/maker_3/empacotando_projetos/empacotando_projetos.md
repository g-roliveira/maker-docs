---
title: "Empacotando Projetos"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/empacotando_projetos/empacotando_projetos.htm"
---

É um recurso disponibilizado pelo item Empacotar projeto... do menu Projetos. Seu uso está limitado aos projetos criados nos bancos de dados Postgresq, Microsoft SQL Server ([consulte documentação complementar quando o empacotamento for feito sobre este banco de dados](../../dicas_e_truques/banco_de_dados/problema_com_permissao_empacotar_em_sql_server_2005)) e MySQL. Esse seu recurso oferece ao usuário o suporte para criação de um pacote completo do projeto (arquivo com a extensão *.mkr), o qual é composto pela cópia do banco de dados no qual consta o projeto, pelas bibliotecas necessárias no momento do desempacotamento do projeto e pelo apontador do projeto (*.wfre).

Após o usuário informar o nome do pacote e o local em que ele será salvo, é gerado o arquivo (exemplo:![agenda.mkr](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image29.png)).

Caso o sistema operacional não identifique o tipo do arquivo com a extensão *.mkr, é necessário associá-lo ao executável Deployer contido na pasta do Maker (C:\Arquivos de programas\Softwell Solutions\Maker 3).Essa ação pode ser feita de duas formas. São elas:

- clicar com o botão direito do mouse sobre o arquivo e selecionar a opção de exibição das Propriedades do arquivo. Em seguida, associá-lo ao executável Deployer.exe;
- arrastar o pacote para cima do executável Deployer.exe.

## Para desempacotar projeto

Para desempacotar o projeto basta efetuar clique duplo no arquivo gerado.

Quando acionado o pacote (arquivo *.mkr), é exibida a tela Maker Deployer, na qual devem ser informados os dados necessários para o desempacotamento do banco de dados.

![maker deployer](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image30.png)

Bancos que suportam o desempacotamento de projetos.

- Mysql 5, 5.1, 5.5.
- SQL Server 2012.
- Postgres 9.0 e 9.1.

Observações:

1. Host - computador que possui o serviço do banco de dados no qual será desempacotado o projeto;
2. Porta - número da porta de conexão com o banco de dados
3. Nome do Banco - nome do banco que será criado no servidor. Caso exista um banco com o mesmo nome, o projeto não será desempacotado;
4. Usuário - nome do usuário para acesso ao banco de dados;
5. Senha - senha do usuário para acesso ao banco de dados.

Após entrada das informações de conexão, clique no botão ![image87.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image31.png).

____________________________________________________________________________

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
