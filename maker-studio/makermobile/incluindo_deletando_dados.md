---
title: "Incluindo, atualizando e excluindo dados no Maker Mobile através de fluxograma"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/incluindo_deletando_dados.html"
---

- Crie um formulário com o seguinte layout (o formulário não possui fonte de dados e as propriedades **Navegação** e **Aba Localizar** estão marcadas como **Não**).

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_1.jpg)
- Criado o formulário é hora de criar os fluxogramas. Em 1º lugar será criado o fluxo que será associado ao botão Inserir, em segundo o Atualizar e por útimo o Deletar. Os fluxos serão criados nesta ordem respectivamente. Para um melhor entedimento, o 1º fluxo ficará da seguinte forma:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando-16.jpg)
- Clique sobre o objeto Inicio e determine o seguinte parâmetro de entrada:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_2.jpg)

- Adicione um objeto processamento e no montador de expressão selecione a função **Executar Atualização**.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_dado_3.jpg)

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_5.jpg)

- O construtor SQL deverá ficar da seguinte forma:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_6.jpg)

Deverá ser adicionado a tabela o parâmetro de entrada Nome, parâmetro que fora determinado anteriormente.

- Adicione um objeto interação e informe a mensagem "Contéudo Inserido".

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_7.jpg)
- Criado o fluxo, salve-o e associe-o ao botão Inserir, em seguida, defina o parâmetro nome para o componente **Nome**.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_8.jpg)
- Com o primeiro fluxo criado é hora de se definir o segundo. Para um melhor entendimento o fluxo ficará da seguinte forma:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_10.jpg)
- Clique sobre o objeto Inicio e determine os seguintes parâmetros de entrada.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_11.jpg)
- Adicione um objeto processamento e no Montador de Expressão selecione a função **Executar Atualização**.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_12.jpg)
- Clique sobre o botão Wizard SQL e defina a seguinte consulta.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_13.jpg)
- Adicione um objeto interação e informe a seguinte mensagem **Conteúdo Atualizado.**

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_14.jpg)
- Salve o fluxo e associe-o ao botão Atualizar, em seguida associe o parâmetro de entrada aos componentes **Codigo** e **Nome**.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_15.jpg)
- Por fim, crie o 3º e ultimo fluxo. Para um melhor entedimento o fluxo ficará da seguinte forma:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_16.jpg)
- Clique sobre o objeto inicio e determine os seguintes parametros de entrada:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_17.jpg)
- Adicione um objeto processamento e no Montador de Expressão selecione a função **Executar Atualização**.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_18.jpg)
- Clique sobre o botão **Wizard SQL** e determine a seguinte consulta.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_19.jpg)
- Adicione um objeto interação e determine a seguinte mensagem "Remoção Concluída".

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_21.jpg)
- Salve o fluxo e associe-o ao botão deletar, associe os parâmetros de entrada ao componentes Codigo e Nome.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_22.jpg)
- Salve o formulário, exporte a plataforma desejada e execute a aplicação.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/incluindo_deletando_23.png)
