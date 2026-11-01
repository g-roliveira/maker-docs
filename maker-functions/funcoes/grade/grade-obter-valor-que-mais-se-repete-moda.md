---
title: "Grade - Obter Valor Que Mais se Repete (Moda)"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente, Servidor

## Descrição

Moda é um termo estatístico usado para para obter o valor que mais se repete ou que possui a maior freqüência
dentro de uma coluna.

## Parâmetro(s)

1. Formulário.
2. Componente Grade. (Componente)
3. Nome do Campo. (Letras)

## Retorno

Valor que mais se repete entre os valores referente ao campo informado. (Inteiro)

## Observações

1. Caso a propriedade paginação esteja ativado, só será retornado os valores referente a página em questão.
2. Caso não exista moda (nenhum valor que se repete) será retornado um campo em branco, ou seja nenhum valor.

## Exemplo

Calculando a idade da moda de uma classe de alunos a pesquisa revelou as seguintes idades:
18, 18, 19, 20, 21, 21, 22, 23, 23, 23, 24, 25, 26.
A função retornará a idade que mais aparece na pesquisa. Neste caso a idade foi de 23 ano de idade.
