---
title: "Copiar Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Cria uma cópia de um arquivo do servidor.

## Parâmetro(s)

1. Caminho absoluto do arquivo a ser copiado. (Letras)
2. Caminho absoluto do arquivo a ser criado. (Letras)

## Retorno

Não possui.

## Observação

Somente podem ser copiados arquivos que estejam dentro da mesma rede ou no computador onde o Webrun
está sendo executado.

## Exemplos

1. Definindo o primeiro parâmetro como "\\192.168.1.50\Arquivos\Documento.doc" e o segundo parâmetro como
"\\192.168.1.69\Arquivos\teste.doc" o arquivo será copiado de um computador da rede para outro. (É possível
copiar arquivos de uma máquina da rede para outra);
2. Definindo o primeiro parâmetro como "C:\softwell.txt" e o segundo parâmetro como "D:\maker.txt", o arquivo
será copiado do diretório "C" para o diretório "D".
