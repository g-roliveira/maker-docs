---
title: "Firebird 2.0/2.1/2.5"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/banco_de_dados/firebird/utilizando_o_firebird.htm"
---

A utilização de bases de dados Firebird no Maker é muito simples, basta apenas que o Servidor de Banco de Dados esteja devidamente instalado e configurado para tal.

Lembrando que as versões do Firebird homologadas são 2.0/2.1/2.5 até o Maker 3.7.0.0;
A partir da versão 3.7.2.7, foram realizadas melhorias no Maker para suportar mais caracteres nos componentes Maker 3+ (ex. Componente Menu), estas melhorias implicaram na mudança interna de alguns tipos de dados da estrutura das tabelas FR's. Desta forma, as conversões realizadas pelo Maker com o novo tipo de dados são suportadas somente a partir da versão 2.5.1+ do Firebird;

Acesse o Maker e crie um novo projeto.

![image1792.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1792.jpg)

O servidor será passado juntamente com o caminho do diretório onde se encontrará a base de dados.

Ex: &lt;servidor&gt;:C:\&lt;pasta&gt;\&lt;nome_da_database&gt;.FDB

Caso a base de dados não exista no caminho especificado e o diretório seja válido, o Maker solicitará confirmação para criação da base de dados.

Depois de criado o projeto, basta acessá-lo e começar o desenvolvimento.

Consulte abaixo os itens relacionados para obter mais informações sobre o desenvolvimento com Firebird.

Veja: [Versões Homologadas](../../../Versoes%20Homologadas)
