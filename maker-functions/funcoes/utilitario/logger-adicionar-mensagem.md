---
title: "Logger - Adicionar Mensagem"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Loga uma mensagem passada como parâmetro de entrada. Caso o uso dessa função seja na camada servidor, a mensagem será adicionada no arquivo de log do servidor de aplicações. Caso o uso seja na camada cliente, a mensagem será exibida no console do navegador.

## Parâmetro(s)

1. Mensagem (Letras)
2. Nível de log. (Inteiro, Somente camada servidor)

## Retorno

Não possui.

## Observação

1. No segundo parâmetro pode ser passado os seguintes números:
[1] Debug
[2] Info
[3] Erro
Caso estiver nulo será configurado o nível Default.
