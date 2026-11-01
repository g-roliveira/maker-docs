---
title: "Grade - Encontrar Coluna"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_grade/grade_encontrar_coluna.htm"
---

Descrição:

Essa função encontra a posição da coluna na grade.

Parâmetros:

1. Nome da Grade

2. Nome da Coluna

![image1548.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1548.gif)

Retorno:

Retorna a posição da coluna. Se a coluna for a primeira da Grade retorna o valor 0, se for a segunda retorna 1 e assim sucessivamente.

Exemplo:

Assumindo o 1º parâmetro sendo "Grade Produtos"e o 2 º parâmetro sendo "Informática". Passando esses parâmetros, será  verificado em que posição a coluna "Informática"  está na Grade "Grade Produtos".

Observações:

1. A numeração das colunas começam de 0 à N.

2. Caso a coluna não seja encontrada, será retornado o valor -1.

Nome Real:

ebfGridFindColumn

Compatibilidade:

Cliente
