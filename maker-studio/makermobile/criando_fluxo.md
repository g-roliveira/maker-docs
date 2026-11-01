---
title: "Criando fluxo"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/criando_fluxo.html"
---

# Criando fluxogramas

Este tutorial tem como objetivo apresentar ao usuário a criação de fluxograma.

- Crie um formulário com as seguintes características:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_fluxo.jpg)

  O formulário não possui fonte de dados e a propriedade navegação está determinada como **Não**.
- Com o formulário pronto, é hora de partir para a criação do fluxograma.
  Para uma melhor compreensão o fluxo ficará da seguinte forma:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_fluxo_1_.jpg)
- Clique no objeto inicio e determine o seguinte parâmetro de entrada:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_fluxo_2_.jpg)
- Adicione uma variável chamada **Conteúdo** do tipo *Letras*.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cirando_fluxo_3.jpg)
- Adicione um objeto processamento e no montador de expressão, selecione a função **Concatenação** e retorne seu valor a variável **conteúdo**.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cirando_fluxo5.jpg)

  - No 1º parâmetro informe o parâmetro de entrada Nome
  - No 2º parâmetro informe ", seja bem vindo a era da mobilidade corporativa"
- Adicione um objeto interação e informe a variável conteúdo.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_fluxo6.jpg)
- Salve o fluxo com o nome **bem_vindo**.
- Associe o fluxo ao botão Clique aqui e associe seu parâmetro de entrada a caixa de texto.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_fluxo7.jpg)
- Salve o formulário, exporte o projeto para a plataforma desejada e execute a aplicação.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_fluxo8.png)
