---
title: "Acessando Webrun"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/webrun_2/acessando_webrun.htm"
---

Para acessar o Webrun e suas opções de sistemas e configurações desenvolvidos no Maker, siga os passos:

1. Abra o navegador;
2. Na Barra de Endereço do navegador, digite &lt;nome da máquina ou IP&gt;:&lt;porta&gt;

1. &lt;nome da máquina ou IP&gt; - nome da máquina ou o IP onde o serviço de aplicação Web está instalado;
2. &lt;porta&gt; - porta de acesso ao serviço (Observar que a porta padrão é 8080, mas, devem-se verificar as configurações definidas na tela [Atualizações e Configurações do Webrun](atualizacoes_configuracoes_webrun)).

Exemplo: 127.0.0.1:8080/webrun

![image1821.jpg](../image1821.jpg)

Observação: O desenvolvedor pode configurar o site (pessoal ou corporativo) inserindo um link para acesso direto a um determinado sistema. Como exemplo: suponha que o sistema possui a sigla XXX, o nome de usuário seja visitante e a senha 123, o link seria:
http://&lt;ip ou nome do servidor&gt;/webrun/logon.do?sys=XXX&user=visitante&password=123

Dessa forma, os usuários, clicando no link, terão acesso ao sistema sem necessidade de autenticação.

Na tela Sistemas, temos as opções:

- Escolha dentre os sistema disponíveis - este campo lista os projetos disponíveis na pasta systems. Mais detalhes, acesse o tópico Instalação do Maker. Para mais detalhes sobre a pasta de projetos, acesse o tópico Acessando o Maker 2.0. Para atualizar a lista de projetos, obtenha mais informações no tópico Atualizando a lista de sistemas do Webrun.
- ![image237.jpg](../image237.jpg) - Escolha de Idioma - a opção de internacionalização do Webrun está disponível em Português, Inglês, Espanhol e Francês.
- - Internacionalização de campos monetários e datas. [Saiba mais](../dicas_e_truques/webrun/internacionalizando_valores_monetarios_e_datas).
- Botão ![image499.gif](../image499.gif) - acesse uma série de opções para Configurações do Webrun. Identifique admin como usuário e a senha webrun;
- Botão ![image500.gif](../image500.gif) - este item verifica as configurações básicas do navegador em uso, apresentando uma lista de itens que podem interferir no funcionamento perfeito do Webrun:
- - Sistema Operacional (Windows ou Linux);
  - Navegador (FireFox 1.5, 2.0 ou 3.0, Internet Explorer 6, 7 e 8);
  - Bloqueio de PopUp (desativado);
  - Resolução de Tela (acima de 1024);
  - Impressão em modo Texto (Sim).

![image238.jpg](../image238.jpg)

- Botão ![image501.gif](../image501.gif) - acessa um projeto selecionado no campo. Escolha dentre os sistemas disponíveis. Veja com mais detalhe o tópico [Efetuando logoff do usuário no sistema](efetuando_logoff_usuario_sistema).

Observações:

1. No idioma brasileiro ao realizarmos uma operação com números fracionados, é necessário a utilização da (","). Caso o usuário queira utilizar o ("."), o idioma do Webrun deve ser alterado para inglês. Como solução para que o usuário não coloque ("."), pode ser utilizado a propriedade Conteúdo do componente e selecionando Número, dessa forma os usuários não vão poder utilizar o ponto.
2. A Softwell Solutions não recomenda a utilização de navegadores legados como Internet Explorer 6.0 e Firefox 1.5/2.0. Por ser uma versão antiga o comportamento regular de alguns componentes do Webrun podem ser afetados.
3. O navegador Internet Explorer 8 foi homologado a partir da versão 2.5.0.32b.
4. O sistema que não possuir imagem principal definida, utilizará a imagem padrão do Webrun que fica em C:\Arquivos de programas\Softwell Solutions\Maker 2.7\Webrun 2\tomcat\webapps\webrun\Skins\Default\background.jpg.
