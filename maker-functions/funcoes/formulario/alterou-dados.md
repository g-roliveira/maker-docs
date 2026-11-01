---
title: "Alterou Dados?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Servidor

## Descrição

A função retorna um valor lógico (verdadeiro ou falso) informando se algum componente foi ou não alterado.

Parâmetro:
Não possui.

## Retorno

Retorna "Verdadeiro" se algum componente foi alterado. Caso contrário, retorna "Falso". (Lógico)

## Observações

1. É recomendável utilizar no evento "Antes de Alterar".
2. A função só funciona se o componente estiver ligado a alguma tabela do banco de dados.
3. Caso a função não seja utilizada no evento "Antes de Alterar", as modificações para o componente Imagem não são reconhecidas.
4. O fluxo associado deverá estar na camada servidor e ser chamado direto no evento "Antes de Alterar". Caso seja chamado através de subfluxo (cliente --> servidor), a função retornará "false".
