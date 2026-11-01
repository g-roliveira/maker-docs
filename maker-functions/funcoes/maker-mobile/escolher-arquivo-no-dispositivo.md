---
title: "Escolher arquivo no dispositivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Maker Mobile

## Descrição

Essa função abre o explorador de arquivos do dispositivo permitindo que o usuário navegue através dos diretórios e
selecione um ou mais arquivos.
Essa seleção é útil para envio de arquivos para o servidor (retaguarda) através da função Enviar arquivos via Post ou
Enviar Arquivo via Post Assíncrono.

## Parâmetro(s)

1. Fluxo de Sucesso.
2. Lista de parâmetros adicionais. (Variante, Opcional)
3. Fluxo de Erro.
4. Lista de parâmetros adicionais. (Variante, Opcional)
5. Seleção Múltipla? (Lógico)

## Observações

1. Caso seja informado, reservar o 1º parâmetro.
2. No 5º Parâmetro para iOS a partir da versão 11. No Android a partir versão 4.4.
3. Caso seja informação Seleção Múltipla, o fluxo de sucesso receberá uma lista contendo um ou mais arquivos selecionados.
