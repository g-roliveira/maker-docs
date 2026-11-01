---
title: "MS SQL Server 2005/2008/2008R2/2012"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/suporte_banco_de_dados/ms_sql_server.htm"
---

# MS SQL Server MS SQL Server 2005/2008/2008R2/2012/2014

- Quando o banco de dados utilizado for o SQL Server 2005/2008/2008R2/2012/2014, certifique-se de que a versão esteja com o Service Pack 4. Para tal, execute o comando abaixo por meio do Query Analyze e verifique se a saída é "SP4". Se o resultado for diferente (exemplo: "SP3", "RTM"), atualize seu SQL Server:

select SERVERPROPERTY('ProductLevel')

- Deve-se ativar o suporte a TCP/IP.
- A autenticação via LOGIN/SENHA deve estar habilitada.

## Tipos de campos que não são compatíveis com o Maker

Deve-se observar que alguns tipos de campos do MS SQL Server MS SQL Server 2005/2008/2008R2/2012/2014 não são compatíveis com o Maker:

- SmallMoney;
- Tinyint;
- Binary.

Observações:

1. A partir da versão Gold do Maker, a softwell solutions descontinuou o suporte a versão MS SQL Server 2005/2008/2008R2/2012/2014 do MSSQL.
2. O Maker não suporta a função PIVOT, pois o número de colunas passados pela função é dinâmico.
3. Para que o projeto funcione perfeitamente no Maker, o COLLATION deste banco deve estar configurado como Latin1_General_CI_AS:

![image303.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image303.jpg)

4. Para o perfeito funcionamento de um banco de dados que tenha sido configurado (tela [Configurações](../../maker_3/configuracao_das_conexoes/configuracoes)) com o tipo de COLLATION SQL_Latin1_General_CP850_CI_AI, tanto no Maker quanto no *Webrun*, é necessário adicionar um novo parâmetro chamado SQLServerCharSet e definir o valor CP850. Em seguida, ainda no Maker, deve-se Salvar o projeto (item Salvar do menu Projeto da IDE do Maker) e reiniciar o serviço do Webrun (área administrativa do Webrun). Ainda é necessário, após a criação/inicialização de um banco de dados por meio do Maker, executar o script abaixo (caso já tenha sido feito algum relatório, recomenda-se a exportação desse relatório como forma de cópia de segurança):

   1. ALTER TABLE FR_RELATORIO DROP COLUMN REL_CONTEUDO -- Exclui a coluna REL_CONTEUDO da tabela FR_RELATORIO.

GO

ALTER TABLE FR_RELATORIO ADD REL_CONTEUDO IMAGE -- Adiciona a coluna chamada REL_CONTEUDO à tabela FR_RELATORIO.

5. O Maker suporta o tipo de COLLATION Latin1_General_BIN (ordem binária) para acesso a bases de dados através de Conexões Adicionais.
6. Para compartilhar projetos na rede que utilizem banco de dados SQLServer com instância em uma rede, são necessárias algumas configurações. Acesse o tópico [Acesso remoto em uma nova Instância no SQL Server MS SQL Server 2005/2008/2008R2/2012/2014](../../dicas_e_truques/banco_de_dados/acesso_remoto_em_uma_nova_instancia_no_sql_server_2005).
7. No SQL Server MS SQL Server 2005/2008/2008R2/2012/2014, os tipos de dados "Date", "Time", "Datetime2" e "Datetimeoffset" não são suportados pelo Webrun.
8. Sinônimos são objetos definidos em um esquema de um banco de dados Microsoft SQL Server para referenciar tabelas de outro banco de dados Microsoft SQL Server ou de um outro esquema do mesmo banco de dados. O Maker suporta apenas sinônimos referenciados entre esquemas de um mesmo banco de dados.
9. Relatórios desenvolvidos pela versão legada do Gerador de Relatórios não suportados (nem pelo Maker nem pelo Webrun) quando a fonte de dados é originária do banco de dados Microsoft SQL Server MS SQL Server 2005/2008/2008R2/2012/2014 Express, sendo necessária a utilização da versão Enterprise do banco de dados para que exista compatibilidade. Em contrapartida, é possível desenvolver e emitir relatórios (tanto no Maker quanto no Webrun) pelo Novo Gerador de Relatórios , utilizando-o em conjunto com a versão Express (já citada) do banco de dados.
10. Ao acessar um sistema no Webrun utilizando o banco SQL Server com porta dinâmica, ele só funcionará caso a porta utilizada não seja a principal.
11. Os tipos de dados text, ntext e image não podem ser comparados ou classificados, exceto ao usar o operador IS NULL ou LIKE.
12. Para saber como utilizar o SQL Server em outra porta que não seja a 1433, clique [AQUI](../../dicas_e_truques/banco_de_dados/como_utilizar_o_maker_webrun_com_o_sql_server_em_porta_diferente_da_1433)

## Acesso externo para usuários

Para facilitar o acesso de vários usuários ao SGBD, basta implementar o código abaixo:

Exemplo 1:sp_addlogin [ @loginame = ] 'login'

    [ , [ @passwd = ] 'password' ]

    [ , [ @defdb = ] 'database' ]

    [ , [ @deflanguage = ] 'language' ]

    [ , [ @sid = ] sid ]

    [ , [ @encryptopt = ] 'encryption_option' ]

## Como Utilizar o Maker/Webrun com Schema diferente do principal no MS SQL Server

Para utilizar o Maker/Webrun com um schema diferente do principal no banco SQL Server, os seguintes passos devem ser tomados:

1. Abra a tela de configurações do Maker teclando "F6" ou navegando pelo menu Projeto &gt; Configurações.

2. Na aba Arquivo de Projeto, Adicione um parâmetro chamado FR_SCHEMA e passe o valor "schema" para ativá-lo.

3. Clique em OK e salve o projeto navegando no menu Projeto &gt; Salvar.

Observações:

1. O parâmetro USE_Schema foi depreciado, pois agora, o parâmetro "FR_SCHEMA" trata-o de forma interna.
2. FR_SCHEMA não tem como funcionalidade, identificar em qual schema será criada as tabelas FR's. Para isto, deve-se definir no usuário a ser utilizado no apontador, o schema default.

SQL Server & Report Builder

O Report Builder no momento da geração dos relatórios é necessária a comunicação com o banco de dados, portanto necessita do driver devidamente instalado. Caso não encontre o driver, ocorrerá uma mensagem de erro no momento da geração do relatório: "Required provider not installed".Recomendamos a instalação do SQL Native Client do SQL Server MS SQL Server 2005/2008/2008R2/2012/2014 que inclui compatibilidade com todas as versões.

Observação: O Report Builder  (Versão legada) não há compatibilidade com o banco de dados SQL Server MS SQL Server 2005/2008/2008R2/2012/2014.

Veja: [Versões Homologadas](../../Versoes%20Homologadas)
