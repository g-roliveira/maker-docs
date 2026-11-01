---
title: "Mapa - Associar Fluxo ao Evento do Marcador"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Esta função associa um fluxo à um determinado marcador do mapa que será executado quando o evento for disparado.

## Parâmetro(s)

1. Referência do Marcador. (Variante)
2. Tipo de Evento. (Letras)
3. Nome do Fluxo. (Letras)
4. Lista de Parâmetros do Fluxo. (Variante)
5. Objeto do Evento. (Lógico)

## Retorno

Não possui.

## Observações

1. A referência do marcador deve ser obtida através da função Mapa - Criar Marcador.
2. Os tipos de evento são os mesmos do JavaScript (click, dblclick, mouseover, etc...).
3. Caso o parâmetro Objeto do Evento for verdadeiro, o primeiro parâmetro do fluxo irá receber o objeto do evento.
