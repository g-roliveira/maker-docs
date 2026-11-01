---
title: "Substituir Elemento da Lista"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_lista/substituir_elemento_da_lista.htm"
---

Descrição:

Essa função busca um elemento, a partir da sua posição na lista e o substitui por um novo elemento.

Parâmetros:

1. Objeto Lista

2. Posição do elemento na lista que será substituído

3. Novo elemento

![image1259.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1259.gif)

Retorno:

Posição do elemento da Lista que foi substituído.

Exemplos:

1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: &#123;a, t, c, h&#125;, o 2º parâmetro seja 1 e o 3º parâmetro "k". O retorno será a lista atualizada com os seguintes elementos: &#123;k, t, c, h&#125;, pois o elemento que está na posição 1 da lista é o "a".

2. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: &#123;95, 35, 02, 806&#125;, o 2º parâmetro seja 3 e o 3º parâmetro "357". O retorno será a lista atualizada com os seguintes elementos: &#123;95, 35, 357, 806&#125;, pois o elemento que está na posição 3 da lista é o "02".

Nome Real:

ebfReplaceElementFromList

Compatibilidade:

Cliente e Servidor
