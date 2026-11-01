---
title: "Grade - Preencher da Lista"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Servidor

## Descrição

Preenche uma grade a partir de uma lista.

## Parâmetro(s)

1. Formulário que contém a grade.
2. Componente Grade.
3. Lista com a descrições da coluna. (Variante) (Ver observação 4)
4. Lista de Lista contendo os valores a serem adicionados na grade. (Variante)

## Retorno

Não possui.

## Observações

1. No parâmetro 4, cada linha da grade corresponde a uma lista dentro da lista desse parâmetro.
2. Após preencher a grade com esta função, não é permitido entrar em modo de inserção/edição ou
gravar/excluir os registros.
3. Não é possível ordenar a grade com a funcionalidade Shift + Duplo-Clique na coluna após o uso desta função.
4. O terceiro parâmetro pode ser informado uma lista com as descrição das colunas ou uma lista de lista com as seguintes informações:
- Descrição
- Tamanho
- Alinhamento
No terceiro parâmetro da lista aceita os seguintes valores para alinhamento do conteúdo: D (Direita), E (Esquerda) e C (Centro).
A lista informada deve conter três parâmetros.
5. É recomendável o uso da função "Criar Lista a partir dos elementos" para obter a lista e satisfazer o terceiro e quarto
parâmetros.
