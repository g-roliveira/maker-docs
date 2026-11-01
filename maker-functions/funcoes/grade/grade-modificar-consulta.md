---
title: "Grade - Modificar Consulta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Servidor

## Descrição

Modifica a consulta de uma grade associada a um formulário.

## Parâmetro(s)

1. Formulário que contém a grade.
2. Componente Grade.
3. Tabela navegável. (Tabela) (Ver observação 2)
4. Atualizar grade? (Lógico)
5. Manter SQL? (Lógico)

## Retorno

Retorna Verdadeiro caso a consulta tenha sido modificada, senão retorna Falso. (Lógico)

## Observações

1. Ao modificar a consulta do formulário, a nova consulta deixa de ser gerenciada pelo fluxo, ou seja, ele não se
encarregará de fechá-la, pois isso deverá ser uma tarefa do gerenciador do formulário
(que a fechará quando o formulário for fechado).
2. A tabela pode ser obtida através da função "Abrir Consulta Navegável".
3. A função "Modificar Consulta de um formulário ou Grade" contém uma limitação que não pode ser chamada a partir de um
subformulário. Como não há como fazer tal correção sem impactos, surgiu a necessidade de criação desta função.
4. A nova consulta deverá conter a mesma quantidade de campos e mesma tabela da consulta anterior.
5. O quinto parâmetro quando definido persistirá a o SQL aplicado no terceiro parâmetro, assim quando o usuário realizar um filtro ou exportar o mesmo será realizado na consulta atual do componente.

## Exemplo

Suponhamos que temos uma grade chamada de "Grade de Cidades" com os campos "Código", "Nome" e
"PIB" (Produto interno bruto) e que retorna (Select) todas as cidades do Brasil, utilizamos a função
"Grade - Modificar Consulta" para as cidades que possuem o PIB maior que 100.000 - bastando portanto modificar a consulta,
inserindo a clausula where e a condição maior que 100.000.
