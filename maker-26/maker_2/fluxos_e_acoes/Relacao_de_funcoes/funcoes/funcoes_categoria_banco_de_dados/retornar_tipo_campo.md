---
title: "Retornar Tipo Campo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/retornar_tipo_campo.htm"
---

Descrição:

Função usada para retornar o tipo de campo da tabela e do campo passado como parâmetro. Vide descrição da função (Tipo do Campo SQL).

Parâmetros:

1. Consulta (variável tabela).

2. campo (tipo letras)

![image1432.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1432.gif)

Retorno:

Retorna o tipo de campo (varchar, int...).

Exemplo:

1. Define uma consulta usando a função (Abrir Consulta) e o Wizard SQL.

2. Atribui a consulta a uma variável do tipo tabela.

3. Use a função Retornar Tipo Campo passando como parâmetro a variável escolhida,  e preenchendo com a constante letras o nome do campo.

4. Atribua o valor de retorno a uma variável do tipo letras.

Observação:

O 2º parâmetro deve ser uma constante letras, explicitando o nome do campo que deseja retornar o tipo.

Nome Real:

ebfGetMetaDataField

Compatibilidade:

Banco de dados e Servidor
