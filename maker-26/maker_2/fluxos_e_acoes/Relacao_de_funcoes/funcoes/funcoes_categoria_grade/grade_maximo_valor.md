---
title: "Grade - Máximo valor"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_grade/grade_maximo_valor.htm"
---

Descrição:

Obtem o máximo valor de uma coluna. Os parâmetros passados correspondem ao nome do formulário, o nome da grade e o campo que terá seus valores comparados.

Parâmetros:

1. Formulário onde está localizada a grade.

2. Componente Grade

3. Nome do Campo

![image1556.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1556.gif)

Retorno:

Valor máximo referente ao campo informado (Número)

Exemplo:

GRADE:   USUARIO

Campos: CODIGO,NOME,IDADE

No campo IDADE existe os valores: ( 18;25;14;32;30;29 )

Os parâmetros passados para a função serão:

- Nome do Formulário

- Nome da grade (USUARIO)

- Nome do campo (IDADE)

O valor retornado será: (32)

Observações:

1. RESULTADOS DA FUNÇÃO:

A função, quando usada no 'fluxo cliente', retorna o MÁXIMO valor encontrado apenas dos dados visualizados na grade. Caso estiver sendo usada a "paginação" na grade, os valores das páginas omitidas não serão verificados. Já os fluxos do modo Servidor, a verificação dos valores é feita em todos os registros da grid (podendo estes estarem paginados ou não). O retorno da função Servidor são dados do tipo fracionado. Caso o campo seja do inteiro o resultado será do tipo fracionado.

2. MODO INSERÇÃO OU ALTERAÇÃO:

Caso a função venha a ser usada com o formulario estando no modo de inserção ou alteração, deverá ser usado um fluxo do modo cliente para que se obtenha o resultado.

Nome Real:

ebfGridMaxColumn

Compatibilidade:

Cliente e Servidor
