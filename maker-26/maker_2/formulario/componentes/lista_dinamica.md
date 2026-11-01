---
title: "Lista Dinâmica"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/componentes/lista_dinamica.htm"
---

# image126.gif   Lista Dinâmica

A Lista Dinâmica é um componente que permite que o usuário possa visualizar uma lista de dados proveniente de uma determinada tabela, que não é a tabela principal do formulário atual. Quando a informação é selecionada desta lista, o dado é gravado em um campo correspondente da tabela principal.

Podemos configurar a Lista Dinâmica para consultas e informações de tabelas existentes no sistema. Para isso, utilizamos as propriedades Campo, Descrição, SQL, Campo-Chave, Campo Lista e as demais propriedades, se assim por necessário.

Observações:

1. É comum utilizar a propriedade Formulário para indicar a origem da lista e a propriedades Subformulário, definindo SIM, para permitir a chamada da origem pelo clique no botão ![image127.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image127.gif) (Exibir formulário de origem);
2. O componente lista dinâmica possibilita a utilização de chave composta. [Saiba como!](../../../dicas_e_truques/componente/utilizando_o_componente_lista_dinamica_com_chave_composta)

Observação: Está funcionalidade só é útil quando a propriedade Campo da Lista dinâmica estiver preenchida.

A propriedade Campo definirá onde a informação selecionada será guardada. Colocamos o nome de um campo que esteja presente na consulta do SQL criada na tela principal.

A propriedade Descrição definirá o rótulo do campo no formulário.

A propriedade SQL determinará a consulta que proporcionará os dados para o campo. Nesta propriedade, abre-se uma janela para construirmos o código em SQL que será necessário para alimentar a lista apresentada na Lista Dinâmica. Esse SQL é particular desse componente, ou seja, só ocorrerá quando ele for solicitado.

A propriedade Campo Lista exibirá o conteúdo para o campo do formulário, e a propriedade Campo Chave refere-se ao campo que será o relacionamento lógico entre a tabela principal do formulário e a consulta para o campo.

![image53.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image53.jpg)

O componente Lista Dinâmica possui algumas funcionalidades que são nativas em modo de execução.

- Quando está editando um campo, em modo de inserção ou alteração, o componente possui controles para facilitar a busca de informações:
- - Os controles ![image128.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image128.gif) (iniciando por), ![image129.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image129.gif) (terminando por), ![image130.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image130.gif) (igual a) e ![image131.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image131.gif) (contendo), alternam-se ao receber um clique ou, quando combinamos com as teclas CTRL + &lt;barra de espaço&gt;, auxiliam para busca de contexto;
  - A Barra de Digitação corresponde ao espaço para entrada do contexto da busca;
  - O botão ![image132.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image132.gif) (Localizar) executa a busca.
- Quando se está editando um campo, em modo de inserção ou alteração, ao pressionar a tecla F5, o formulário declarado na Propriedade Formulário, é aberto. Observe que isso depende também da Propriedade Subformulário definida SIM.

- Além das funcionalidades citadas, também é possível criar um formulário a partir da "Lista Dinâmica". Para isso, devem ser seguidos os seguintes passos:

1. Insira o componente Lista Dinâmica no formulário;
2. Com o duplo clique sobre a componente, abrirá a tela Assistente de Criação de Novo Formulário (nesta tela devem ser feitas as configurações necessárias para a criação do formulário);
3. Salve o novo formulário criado, fechando-o em seguida.

Observação: Concluídos esses passos, as propriedades "Descrição", "SQL", "Campo Chave", "Campo Lista" e "Formulário" serão preenchidas automaticamente.

Todos os componentes possuem Propriedades e Eventos. Para conhecê-los [clique aqui](../propriedades_e_eventos).

Observações:

1. Ao vincular dados ao componente Lista Dinâmica, os campos "Campo Chave" ou "Campo Lista" deverão ser marcados, pois caso a aba de navegação do formulário esteja hablitada um erro será apresentado.
2. Definindo a lista dinâmica como Apenas Leitura pelo [Modo Gerente](../../../webrun_2/trabalhando_modo_gerente_) (Webrun), o acesso ao formulário do componente sempre estará habilitado (para Inclusão, Alteração ou Exclusão).
3. Uma vez utilizada uma concatenação (propriedade SQL) para o Campo Lista (propriedade) do componente Lista Dinâmica, não é possível utilizar o filtro de pesquisa disponibilizado pelo próprio componente (em um formulário no Webrun).
4. Tecla [Enter] - Aplica o filtro informado na lista dinâmica.
