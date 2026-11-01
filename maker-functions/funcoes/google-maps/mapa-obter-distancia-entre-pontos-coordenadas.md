---
title: "Mapa - Obter Distância entre Pontos (Coordenadas)"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Esta função calcula a distância e tempo entre dois ou mais pontos a partir das coordenadas informadas.
A distância é baseada em uma rota/trajeto através do modo informado.

## Parâmetro(s)

1. Origem Latitude. (Fracionado)
2. Origem Longitude. (Fracionado)
3. Destino Latitude. (Fracionado)
4. Destino Longitude. (Fracionado)
5. Lista de pontos. (Variante, Opcional)
6. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING). (Letras)
7. Fluxo de Callback.
8. Parâmetros adicionais para o fluxo de callback. (Variante)

## Retorno

Referência do objeto traçado. (Variante)

## Observações

1. Caso precise calcular distância entre dois pontos lineares, utilize a função "Mapa - Obter Distância Linear Entre Dois Pontos".
2. O fluxo receberá no primeiro parâmetro uma lista com:
Distância: Texto;
Duração: Texto;
Distância: Valor em metros
Duração: Tempo em segundos.
