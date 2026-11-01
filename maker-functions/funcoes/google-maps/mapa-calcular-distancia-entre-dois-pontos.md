---
title: "Mapa - Calcular Distância Entre dois Pontos"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Esta função calcula a distância e o tempo entre dois pontos.

## Parâmetro(s)

1. Mapa. (Variante, Opcional)
2. Origem. (Letras)
3. Destino. (Letras)
4. Modo de Viagem. (DRIVING, WALKING, BICYCLING) (Letras)
5. Nome do Fluxo de sucesso.
6. Parâmetros do Fluxo de sucesso. (Variante, opcional)
7. Nome do Fluxo de erro.
8. Parâmetros do Fluxo de erro. (Variante, opcional)

## Retorno

Não possui.

## Observações

1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";
2. Ao informar o mapa no primeiro parâmetro, a rota será traçada automaticamente.
3. O fluxo de sucesso receberá uma lista no primeiro parâmetro, contendo a distância em KM e o Tempo, entre os dois pontos.
