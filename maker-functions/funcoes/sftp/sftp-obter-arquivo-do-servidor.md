---
title: "SFTP - Obter Arquivo do Servidor"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=73"
---

**Categoria:** [SFTP](../../categorias/sftp)

**Compatibilidade:** Servidor

## Descrição

Esta função obtém o arquivo informado do servidor SFTP e adiciona uma cópia do mesma na pasta local informada.

## Parâmetro(s)

1. Referência de um Canal. (Variante)
2. Endereço local do arquivo de origem no servidor. (Letras)
3. Endereço da pasta de destino local. (Letras)

## Retorno

Não possui.

## Observações

1. Ao passar o endereço de origem é necessário passar o endereço completo com o nome e a extensão do arquivo.
2. Antes do uso desta função é necessário ter a conexão SFTP aberta.

## Exemplo

1º parâmetro: canal SFTP (Variante - retorno da função "Conectar Canal SFTP" )
2º parâmetro: /pastaOrigem/ArquivoOrigem.txt
3º parâmetro: c:/pastaDestino/ArquivoDestino.txt
