---
title: "Código do Sistema"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

A função retorna o Código do sistema atual em que o fluxo está sendo executado.

Parâmetro:
Não possui.

## Retorno

Retorna o código do sistema utilizado. (Letras)

## Exemplo

Se o fluxo for executado no "Contas a Pagar", que tem como sigla "CAP", a função retornará
"CAP".

Observação(ões):
1. Essa função não retorna a SIGLA com instância caso exista mais de um sistema com a mesma sigla. Se for necessário obter a SIGLA com instância, utilize a função Sigla do Sistema.
