---
title: "Criando e consumindo um Webservice através de um Dispositivo Móvel"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/criando_consumindo_webservice.html"
---

# Criando e consumindo um Webservice através de um dispositivo móvel

Para utilizar serviços Web no Maker Mobile é simples, siga os passos abaixo para aprender a criar e consumir um serviço web.

- Crie um formulário com o seguinte layout (saiba como criar formulários no Maker Mobile acessando [aqui](criando_formulario)).

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_%20e_consumindo_um_webservice.jpg)
- Agora será feito a criação do **Webservice**, o qual receberá os dados informados no formulário.

  Para um melhor entendimento o fluxo ficará da seguinte forma:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_e_consumindo_webservice_3.jpg)
- Clique sobre o objeto início e determine os seguintes parâmetros de entrada.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_e_consumindo_webservice_4.jpg)
- Adicione um objeto processamento e no *Montador de Expressão* selecione a função **Executar Atualização**.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_e_consumindo_webservice_5.jpg)
- A atualização deverá ficar da seguinte forma (observe que os parâmetros de entrada **Nome**, **Telefone** e **CPF** serão inseridos na tabela).

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_e_consumindo_webservice_8.jpg)

Salve o fluxo com o nome **executando_web_service** na camada **Servidor.** Com o fluxo salvo, volte à tela de trabalho do maker, selecione o objeto fluxo, localize o fluxo criado e clique com o botão direito sobre mesmo, em seguida marque a opção **Publicar fluxo como Webservice**, como demonstra a figura abaixo.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_e_consumindo_webservice_10.jpg)

Consumindo o Webservice a partir de um fluxo mobile.

- Agora criaremos um fluxo que irá chamar o fluxo anterior. Para um melhor entendimento o fluxo ficará da seguinte maneira:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_e_consumindo_o_webservice_12.jpg)
- Clique sobre o objeto Inicio e determine os seguintes parâmetros de entrada.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criando_e_consumindo_webservice_13.jpg)
- Adicione um objeto processamento e no **Montador de Expressão** selecione a função **Chamar serviço Web para Dispositivos Móveis**. A função será parametrizada da seguinte forma:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/chamar_servico_11.jpg)

- No primeiro parâmetro será informado o endereço do **Webservice**, neste exemplo:

**http://*&lt;servidor&gt;*:*&lt;porta utilizada&gt;*/webrun/webservices/CJBServices.jws?wsdl**

- No segundo parâmetro será informada a porta do serviço, neste exemplo:

**CJBServices**

- No terceiro parâmetro será informado o nome do parâmetro do **Webservice**, neste exemplo:

  **ExecutandoWebService**
- No quarto parâmetro será informada a função **Criar lista a partir dos Elementos**, com três parâmetros, os três serão *Constantes* do tipo *Letras*: **Nome**, **Cpf** e **Telefone**.
- No quinto parâmetro será informado à função **Criar Lista a partir dos Elementos**, informando os parâmetros de entrada como elementos da Lista.

- Salve o fluxo com o nome **chama_servico_web** na camada servidor.
- Associe o fluxo ao botão **Cadastrar**, e associe os seguintes parâmetros de entrada.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/chamar_servico_web_12.jpg)

Salve o formulário, exporte sua aplicação para um dispositivo móvel de sua preferência.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/chamar_servico_web_13.png)
