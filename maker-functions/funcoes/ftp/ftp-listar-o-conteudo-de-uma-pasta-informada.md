---
title: "FTP - Listar o conteúdo de uma pasta informada"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=35"
---

**Categoria:** [FTP](../../categorias/ftp)

**Compatibilidade:** Servidor

## Descrição

Essa função vai listar o conteúdo de uma pasta que será passada como parâmetro. Caso o valor informado no terceiro
parâmetro tenha um valor lógico verdadeiro, será listado arquivos, pastas e outras informações dos mesmo,
se o valor for falso será exibido apenas uma lista contendo os arquivos e pastas do diretório.

## Parâmetro(s)

1. Objeto FTP que represente uma conexão FTP aberta. (Variante)
2. Pasta que terá o seu conteúdo retornado. (Letras)
3. Valor Lógico. (Ver observação 1)

## Retorno

Lista contendo arquivos e pastas dentro do diretório informado (Letras)

## Observação

O valor passado no 3º Parâmetro será o responsável pelo tipo de retorno dessa função,
se verdade, o retorno será mais detalhado, caso contrário, só será listado as pastas e arquivos contidas nesse
diretório.
