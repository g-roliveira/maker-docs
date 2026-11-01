---
title: "SFTP - Trocar a Pasta Atual"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=73"
---

**Categoria:** [SFTP](../../categorias/sftp)

**Compatibilidade:** Servidor

## Descrição

Esta função altera o diretório de trabalho remoto para o diretório informado.

## Parâmetro(s)

1. Referência de um Canal. (Variante)
2. Endereço do novo diretório. (Letras)

## Retorno

Referência de um Canal. (Variante)

## Observações

1. Só é possível mudar o diretório a partir da home do usuário, não sendo possível trocar a pasta partir de um diretório diferente da home.
2. Antes do uso desta função é necessário ter a conexão SFTP aberta.

## Exemplo

1º parâmetro: canal SFTP (Retorno da função "SFTP - Abrir Canal")
2º parâmetro: /pastaDestino
