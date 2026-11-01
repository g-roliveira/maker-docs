---
title: "Maior"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_logica/maior.htm"
---

Descrição:

Essa função verifica se o valor do 1º parâmetro é maior que o do 2º parâmetro. A depender do resultado retorna verdadeiro ou falso. Se os valores dos parâmetros forem iguais o retorno será falso, pois o mesmo valor não é maior que ele mesmo.

Parâmetros:

1. Valor a ser verificado

2. Valor a ser verificado

![image1269.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1269.gif)

Retorno:

Retorna verdadeiro se o valor do 1º parâmetro for maior que o valor do 2º parâmetro, caso contrário o retorno será falso.

Exemplos:

1. Assumindo o valor do 1º parâmetro sendo 20 e o 2º parâmetro sendo 30 o valor de retorno será falso, pois 20 não é maior que 30.

2. Assumindo o valor do 1º parâmetro sendo 80 e o 2º parâmetro sendo 80 o valor de retorno será falso, pois 80 não é maior que 80.

Observação:

Devido a tipagem dinâmica das variáveis na camada cliente. Para que a função considere que os parâmetros são numéricos, será necessário converter os valores para número (inteiro ou fracionario) ao passar os parâmetros para a função (mesmo se as variáveis utilizadas já forem numéricas).

Nome Real:

isGreater

Compatibilidade:

Todas as camadas
