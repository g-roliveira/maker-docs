---
title: "Word - Ler Tabela"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=71"
---

**Categoria:** [Office](../../categorias/office)

**Compatibilidade:** Servidor

## Descrição

Ler toda tabela ou somente uma linha da tabela de acordo com os parâmetros passados.

## Parâmetro(s)

1. Referência para o arquivo. (Variante)
2. Número da linha. (Inteiro, Opcional)
3. Número da coluna. (Inteiro, Opcional)
4. Número da Tabela. (Inteiro, Opcional)

## Retorno

Lista de conteúdo. (Variante)

## Observação

O 4º Parâmetro refere-se ao número de tabelas existente no arquivo, ou seja se existir duas tabelas no arquivo ao ser informado o número 2, será retornado o conteúdo da segunda tabela. Caso não seja informado nenhum valor, será retornado o conteúdo da primeira tabela.
