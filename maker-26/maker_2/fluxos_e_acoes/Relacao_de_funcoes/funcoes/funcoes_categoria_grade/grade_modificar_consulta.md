---
title: "Grade - Modificar Consulta"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_grade/grade_modificar_consulta.htm"
---

Nome Real:

Modifica a consulta de uma grade associada a um formulário.

Parâmetros:

1. Formulário que contém a grade.

2. Componente grade

3. Tabela navegável. Ex: Tabela obtida através da função Abrir Consulta Navegável.

4. Atualizar grade?

![image1560.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1560.gif)

Observações:

1. Ao modificar a consulta do formulário, a nova consulta deixa de ser gerenciada pelo fluxo, ou seja, ele não se encarregará de fechá-la, pois isso deverá ser uma tarefa do gerenciador do formulário (que a fechará quando o formulário for fechado).

2. A função "Modificar Consulta de um formulário ou Grade" contém uma limitação que não pode ser chamada apartir de um subformulário. Como não há como fazer tal correção sem impactos, surgiu a necessidade de criação desta função.

3. Esta função apenas modifica consultas para o componente grade.

Retorno:

Retorna Verdadeiro caso a consulta tenha sido modificada. Caso contrário, retorna Falso.

Nome Real:

ebfGridChangeResultSet

Compatibilidade:

Servidor
