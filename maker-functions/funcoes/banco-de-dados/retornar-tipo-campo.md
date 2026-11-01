---
title: "Retornar Tipo Campo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para retornar o tipo de campo da tabela e do campo passado como parâmetro.
Vide descrição da função (Tipo do Campo SQL).

## Parâmetro(s)

1. Consulta. (Tabela)
2. Campo.

## Retorno

Retorna o tipo de campo (Varchar, inteiro, entre outros). (Letras)

## Observação

O 2º parâmetro deve ser uma constante letras, explicitando o nome do campo que deseja retornar o tipo.

## Exemplo

Defina uma consulta usando a função(Abrir consulta) e o Wizard SQL, atribua a consulta a uma variável do tipo tabela, use a função retornar o tipo do campo passando como parâmetro a variável escolhida e preenchendo com a constante letras o nome do campo e atribua o valor de retorno a uma variável do tipo letras.
