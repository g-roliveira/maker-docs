---
title: "Instalando JNDI"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/webrun_3/instalando_jndiI.htm"
---

Para que uma aplicação criada com o Maker funcione com JNDI, deve-se configurar um parâmetro chamado DataSource em qualquer conexão (principal ou adicional). O sistema tentará localizar a fonte de dados informada em java:/ ou java:/comp/env.

Exemplo utilizando Tomcat e banco MySQL:

![image1777.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1777.jpg)

Configure o arquivo 'context.xml' localizado na pasta 'tomcat/conf':

![image1778.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1778.jpg)

Entre as tags do '&lt;Context&gt;' defina o parâmetro '&lt;Resource&gt;' que indicará a conexão JNDI.

&lt;Resource

name="jdbc/maker"

type="javax.sql.DataSource"

username="root"

password="root"

driverClassName="com.mysql.jdbc.Driver"

url="jdbc:mysql://localhost:3306/EXJNDI"

maxActive="8"

maxIdle="4"

/&gt;

name="jdbc/maker" – Este será o valor do parâmetro DataSource utilizado no Maker.

url="jdbc:mysql://localhost:3306/EXJNDI" – Este é o parâmetro em que se define qual a base de dados utilizada.

Na tela de configurações, F6 ou Projeto -> Configurações, crie o parâmetro 'DataSource' e adicione o valor  configurado na propriedade "name".

![image1779.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1779.jpg)

Salve o projeto para que as alterações tenham efeito.

Observação: Certifique-se que a biblioteca de conexão com o banco de dados esteja na pasta 'tomcat/lib'.

Trecho do código que faz a conexão:

![image1780.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1780.jpg)
