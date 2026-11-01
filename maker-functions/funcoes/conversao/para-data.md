---
title: "Para Data"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=8"
---

**Categoria:** [Conversão](../../categorias/conversao)

**Compatibilidade:** Todas as camadas

## Descrição

Converte para data o valor passado no primeiro parâmetro. O segundo parâmetro é opcional, e por ele pode-se informar o formato da data que será retornada (válido apenas para fluxo servidor).

## Parâmetro(s)

1. Valor a ser convertido. (Letras)
2. Formato do parâmetro a ser convertido. (Letras, Opcional) (Ver observação 1)

## Retorno

Valor convertido para data. (Data)

## Observações

1. O 2º Parâmetro é válido apenas para fluxo servidor.
2. O formato da Data referente ao segundo parâmetro deve ser escrito no seguinte formato:
dd - Para dia do mês da data do primeiro parâmetro.
MM - Para Mês do Ano da data do primeiro parâmetro.
yyyy - Para o Ano da data do primeiro parâmetro.
3. O formato da data não remove as horas.

## Exemplo

Assumindo como parâmetros a data 10/10/2007 09:12:40 e o formato dd/MM/yyyy, o retorno será 10/10/2007 00:00:00.
