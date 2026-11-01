---
title: "Grade - Preencher com Consulta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Servidor

## Descrição

Função que preenche a grade com os registros de uma consulta.

## Parâmetro(s)

1. Formulário que contém a grade.
2. Componente Grade.
3. Tabela com a consulta realizada. (Tabela)
4. Lista de descrições dos campos que irão aparecer nas colunas. Os campos deverão estar na ordem das colunas. (Variante)

## Retorno

Não possui.

## Observações

1. Não é possível ordenar a grade com a funcionalidade Shift + Duplo-Clique na coluna após o uso desta função.
2. Após preencher uma Grade Editável com esta função, não será possível inserir, alterar ou excluir dados na mesma.
3. É recomendável o uso da função "Abrir Consulta Navegável" antes, para retornar a tabela para o terceiro parâmetro.
4. É recomendável o uso da função "Criar Lista a partir dos elementos" para retornar a lista de campos no quarto parâmetro.
