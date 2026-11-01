---
title: "Abrir Formulário numa Moldura"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Função que abre um formulário numa moldura.

## Parâmetro(s)

1. Formulário que contém o componente moldura. (Formulário)
2. Componente moldura. (Componente)
3. Formulário que será aberto na moldura. (Formulário)
4. Mostrar barra de rolagem? (Lógico)
5. Mostrar borda? (Lógico)

## Observações

1. Esta função não deve ser utilizada para abrir numa moldura o mesmo formulário que a contém.
2. As modificações feitas no formulário que está em uma moldura, apenas serão visualizadas quando o sistema
for reiniciado, ou quando o formulário for atualizado manualmente.

## Exemplo

Assumindo como 1º parâmetro o formulário "Form", 2º parâmetro a moldura(presente em "Form") "Moldura", 3º
parâmetro o formulário "Form Moldura" e como 4º parâmetro "True", será aberto na moldura "Moldura" o
formulário "Form Moldura" com barra de rolagem.
