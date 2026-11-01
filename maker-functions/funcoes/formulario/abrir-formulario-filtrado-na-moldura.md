---
title: "Abrir Formulário Filtrado na Moldura"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Função que abre um formulário numa moldura filtrado.

## Parâmetro(s)

1. Formulário onde se encontra o componente do tipo moldura.
2. Componente do tipo moldura. (Componente)
3. Formulário que será aberto na moldura (GUID).
4. Mostrar barra de rolagem? (Lógico)
5. Texto indicando o filtro. (Letras)
6. Mostrar borda? (Lógico)

## Observações

1. Esta função não deve ser utilizada para abrir numa moldura o mesmo formulário que a contém.
2. Pode-se tipar o valor passando o formato &lt;Valor&gt;@&lt;Tipo&gt;, onde tipo pode ser: long, double, timestamp,
date e boolean, como por exemplo, "TAB_PESSOAS.CODIGO=100@long".
3. As modificações feitas no formulário que será aberto na moldura, apenas serão visualizadas quando o
sistema é reiniciado.

## Exemplo

Assumindo como 1º parâmetro "FORMULÁRIO" (Formulário), como 2º parâmetro "MOLDURA", 3º parâmetro
"CIDADE" (Formulário), 4º parâmetro "True" e 5º parâmetro "ESTADO=BAHIA", o resultado seria a abertura do
formulário "CIDADE" na moldura "MOLDURA", com barra de rolagem e somente com as cidades que
pertencem ao Estado Bahia.
