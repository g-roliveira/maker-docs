---
title: "JSON para Variante"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=8"
---

**Categoria:** [Conversão](../../categorias/conversao)

**Compatibilidade:** Cliente, Servidor

## Descrição

Converte JSON (valores serializados) para Variante. Esse Variante pode ser um Mapa ou uma Lista.
O valor passado por parâmetro deve iniciar com JSONInstance ou ArrayInstance.

Parâmetro:
1. Valor a ser convertido. (Letras)

## Retorno

Objeto convertido a partir do JSON. (Variante)

## Exemplo

Assumindo como 1º parâmetro o valor JSONInstance(&#123;"a":1&#125;), o retorno seria um variável do tipo variante com os
dados informados.
