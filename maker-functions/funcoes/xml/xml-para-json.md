---
title: "XML para JSON"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Cliente, Servidor

## Descrição

Converte uma texto no padrão XML para o padrão JSON texto.

Parâmetro:
1. Texto XML. (Letras)
2. Manter Letras? (Opcional) (Lógico) (Obervação 1)

## Retorno

JSON texto. (Letras)

## Exemplo

Assumindo como parâmetro o texto "&lt;Softwell&gt;&lt;IDE&gt;Maker&lt;/IDE&gt;&lt;Framework&gt;Webrun&lt;/Framework&gt;&lt;/Softwell&gt;" o retorno será o texto JSON
"&#123;"Softwell":&#123;"IDE":"Maker", "Framework":"Webrun"&#125;&#125;".

## Observação

1. Se verdadeiro, os valores não serão convertidos em valores lógicos ou numéricos e, em vez disso, serão deixados como letras.
