---
title: "Obtendo imagem da câmera"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/como_obter_imagem_da_camera.html"
---

No Maker Mobile, é possível obter a imagem da câmera de um dispositivo móvel através da função **Obter imagem da câmera**.

Antes de utilizar a função em questão, é necessário desenvolver outros dois fluxos (caso não existam) para compor a chamada desta função, os passos abaixo demonstram a criação desses fluxos e utilização da função.

- Crie um novo fluxo, efetue duplo-clique no objeto **Início** e adicione uma variável de entrada do tipo *Variante*. Chamaremos de "imagem", em seguida clique em **OK** para confirmar as alterações.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/como_obter_imagem_1_.jpg)
- Adicione um processamento e utilize a função **Alterar imagem do componente**. No primeiro parâmetro, informe o nome do componente Imagem que irá ser alterado e, no segundo parâmetro informe a variável "imagem" que foi declarada como parâmetro de entrada anteriormente.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/obter_imagem3.jpg)
- Ao final, o fluxo deverá ficar da seguinte forma:

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/obter_imagem4.jpg)

  Salve o fluxo (camada cliente ou servidor), este será usado posteriormente.
- Repita os procedimentos anteriores fazendo a seguinte alteração:

  - Troque o nome da variável declarada no parâmetro de entrada para "Mensagem de erro", do tipo *Letras*.
  - Adicione um processamento e chame a função **Alertar Aguardando Ok** e nela passe como parâmetro a variável anteriormente declarada, "Mensagem de erro".
  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/obter_imagem5.jpg)

  Salve o fluxo, o resultado deverá ficar como na imagem:

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/obter_imagem6.jpg)
- Criados os fluxos, abra o editor de fluxos novamente e adicione um novo processamento. Dentro deste processamento utilize a função **Obter imagem da câmera**. Esta função possui 03 parâmetros:

  - O primeiro é o fluxo que será executado caso a imagem seja obtida com sucesso;
  - O segundo parâmetro é o fluxo que será executado caso ocorra um erro ao obter a imagem;
  - O terceiro é um *inteiro* que representa a qualidade da imagem (de 0 a 100).

  O seu processamento deverá ficar conforme a imagem:

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/obter_imagem7.jpg)
- Ao final, o fluxo deverá ficar assim:

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/obter_imagem8.jpg)

Salve o fluxo (camada cliente ou servidor) e associe ao evento *Ao Clicar* de um componente Botão em seu formulário. Ao clicar no botão, a câmera do dispositivo será aberta e uma nova foto será tirada, caso a operação seja realizada com sucesso, o fluxo "Alterar Imagem" será executado, caso contrário, o fluxo com mensagem de erro será executado informando qual o erro apresentado.
