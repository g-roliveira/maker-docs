---
title: "Formatar Data"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=4"
---

**Categoria:** [Data e Hora](../../categorias/data-e-hora)

**Compatibilidade:** Cliente

## Descrição

Essa função formata uma data de acordo os valores passado por parâmetro.

## Parâmetro(s)

1. Data.
2. Idioma. (Letras, Opcional)
3. Formato (Texto JSON). (Letras)

## Retorno

Data formatada. (Letras)

## Observações

1. Caso o segundo parâmetro não seja informado o mesmo assumirá o idioma do Webrun.
2. Os parâmetros suportados para formatação são: weekday, year, month, day, hour, minute e second.
3. Os valores possíveis para formatação são:
- weekday: "narrow", "short", "long".
- year: "numeric" e "2-digit".
- month: "numeric", "2-digit", "narrow", "short" e "long".
- day: "numeric" e "2-digit".
- hour: "numeric" e "2-digit".
- minute: "numeric" e "2-digit".
- second: "numeric" e "2-digit".

## Exemplos

1. Assumindo como primeiro parâmetro a data 31/08/2016 00:00:00, segundo parâmetro pt-BR e terceiro parâmetro o texto JSON &#123;"weekday":"long"&#125;,
o retorno será quarta-feira.
2. Assumindo como primeiro parâmetro a data 31/08/2016 00:00:00, segundo parâmetro pt-BR e terceiro parâmetro o texto JSON&#123;"weekday":"long", "day":"numeric", "month":"long", "year":"numeric"&#125;,
o retorno será quarta-feira, 31 de agosto de 2016.
Mais informações:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
