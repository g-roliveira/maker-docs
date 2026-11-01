---
title: "GPS - Iniciar monitoramento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Essa função inicia o monitoramento de localização.

## Parâmetro(s)

1. Fluxo para receber dados do monitoramento. (Fluxo)
2. Parâmetros do fluxo. (Variante)
3. Prioridade. (Inteiro)
4. Intervalo em milissegundos. (Inteiro)
5. Intervalo mais rápido em milissegundos. (Inteiro)

## Retorno

Não possui.

## Observações

1. O parâmetro "Prioridade" poderá ser:
a - 100 para PRIORITY_HIGH_ACCURACY
b - 104 para PRIORITY_LOW_POWER
c - 105 para PRIORITY_NO_POWER
d - 102 para PRIORITY_BALANCED_POWER_ACCURACY
2. Define o intervalo desejado para a atualização da localização.
3. Para mais informações sobre o parâmetro Prioridade, verifique a documentação do Android: "https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest.html".
