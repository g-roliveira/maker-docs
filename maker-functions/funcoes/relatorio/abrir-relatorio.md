---
title: "Abrir Relatório"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=62"
---

**Categoria:** [Relatório](../../categorias/relatorio)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função abre um determinado relatório podendo este estar ou não filtrado, a depender do parâmetro
passado. Se for filtrado, o segundo parâmetro deve receber valor lógico "verdadeiro" e no terceiro parâmetro
deve ter o filtro. Se não for filtrado, o segundo parâmetro deve ter valor lógico "falso" e o terceiro não deve
ser preenchido.

## Parâmetro(s)

1. Nome do relatório que será aberto. (Letras)
2. Para abrir filtrado, "verdadeiro", caso contrário, "falso". (Opcional, Lógico)
3. Filtro personalizado a ser passado. (Letras, Opcional)
4. Título da Janela. (Letras, Opcional)

## Retorno

Não possui.

## Observações

1. O 2º Parâmetro que recebe "verdadeiro" ou "falso" indica se o relatório deve ser filtrado pelo
formulário que o abre. Para casos em que os campos do filtro coincidem com campos presentes na consulta
do formulário. Exemplo: se o relatório tiver um filtro chamado "PES_COD" e esse campo estiver presente na
consulta do formulário chamador, o relatório resultante será filtrado pelo valor corrente do campo em questão.
2. Caso o relatório tenha sido feito pelo gerador de relatórios legado (RB7), o filtro do terceiro parâmetro deve
ser montado com a seguinte sintaxe: &lt;campo&gt;=&lt;valor&gt;[;&lt;campo&gt;=&lt;valor&gt;[;...]].
Exemplo: PES_UF=BA; PES_CIDADE=4. Também pode usar uma lista com tamanho par, onde os índices
ímpares são os nomes dos campos e os pares são os valores. O valor do campo utilizado nesse parâmetro
sobrepõe o valor do campo que coincidir com a consulta do formulário, conforme explicado no segundo
parâmetro.
2. 1. Caso o relatório tenha sido feito pelo RB10, deve ser utilizado o nome do parâmetro definido no critério da
consulta.
3. Caso o relatório possua o filtro between (Entre), deve ser utilizada ao fim a expressão _copy (em
minúsculo).

## Exemplo

Assumindo como parâmetros o nome do relatório "Cidade" (Letras), a opção de filtro "verdadeiro" (Lógico) e o
filtro "cidade=Salvador", o resultado seria a abertura do relatório "Cidade" somente onde o campo Cidade
fosse Salvador.
