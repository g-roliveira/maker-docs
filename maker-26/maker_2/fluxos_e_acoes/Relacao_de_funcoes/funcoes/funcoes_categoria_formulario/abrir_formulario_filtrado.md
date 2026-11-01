---
title: "Abrir Formulário Filtrado"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/abrir_formulario_filtrado.htm"
---

Descrição:

Esta função abre o formulário passado como parâmetro e filtra automaticamente pelo filtro passado no 2º parâmetro .

Parâmetros:

1. Formulário que será aberto.

2. Texto(Letras) indicando o filtro a ser feito

![image1443.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1443.gif)

Retorno:

Abertura do Formulário com os dados filtrados.

Observações:

1. O campo passado no filtro tem que ser igual ao campo da tabela associada ao formulário que vai ser aberto.

2. No filtro não podem haver espaços.

3. Caso o banco utilizado seja SQL Server e o tipo de dado do filtra seja varchar, deve ser utilizado aspas simples no filtro.

4. Caso o filtro seja uma chave estrangeira que relaciona a outra entidade, deverá ser utilizado o filtro tabela.campo=valor (Junção de tabelas).

Exemplo:

Assumindo como parâmetros 1 CIDADE (Formulário) e ESTADO = "BAHIA" (Filtro), o resultado seria a abertura do Formulário somente com as cidades que pertencem ao Estado Bahia.

Nome Real:

ebfFormOpenFilteredForm

Compatibilidade:

Servidor
