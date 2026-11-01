---
title: "Criar Nome de Variável"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/criar_nome_de_variavel.htm"
---

Descrição:

Criar o nome de uma variável. Se o nome passado por parâmetro possuir acentos ou cedilhas, a função trata removendo e retorna um nome de variável correto. Caso deseje-se utilizar um nome de fluxo, basta marcar o segundo parâmetro como Verdadeiro.

Parâmetros:

1. Nome da Variável.

2. Valor lógico (Verdadeiro ou falso).

![image1591.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1591.gif)

Retorno:

Retorna o nome da variável sem acentos nem cedilhas.

Exemplo:

Assumindo como parâmetro "Ação" (Letras), se o segundo parâmetro for Falso, o resultado será "ACAO", se for verdadeiro será "Acao".

Nome Real:

ebfUtilReduceVariable

Compatibilidade:

Cliente e Servidor
