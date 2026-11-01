---
title: "Descarregar para arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Força a gravação do arquivo em disco, movendo todo o conteúdo que estava na memória para a unidade de
armazenamento. O uso desta função evita perdas inesperadas e força o Sistema Operacional a gravar logo
as informações (contidas na memória) no arquivo.

## Parâmetro(s)

1. Referência para o arquivo. (Variante)

## Retorno

Não possui.

## Observação

A referência para o arquivo utilizado na função deverá ser o retorno da função "Abrir arquivo para escrita".

## Exemplo

Supondo que anteriormente foi armazenado na variável "Caminho do TXT" a referência para determinado arquivo e que foi utilizada a função "Adicionar a arquivo" para adicionar conteúdos a este arquivo. Utilizar esta função posteriormente garante que os dados sejam gravados em disco, e não somente de forma provisória na memória.
