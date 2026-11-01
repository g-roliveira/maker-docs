---
title: "Maker Maps"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/makerMaps.html"
---

**Descrição:**

As funções desenvolvidas para o Maker 3 foram construídas a partir da API do Google Maps - versão 3 e tem como objetivo prover recursos de georreferenciamento, permitindo ao usuário buscar e visualizar no mapa uma determinada localidade, bem como ampliá-las, utilizar marcadores, saber a distância entre os pontos desejados e traçar rotas entre outras funcionalidades.

Neste documento, você encontrará as seguintes funções associadas ao Google Maps:

[*Importar Biblioteca](#Importar Biblioteca)

[*Criar Mapa](#Criar Mapa)

 [*Centralizar Mapa](#Centralizar Mapa)

[*Traçar Rotas entre Pontos](#Traçar Rotas entre Pontos )

[*Traçar Rotas entre Pontos (Coordenadas)](#Traçar Rotas entre Pontos (Coordenadas))

[*Calcular Distância entre Dois Pontos](#Calcular Distância entre Dois Pontos)

[*Criar Marcador](#Criar Marcador)

[*Associar Evento](#Associar Eventos)

[*Definir Perímetro Circular](#Definir Perímetro Circular)

Finalizando o projeto

[*Webrun](#Webrun)

Para dar início ao desenvolvimento, devemos criar um formulário e associar um fluxo ao evento **AO ENTRAR** para que se possa importadar da API do  *Google Maps*  versão 3 para o **Maker 3**. Observe as imagens a seguir:

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/DeclarandoEventosAoEntrar.png)

Imagem 1 – Habilitando o evento **AO ENTRAR** em um formulário criado.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/FluxoImportarBiblioteca.png)

Imagem 2 – Declarando um processo para Importação da Biblioteca do *Google Maps* versão 3, associado ao evento **AO ENTRAR**;

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/ImportarBiblioteca.png)

Imagem 3 – Na tela **Montador de Expressões**, escolha a função: **Mapa - Importar Biblioteca, esta função tem 3(três) parâmetros: O primeiro é opcional, o segundo define o fluxo que será executado quando a importação da biblioteca terminar(Fluxo de Callback) e o terceiro é passado uma lista com os parâmetros para o fluxo de Callback.**

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/DeclarandoEventosAoNavagar.png)

Imagem 4 – Habilitando o evento **AO NAVEGAR** que será atribuído as funções para apresentação/criação do mapa..

Imagem 5 – Na tela **Editor de Fluxo de Ações**, no primeiro processamento escolha a função: **Mapa - Criar mapa em uma moldura** no segundo processamento será necessário guardar as referências do mapa criado em uma variável.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/GuardandoReferencia.png)

Imagem 6.1 - Na tela **Montador de Expressões**, é utilizada a função: **Obter variável de formulário** passando como parâmetro o nome da variável que foi definida com a referência do elemento.

Na função **Mapa - Criar mapa em uma moldura** é requerido um objeto **Moldura**, onde será apresentado o mapa, bem como os parâmetros de Latitude e Longitude que poderão ser passados diretamente pelo fluxo ou obtidos através da função Obter Valor do Componente. Após seguir os passos mencionados anteriormente, é possível já visualizar o mapa em execução no Webrun.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/MostrandoMapa.png)

Imagem 6.2 - Função Mapa Criar Mapa em uma Moldura

Esta função permite ao usuário centralizar o mapa criado atribuindo ao fluxo os valores de Latitude e Longitude

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/FluxoCentralizarMapa.png)

Imagem 7 – Na tela **Editor de Fluxo de Ações**, **Obtenha a variável de formulário que foi definida com o valor da referência** no primeiro processamento e escolha a função: **Mapa - Centralizar Mapa** no segundo processamento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/ObtendoReferencia.png)

Imagem 8.1 - Na tela **Montador de Expressões**, é utilizada a função: **Obter variável de formulário** passando como parâmetro o nome da variável que foi definida com a referência do elemento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/CentralizandoMapa.png)

Imagem 8.2 - Na tela **Montador de Expressões**, é utilizada a função: **Mapa - Centralizar Mapa**

Esta função permite ao usuário traçar rotas entre dois ou mais pontos.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/FluxoTracarRota.png)

Imagem 9 – Na tela **Editor de Fluxo de Ações**, **Obtenha a variável de formulário que foi definida com o valor da referência** no primeiro processamento e escolha a função: **Mapa - Traçar Rotas entre Pontos** no segundo processamento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/ObtendoReferencia.png)

Imagem 10.1 - Na tela **Montador de Expressões**, é utilizada a função: **Obter variável de formulário** passando como parâmetro o nome da variável que foi definida com a referência do elemento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/TracandoRotas.png)

Imagem 10.2 - Na tela **Montador de Expressões**, é utilizada a função: **Mapa-Traçar Rotas entre Pontos**

Esta função permite ao usuário traçar rotas entre dois ou mais pontos, mas com a possibilidade de passar por parâmetro a latitude e longitude da origem e destino.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/FluxoTracarRotaCoordenada.png)

Imagem 12 - Na tela **Editor de Fluxo de Ações**, **Obtenha a variável de formulário que foi definida com o valor da referência** no primeiro processamento e escolha a função: **Mapa - Traçar Rotas entre Pontos** no segundo processamento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/ObtendoReferencia.png)

Imagem 13.1 - Na tela **Montador de Expressões**, é utilizada a função: **Obter variável de formulário** passando como parâmetro o nome da variável que foi definida com a referência do elemento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/TracandoRotasCoordenadas.png)

Imagem 13.2 - Na tela **Montador de Expressões**, é utilizada a função: **Mapa-Traçar Rotas entre pontos(Coordenadas)**

Esta função permite ao usuário traçar uma distância entre dois pontos e como retorno, saber a distância em km/dias.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/FluxoCalcularDistancia.png)

Imagem 14 - Na tela **Editor de Fluxo de Ações**, **Obtenha a variável de formulário que foi definida com o valor da referência** no primeiro processamento e escolha a função: **Mapa - Calcular Distância entre Dois Pontos** no segundo processamento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/ObtendoReferencia.png)

Imagem 15.1 - Na tela **Montador de Expressões**, é utilizada a função: **Obter variável de formulário** passando como parâmetro o nome da variável que foi definida com a referência do elem ento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/CalculandoEntreDoisPontos.png)

Imagem 15.2 - Na tela **Montador de Expressões**, é utilizada a função: **Mapa - Calcular Distância entre Dois Pontos**

Esta função permite ao usuário atribuir ao mapa um marcador e personalizá-lo.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/FluxoMarcador.png)

Imagem 16 - Na tela **Editor de Fluxo de Ações**, **Obtenha a variável de formulário que foi definida com o valor da referência** no primeiro processamento e escolha a função: **Mapa - Criar Marcador** no segundo processamento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/ObtendoReferencia.png)

Imagem 17.1 - Na tela **Montador de Expressões**, é utilizada a função: **Obter variável de formulário** passando como parâmetro o nome da variável que foi definida com a referência do elemento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/CriandoMarcador.png)

Imagem 17.2 - Na tela **Montador de Expressões**, é utilizada a função: **Mapa - Criar Marcador**

*Nota*

*Associe os parâmetros da função em questão a sua documentação*

O parâmetro **Caminho relativo da imagem** é opcional. Caso não seja atribuído um valor o usuário deverá deixar Nulo. A partir daí, a função atribuirá um marcador *Default* (padrão).

O primeiro parâmetro (mapa) é o retorno da função "Mapa - Criar Mapa em uma Moldura"

Esta função associa um evento ao mapa.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/FluxoAssociarEvento.png)

Imagem 18 - Na tela **Editor de Fluxo de Ações**, **Obtenha a variável de formulário que foi definida com o valor da referência** no primeiro processamento e escolha a função: **Mapa - Associar Evento** no segundo processamento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/ObtendoReferencia.png)

Imagem 19.1 - Na tela **Montador de Expressões**, é utilizada a função: **Obter variável de formulário** passando como parâmetro o nome da variável que foi definida com a referência do elemento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/AssociandoEvento.png)

Imagem 19.2 - Na tela **Montador de Expressões**, é utilizada a função: **Mapa - Associar Evento**

*Nota*

*Mais informações sobre os eventos suportados, consulte:
[Developers.Google.com](https://developers.google.com/maps/documentation/javascript/reference?hl=pt-br)

Esta função define um perímetro circular com base em uma coordenada sobre o mapa.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/FluxoPerimetroCircular.png)

Imagem 20- Na tela **Editor de Fluxo de Ações**, **Obtenha a variável de formulário que foi definida com o valor da referência** no primeiro processamento e escolha a função: **Mapa - Definir Perímetro Circular** no segundo processamento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/ObtendoReferencia.png)

Imagem 21.1 - Na tela **Montador de Expressões**, é utilizada a função: **Obter variável de formulário** passando como parâmetro o nome da variável que foi definida com a referência do elemento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/PerimetroCircular.png)

Imagem 21.2 - Na tela **Montador de Expressões**, é utilizada a função: **Mapa - Definir Perímetro Circular**

Para ver as funções em execução no Webrun, será necessário associá-las aos botões no formulário em desenvolvimento e salvá-lo. Observe abaixo:

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/Maps2.jpg)

Imagem 22 - Executando o formulário com as funções do Maker Maps no Webrun.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/VisualizacaoParametroCircular.png)

Imagem 22 - Visualizando Perímetro Circular

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/VisualizadorMarcador.png)

Imagem 23 - Visualizando Marcadores em diferentes coordenadas.

![](https://suporte.softwell.com.br/Manual/MakerStudio/makermaps/VisualizacaoStreetView.png)

Imagem 24 - Visualizando Street View

[Voltar](../novidades/releasecompleto)
