---
title: "Parâmetros de Configuração - Sessao"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/webrun_2/parametro_configuracao/parametros_configuracao_sessao.htm"
---

Aqui se definem parâmetros para configurar a sessão.

![image1531.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1531.jpg)

Na tela Parâmetros de Configuração, ao clicar no componente ![image604.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image604.gif), mostra os componentes:

- ![image598.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image598.gif) - permite criar um novo parâmetro para o grupo;
- ![image597.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image597.gif) - permite excluir o parâmetro e seus valores. O controle de check ao lado de cada parâmetro será utilizado para esse fim;
- ![image599.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image599.gif) - permite excluir um valor do parâmetro. Podem existir muitos valores para cada parâmetro;
- ![image600.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image600.gif) - permite adicionar um novo valor ao parâmetro. Podem existir muitos valores para cada parâmetro.

Abaixo, verifique os principais parâmetros para o grupo Sessao:

- Tempo - Este parâmetro determina o tempo (segundos) em que o Webrun verificará com o Servidor de Aplicações se a sessão do Usuário no sistema continua ativa. Um comando é enviado ao Servidor de Aplicações e, caso o retorno seja positivo, a sessão no Servidor de Aplicações continuará ativa, caso contrário, a sessão é encerrada. É útil para que a sessão do usuário não fique ativa em situações como: O browser travou e o processo foi encerrado; A rede do usuário caiu.
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

- LocalPastaImagens - Define o local onde as imagens serão armazenadas quando um componente do tipo "Imagem" for ligado a campos do tipo VarChar. Será armazenado o nome do arquivo e sua extensão no banco e a imagem será salva no diretório especificado neste parâmetro (Caminho Absoluto). Ex:

LocalPastaImagens = E:/Imagens/ ou \\192.168.1.100\Image\

O banco armazena: **7F2AFED2-3218-4823-A89E-C2473971DB75-5B4D63EF654BA022B0A884D012563A5A.jpg**

A imagem é salva no diretório especificado.

Atenção: O usuário do Servidor de Aplicações deve possuir permissão para escrever no diretório ou caminho da rede especificado no parâmetro!

- Observações sobre DebugMode e DebugCachedFiles:
- - Caso o Webrun não esteja gerando os logs de stdout e stderror, mesmo estando habilitados os parâmetros DebugMode e DebugCachedFiles, siga os procedimentos abaixo:
  - - Vá em Iniciar -> Executar (Ou o atalho Tecla Windows + R) e digite o seguinte comando:"C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Webrun 2\tomcat\bin\tomcat6w.exe" //ES//WebrunEnterprise26. Caso o seu Webrun não esteja na pasta padrão de instalação, substitua para o caminho correto onde está localizada a pasta do Webrun 2. Feito isso, será aberta a janela de propriedades do serviço. Vá para a aba "Logging" e defina nos campos "Redirect Stdout" e "Redirect Stderror" onde os arquivos serão salvos.

![image1501.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1501.jpg)

Após feito esse procedimento, reinicie o tomcat.
