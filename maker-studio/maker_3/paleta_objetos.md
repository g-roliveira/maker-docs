---
title: "Paleta Objetos"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/paleta_objetos.htm"
---

É o local que disponibiliza a maior parte dos objetos que compõem o projeto,a Paleta de Objetos fica localizada no lado esquerdo do maker na aba do Gerenciador de Objetos, é formado pelas abas [Formulários](formulario/definicao_de_formulario), [Relatórios](relatorio/relatorios), [Fluxos](fluxos_e_acoes/editor_de_fluxo_de_acoes). As três primeiras são formadas:

- Todas opções são acessadas através de um clique esquerdo sobre o objeto desejado.

  pelo botão Novo, o qual é utilizado para a criação de objetos. Se for efetuado um clique sobre este botão na aba:
- - Formulários: aparece a tela [Assistente de Criação de Formulário](formulario/assistente_criacao_novo_formulario), a partir da qual podem ser definidas algumas propriedades para a criação do formulário.
  - - Quando um formulário é aberto, aparece:
    - - a área [Componentes](formulario/componentes/componentes), a qual contém todos os componentes que podem ser utilizados nos formulários;
      - o botão Salvar, ao receber um clique, salva todas as alterações feitas no formulário que estiver com o foco, caso esteja aberto mais de um formulário ao mesmo tempo;
      - o botão Salvar Tudo, ao receber um clique, salva todas as alterações feitas em todos os formulários que estiverem abertos. Além disso, este botão também executa a mesma ação da opção Salvar do menu Projeto da Barra de Menus do Maker;
      - o botão Definições, ao receber um clique, abre a tela [Definições do Formulário](formulario/propriedade_do_formulario), a partir da qual podem ser editadas algumas propriedades do formulário.

- Relatórios: aparece a tela [Novo Relatório](relatorio/usando_o_assistente_de_criacao_de_relatorio), a partir da qual pode ser escolhida a versão do Gerador de Relatórios que será utilizada ou o assistente no qual o Maker se baseará para criar o relatório.
- Fluxos: aparece a tela [Editor de Fluxo de Ações](fluxos_e_acoes/editor_de_fluxo_de_acoes).

- pelo botão Excluir: ao receber um clique, aparece uma caixa de diálogo questionando a certeza do usuário em excluir o objeto; caso o usuário clique em Sim, o objeto será excluído, caso o usuário clique em Não, o objeto não será excluído;

- pelo botão Histórico: ao receber um clique, aparece a tela Versionamento do Sistema listando as últimas versões do objeto. Cabe ainda lembrar que, se o foco do cursor estiver em uma categoria na aba Fluxos, será exibido o histórico de modificações de todos os objetos do projeto; se o foco estiver em um objeto, será exibido apenas o histórico de modificações do objeto;
- pelo botão Duplicar: ao receber um clique, aparece a tela Duplicar objeto, a qual disponibiliza a caixa de texto Nome do objeto, local em que deve ser definido o nome do objeto que está sendo duplicado, e os botões OK (utilizado para confirmar a duplicação do objeto) e Cancelar (utilizado para o cancelamento da duplicação do objeto);

- pela caixa de texto Localizar: local utilizado para a definição do nome de um objeto que se quer localizar. Deve-se observar a configuração do banco de dados no qual foi criado o projeto, pois, se o banco de dados for susceptível ao caso sensitivo (case sensitive), a pesquisa se baseará exatamente no valor informado para ser pesquisado;
- pela área de exibição dos objetos: local no qual são listados todos os objetos criados. No caso do objeto fluxo de ação (Aba Fluxos), ele aparece dentro da categoria (hierarquia) à qual foi associado.Por ser uma aba com inúmeras funcionalidades, foi criada uma documentação específica para a Aba Repositório, a qual pode ser acessada clicando [aqui](repositorio_objetos/repositorio_objetos).

Outros recursos disponíveis na Paleta Objetos são acessíveis por um clique com o botão direito do mouse sobre qualquer objeto, aparecendo as opções:

| Recurso / Objeto | Formulário | Relatório | Fluxo |
| Web |  |  | X |
| Editar | X | X | X |
| Histórico | X | X | X |
| Duplicar | X | X | X |
| Renomear |  |  | X |
| Exportar para Jasper |  | X |  |
| Visualizar |  | X |  |
| Dependências | X |  | X |
| Categorias | X | X |  |
| Permissões | X | X | X |
| Restringir acesso | X |  | X |
| Externo | X | X | X |
| Excluir | X | X | X |

Descrevendo as opções:

- Editar: abre o objeto para que possa ser editado.
- Histórico: abre a tela Versionamento do Sistema, que lista todas as alterações feitas no objeto, podendo o usuário, inclusive, escolher uma versão para que seja restaurada.

Essa ação pode ser executada selecionando a versão que se quer restaurar e, em seguida, clicando no botão ![restaurar](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image113.png). A partir daí, aparecerá a tela Importação, local em que a ação poderá ser concluída.

Outro recurso disponível é o da impressão de todas as versões do objeto em formato de relatório, por meio do botão ![imprimir](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image114.png).

- Duplicar: Cria uma cópia do objeto selecionado. Quando um objeto for duplicado, as permissões e as propriedades WEB e Externo do objeto de origem não serão consideradas para a cópia.
- Renomear: Funcionalidade disponível a partir da versão 3 do maker, através dela é possível renomear uma regra para o nome determinado pelo usuário.

  [Exportar Para o Jasper](exportar_para_jasper/exportando_relatorios_para_jasper): clicando sobre essa opção, será aberta uma janela que permite ao usuário salvar o relatório com a extensão *.JRXML. Relatórios com essa extensão podem ser utilizados em sistemas operacionais Linux e Windows;
- Visualizar: permite acessar a [Aba de Visualização](relatorio/aba_visualizacao_visualize_imprima_relatorios) do relatório selecionado (disponível para [Maker Report - versão 10](relatorio/relatorios)).

- Visualizar em: permite que o relatório seja visualizado em uma língua previamente traduzida no [Sistema de Internacionalização](tradutor/tradutor) do Maker.

Observação: Apenas o componente Label está internacionalizado, os demais componentes estão em fase de homologação.

- Dependências: abre a tela [Visualizador de Dependências](visualizador_dependencia).

- Categoria: abre a tela Categoria:

![image850.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image115.png)

Nela é possível, pelo botão ![nova categoria](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image116.png), criar novas categorias e vinculá-las ao objeto selecionado.

- Permissões: abre a tela Permissões do Objeto, na qual se pode autorizar Grupos de usuários a Editar e/ou Excluir o objeto selecionado. Também é possível selecionar o proprietário do objeto clicando no botão ![proprietário](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image117.png).
- Restringir acesso - esta opção tem como objetivo restringir acesso a qualquer usuário que não tenha o perfil de Administrador ou Gerente do sistema. O formulário fica acessível, porém não poderá fazer nenhuma alteração. Caso um usuário com nível de acesso inferior tente fazer alteração ou importar de modo que sobreponha um formulário protegido, o sistema informa que não tem permissão. O Maker cria um arquivo de LOG confirmando o bloqueio do formulário na pasta C:\Documents and Settings\&lt;usuário do Windows&gt;\Configurações locais\Dados de aplicativos\Softwell Solutions\Maker 3\debug\import_export.
- Externo - marcando essa opção em objetos do tipo Formulário ou Relatório, será possível acessá-los diretamente por um link.

Levando em consideração a URL (acesso externo ao formulário): http://localhost:8036/webrun/form.jsp?sys=LOC&action=openform&formID=6693&align=0&mode=-1&goto=-1&filter=&scrolling=yes

Observe as descrições dos parâmetros:

- sys - deve ser informada em letra maiúscula a sigla do sistema. Caso exista um nome de instância para o sistema, a sigla do sistema deve ser concatenada com o caracter "_" (underline) e este com o nome da instância. Exemplo: SSS_NOMEDAINSTANCIA;
- action - deve ser mantido para uso interno do Webrun.
- formID - deve ser informado o código do formulário (pode ser obtido na área inferior esquerda da barra de status do formulário) ou GUID do formulário (pode ser obtido na tela [Definições do Formulário](formulario/propriedade_do_formulario)).
- align - deve ser mantido o valor "0" (zero) para a propriedade. Ela é utilizada internamente pelo Webrun.
- mode - determina o modo no qual o formulário será aberto. Caso seja informado o valor:
- - -1, o formulário abrirá em Modo Normal;
  - 1, o formulário abrirá em Modo de Inclusão;
  - 2, o formulário abrirá em Modo de Alteração.
- filter - são os filtros de pesquisa nos quais, a fonte de dados vinculada ao formulário se baseará para limitar os registros. Deve ser utilizada a sintaxe &lt;nome_do_campo&gt;=&lt;valor&gt;. Exemplo: USUARIO_CODIGO=55. No caso de haver mais de um filtro de pesquisa, estes devem ser separados por ; (ponto e vírgula). Exemplo: USUARIO_CODIGO=55; SENHA=12.
- scrolling - determina a exibição ou não das barras de rolagem. Se quiser que as barras de navegação apareçam, deve ser informado o valor Yes, caso contrário, o valor No.

Quanto ao objeto Fluxo, marcando essa opção, o fluxo estará disponível para ser utilizado como [Serviço Web (Web Service)](../dicas_e_truques/maker/exemplo_de_utilizacao_de_web_services_no_maker) .

Quanto ao objeto Relatório, há duas formas de se acessar um relatório externamente:

Da maneira citada abaixo, o relatório precisará de um filtro, pois ele irá chamar um formulário para o usuário digitar o parâmetro de filtro.

http://localhost:8036/webrun/reportOpenExternal.do?sys=SIGLA&reportID=257&exptype=PDF&nopopup=true&codigo=2

Observe as descrições dos parâmetros:

- localhost - endereço onde está localizado o sistema que contém o relatório;
- :8080 - porta do sistema. Caso a porta esteja definida como 80, não é preciso passar tal parâmetro, uma vez que os navegadores enxergam a porta 80 como padrão;
- /webrun/ - contexto do sistema;
- sys=SIGLA - sigla do Sistema. Geralmente são três caracteres. Caso não sejam utilizadas instâncias. Substitua a "SIGLA" pela sigla do sistema;
- reportID=257 - para obter o código do seu relatório, efetue um select na tabela fr_relatorio. O código do relatório é o valor do campo rel_codigo referente ao relatório contido no campo rel_nome.
- exptype=PDF - formato em que será gerado o relatório. Neste exemplo, foi utilizado o tipo PDF, mas os outros tipos podem ser usados. São eles: TXT, HTM, SCR (Na tela), etc.
- &codigo=2 = este é o filtro do relatório. O nome do filtro a ser passado é o nome do parâmetro que foi definido no momento da criação e não o nome do campo.

Caso queira passar mais de um filtro, basta ir concatenando ao fim do endereço:

Exemplo de três filtros:

&codigo=1&loja=3&os_data=01/01/2008

Neste caso, o endereço completo ficaria da seguinte forma:

http://localhost:8036/webrun/reportOpenExternal.do?sys=SIGLA&reportID=257&exptype=PDF&nopopup=true&codigo=1&loja=3&os_data=01/01/2008

Da maneira citada abaixo, o relatório não necessita de um filtro para ser aberto. Caso possua um filtro, ele não considera e abre todos os registros contidos no relatório:

http://localhost/webrun/reportOpenExternal.do?sys=LOC&reportID=112&exptype=PDF&nopopup=true

- Web - ao marcar esta opção, o fluxo de ação poderá ser executado por uma URL. Há ainda uma outra forma de se [executar fluxos de ações via URL](../dicas_e_truques/maker/como_acessar_um_fluxo_web), a qual se baseia na definição de parâmetros avançados na área de trabalho do Maker. Considerando a URL"http://localhost:8036/webrun/insereregistro.rule?sys=SSS&Idade=50&Nome=Pedro", o trecho:
- - Localhost: é a expressão que identifica o computador no qual consta o serviço do Webrun;
  - 8036: é a porta utilizada pelo Webrun para provimento do serviço;
  - webrun: é o contexto que identifica o nome da aplicação do Webrun;
  - insereregistro.rule: é o nome do fluxo de ação que será executado, o qual deve ser concatenado com a expressão .rule;
  - sys=SSS: é o parâmetro identificador do sistema que contém o fluxo de ação;
  - Idade=50&Nome=Pedro: são parâmetros definidos como parâmetros de entrada (objeto Início do Editor de Fluxo de Ações) no fluxo de ações. A ordem dos parâmetros que compõem a Url deve ser idêntica à que foi definida no momento da criação do fluxo de ações.

Observação: Após marcar o fluxo como Web, é necessário recarregar o sistema.

Observações:

1. Não é possível definir uma interação com o usuário em um fluxo Web.
2. Ao renomear um fluxo que esteja com a propriedade Externo ou Web selecionada é necessário marcar novamente a opção após salvar o fluxo.
3. Após a seleção da opção Externo em qualquer um dos objetos, Formulário, Fluxo de Ação ou Relatório, é necessário Salvar o projeto. Ademais, para que a configuração fique completa, também é necessário a reinicialização do serviço do Webrun.
4. A passagem de parâmetros between não funciona para formulário externo, pois o que é referenciado é o campo e não o parâmetro..
