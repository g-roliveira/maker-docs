---
title: "Abrir Formulário Filtro e Modo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/abrir_formulario_filtro_e_modo.htm"
---

Descrição:

A função abre o formulário no modo passado como parâmetro e filtra automaticamente de acordo com o filtro passado no segundo parâmetro. Modo de Abertura: 1 - Inclusão, 2 - Edição.

Parâmetros:

1. Formulário que será aberto.

2. Texto(Letras) indicando o filtro a ser feito

3. Indica o Modo de Abertura do formulário.

![image1445.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1445.gif)

Observações:

1. Caso o banco utilizado seja SQL Server e o tipo de dado do filtro seja varchar, deve ser utilizado aspas simples no filtro.

2. Caso o filtro seja uma chave estrangeira que relaciona a outra entidade, deverá ser utilizado o filtro tabela.campo=valor (Junção de tabelas).

Retorno:

Abertura do formulário no modo passado e com filtro ativo.

Exemplo:

Assumindo como parâmetros 1 CIDADE (Formulário), ESTADO = "BAHIA" (Filtro) e 2 (Modo Edição) o resultado seria a abertura do Formulário em modo de edição, somente com as cidades que pertencem ao Estado Bahia.

Nome real:

ebfFormOpenFilterAndMode

Compatibilidade:

Servidor
