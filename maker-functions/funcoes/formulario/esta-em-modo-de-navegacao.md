---
title: "Está em Modo de Navegação?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

A função obtém o estado do formulário no momento que o fluxo é chamado, retornando true (verdadeiro) caso
esteja em modo de navegação ou false (falso) caso contrário.

Parâmetro:
Não possui.

## Retorno

Retorna "True" caso o formulário esteja em modo de navegação ou "False" caso contrário. (Lógico)

## Observação

Não é necessário passar o nome do formulário. O formulário sempre vai ser o que chama o fluxo.

## Exemplo

Assumindo que um formulário está em modo de navegação no momento que o fluxo é chamado. Neste caso, o
retorno seria "True".
