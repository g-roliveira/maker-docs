---
title: "Mapa - Camada de Sobreposição"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Permite criar ou modificar uma camada responsável pela visualização o tráfego atual, as rotas de transporte público ou rotas de ciclovia da cidade.

## Parâmetro(s)

1. Mapa. (Variante)
2. Referência da Camada. (Variante, Opcional)
3. Inteiro. (1-Tráfego, 2-Transporte Público, 3- Ciclovias)
4. Visível? (Lógico)

## Retorno

A função terá como retorno a referência da Camada criada/modificada. (Variante).

## Observações

1. O 1º Parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";
2. O 2º Parâmetro só deve especificado, caso seja necessário modificar uma camada existente.

## Exemplo

Assumindo como 1º Parâmetro: a Referência do Mapa, 2º Parâmetro: Nulo, 3º Parâmetro: 1, 4º Parâmetro: Verdadeiro. Será retornado a referência de uma camada visível responsável por exibir o tráfego atual no mapa.
