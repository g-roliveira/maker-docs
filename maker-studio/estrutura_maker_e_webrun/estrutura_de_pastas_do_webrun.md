---
title: "Estrutura de pastas do Webrun"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/estrutura_maker_e_webrun/estrutura_de_pastas_do_webrun.htm"
---

A estrutura de pastas de configuração do Webrun é composta pelas pastas CONFIG, JAVA, REPORTS, SYSTEMS, TOMCAT e UPDATES, localizadas em C:\Arquivos de programas\Softwell Solutions\Maker 3\Webrun 3.

Além dessas pastas de configuração, temos:

- Webrunadmin.exe - ativa a tela de Atualizações e Configurações do Webrun;
- WebrunLaunch.exe - executa o Webrun e é acionado a partir de linha e comando.

O Webrun possui uma sequência para referenciar essas pastas:

1. Em primeiro lugar, buscará pelo parâmetro Environment no editor de registro do Windows (dentro do editor de registro siga o caminho: Computador -> HKEY_LOCAL_MACHINE -> SOFTWARE -> Apache Software Foudation -> Procrun 2.0 -> WebrunEnterprise3 ->  Parameters), que contém o valor: WEBRUN_HOME = C:\Arquivos de Programas\Softwell Solutions\Maker 3\Webrun 3\.

- Observação: para chegar até a HKEY_LOCAL_MACHINE, pressione (WINDOWS+R) e abrirá o "EDITOR DO REGISTRO".

2. Caso não encontre este parâmetro, utilizará a variável de ambiente da configuração avançada do Windows: WEBRUN_HOME. Se esta variável não existir, a mesma deverá ser criada manualmente com o caminho onde se encontra a instalação do Webrun.
3. Caso não encontre o caminho supracitado, o Webrun irá procurar no diretório do usuário logado no Sistema Operacional: C:\Documents and Settings\&lt;usuario&gt;\

Para verificar para onde o Webrun está apontando:

1. Ative o browser;
2. Digite o endereço http://&lt;servidor&gt;:&lt;porta&gt;/webrun/autotest;
3. Será solicitada a senha do TOMCAT:

- o Nome do usuário: admin
- o Senha: z102030

4. Será exibida a seguinte tela:

![image671.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image671.jpg)

Nesta tela, temos algumas informações do ambiente:

- Identificador da pasta do Webrun Home - o exemplo acima foi pelo arquivo webrun.ini;
- Sobre a Variável de Ambiente - no exemplo acima, não foi encontrada;
- Apontador dos arquivos de Administração, Banco de Dados, Configuração, Usuários;
- Outras informações básicas como: nome da máquina, sistema operacional e memória.

Utilize o botão ![image673.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image673.jpg) para retornar à tela inicial do Webrun e o botão ![image674.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image674.jpg) para recarregar o Webrun.
