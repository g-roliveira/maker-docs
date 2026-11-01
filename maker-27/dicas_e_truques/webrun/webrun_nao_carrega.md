---
title: "Webrun não carrega"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/webrun/webrun_nao_carrega.htm"
---

# Webrun não inicializa, o que fazer?

Em alguns casos, o arquivo tomcat-users.xml pode se corromper fazendo com que o Webrun não seja inicializado corretamente. Abaixo, será apresentado um passo a passo para a solução deste caso.

![image1910.jpg](../../image1910.jpg)

Primeiramente, pare o serviço do Webrun.

![image1911.jpg](../../image1911.jpg)

Em seguida, localize o arquivo tomcat-users.xml, que se encontra em C:\Program Files\SoftwellSolutions\Maker 2.7\Webrun 2\tomcat\conf

![image1912.jpg](../../image1912.jpg)

Observe que ao abrir o arquivo, o mesmo se encontra com caracteres irreconhecíveis. Que caracterizam o arquivo como corrompido.

![image1913.jpg](../../image1913.jpg)

Remova o arquivo e crie um novo com o mesmo nome, com o seguinte conteúdo.

&lt;?xml version='1.0' encoding='utf-8'?&gt;

&lt;tomcat-users&gt;

&lt;role rolename="manager"/&gt;

&lt;role rolename="admin"/&gt;

&lt;user username="admin" password="z102030" roles="admin,manager"/&gt;

&lt;/tomcat-users&gt;

Observação: Esta sendo informado o usuário e senha padrão do serviço.

Ao final do processo o arquivo terá as seguintes características:

![image1914.jpg](../../image1914.jpg)

Salve o arquivo na pasta C:\Program Files\SoftwellSolutions\Maker 2.7\Webrun 2\tomcat\conf e reinicie o serviço do Webrun.

![image1915.jpg](../../image1915.jpg)

Pronto! Com isso, o Webrun estará funcionando normalmente.
