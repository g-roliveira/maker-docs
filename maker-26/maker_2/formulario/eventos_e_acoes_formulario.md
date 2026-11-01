---
title: "Ações do Formulário - Métodos"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/eventos_e_acoes_formulario.htm"
---

Selecionado o Evento, clique sobre o botão ![image482.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image482.gif) para abrir a tela Ações, na qual são definidos os métodos que podem ser executados através do evento (mais de um método pode ser executado ao mesmo tempo). São componentes da tela:

1. Uma grade entitulada Parâmetros, contendo as colunas:

- - Código - apresenta o código relacionado ao método;
  - Nome - apresenta o nome do método;
  - Definida - informa se os parâmetros vinculados ao método estão ou não definidos. Quando estiverem, aparece um marcador na cor vermelha dentro do quadrado, caso contrário, o quadrado fica em branco.

1. Uma grade titulada Parâmetros contendo as colunas:

- - Parâmetro - apresenta os parâmetros que devem ser definidos para que o método execute corretamente. A depender do método, o preenchimento de alguns do parâmetros se torna facultativo;
  - Valor - Local em que deve ser informado o valor que ficará vinculado ao parâmetro.

1. O botão Remover - ao clicar sobre ele, a configuração dos parâmetros vinculados ao método selecionado são removidos e o quadrado contido no campo Definida (grade superior da tela) fica em branco;
2. Um botão, ou mais de um botão, que aparece a depender do método que tenha sido selecionado (grade superior da tela);
3. O botão OK - ao clicar sobre ele, todas as configurações feitas são gravadas e a tela é fechada;
4. O botão Cancelar - ao clicar sobre ele, todas as configurações feitas desde o momento que a tela foi aberta serão desconsideradas e a tela é fechada.

Todos os métodos listados abaixo podem ser substituídos pela utilização de métodos contidos nos fluxos de ações (usando apenas o método Executar Regra de negócio). Para configurar qualquer um dos métodos, clique sobre o método e, em seguida, na aba Parâmetros (parte inferior da tela) informe/selecione os parâmetros. Para consultar e selecionar os parâmetros disponíveis para os métodos Abrir Janela, Abrir Relatório e Executar Regra de negócio abaixo descritos, além de ser possível a seleção do parâmetro através da caixa de seleção, também é possível clicar sobre a área do disponível para seleção do parâmetro e pressionar a tecla F3. Em seguida, será aberta a tela Localizar na qual é possível pesquisar o parâmetro e selecioná-lo.

## Abrir Janela

1. Na propriedade Código de Formulário, selecione o nome do formulário (são listados todos os formulários existentes no projeto) e;
2. Na propriedade Modo de Abertura, selecione o modo que se deseja que o formulário seja aberto. Selecionando a opção:

- - Normal, o formulário abre em estado normal;
  - Inserção, o formulário abre em estado de inserção;
  - Edição, o formulário abre em estado de edição.

## Executar Stored Procedure

- Na propriedade Nome de Stored Procedure, informe o nome do procedimento que deve ser executado e;
- Na propriedade Parâmetros, informe o nome dos campos (da fonte de dados do formulário) separados por ; (ponto e vírgula) caso seja mais de um campo, na mesma ordem de entrada dos Parâmetros de entrada do procedimento informado. Só é possível passar como parâmetros campos que constem na fonte de dados vinculada ao formulário.

## Habilitar/Desabilitar Objetos

O componente que sofre a ação só fica habilitado quando a condição estabelecida é satisfeita. Na propriedade Lista de Objetos, clique sobre o botão ![image482.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image482.gif) para abrir a tela Lista de Objetos (local no qual serão configuradas as condições). São componentes da tela Lista de Objetos:

- O botão Adicionar - clicando sobre ele, será possível incluir uma condição;
- O botão Editar - altera o estado do registro da grade que estiver selecionado para o modo de edição;
- O botão Remover - clicando sobre ele, o registro que estiver selecionado será apagado;
- O botão Gravar - clicando sobre ele, o registro será gravado;
- O botão Cancelar - clicando sobre ele, as ações executadas serão canceladas;
- A grade contendo:
- - A caixa de seleção Nome do Objeto - clicando na seta que aparece no componente, é possível selecionar o componente do formulário que sofrerá ação;
  - O botão ![image482.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image482.gif) na coluna Condição - clicando sobre ele, aparece a tela Montador de Expressões (conforme propriedade Cor Condicional dos componentes/formulário).
  - O botão OK - clicando sobre ele, a tela fecha e todas as configurações executadas são gravadas;
  - O botão Fechar - clicando sobre ele, a tela é fechada.

## Mostrar/Ocultar Objetos

O componente que sofre a ação só aparece no formulário quando a condição estabelecida é satisfeita. As demais configurações são iguais as do item Habilitar/Desabilitar Objetos.

## Escolher Foco

Na propriedade Lista de Objetos, selecione o componente que receberá foco.

## Mudar Cor

A cor da fonte do componente que sofre a ação muda quando a condição estabelecida é satisfeita. As demais opções seguem a mesma configuração do item Habilitar/Desabilitar Objetos. Quanto à cor que a fonte vinculada ao componente passará a ter, deve ser selecionada na coluna Cor (conforme explicação dada na propriedade Cor Condicional, das propriedades dos componentes/formulário).

## Mudar Valor

O valor contido no componente será modificado pelo valor informado na coluna Valor quando a condição estabelecida for satisfeita. As demais opções seguem a mesma configuração do item Habilitar/Desabilitar Objetos.

## Abrir Relatório

Na propriedade Nome do Relatório, selecione o relatório que deve ser aberto quando a ação for executada. No Webrun aparecerá uma tela com opções para definição do formato do relatório e do local no qual será gerado.

Observação: Quando o método Abrir Relatório está selecionado, aparece na parte inferior da tela o botão Abrir Relatório; clicando sobre ele, será aberto o relatório que tiver sido selecionado no parâmetro Nome do Relatório.

## Gravar do arquivo para o banco

Esse método permite a compatibilidade com a versão inicial do Webrun (FRun). Consiste em salvar a imagem contida em um campo do tipo imagem, vinculado a fonte de dados do formulário (propriedade Nome do Campo), para um arquivo apontado pelo usuário através da caixa de diálogo que aparecia para execução dessa atividade.

## Gravar do banco para o arquivo

Esse método permite manter a compatibilidade com a versão inicial do Webrun (FRun). Consiste em salvar a imagem contida em um arquivo (propriedade Nome do Arquivo) para um campo do tipo imagem, vinculado a fonte de dados do formulário (propriedade Nome do Campo).

## Abrir leitor digital

Esse método permite manter a compatibilidade com a versão inicial do Webrun (FRun). Consiste em capturar a impressão digital de uma pessoa e, após a identificação da impressão digital, executar a ação que estivesse programada.

## Executar Regra de negócio

No parâmetro Nome, selecione o nome do fluxo de ação que deve ser executado. Quanto ao parâmetro Entrada, clique sobre o botão ![image482.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image482.gif) para que a tela Parâmetros do Fluxo de Ações abra. Nessa última tela constam os componentes:

- Etiqueta Nome do Fluxo - apresenta o nome do fluxo de ação selecionado na tela Ações;
- Aba Parâmetros de Entrada contendo uma grade com a coluna Nome, a qual apresenta os parâmetros definidos no componente Início do fluxo de ações, e a coluna Campo do formulário, na qual o usuário deve selecionar o campo do formulário que servirá de parâmetro no momento da execução do fluxo.

Observação:

- Quando o método Executar Regra de negócio está selecionado, aparece na parte inferior da tela o botão Novo Fluxo e o botão Abrir Fluxo. Clicando sobre o primeiro botão, será aberta a tela Editor de Fluxo de Ações com um fluxo novo aberto. Clicando sobre o segundo botão, será aberta tela Editor de Fluxo de Ações com o fluxo que tiver sido selecionado no parâmetro Nome.
- A associação de fluxos de ações às ações do formulário, só é suportada na versão Professional e Enterprise.
