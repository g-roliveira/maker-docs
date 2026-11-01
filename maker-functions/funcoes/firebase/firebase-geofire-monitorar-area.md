---
title: "Firebase - GeoFire - Monitorar Área"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Cliente

## Descrição

Monitora as atualizações que ocorrerem dentro de uma determinada área.

## Parâmetro(s)

1. Nó que será monitorado (onde são enviadas as atualizações de GPS). (Letras)
2. Latitude. (Fracionado)
3. Longitude. (Fracionado)
4. Raio (em KM). (Fracionado)
5. Fluxo que receberá os dados de monitoramento. (Ver observação)
6. Lista de parâmetros extra para o fluxo. (Variante)

## Retorno

Não possui.

## Observação

No 5º Parâmetro deve ser informado o fluxo que deverá deixar o 1º Parâmetro reservado para recebimento das atualizações. Será enviado um JSON com as seguintes
chaves/informações:
&#123;
"action": ""
"latitude": 37.7832,
"longitude": -122.4056
&#125;
