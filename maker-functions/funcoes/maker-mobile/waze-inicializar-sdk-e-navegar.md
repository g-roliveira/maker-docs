---
title: "Waze - Inicializar SDK e navegar"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Essa função tem como objetivo iniciar o aplicativo do Waze e navegar ao ponto de destino que foi especificado.

## Parâmetro(s)

1. Endereço (Ponto de partida, caso não seja informado, será obtida a localização atual). (Letras, Opcional)
2. Latitude de Destino. (Letras)
3. Longitude de Destino. (Letras)

## Retorno

Retorno será JSON, e vazio caso a inicialização ocorra com sucesso. (Letras)

## Observação

Caso ocorra algum erro no processo de inicialização, será retornada uma string no formato JSON, onde será informado o erro na chave "mensagem".
