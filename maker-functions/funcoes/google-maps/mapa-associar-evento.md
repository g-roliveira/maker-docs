---
title: "Mapa - Associar Evento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Esta função associa um evento ao mapa passado por parâmetro.

## Parâmetro(s)

1. Mapa. (Variante)
2. Evento. (click, dblclick, drag...) (Letras)
3. Fluxo. (Opcional) (Ver observação 3)
4. Lista de Parâmetros do Fluxo. (Variante, Opcional)
5. Caminho relativo do Ícone. (Letras, Opcional)
6. Criar Marcador? (Lógico)

## Retorno

Não possui.

## Observações

1. O 1º Parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura".
2. Mais informações sobre os eventos suportados, consulte:
https://developers.google.com/maps/documentation/javascript/reference?hl=pt-br
3. O fluxo executado receberá dois parâmetros automáticos referentes a Latitude e Longitude respectivamente.
4. Caso o 6º Parâmetro seja verdadeiro, será criado um marcador toda vez que o evento for executado.
