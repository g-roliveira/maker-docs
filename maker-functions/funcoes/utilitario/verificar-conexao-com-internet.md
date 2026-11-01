---
title: "Verificar Conexão com Internet"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Função que checa se existe conexão com a Internet.

## Parâmetro(s)

1. URL do Website (Para o Maker Mobile, este parâmetro será ignorado). (Letras)
2. Fluxo de Sucesso (Apenas Maker Mobile. Será executado caso contenha conexão com a internet).
3. Lista de Parâmetros para o Fluxo de Sucesso (Apenas Maker Mobile). (Variante)
4. Fluxo de Erro (Apenas Maker Mobile. Será executado caso não contenha conexão com a internet).
5. Lista de Parâmetros para o Fluxo de Erro (Apenas Maker Mobile). (Variante)

## Retorno

Webrun: "True" caso contenha conexão com a internet e "false" caso contrário. (Lógico)
Caso o parâmetro "URL" a ser testada não for definida, será usado o endereço: "http://www.google.com.br/" como alvo.

## Observação

Esta função não verifica conexão com internet em rede que contenha proxy.

## Exemplo

Parâmetro 1: "http://www.softwell.com.br/".
