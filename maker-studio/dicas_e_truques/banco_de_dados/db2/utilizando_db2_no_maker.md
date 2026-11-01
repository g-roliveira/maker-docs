---
title: "DB2 9.5"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/banco_de_dados/db2/utilizando_db2_no_maker.htm"
---

Para utilizar o banco DB2 no Maker é necessário ter o CLIENT instalado na máquina de desenvolvimento.

Devido às configurações necessárias do banco não é possível criá-lo através do Maker, por isso a base de dados deverá ser criada através do CLIENT.

As seguintes configurações deverão ser aplicadas a base de dados:

1. Crie o banco através do cliente DB2:

1.1. Parâmetro Bufferpool padrão e tamanho da página do espaço de tabelas deverá ser configurado com 32K.

![image1789.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1789.jpg)

2. Deverá ser dado permissões ao usuário que irá acessar pelo Maker

![image1790.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1790.jpg)

Após ter configurado o banco crie um novo projeto no Maker

![image1791.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1791.jpg)

O Maker irá iniciá-lo criando as tabelas FR's do sistema.

Veja: [Versões Homologadas](../../../Versoes%20Homologadas)
