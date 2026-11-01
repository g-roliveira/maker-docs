---
title: "Histórico de alterações - Webrun"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/historico_de_alteracoes/historico_de_alteracoes_webrun.htm"
---

**2.7.0.44, 05 de junho de 2013**

- Melhorias de desempenho na atualização do componente Grade.
- Não era possível remover um campo personalizado, previamente adicionado, na busca avançada da aba localizar.
- Correção na função "Letra".

**2.7.0.43, 16 de maio de 2013**

- Correção nos formulários nativos do Webrun (Cadastro de usuários, grupos, etc).
- Correção na função "Alterar conexão adicional".

**2.7.0.42, 14 de maio de 2013**

- Corrigido um problema onde em determinados momentos era possível alterar o valor do componente caixa de texto
  no IE.

**2.7.0.41, 05 de abril de 2013**

- Geração de código apresentava erro de script no IE10.
- Correção de falha no IE10 onde sistemas com formulário principal definidos não eram exibidos

**2.7.0.40, 04 de março de 2013**

- Correção na chamada de fluxos no IE.
- Botão de valores padrão não funcionava em alguns casos em sistemas publicados
- Correção no componente texto rico quando o mesmo faz referências a URL de imagens

**2.7.0.39, 07 de janeiro de 2013**

- Atualização da biblioteca do ReCaptcha para permitir a utilização do Captcha utilizando protocolo HTTPS.
  Para ativar o Captcha fornecido através de páginas HTTPS do Google, deve-se utilizar o Parâmetro "Secure"
  dentro da categoria "ReCaptcha" com o valor 1 (Ativo) ou 0 (Inativo). Por padrão as requisições serão do
  tipo HTTP, caso o parâmetro não seja informado.
- Correção no evento "Ao Verificar Serial"
- Correção na comparação de booleanos não-primitivos

**2.7.0.38, 21 de dezembro de 2012**

- Implementado parâmetro avançado no Webrun para permitir que requisições do tipo Options sejam desabilitadas.
- Para desabilitar, deve-se incluir o parâmetro "DesabilitarRequisicoesOptions" na categoria "Sessao" dos parâmetros
  avançados do Webrun e incluir o valor True.
- Correção de um Erro não especificado ao ao efetuar login sem especificar código de verificação caso
  o ReCaptcha (CHANGE 4292) esteja ativo.
- Correção nos inputs das páginas de adminlogon e logon para desabilitação de auto complete.

**2.7.0.37, 17 de dezembro de 2012**

- Implementado geração de código das regras em linguagem nativa para a plataforma .Net.

**2.7.0.36, 14 de dezembro de 2012**

- Correção na forma como os preparedStatement são executados no driver JDBC da Microsoft.
- Perda de referência no resultset em caso específico na exclusão de registros utilizando o Firebird.
- Erro no componente texto rico ao se definir a cor da borda do mesmo.

**2**.7.0.35, 06 de novembro de 2012

- Correção da tela de relatórios no Internet Explorer 10.
- Ajustes no componente imagem quando o mesmo não possui uma URL associada.
- Retirado algumas informações do cabeçalho de requisição na postagem de regras.
- Erro não especificado ao exportar um sistema que contenha instância. Neste caso, será exibido uma mensagem de erro personalizada.
- Erro ao forçar conversão pelo Webrun para comparações informando valor vazio.
- Correção na máscara do componente caixa de texto quando conteúdo definido era "Maiúsculo" ou "Minúsculo" no Google Chrome.

**2**.7.0.34, 08 de outubro de 2012

- Correção da tela de relatórios no Internet Explorer 10.

**2**.7.0.33, 04 de outubro de 2012

- Suporte ao Internet Explorer 10, Chrome 22 e Firefox 15.

**2**.7.0.32, 03 de outubro de 2012

- O agendador de tarefas deixava cursores abertos.

**2**.7.0.31, 27 de setembro de 2012

- Tratado a forma como a thread de execução das tarefas agendadas são executadas.
- Propriedade "Dica" não era exibida sobre o componente "Imagem" corretamente.
- Retirada barra de rolagem que era apresentada na janela do calendário do componente "Caixa de Texto" no Chrome.
- Criação da máscara "SP" para ser utilizada com o novo padrão de telefones definidos no estado de São Paulo.
  A máscara também serve para os telefones antigos.
- Ajustes no autotest para a plataforma Linux.

**2**.7.0.30, 31 de agosto de 2012

- Alguns browsers estavam tratando o evento "Ao Pressionar Tecla" de maneira incorreta.
- A correção do problema na barra de rolagem gerou uma quebra onde não era possível visualizar corretamente os registros da grade.
- Regras na camada servidor faziam chamadas incorretas em alguns browsers.

**2**.7.0.29, 24 de agosto de 2012

- Ajustes do componente Memo quando definido "HTML Básico" ou "HTML Avançado" no Internet Explorer.
- Mensagem incorreta ao "Limpar Consulta" em uma consulta avançada da aba Localizar de um formulário.
- Regras na camada servidor faziam chamadas incorretas em alguns browsers.

**2**.7.0.28, 22 de agosto de 2012

- Evento ao clicar da grade era disparado ao marcar um Checkbox de uma linha da grade.
- Corrigido as propriedades "Habilitado" e "Apenas Leitura" no componente Memo quando definido como Texto Rico.
  Corrigido também o comportamento do componente quando era focado, definindo a cor azul quando o mesmo estiver com o foco.
- Propriedade "Quebra Automática" não funcionava no componente Memo quando definido como "HTML Básico" ou "HTML Avançado".
- Ao definir o componente texto rico como desabilitado, era possível acessá-lo.
- Ao definir o componente texto rico como desabilitado, era possível acessá-lo.

**2**.7.0.27, 16 de agosto de 2012

- Exportação de JAR da aplicação não estava levando o código fonte das regras Java.
- Atualização da biblioteca de gráficos TeeChart.

**2**.2.7.0.26, 08 de agosto de 2012

- Erro ao depurar fluxo quando acrecentava-se um parâmetro em um Subfluxo e não definia seu parâmetro de entrada.
- Criado um parâmetro avançado para definir a largura da coluna de numeração das linhas da grade. Deve-se definir a propriedade
  "Grade:LarguraColunaNumeracao" nos parâmetros avançados do Maker e definir um valor (Inteiro) para a largura.
- Mensagem de interação apresentava uma div branca no Internet Explorer 6.
- Ajustes na ordem de verificação dos eventos da grade.

**2**.7.0.25, 18 de julho de 2012

- Suporte ao JBoss 6: * Ajuste para funcionamento da aplicação no JBoss 6. * Atualização das bibliotecas do Single Sign On e do DB2.
- Ajuste para funcionamento da aplicação no Tomcat 7.

**2**.7.0.24, 11 de julho de 2012

- Caso a tabulação de uma grade filha possua tabulação menor que a tabulação de uma grade pai, uma falha é causada no filtro entre as mesmas.
- Componente Lista não estava sendo validado como campo requerido na camada cliente.
- Navegadores homologados passaram a ser verificados num intervalo de versões.
- Dada a possibilidade de definir a quantidade de tentativas para o ReCaptcha aparecer nas telas de login, através da propriedade avançada do Webrun "ShowFromAttempt" do grupo "ReCaptcha".
- Grade mestre quando definida cor condicional, não mantinha a linha selecionada após atualização de registro.

**2**.7.0.23, 06 de julho de 2012

- Caso a tabulação de uma grade filha possua tabulação menor que a tabulação de uma grade pai, uma falha é causada no filtro entre as mesmas.
- Componente Lista não estava sendo validado como campo requerido na camada cliente.
- Navegadores homologados passaram a ser verificados num intervalo de versões.
- Dada a possibilidade de definir a quantidade de tentativas para o ReCaptcha aparecer nas telas de login, através da propriedade avançada do Webrun "ShowFromAttempt" do grupo "ReCaptcha".
- Grade mestre quando definida cor condicional, não mantinha a linha selecionada após atualização de registro.

**2**.7.0.22, 04 de junho de 2012

- A correção do problema ao presionar a tecla enter, no componente botão gerou um problema onde a tabulação do botão em um formulário não funcionava corretamente.

**2**.7.0.21, 31 de maio de 2012

- Definido a obrigatoriedade de ser gerente para recarregar o sistema.
- Corrigido o evento "Ao Modificar" do componente Memo quando texto rico que era disparado de forma indevida quando não ligado ao banco.
- Não era possível visualizar o componente Grade de forma correta após alterar sua largura dinâmicamente.
- Forçado o uso do charset UTF-8 no cabeçalho de requisições Ajax quando o navegador utilizado exija.
- Alterado o tipo de dado retornado internamente quando o componente lista dinâmica está ligado a um campo, sem consulta SQL e com o evento "Ao Preencher Lista" definido.
- Internacionalizada mensagem de informação da aba localizar ao filtrar uma consulta sem parâmetros.

**2**.7.0.20, 21 de maio de 2012

- Ao pressionar a tecla "Enter" no componente botão dentro de uma grade o mesmo não estava efetuando a tabulação para o próximo componente.
- Não era possível visualizar os valores de objetos XML criados utilizando as funções da categoria XML na camada cliente.
- Implementado o evento "Ao Modificar" no componente Memo quando definido como "Texto Rico" (HTML Básico e Avançado).
- Não era possível visualizar os valores de campos do tipo float utilizando o Debug do fluxograma.
- Erro gerado ao atribuir alias ao campo do elemento pai de uma árvore.

**2**.7.0.19, 26 de abril de 2012

- Evento "Ao Sair" não era disparado caso a propriedade do componente "Texto Longo" estivesse definido como "HTML Básico" ou "HTML Avançado".
- Não era possível acessar múltiplos sistemas através do leitor biométrico.

**2**.7.0.18, 20 de abril de 2012

- Corrigido problema em webservices que possuiam parâmetros do tipo Inteiro não-primitivos.
- Corrigido um problema no momento da geração dos relatórios, não era verificado a existência do sistema.

**2**.7.0.17, 16 de abril de 2012

- Criada a propriedade avançada "Relatorio:ConexaoAdicional:UsarDaMemoria" para permitir abrir relatório com uma conexão que tenha sido alterada na memória. Ao ativar essa propriedade, impactará no tempo de abertura do relatório, pois todas
  as conexões adicionais devem ser salvas no disco antes da geração do relatório.
- Implementado parâmetro avançado no Webrun para permitir que requisições do tipo Trace sejam desabilitadas.
  Para desabilitar, deve-se incluir o parâmetro "DesabilitarRequisicoesTrace" na categoria "Sessao" dos parâmetros avançados do Webrun e incluir o valor True.

**2**.7.0.16, 11 de abril de 2012

- Corrigida a Servlet responsável por downloads que fazia com que a função "Iniciar download" não funcionasse no Chrome no Webrun.Net.
- Quando há um filtro num campo serial num relatório, o Maker envia como um novo tipo "mdfAutoInc". Esse tipo foi adicionado para poder ser interpretado como um campo Integer pelo Webrun.

**2**.7.0.15, 02 de abril de 2012

- Implementação da interface do fluxo gerou uma quebra na geração de regras marcadas como webservices.
- Alterada a forma como é interpretado o parâmetro "RequerAutenticacao" nos formulários.
- Ao se mostrar mensagem de obrigatoriedade de uma lista dinâmica com chave dupla, a mensagem não era de acordo com a propriedade descrição do componente.
- Quando se tinha um componente imagem dentro de uma grade, a sua exibição estava incorreta no Firefox acima da versão 3.
- Foco em componentes que contenham âncora () não ficavam marcados no Firefox acima da versão 6.
- Na exportação de um sistema completo no Webrun.Net, não eram levados os webservices dos sistemas.
- Comportamento inadequado quando uma grade é tornada visível via fluxo e o usuário troque de aba e volte pra aba onde estava a grade inicialmente.
- Componente Grade, no Chrome, mostrava incorretamente colunas com tamanho 0(zero).
- Ao desabilitar um componente "Caixa de texto" que contenha uma cor de fundo definida, esta cor não era mantida.
- No modo gerente, a opção "Logar", na tela de permissões de formulário, não era persistida no banco de dados.
- Ao utilizar o parâmetro "ConnectionFailMessage" do arquivo "databases.xml", a mensagem era mostrada, mas a tela de Login não era carregada quando o parâmetro "DbAuthentication" estava ativo.

**2**.7.0.14, 27 de março de 2012

- Havia uma quebra na chamada de servidor de relatórios causada por uma implementação na versão 2.7.0.11.
- Mal funcionamento da moldura quando possuia uma altura menor do que 6px no Chrome.

**2**.7.0.13, 23 de março de 2012

- Erro ao gerar relatórios no Servidor de Relatórios em sistemas que possuem conexão adicional.
- Na exportação de um sistema no Webrun.Net não era levados os webservices dos sistemas.

**2**.7.0.12, 09 de março de 2012

- Melhoria de performance no parse do parâmetro "filter" vindo da URL.
- Alterada a correção do erro de javascript, para que seja aplicada somente no browser IE.
- Alterada a correção da mensagem que aparece e desaparece do evento ao sair, para que seja aplicada somente no browser Firefox.
- Alterada a forma como a personalização de mensagens de exceções de banco são definidas. A mesma deve ser definida como uma propriedade
  avançada, definindo o parâmetro "GeneralSQLExceptionMessage" e a mensagem a ser exibida.

**2**.7.0.11, 05 de março de 2012

- Criada funcionalidade para personalização de exceções lançadas pelos bancos de dados. Para ativar, é necessário ir no databases.xml e adicionar, no grupo do banco de dados onde se deseja personalizar a mensagem, um novo item como mostrado abaixo:
  GeneralSQLExceptionMessage
  Mensagem de erro a ser exibida
- Correção do erro javascript, que ocorria no momento em que se tentava listar os itens de uma lista dinâmica após a sessão expirar. Problema só ocorria em um formulário modal.
- Correção do erro, ocasionado pela alteração na forma de compactação de arquivos do sistema na publicação de War e Jar, onde na geração de sistemas que continham caracteres especiais em seu nome gerava um erro.
- Ao cancelar edição ou inclusão do formulário principal, tendo um componente Grade, em edição ou inclusão, gerava um comportamento incorreto no IE.
- Correção de posicionamento de valores inteiro e fracionado no Google Chrome.
- Caso houvesse aspas simples (') no nome do formulário, gerava um erro ao abrí-lo no modo gerente.
- Valor do componente "Lista" não é exibido na grade quando a mesma está vinculada a um campo lógico.
- Mensagem de erro aparece e desaparece, quando executada no evento ao sair, pressionando enter.
- Filtro no SQL do componente árvore era guardado em cache no IE9.
- Criação do parâmetro avançado "Grupos:PermissaoPadrao", que possibilita inverter a permissão quando um usuário está associado a mais de um grupo. Quando esse parâmetro for definido com "false", o comportamento
  fica invertido, ou seja, se um dos grupos não possuir a permissão o usuário não terá permissão.
- Adicionado o driver da Microsoft de conexão com o banco SQL Server. Para ativar, é necessário ir no databases.xml
  e alterar, no grupo MSSQL, os itens "Driver" e "URL", como mostrado abaixo:
  Driver
  com.microsoft.sqlserver.jdbc.SQLServerDriver

  URL
  jdbc:sqlserver://$HostName$:$Port:1433$;database=$DataBase$;instanceName=$INSTANCIA$;sendStringParametersAsUnicode=false
  As propriedades que podem ser usadas na URL estão em:http://msdn.microsoft.com/en-us/library/ms378988(v=sql.100).aspx
- Propriedade "Exibição" do componente "Imagem" quando definida diferente de "Centralizado" e possuir um evento
  ao clicar associado, não era exibido o estilo do cursor corretamente.
- Erro ao tentar modificar conexão adicional no sistema publicado no Webrun.Net.
- Complementada a implementação feita no CHANGE 3994 do pool de conexões.
- Havia uma falha no gerenciamento de formulários, quando um formulário era fechado.
- Primeiro acesso de relatório externo gerava um erro.
- Implementada uma interface para que os fluxos definidos como WebServices se comuniquem com o WSDL gerado pelo Webrun.Net.
- Criada a propriedade avançada "Grade:CorCondicional:ManterOrdem" para manter a ordem das condições definida no Maker.

**2**.7.0.10, 26 de janeiro de 2012

- Consulta do valor do componente Lista Dinâmica não funcionava corretamente no IE9, o navegador fazia um cache desnecessário.
- Correção no pool de conexões para liberar conexões que, em casos específicos, ficavam presas.
- Melhoria na implementação do gerenciamento da tabela fr_arquivo e correção para a parte do componente Grade, onde suas customizações não estavam sendo salvas.
- Ao cancelar edição ou inclusão do formulário principal, tendo um componente Grade, em edição ou inclusão, gerava um comportamento incorreto no IE.
- Alterada a forma de compactação dos arquivos do sistema na publicação (WAR ou JAR).
- Criada a propriedade avançada "Grade:CampoSenha:OcultarValor" para criptografar campos do tipo senhas, não ligados a banco, no componente Grade.
- Definição de mensagem amigável para Debug e Profiler, durante a tentativa de conexão com sistemas que não estão na pasta "systems" do Webrun.
- Suporte ao Glassfish.
- Em sistemas exportados onde a descrição dos mesmos contenham quebra de linha, gerava uma validação incorreta de versão. Dessa forma não era possível acessar esses sistemas.
- Tradução dos botões de paginação da grade.
- Retorno de fluxo servidor para fluxo cliente com caracteres acentuados no Webrun UTF-8.
- Correção na ordenação das colunas na aba localizar no Firefox quando essas forem customizadas.
- Eliminado acesso a variáveis de sessão pelo cliente com parâmetro de segurança ativado.Caso o parâmetro de configuração VersaoSeguranca esteja ativo, o Webrun não permitirá acesso de leitura e escrita nas variáveis de sessão através dos fluxos cliente.
- Erro na geração de código. Quando um sistema tinha dois formulários com o mesmo nome, porém com espaço no final de um dos nomes, o Webrun gerava o formulário mesclado.

**2**.7.0.9, 23 de novembro de 2011

- Forçando fechar consulta mesmo que haja erro durante a obtenção de código AutoInc.
- Removida otimização das respostas da barra de progresso.
- Formulários e fluxos que contenham nome iniciando com o padrão Número + Caracter Especial + Número" em sua nomenclatura geram nome de classe incorreto.
- Não era possível exportar um sistema no Webrun.Net duas vezes seguidas.

**2**.7.0.8, 08 de novembro de 2011

- Havia um bug quando o Campo Lista da Lista Dinâmica era do tipo CHAR e o componente não estava ligado a banco.Assim, o Campo Chave também estava sendo considerado como CHAR no momento de alterar seu valor através do uso da função "Alterar Valor do Componente".
- Correção na passagem de parâmetros via Ajax para submissões UTF-8 no Firefox.
- Correção de travamentos da barra de progresso no IE.
- Atualizadas as imagens das versões Standard e Professional do Webrun.
- Permitida abertura do leitor de digitais a partir de formulário externo.
- Removido trim da das propriedades durante a exportação.
- Correção para exibição de relatório com componentes "Texto Longo" e "Texto" que possuam valores iniciados com '(aspas simples).
- Correção na criação de regras, com "FlowOptimizeCode", contendo laço com referência e "Fim".
- Ao abrir um relatório (já aberto) a partir de um formulário modal pode causar erro de JavaScript no IE.
- Evento "Ao Duplo Clicar" do componente Lista Dupla não estava funcionando.
- Classe gerada com o uso da função "Executar Java" era gerada novamente ao reiniciar o servidor de aplicações.
- Correção de segurança na passagem do tipo de requisição usada na execução de regra.
- Correção no CHANGE 3351 do Webrun.Net que estava gerando erro ao compilar as funções C#.

**2**.7.0.7, 05 de outubro de 2011

- Idiomas desaparecem após reiniciar a aplicação no autotest.
- O cache do metadata das tabelas não estava sendo gerada com o charset corrente.

**2**.7.0.6, 04 de outubro de 2011

- Quantidade padrão de regras geradas em paralelo alterada de 50 para 10.
- A correção do BUG 3373 gerou problema ao abrir a tela de relatório utilizando o parâmetro "ImportarTodosScriptsJS" como "false".

**2**.7.0.5, 28 de setembro de 2011

- Adicionado comportamento de não permitir definir valor padrão, no Webrun, de campos apenas leitura ou desabilitado.Esse comportamento apenas estará ativo caso o parâmetro "VersaoSeguranca" esteja definido ou o parâmetro "Seguranca:ValorPadrao" esteja ativo.
- Correção de serialização do sistema na sessão.

**2**.7.0.4, 23 de setembro de 2011

- O comportamento antigo das funções de Upload devem ser mantidos quando a segurança estiver inativa.
- Ao gerar um relatório em um formulário externo causa um erro. Este erro foi causado após a correção do BUG 4615.

**2**.7.0.3, 21 de setembro de 2011

- Não será mais possível fazer download da pasta Upload com a segurança ativa.
- Correção do foco de campos obrigatórios no momento da validação. Erro acontecia somente no IE.

**2.7.0.2, 19 de setembro de 2011**

- Correção para não gerar erro em exportação de sistema onde o mesmo possua formulário com descrição nula;
- Liberado o acesso da tela de Upload em formulários externos.

**2.7.0.1, 13 de setembro de 2011**

- Erro ao fazer um post síncrono quando não existe Lista Dupla no formulário e utiliza-se "ImportarTodosScriptsJS" como false;
- Correção na escolha de parâmetros para uma consulta avançada em um formulário modal no IE;
- Ao se escolher um novo filtro o formulário não era atualizado;
- Criado o parâmetro avançado [VersaoSeguranca](../maker_2/propriedades_e_eventos_da_area_de_trabalho#parametro_versao_seguranca);
- Criado o parâmetro avançado [MostrarMensagemComoAlert](../maker_2/propriedades_e_eventos_da_area_de_trabalho#parametro_mostrar_mensagem_como_alert) para mostrar as mensagens de alerta e de erro como alert;
- Exceção gerada durante execução de regra não mostrava a mensagem quando a mesma era definida manualmente;
- Correções de navegadores:
- - Firefox 6: Conteúdo da coluna maior que a largura da grade não limitava o tamanho da célula;
  - Chrome: Correção ao redimensionar uma coluna;

- Correção na leitura do parâmetro [Seguranca:Upload:ExtensoesBloqueadas](../maker_2/propriedades_e_eventos_da_area_de_trabalho#seguranca_upload_extensoes_bloqueadas).

**2.7.0.0, 05 de setembro de 2011**

Novos suportes:

- Bancos homologados:
- - PostgreSQL 8.2.5, 8.3, 8.4 e 9;
  - MS SQL Server 2005, 2008 e 2008 R2;
  - ORACLE 9i, 10g Enterprise XE e 11g;
  - MySQL Server 5, 5.1 e 5.5;
  - DB2 9.5;
  - Firebird 2.0, 2.1 e 2.5.

- Bancos descontinuados:
- - MSSQL 2000;
  - Firebird 1.5.

- Navegadores homologados:
- - Internet Explorer 6, 7, 8 e 9;
  - Firefox 2, 3, 4 e 6.

- Atualização do gerador de relatórios local para a versão 2.7.0.0;
- O servidor de aplicação tenta serializar o sistema na sessão e acaba causando erro ao abrir sistema.
