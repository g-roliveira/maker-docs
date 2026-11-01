---
title: "Mapa - Obter Coordenadas"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Esta função obtém as coordenadas a partir de um endereço.

## Parâmetro(s)

1. Endereço. (Letras)
2. Fluxo de sucesso. (Fluxo)
3. Lista de parâmetros adicionais para o fluxo. (Variante, Opcional)
4. Fluxo de erro. (Fluxo)
5. Lista de parâmetros adicionais para o fluxo de erro. (Variante, Opcional)

## Retorno

Não possui.

## Observação

1. O fluxo receberá automaticamente 2 parâmetros. O 1º será referente à Latitude e o 2º será referente à Longitude.
2. Os parâmetros adicionais serão recebidos a partir do 3º parâmetro.
3. É necessário que a biblioteca do Google Maps esteja importada através da função "Mapa - Importar biblioteca".
