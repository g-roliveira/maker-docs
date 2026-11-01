---
title: "Certificação Digital no ambiente Webrun"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/webrun/certificacao_digital_ambiente_webrun.htm"
---

Certificado Digital é um documento eletrônico que contém informações da identidade de uma pessoa ou de uma instituição. Existem duas maneiras para se obter um Certificado Digital, solicitando a uma Autoridade Certificadora (Certificate Authority ou CA) ou gerando por conta própria, por meio de ferramentas adequadas, por exemplo, a ferramenta gratuita OpenSSL.

Iremos utilizar as seguintes ferramentas:

![image358.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image358.jpg)

A ferramenta OpenSSL pode ser baixada no site [www.openssl.org](http://www.openssl.org) juntamente com sua documentação e esta será utilizada para demonstrar como gerar seu próprio Certificado Digital.

Recomendações:

- Para gerar o Certificado Digital, é necessária a instalação do Tomcat a partir da versão 6.
- Sugere-se criar uma pasta C:\CertificadoSSL.

Criando Sua Própria Autoridade Certificadora

Gerando Chaves Privadas e Certificados para sua própria CA

Execute os seguintes passos:

1. Crie uma pasta chamada CertificadoSSL.
2. Execute o seguinte comando no diretório C:\OpenSSL\bin:

openssl req -new -newkey rsa:1024 -nodes -out C:\CertificadoSSL\CA.csr -keyout C:\CertificadoSSL\CA.key

![image374.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image374.jpg)

A mensagem exibida abaixo do comando significa que a chave foi gerada. Mensagem de confirmação.

3. Preencha as informações solicitas:

Country Name (2 letter code) [AU]:BR

State or Province Name (full name) [Some-State]:Bahia

Locality Name (eg, city) []:Salvador

Organization Name (eg, company) [Internet Widgits Pty Ltd]:Softwell Solutions

Organizational Unit Name (eg, section) []:Softwell Solutions

Common Name (eg, YOUR name) []:localhost

Email Address []:admin@softwell.com.br

e

A challenge password []:123456

An optional company name []:Softwell Solutions

![image375.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image375.jpg)

Não é necessário preencher os três últimos campos, entretanto é importante definir o campo Common Name como sendo o endereço correto do servidor.

Gerando o Arquivo CA.pem

O Arquivo CA.pem contém as informações da chave privada.

Para gerar o arquivo, execute o seguinte comando no diretório C:\OpenSSL\bin:

openssl x509 -trustout -signkey "C:\CertificadoSSL\CA.key" -days 1825 -req -in "C:\CertificadoSSL\CA.csr" -out "C:\CertificadoSSL\CA.pem"

![image376.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image376.jpg)

A mensagem exibida abaixo do comando significa que o arquivo foi gerado.

![image377.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image377.jpg)

Gerando os Certificados

Para a criação do certificado do servidor, é utilizada a ferramenta keytool que vem instalada na versão do J2SE. A keytool armazena as chaves e os certificados em um local chamado keystore. O keystore é normalmente implementado na forma de arquivos, protegendo as chaves privadas com passwords.

A keytool fica na pasta bin do diretório do j2sdk.

Certificado do Servidor

Para a criação do certificado do servidor, acesse o diretório C:\Arquivos de programas\Java\jdk6\bin e execute:

*keytool -genkey -alias softwell -keyalg RSA -keystore "C:\CertificadoSSL\softwell.keystore"*

![image378.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image378.jpg)

Preencha os campos:

Enter keystore password: 123456

What is your first and last name?

\[Unknown\]: admin

What is the name of your organizational unit?

\[Unknown\]: Softwell Solutions

What is the name of your organization?

\[Unknown\]: Softwell Solutions

What is the name of your City or Locality?

\[Unknown\]: Salvador

What is the name of your State or Province?

\[Unknown\]: Bahia

What is the two-letter country code for this unit?

\[Unknown\]: BR

Is CN=admin, OU=Softwell Solutions, O= Softwell Solutions, L=Salvador, ST=Bahia, C=BR correct?

\[no\]: yes

Enter key password for &lt;tomcat&gt;

(RETURN if same as keystore password): 123456

![image379.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image379.jpg)

O comando acima gera um certificado referenciado pelo alias softwell e que será armazenado em um arquivo chamado softwell.keystore.

O certificado foi gerado utilizando o algoritmo RSA e foi solicitada uma senha para o armazenamento da chave no keystore.

O algoritmo RSA é utilizado, preferencialmente, por ser considerado um algoritmo seguro e por ser compatível com a maioria dos servidores de componentes.

Gerado o arquivo keystore, o próximo passo a realizar é editar o arquivo de configuração do servidor Tomcat.

Abra o arquivo de configuração do servidor server.xml que se encontra na pasta conf do diretório onde o Tomcat está instalado e inclua o código abaixo na tag &lt;Service&gt;:

&lt;Connector port="8443" protocol="HTTP/1.1" SSLEnabled="true"

maxThreads="150" scheme="https" secure="true"

 keystoreFile="c:\CertificadoSSL\softwell.keystore"

keystorePass="123456"

truststoreFile="c:\CertificadoSSL\softwell.Kevstore"

truststorePass="123456"

clientAuth="true" sslProtocol="TLS" /&gt;

Defina uma porta para o conector SSL. Por padrão, é utilizada a 8443. Informe o caminho onde o arquivo keystore se encontra.

Certificado do Cliente

Para a criação do certificado do cliente, é utilizado o comando abaixo no diretório C:\OpenSSL\bin:

openssl req -new -newkey rsa:1024 -nodes -out C:\CertificadoSSL\CLIENTE.req -keyout C:\CertificadoSSL\CLIENTE.key

![image366.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image366.jpg)

A mensagem abaixo significa que o arquivo foi criado.

![image367.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image367.jpg)

Preencha as informações:

Country Name (2 letter code) [AU]:BR

State or Province Name (full name) [Some-State]:Bahia

Locality Name (eg, city) []:Salvador

Organization Name (eg, company) [Internet Widgits Pty Ltd]:

Organizational Unit Name (eg, section) []:

Common Name (eg, YOUR name) []:JOAO DA SILVA

Email Address []:

Please enter the following 'extra' attributes

to be sent with your certificate request

A challenge password []:123456

An optional company name []:

![image368.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image368.jpg)

Assinar os certificados

Importando as informações da Chave Privada Para o arquivo keystore do Servidor

Execute o seguinte comando no diretório C:\Arquivos de programas\Java\jdk6\bin:

keytool -import -keystore C:\CertificadoSSL\softwell.keystore -file C:\CertificadoSSL\CA.pem -alias myautoCA

![image369.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image369.jpg)

Enter keystore password: 123456

Owner: EMAILADDRESS=admin@softwell.com.br, CN=localhost, OU=Softwell Solutions,

O=Softwell Solutions, L=Salvador, ST=Bahia, C=BR

Issuer: EMAILADDRESS=admin@softwell.com.br, CN=localhost, OU=Softwell Solutions,

O=Softwell Solutions, L=Salvador, ST=Bahia, C=BR

Serial number: e4d11b87e3619e81

Valid from: Wed Aug 13 14:12:31 BRT 2008 until: Mon Aug 12 14:12:31 BRT 2013

Certificate fingerprints:

MD5: F1:35:6F:42:1E:48:CA:0C:7D:C5:78:77:76:74:52:8C

SHA1: 2B:9D:D4:E4:C9:92:79:54:62:33:BA:4D:B4:52:15:4B:C2:E5:DB:26

Trust this certificate? \[no\]: yes

Certificate was added to keystore

![image370.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image370.jpg)

Assinando o Certificado do Cliente

Execute o seguinte comando no diretório C:\OpenSSL\bin:

openssl x509 -req -in C:\CertificadoSSL\CLIENTE.req -CA C:\CertificadoSSL\CA.pem -CAkey C:\CertificadoSSL\CA.key -CAcreateserial -out C:\**CertificadoSSL**\CLIENTE.pem

![image372.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image372.jpg)

A mensagem que será exibida abaixo do comando significa que o Certificado foi assinado.

Gerando o Arquivo CLIENTE.p12

O arquivo CLIENTE.p12 contém as informações do certificado digital gerado e da chave privada do servidor.

Para gerar o arquivo, execute o seguinte comando no diretório C:\OpenSSL\bin:

openssl pkcs12 -export -in "C:\CertificadoSSL\CLIENTE.pem" -inkey "C:\CertificadoSSL\CLIENTE.key" -out "C:\CertificadoSSL\CLIENTE.p12"

![image373.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image373.jpg)

Enter export password: 123321

Verifying export password: 123321

O certificado está pronto e já pode ser utilizado.

Como carregar o Certificado Digital no browser

Internet Explorer:

1. Selecione o menu Ferramentas, em seguida, Opção da Internet.
2. Abra a aba Conteúdo. Clique no botão Certificados, importe o certificado e digite uma senha.
3. Clique no botão Avançar e depois no botão Procurar. Em seguida, localize o certificado e confirme todos os passos.

Mozilla Firefox:

1. Selecione o menu Ferramentas, na aba Criptografia, clique no botão Certificados, em seguida, importe o certificado.
2. Localize o certificado, digite uma senha e confirme todos os passos.
