---
title: "JSON - Inserir no Banco"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=68"
---

**Categoria:** [JSON](../../categorias/json)

**Compatibilidade:** Servidor

## Descrição

Esta função insere valores no banco de dados de acordo em um JSON.

## Parâmetro(s)

1. Objeto JSON. (Variante)
2. Nome da tabela no banco de dados que irá receber os valores do JSON. (Letras)

## Retorno

Não possui.

## Observação

Cada chave no objeto JSON deve corresponder a uma coluna na tabela do banco de dados passado como parâmetro .

## Exemplo

Assumindo o JSON como &#123;nome: Softwell, idade: 15&#125; e as colunas correspondentes no banco de dados como nome e idade, assim como no objeto JSON os valores inseridos no banco serão Softwell e 15.
