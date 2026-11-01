---
title: "FTP - Listar conteúdo de uma pasta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=35"
---

**Categoria:** [FTP](../../categorias/ftp)

**Compatibilidade:** Servidor

## Descrição

Essa função vai listar o conteúdo de uma pasta. Caso o valor informado no segundo parâmetro tenha um valor lógico verdadeiro, será listado arquivos, pastas e outras informações dos mesmo, se o valor for falso será exibido apenas uma lista contendo os arquivos e pastas do diretório.

## Parâmetros

1. Objeto FTP que represente uma conexão FTP aberta. (Variante)
2. Valor lógico. (Ver observação 1)

## Retorno

Lista contendo arquivos e pastas dentro do diretório informado. (Letras)

## Observação

O valor passado no 2º Parâmetro será o responsável pelo tipo de retorno dessa função, se verdade, o retorno será mais detalhado, caso contrário, só será listado as pastas e arquivos contidas nesse diretório.
