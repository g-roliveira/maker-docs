---
title: "Obter Coordenadas"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Obtém as coordenadas do dispositivo móvel que possui GPS.

## Parâmetro(s)

1. Fluxo que será executado caso as coordenadas sejam obtidas com sucesso.
2. Fluxo que será executado caso haja algum erro durante a execução da função.

## Retorno

Não possui.

## Observações

1. O fluxo informado no primeiro parâmetro deverá possuir um parâmetro de entrada do tipo Variante. A função enviará
automaticamente para o fluxo um mapa com as seguintes chaves "longitude", "latitude", "altitude", "accuracy",
"altitude accuracy", "heading", "speed", "Timestamp".
2. O fluxo informado no segundo parâmetro deverá possuir um parâmetro de entrada do tipo Letras. A função enviará
automaticamente para o fluxo o erro encontrado na tentativa de obtenção das coordendas.
