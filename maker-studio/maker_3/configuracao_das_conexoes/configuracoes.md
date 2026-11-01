---
title: "Configurações"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/configuracao_das_conexoes/configuracoes.htm"
---

A tela é composta por quatro abas: Arquivo de Projeto, Rede e Conectividade, Versionamento, Fluxos e Ações, Documentação Automática, Geração de Tabelas e Outros*. A tela é o local em que são definidos os parâmetros para a conexão com o banco de dados (tanto no Maker quanto no Webrun), execução de download de novas atualizações do Maker, demonstração da versão corrente do Maker, definição da quantidade de versões dos componentes que serão armazenadas e controles gerais.

Para acessar a opção, ative o menu Projeto e, a partir daí a opção Configurações, ou pressionar a tecla F6:

![image1318.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image01.png)

A tela Configurações possui as seguintes opções:

- Aba Arquivo de Projeto - por meio desta aba, são definidos os parâmetros de configuração para conexão com os bancos de dados homologados para uso no Maker. Os parâmetros apresentados, mediante a seleção do Sistema de Gerenciamento de Banco de Dados, estão declarados no arquivo dbxdrivers.win. Observe as opções:
- - na caixa de texto Código, apresenta-se a sigla do projeto, a qual é definida no momento da criação do projeto. Essa sigla não deve ser alterada;
  - no campo Tipo do Banco de Dados, deve ser selecionado o banco de dados no qual o projeto será salvo ([limitado pela versão que esteja utilizando](../../recursos_e_caracteristicas_das_versoes_do_maker)). A grade abaixo (composta pelas colunas Parâmetro e Valor) será redesenhada cada vez que for escolhido um tipo diferente. Os principais campos dela são:
  - - database - nome do banco de dados;
    - user_name / password - nome / senha de um usuário que tenha permissão de acesso à base dados;
    - hostname - nome do computador em que está a base de dados.
  - Nesta aba, é permitido que o usuário ![image74.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image02.png) (adicione) ou ![image75.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image03.png) (exclua) parâmetros. É necessário conhecimento sobre parametrização do driver do banco de dados em uso. Para adicionar um novo parâmetro, o usuário deve:
  - - efetuar um clique sobre o botão Adicionar ![image74.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image02.png);
    - informar o nome do parâmetro na caixa de texto titulada Informe o nome do novo parâmetro da tela Adicionar Parâmetros (confirmando a escolha pelo botão OK ou desistindo da definição pelo botão Cancelar);
    - informar um valor para o parâmetro na coluna Valor da tela Configurações (confirmando a escolha pelo botão OK ou desistindo da definição pelo botão Cancelar);
    - efetuar um clique sobre o item Salvar do menu Projeto.

    A propriedade DbAuthentication deve ser adicionada para autenticar o Webrun por meio do SGBD. Caso esta propriedade esteja ativada, o Webrun usará o login e a senha que o usuário informou no ato do logon para conectar-se ao banco. É necessário que o mesmo usuário do banco esteja cadastrado no controle de acesso ao Webrun, porém a senha do Webrun não será considerada. Para que a propriedade funcione corretamente, é necessário que tenha valor true.

    É possvel restringir os Schemas que serão utilizados em um projeto criado no banco de dados:

    - Oracle pela adição de um parâmetro chamado SchemaList, definindo como valor(es) para ele o nome dos schemas que serão utilizados, separando-os pelo sinal de pontuação "," (vírgula);
    - Postgresql pela adição de um parâmetro chamado RoleName, definindo como valor(es) para ele o nome dos schemas que serão utilizados, separando-os pelo sinal de pontuação "," (vírgula).

    Observação: Ao definir uma instância para o projeto, é necessário reiniciar o Webrun, haja vista que o Webrun não consegue reconhecê-la apenas reiniciando o projeto.
  - No computador em que está instalado o Webrun, se for executado mais de um projeto contido em bases de dados diferentes, mas que tenha a mesma sigla, faz-se necessário o preenchimento do campo 'Nome da Instância. Assim, no momento da execução do projeto no Webrun, a sigla do sistema será concatenada com o valor preenchido no campo citado para efeito de diferenciação dos sistemas. Após a definição de uma instância, é preciso reiniciar o Maker para que a opção [Preview](../formulario/opcoes_comuns_para_os_objetos_em_um_formulario/edicao) funcione corretamente. Obtenha mais informações, como [Carregando múltiplos sistemas no Webrun](../../dicas_e_truques/webrun/carregando_multiplos_sistemas_webrun). Ao definir uma instância para um projeto no Maker, é necessário [reiniciar o Webrun](../../webrun_3/modulo_configuracoes), pois arquivos temporários relativos ao projeto podem ter sido criados.
  - Observação:

    Nesta aba, é possível utilizar teclas de atalho:

    1. para acessar "Código" utilize Alt+C;
    2. para acessar "Tipo do Banco de Dados" Alt+T;
    3. para acessar o campo "Nome da Instância" utilize Alt+N.

- Aba Rede e Conectividade:
- - ![image1319.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image04.png)

    Possui três agrupamentos, como segue:
  - Webrun, onde definimos todos os parâmetros para a utiliização do Web Service nos campos:
  - - Endereço - deve ser digitado o endereço do Webrun - endereço utilizado no browser para se ter acesso aos projetos;
    - Contexto - deve ser informado o contexto no qual foi configurado o Webrun;
    - Porta - deve ser informada a porta usada pelo servidor de aplicações para web. Esta configuração é muito importante para o Gerador de Códigos do Editor de Fluxo de Ações.
  - Proxy, onde definimos todos os parâmetros para a execução do download de novas versões do Maker nos campos:
  - - Endereço - deve ser informado o endereço utilizado para a conexão com a internet, normalmente um endereço IP - endereço configurado em um hardware que provê acesso à internet para todos os outros dispositivos conectados à rede;
    - Porta - deve ser informada a porta que será utilizada com o endereço informado no campo Endereço;
    - Login/Senha - deve ser informado o login/senha que o usuário utiliza para conectar a internet.
  - - Aba Versionamento

    ![image1320.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image06.png)

    A tela é dividida em dois agrupamentos, como segue:

    - versão do Maker - campo em que é demonstrada a versão mínima (campo Versão Mínima) e a versão que está sendo utilizada (campo Versão em uso) do Maker;
    - quantidade de versionamentos possíveis - local em que são disponibilizados os seletores para aumento ou diminuição da quantidade de versões que poderão ser armazenadas de Formulários, Relatórios e Fluxos. Não há limite para a quantidade de versionamentos.

    Observação: Este recurso não é editável e está limitado ao armazenamento das dez últimas versões de cada objeto.

    - Aba Fluxos e Ações:

    ![image1322.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image07.png)

  Possui os seguintes agrupamentos, como segue ;

  - Skins - campo em que o usuário pode escolher uma personalização já predefinida pelo usuário ou pelo sistema ;
  - Aba Outros*:

  ![image1322.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image08.png)

  A tela possui três agrupamentos:

  - Geral - local em que são disponibilizados os campos:
  - - Atualização Automática - quando selecionada essa opção, toda vez que o Maker for inicializado, o usuário será questionado sobre o aceite de novas atualizações e de arquivos que o complementam;
    - Exibir Tabelas do Maker (FR_*) - ativa a exibição das tabelas do Maker nas telas nas quais se pode construir consultas;
    - Editar descrição de objetos do fluxo - esta opção permitirá que o usuário edite a descrição de qualquer componente contido em um fluxo de ação, bastando apenas efetuar um clique sobre o componente e iniciar a digitação da descrição;
  - Enviar relatório de erro - quando marcada esta opção, se o computador estiver conectado à Internet e ocorrer um erro no Maker, dados sobre o erro serão enviados para a Softwell Solutions automaticamente;
  - Limpar o cache do Chromium na inicialização - Habilitada por padrão, essa opção fará com que os arquivos de cache do Chromium sejam removidos na inicialização do processo;
- Tamanho máximo aceitável para imagens - é utilizado para a definição do tamanho máximo sugerido de uma imagem que poderá ser carregada no Maker pela tela [Galeria de Imagens](../cadastro_de_imagens/catalogo_de_imagens). O valor padrão é 60 Kb. Essa funcionalidade é de caráter informativo, não anulando a gravação da imagem.

- Nível do Cache -  Armazena os dados em cache. O armazenamento pode ser efetuado da seguinte forma:

- Em memória- Guarda as informações do banco de dados, enquanto o Maker estiver aberto.
- Persistente - Guarda as informações do banco de dados em disco.
- Nenhum - não guarda as informações do banco de dados.

- Observação: Para reinicializar o cache, tecle F5. Sempre que o Maker for fechado, o cache será removido.
- Obter metadado extendidos do banco - habilitará a exibição de informações dos campos das tabelas no assistente de consulta, tais como: Campo Chave, Tipo do Campo. [Saiba mais...](../formulario/assistente_sql/iniciando_com_o_assistente_sql#maker_2_6_marcacao_campos)

  Visual -

  - Tema - importa os templates existentes no Maker
  - Esquema de Cores - modifica as cores padrões do Maker. Saiba mais clicando [aqui](../../novidades/esquema_de_cores).

  Relatórios -

- Recursos Experimentais (consulte o manual) - são recursos adicionais do Maker, compostos pelos seguintes itens:

- [Conversão dos relatórios para JASPER](../exportar_para_jasper/exportando_relatorios_para_jasper) - habilita o item "Exportar relatórios para o Jasper" do menu "Utilitários", o qual tem a função de converter um relatório para o formato *.JRXML. Relatórios com essa extensão podem ser utilizados pelo Webrun tanto no ambiente do sistema operacional Linux quanto no do Windows. Este recurso também está disponível na [Paleta Objetos](../paleta_objetos), através da execução de um clique com o botão direito do mouse sobre um relatório;

- [Documentação Automática](../documentacao/documentacao_automatica) - habilita o submenu "Documentação Automática" do menu "Utilitários". Tem a função de ser um gerador de documentação automática, seguindo o modelo PRAXIS - Especificação de Requisitos do Software. Após ativar esta opção, é habilitado o botão Configurar..., o qual dá acesso à tela Configurações Automáticas da Documentação, local em que o usuário poderá configurar o arquivo do relatório (*.rtm) e opções para geração das imagens:

Nota: Para que as alterações efetuadas nesta tela entrem em vigor é necessário salvar o projeto e em seguida reiniciar o Maker.

![image822.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image09.png)

Esta tela possui as seguinte opções:

- Localização dos arquivos de relaatórios (.rtm) - informe o local para geração dos arquivos;
- Em Opções de geração de imagens, defina:
- - Bitmap ou JPEG - selecione o formato;
  - Qualidade da Imagem - defina um percentual p ara resolução final da imagem.
- Em Dimensões, limites para autoajuste, defina:
- - Altura Máx. - defina a altura máxima da figura, em pixels;
  - Largura Máx. - defina a largura máxima da figura, em pixels.
- ![restaurar valores padrão](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image11.png) - retorna valores padrão.

- Geração automática de tabelas - é utilizada para a habilitação do botão Configurar..., o qual dá acesso à tela Configurações da Geração Automática de Tabelas:

![image36.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image12.png)

Nesta tela, são informadas as sintaxes que deverão ser observadas no momento da criação das entidades (tabelas, índices, e chaves primárias e externas, por meio do formulário). Recomenda-se o uso do caracter "_" (underline) para compor as partes da sintaxe do nome do objeto, mas não poderão ser utilizados caracteres especiais. Defina para os campos:

1. Do grupo Estrutura:
   1. Nome de tabela - nome para a tabela;
   2. Nome de campo - nome para os campos da tabela;
   3. Chave primária - nome para as chaves primárias da tabela;
   4. Chave externa - nome para as chaves secundárias da tabela.&gt;
2. Do grupo Índice:
   1. Nome de índice - nome para os índices primários;
   2. Índice único - nome para os índices únicos da tabela.
3. Variável interna - utilizada para a seleção da sintaxe que comporá o nome dos objetos de que trata este item. Após a seleção de uma das opções, deve-se clicar no botão ![inserir](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image13.png) para marcar a opção escolhida e, em seguida, efetuar um outro clique em qualquer uma das caixas de texto em que é definido o nome do objeto. São opções do componente:
   1. Sigla do Sistema (%SISTEMA%) - esta opção será substituída pela sigla do sistema no momento da criação da tabela;
   2. Nome da Tabela (%TABELA%) - esta opção será substituída pelas três primeiras letras do nome do formulário no momento da criação da tabela;
   3. Nome do Campo (%CAMPO%) - esta opção será substituída pela descrição (propriedade Descrição) atribuída ao componente no momento da criação da tabela;
   4. Sigla da Tabela (%TAB%): esta opção será substituída pelas três primeiras letras do nome do formulário no momento da criação da tabela;
   5. Tipo de Dado (%TIPO%) - esta opção será substituída pelo tipo do dado vinculado ao campo no momento da criação da tabela.

Observação: A tela Assistente de Banco de Dados só aparecerá no salvamento de um formulário se o marcador Geração automática de tabelas estiver marcado, caso contrário o salvamento ocorrerá da maneira tradicional.

- Relatórios - pela opção Tipo de relatório padrão, pode-se selecionar:
- - MakerReports - selecionando esta opção, no momento que for efetuado um clique no botão Novo da aba Relatórios da Paleta Objetos, aparecerá a tela Novo Relatório e o usuário poderá utilizar um dos assistentes para a criação de Relatórios.
- Botão ![valores padrão](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image11.png) - ao clicar neste botão, todas as configurações iniciais da tela Configurações (da época em que o Maker foi instalado) serão restauradas. Antes de executar a ação, aparecerá uma mensagem de confirmação.

Observações:

1. Vale ressaltar que as alterações feitas nessa tela só se repercutirão após a reinicialização do Maker. Além disso, tais alterações se restringem apenas ao perfil do usuário no sistema operacional. Constam maiores informações no tópico [Informações adicionais da estrutura do Maker](../../estrutura_maker_e_webrun/informacoes_adicionais_da_estrutura_do_maker).
2. As configurações das abas Rede e Conectividade e Outros* estão declaradas no arquivo maker3.ini, o qual se encontra na pasta C:\Documents and Settings\&lt;identificação do usuário&gt;\Configurações locais\Dados de aplicativos\Softwell Solutions\Maker 2. As configurações da aba Versionamento estão definidas na tabela FR_VERSOES (parte da estrutura de tabelas que o Maker utiliza). Na mesma pasta descrita acima, cabe considerar ainda os arquivos:
   1. *.elf - são relatórios que apresentam instruções e comentários sobre erros ocorridos no Maker durante a execução de uma tarefa;
   2. RBuilder.ini - arquivo de configurações personalizadas pelo usuário no ambiente do Maker Reports;
   3. Pasta Debug - local composto por arquivos *.log contendo comentários dos scripts SQL executados.
3. Cabe ao usuário a criação da pasta ...\import_export dentro da pasta ...\Dados de aplicativos\Softwell Solutions\Maker3\debug para que o Maker possa gerar logs das importações e exportações executadas. [Saiba mais!](../../dicas_e_truques/maker/verificando_log_de_importacao_ou_exportacao_de_arquivo_frz_no_maker)
4. Todas as configurações feitas na aba:

1. Arquivo de Projeto - são gravadas no apontador do projeto (wfre);
2. Versionamento - são gravadas no banco de dados no qual foi criado o projeto;
3. Botões Configurar... habilitados por meio dos marcadores Documentação Automática e Geração automática de tabelas. São gravadas no banco de dados no qual foi criado o projeto.
