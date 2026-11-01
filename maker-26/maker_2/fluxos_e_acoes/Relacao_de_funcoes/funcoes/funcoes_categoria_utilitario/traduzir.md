---
title: "Traduzir"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/traduzir.htm"
---

Descrição:

Traduz um texto para um determinado idioma.

Parâmetros:

1. Texto a ser traduzido

2. Lista de parâmetros do texto

![image1626.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1626.gif)

Retorno:

Retorna o texto traduzido para o idioma definido no parâmetro

Observações:

1. Quando utilizada na camada servidor, a função irá buscar o texto passado na tabela de traduções. Se for utilizada na camada cliente, o texto já tem que estar determinado no fluxo para que ele possa buscar na tabela antes da chamada da função.

2. O segundo parâmetro é para definir nomes próprios que não possuem tradução.

Exemplo:

Se definirmos o texto

P1. Meu nome é &#123;0&#125; e meu pai é &#123;1&#125;.

No Segundo parâmetro devemos criar uma lista com os valores correspondentes a posição no texto.

P2. Lista [Maria, João]

Desta forma, a função irá retornar:

My name is Maria and my father is João.

Nome Real:

ebfTranslate

Compatibilidade:

Cliente e Servidor
