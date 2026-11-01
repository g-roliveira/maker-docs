---
title: "Interromper Fluxo Agendado"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/interromper_fluxo_agendado.html"
---

A função "Interromper Fluxo Agendado" como o proprio nome já diz, interrompe o fluxo agendado de acordo com o ID que é retornado da função "Agendar Execução de Fluxo".

Depois de utilizar a função "Agendar Execução de Fluxo" o desenvolvedor deve passar o retorno dessa função através da função "Definir variável local".

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var10.png)

No primeiro parâmetro deve ser passado o nome do fluxo executado, no segundo parâmetro a lista de regras a ser executada e no terceiro parâmetro o tempo em milissegundos em que o fluxo agendado será executado.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var11.png)

Um novo fluxo deve ser criado utilizando as funções "Obter ´variável local" e "Interromper Fluxo Agendado".

No primeiro parâmetro deve ser passado o nome da variável local e no segundo parâmetro o valor que ela irá guardar, nesse caso o retorno da função "Agendar Execução de Fluxo".

O fluxo irá ficar da seguinte forma:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var12.png)

No primeiro processamento o desenvolvedor utilizará a função "Obter variável local" no primeiro parâmetro deve ser descrito o nome da variável local e como retorno a variável que irá guardar o valor da mesma.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var13.png)

No segundo processamento o desenvolvedor utilizará a função "Interromper Fluxo Agendado" passando como parâmetro a variável que recebeu o retorno da função "Obter variável local" essa variável deve ser do tipo variante.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var14.png)
