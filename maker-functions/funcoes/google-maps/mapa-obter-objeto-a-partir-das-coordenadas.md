---
title: "Mapa - Obter Objeto a Partir das Coordenadas"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Esta função obtém o objeto Geocode a partir das coordenadas informadas. O fluxo informado receberá o endereço das coordenadas e
o retorno dessa função poderá ser executado para obter atributos do objeto GeoCode.

## Parâmetro(s)

1. Latitude. (Letras)
2. Longitude. (Letras)
3. Fluxo que receberá o endereço. (Fluxo)
4. Lista de parâmetros adicionais (Lista). (Variante, Opcional)
5. Enviar retorno como objeto JSON. (Lógico, Opcional)

## Retorno

Não Possui.

## Observações

1. É necessário que a biblioteca do Google Maps esteja importada através da função "Mapa - Importar biblioteca".
2. Caso ocorra algum erro, o retorno será vazio e o erro será registrado no console.log do navegador
3. Caso seja informado 'Verdadeiro'(true), será enviado para o fluxo de sucesso o objeto completo do retorno. Os atributos contidos no retorno em questão disponíveis para consulta no link abaixo:
(https://developers.google.com/maps/documentation/javascript/geocoding?hl=pt)
