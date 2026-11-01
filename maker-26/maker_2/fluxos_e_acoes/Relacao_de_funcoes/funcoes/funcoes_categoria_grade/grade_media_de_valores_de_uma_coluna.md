---
title: "Grade - Média de valores de uma coluna"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_grade/grade_media_de_valores_de_uma_coluna.htm"
---

Descrição:

Calcula a média de valores contidos em uma coluna. Os parâmetros passados correspondem ao nome do formulário, o nome da grade e o campo que terá seus valores comparados.

Parâmetros:

1. Nome do Formulário

2. Nome da Grade

3. Nome do Campo

![image1557.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1557.gif)

Retorno:

Média entre os valores referente ao campo informado (Numero)

Exemplo:

GRADE:   USUARIO

Campos: CODIGO,NOME,IDADE

No campo IDADE existe os valores: ( 18;25;14;32;30;29 )

Os parâmetros passados para a função serão:

- Nome do Formulário

- Nome da grade (USUARIO)

- Nome do campo (IDADE)

O valor retornado será: (24,6)

Observações:

1. RESULTADOS DA FUNÇÃO:

A função, quando usada no 'fluxo cliente', retorna a média entre os valores apenas dos dados visualizados na grade, se estiver sendo usada a "paginação" na grade, os valores das páginas omitidas não serão verificados. Já os fluxos do modo Servidor, a verificação dos valores é feita em todos os registros da grid (podendo estes estarem como paginados ou não).

2. MODO INSERÇÃO OU ALTERAÇÃO:

Caso a função venha a ser usada com o formulario estando no modo de inserção ou alteração, deverá ser usado um fluxo do modo cliente para que se obtenha o resultado.

Nome real:

ebfGridAVGColumn

Compatibilidade:

Cliente e Servidor
