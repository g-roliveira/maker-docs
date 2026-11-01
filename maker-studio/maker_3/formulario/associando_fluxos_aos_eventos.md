---
title: "Associando Fluxos aos Eventos"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/associando_fluxos_aos_eventos.htm"
---

O fluxo pode ser associado aos [Eventos dos Componentes](propriedades_e_eventos) ou ao Objeto Formulário.

Para associar um fluxo ao Evento, clique com o botão direito do mouse sobre o componente do formulário (ou na área do formulário) e pelo menu pop-up, selecione o Evento. Se a versão do Maker que estiver sendo utilizada for inferior à versão 3, aparecerá a tela Ações, caso contrário, aparecerá a tela Definir ações.

![image241.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image262.png)

A tela Definir Ações possui duas abas: Executar Fluxo e Ação predefinida.

## Ícone de acesso rápido a um fluxo associado a um evento

Ao lado do nome do evento há um ícone que permite abrir o fluxo associado. Caso não haja nenhum fluxo associado ao evento desejado, ao clicar neste botão o Editor de Fluxos e Ações será aberto, ao salvar este fluxo ele será associado ao evento selecionado anteriormente.

![image1478.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image263.png)

## Aba Executar Fluxo

Os componentes pertencentes são:

- botão ![criar fluxo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image264.png) - ao clicar neste botão, será aberta a tela [Editor de Fluxo de Ações](../fluxos_e_acoes/editor_de_fluxo_de_acoes). Após o salvamento do fluxo de ação (tela Editor de Fluxo de Ações), o fluxo será selecionado automaticamente na caixa de seleção Fluxo associado;
- botão ![criar fluxo vinculado ao componente](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image265.png) - será aberta a tela [Editor de Fluxo de Ações](../fluxos_e_acoes/editor_de_fluxo_de_acoes) sugerindo que o nome do fluxo de ação seja a junção do nome do formulário com a expressão (FLUXO INTERNO). Após o salvamento do fluxo de ação (tela Editor de Fluxo de Ações), a caixa de seleção Fluxo associado ficará desabilitada e mostrará a mensagem "*** Fluxo interno". Fluxos criados com essa opção não poderão ser reutilizados por outros componentes nem serão listados na aba Fluxos do Gerenciador de Objetos, haja vista que sua utilização está restrita ao componente a partir do qual foi criado.

Observação: Ao associar um fluxo interno a um componente, a tela Editor de Fluxo de Ações terá o comportamento de uma tela modal para impedir que o usuário delete o componente antes de salvar o fluxo.

- a caixa de seleção Fluxo associado - por meio deste componente, é possível a seleção de qualquer fluxo de ação. De imediato, após a seleção do fluxo de ação, aparecerão os parâmetros de entrada do fluxo na Área de Parâmetros de Entrada.
  Para otimizar a localização do nome do fluxo de ação, com o componente selecionado, pressione a tecla F3 para que seja aberta a tela Localizar. Nesta tela é possível executar a pesquisa pelo nome do fluxo de ação de maneira facilitada.
- botão ![editar fluxo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image266.png) - ao clicar neste botão, tendo sido selecionado um fluxo de ação na caixa de seleção Fluxo associado anteriormente, será aberta a tela Editor de Fluxo de Ações já com o fluxo em edição;
- Serão listados na área Parâmetros de entrada do fluxo todos os parâmetros de entrada do fluxo que foi selecionado na caixa de seleção "Fluxo associado". A área contém:

- uma caixa de seleção (posicionada ao centro da área) titulada com o nome do parâmetro de entrada do fluxo de ação, a qual lista valores filtrados pela caixa de seleção disponível à direita dela.
- uma caixa de seleção (posicionada à direita da área) contendo as opções:
- - campo - selecionada esta opção, serão disponibilizados os campos contidos nas "Definições do Formulário" ("Assistente SQL");
  - componente - selecionada esta opção, serão disponibilizados os componentes contidos no formulário;
  - constante - selecionada esta opção, é possível a digitação de um valor fixo na área da caixa de seleção citada no tópico anterior.

Observação: Ao clicar no campo Fluxo associado e pressionar a tecla F3, será exibida a tela Localizar. A tela (abaixo) mostrará a relação de todos os fluxos disponíveis no projeto:

![localizar](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image267.png)

O campo Localizar da tela acima é local no qual são digitadas as iniciais do nome do fluxo que o dispositivo de busca filtrará automaticamente.

## Aba Ação Predefinida

![definir ações](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image268.png)

Os componentes pertencentes são:

- Campo check Abrir Formulário - marcada esta opção, ficam habilitadas as caixas de seleção Formulário e Modo de abertura. A caixa de seleção Formulário contém a lista de todos os formulários contidos no sistema. Para otimizar a localização do nome do formulário, com o componente Formulário selecionado, pressione a tecla F3 para que seja aberta a tela Localizar. Nesta tela é possível executar a pesquisa pelo nome do formulário de maneira facilitada. Quando clicar no botão ![image506.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image277.png) (ao lado), tendo sido selecionado anteriormente um formulário na caixa de seleção, ele será aberto;
- A caixa de seleção Modo de abertura - contém as opções de modo de abertura do formulário no Webrun. São elas:
- - Navegação - o formulário será aberto em modo normal;
  - Edição - o formulário será aberto em modo de edição;
  - Inserção - o formulário será aberto em modo de inserção.
- O Campo check Abrir relatório - fica permitida a possibilidade de seleção de um relatório na caixa de seleção Relatório;
- A caixa de seleção Relatório - contém a lista de todos os relatórios do sistema. Para otimizar a localização do nome do relatório, com o componente Relatório selecionado, pressione a tecla F3 para que seja aberta a tela Localizar (citada anteriormente) Nesta tela, é possível executar a pesquisa pelo nome do relatório de maneira facilitada. O botão ![image507.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image278.png) (ao lado) abre o relatório selecionado para edição. O botão ![image506.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image277.png) (ao lado) ativará o [Assistente de criação de relatório](../relatorio/usando_o_assistente_de_criacao_de_relatorio).

Observação: Para abrir ou editar um relatório pela tela, utilize o botão ![image506.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image277.png) ou o botão ![image507.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image278.png), respectivamente.

- Botão ![outras ações](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image270.png) - ao clicar neste botão, abrirá a tela Ações:

![image815.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image271.png)

Observações:

1. Ao clicar no campo Nome e pressionar a tecla F3, será exibida a tela Localizar. A tela mostrará a relação de todos os fluxos disponíveis no projeto (funcionalidade explicada anteriormente).
2. As ações Gravar do arquivo para o banco e Gravar do banco para o arquivo não fazem parte da lista para a versão 2.5 do Maker. Essas ações devem ser executadas por Fluxos
3. A partir da versão 2.6, esta opção Outras Ações foi descontinuada.

Para informações detalhadas sobre Ações do Formulário, [clique aqui](eventos_e_acoes_formulario).

- Botão ![remover todas as ações](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image272.png): todas as configurações feitas serão removidas;
- Botão ![ok](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image273.png) - todas as configurações feitas serão gravadas;
- Botão ![cancelar](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image274.png) - todas as configurações feitas serão desconsideradas.

A partir da versão 3 do Maker é possivel associar fluxos, a formulários e seus componentes através do inspetor de objetos , como demonstra a figura abaixo:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image275.png)

Observações:

1. Quando o fluxo de ação está direcionado para a camada Servidor e vinculado a um componente de um formulário ou ao próprio formulário, não é necessário atualizá-lo quando a aplicação estiver no Modo de Projeto.
2. Não é possível vincular componentes a parâmetros de entrada caso o fluxo seja do tipo Servidor, pois o valor do mesmo não será obtido
3. Ao associar eventos aos componentes do tipo [Caixa de Texto](componentes/caixa_de_texto), [Lista dinâmica](componentes/lista_dinamica) e [Lista](componentes/lista) os mesmos são marcados por indicadores, informando que o componente contém um evento, como demonstra a figura abaixo:
4. È possivel copiar um fluxo de um evento e colar em outro, selecionando o fluxo no evento copiando (Ctrl + C) e colando (Ctrl + V) em outro evento.

![image1203.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image276.png)

____________________________________________________________________________

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
