---
title: "Parâmetros de Configuração - Sessao"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/webrun_3/parametro_configuracao/parametros_configuracao_sessao.htm"
---

Aqui se definem parâmetros para configurar a sessão.

![image1531.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1531.jpg)

Na tela Parâmetros de Configuração, ao clicar no componente ![image604.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image604.png), mostra os componentes:

- ![image598.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image598.png) - permite criar um novo parâmetro para o grupo;
- ![image597.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image597.png) - permite excluir o parâmetro e seus valores. O controle de check ao lado de cada parâmetro será utilizado para esse fim;
- ![image599.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image599.png) - permite excluir um valor do parâmetro. Podem existir muitos valores para cada parâmetro;
- ![image600.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image600.png) - permite adicionar um novo valor ao parâmetro. Podem existir muitos valores para cada parâmetro.

Abaixo, verifique os principais parâmetros para o grupo Sessao:

- Tempo - Esse parâmetro determina o tempo de inatividade da sessão do usuário. Entende-se como inatividade, a inexistência de comunicação(requisição) do cliente(navegador) com o servidor de aplicações(Tomcat, Jboss e etc).
  Para evitar que a sessão encerre automaticamente, o Webrun fará uma requisição assíncrona para renovar a sessão e evitar que o usuário precise logar novamente.
  A requisição automática(remainSession.do) do Webrun será realizada de acordo o parâmetro Tempo /2. Exemplo: Caso o valor definido no parâmetro Tempo seja 120 segundos, a requisição automática será realizada em 60 segundos (120/2=60).
  Obs.: Quando não definimos nenhum valor para o parâmetro o mesmo assume como padrão 120 segundos.
  Além disso, quando há um comunicação cliente/servidor, o tempo da sessão é ajustado conforme a inatividade.
  Ex.: A sessão é definida como 10min e iniciou-se às 08h10min. Tempo de vida: 8h20min. Nesse período, houve uma inatividade cliente/servidor de 05 min (O horário é 8h15min). Se nesse momento houver a comunicação cliente/servidor, o tempo de vida será 8h25min mantendo o tempo de inatividade da sessão de 10min.

Ressaltamos que ao abrir um formulário modal (Apenas Internet Explorer), o usuário não terá acesso a tela principal do sistema, pois a mesma ficará bloqueada. Como a permanência da sessão é dada pelo Webrun na tela principal do sistema, esta para de executar sua requisição por causa da tela modal. Assim a sessão expira no tempo determinado no parâmetro Tempo

- DebugMode - quando definido o valor 1 (um), ativa o log da aplicação. Em 0 (zero), o log permanece inativo;
- DebugCachedFiles - quando define o valor 1 (um), os códigos JavaScript dos componentes não sofrem compactação. Quando 0 (zero), caso o navegador permita compactação, estes serão compactados;
- **DefaultLocale  - Este parâmetro determina o idioma padrão que será utilizado pelo **Webrun**. Valores aceitos:**
- - pt_BR - português;
  - en_US - inglês;
  - es_ES - espanhol;
  - fr_FR - francês.

- AgendadorTarefas - quando definido o valor 1 (um), o Webrun passa a reconhecer as tarefas agendadas no Agendador de Tarefas do Maker;
- RuleTimeout - padrão de timeout de uma regra (segundos);
- PrefixoInterno - propriedade utilizada para a definição dos IP's dos computadores que compõem a Intranet da organização e que terão acesso ao Webrun;
- PrefixoExterno - propriedade utilizada para a definição dos IP's dos computadores externos à Intranet da organização e que terão acesso ao Webrun.

O padrão para definição de todo ou parte (octetos) do IP se baseia na sintaxe das expressões regulares, as quais são padrões utilizados para combinar caracteres em textos (exemplos: 192\.168\.1\.235, 192\.168\.1\.\d&#123;1,3&#125;).

- AuditarTempoFluxos - Gera um arquivo de extensão .csv no diretório config/audit/rule/ informando a data e a hora inicial e final do fluxo, desta forma, obtem-se o tempo de execução do fluxo, qual formulário pertence o evento e por qual usuário foi chamado.
- MostrarRequisicoes - Registra no log do tomcat todas as requisições ao Servidor de Aplicações. Para ativá-lo, informe 1.
- LogSQL - Registra no log do tomcat todas as consultas SQL realizadas pelo Webrun. Para ativá-lo, informe 1.
- RedirecionarAoExpirar - Quando definido, caso a sessão venha a expirar, um redirecionamento para a tela de login do sistema será feita.Para ativá-lo, informe 1.

- LocalPastaImagens - Define o local onde as imagens serão armazenadas quando um componente do tipo "Imagem" for ligado a campos do tipo VarChar. Será armazenado o nome do arquivo e sua extensão no banco e a imagem será salva no diretório especificado neste parâmetro (Caminho Absoluto). Ex:

LocalPastaImagens = E:\Imagens\ ou \\192.168.1.100\Image\

O banco armazena: **7F2AFED2-3218-4823-A89E-C2473971DB75-5B4D63EF654BA022B0A884D012563A5A.jpg**

A imagem é salva no diretório especificado.

Atenção: O usuário do Servidor de Aplicações deve possuir permissão para escrever no diretório ou caminho da rede especificado no parâmetro!

- Observações sobre DebugMode e DebugCachedFiles:
- - Caso o Webrun não esteja gerando os logs de stdout e stderror, mesmo estando habilitados os parâmetros DebugMode e DebugCachedFiles, siga os procedimentos abaixo:
  - - Vá em Iniciar -> Executar (Ou o atalho Tecla Windows + R) e digite o seguinte comando se o S.O. for 32bits:"C:\Arquivos de programas\Softwell Solutions\Maker 3.6\Webrun 3.6\tomcat\bin\tomcat7w.exe" //ES//Webrun36. Caso o seu Webrun não esteja na pasta padrão de instalação, substitua para o caminho correto onde está localizada a pasta do Webrun 3.6. Feito isso, será aberta a janela de propriedades do serviço. Vá para a aba "Logging" e defina nos campos "Redirect Stdout" e "Redirect Stderror" onde os arquivos serão salvos.
    - Caso o S.O.(Sistema Operacional) for 64bits digite o seguinte comando: "C:\Arquivos de programas(x86)\Softwell Solutions\Maker 3.6\Webrun 3.6\tomcat\bin\tomcat7w.exe" //ES//Webrun36

![image1501.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1501.jpg)

Após feito esse procedimento, reinicie o tomcat.
