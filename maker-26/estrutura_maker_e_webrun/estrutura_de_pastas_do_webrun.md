---
title: "Estrutura de pastas do Webrun"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/estrutura_maker_e_webrun/estrutura_de_pastas_do_webrun.htm"
---

A estrutura de pastas de configuração do Webrun é composta pelas pastas CONFIG, REPORTS e SYSTEMS, localizadas em C:\Arquivos de programas\Softwell Solutions\Maker 2.5\Webrun 2, que podem ser movidas para outro lugar, contanto que estejam referenciadas no arquivo webrun.ini (localizada em C:\WINDOWS\system32).

Além dessas pastas de configuração, temos:

- Os arquivos instsrv.exe, instsrv_tomcat.bat e remsrv_tomcat.bat - instalam e desinstalam o serviço do TOMCAT, respectivamente, nesta ordem.
- webrunadmin.exe - ativa a tela de Atualizações e Configurações do Webrun;
- webrunLaunch.exe - executa o Webrun e é acionado a partir de linha e comando.

O Webrun possui uma sequência para referenciar essas pastas:

1. Em primeiro lugar, vai procurar pela variável de ambiente WEBRUN_HOME.
2. Caso não encontre na variável de ambiente, utilizará, como padrão de instalação, o arquivo webrun.ini, o qual registra o local:

[DIR]

InstallDir=C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2

3. Caso não encotre no local acima citado, irá procurar no diretório do usuário logado no Sistema Operacional: C:\Documents and Settings\&lt;nome do usuário&gt;;
4. Caso não encontre, o Webrun irá procurar dentro da pasta C:\Arquivos de programas\Softwell Solutions\Maker 2.5\Webrun 2;

Para verificar para onde o Webrun está apontando:

1. Ative o browser;
2. Digite o endereço http://&lt;servidor&gt;:&lt;porta&gt;/webrun/autotest;
3. Será solicitada a senha do TOMCAT:

- o Nome do usuário: admin
- o Senha: z102030

4. Será exibida a seguinte tela:

![image671.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image671.jpg)

Nesta tela, temos algumas informações do ambiente:

- Identificador da pasta do Webrun Home - o exemplo acima foi pelo arquivo webrun.ini;
- Sobre a Variável de Ambiente - no exemplo acima, não foi encontrada;
- Apontador dos arquivos de Administração, Banco de Dados, Configuração, Usuários;
- Outras informações básicas como: nome da máquina, sistema operacional e memória.

Utilize o botão ![image673.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image673.jpg) para retornar à tela inicial do Webrun e o botão ![image674.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image674.jpg) para recarregar o Webrun.

Observação: A estrutura "C:\Arquivos de programas\Softwell Solutions\Maker 2.5" é referente a instalações feitas a partir do Dvd Instalador do Maker 2.5. A estrutura "C:\Arquivos de programas\Softwell Solutions\Maker 2.6" refere-se a instalações feitas a partir do Dvd Instalador do Maker 2.6.
