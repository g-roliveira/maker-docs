---
title: "PDF - Remover página"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=71"
---

**Categoria:** [Office](../../categorias/office)

**Compatibilidade:** Servidor

## Descrição

Esta função remove uma página de um arquivo PDF.

## Parâmetro(s)

1. Caminho do arquivo. (Letras) (Ver observação 1)
2. Caminho do novo arquivo que será salvo com a página removida. (Letras) (Ver observação 1)
3. Lista contendo o número das páginas a serem removidas. (Variante) (Ver observação 2)

## Retorno

Não possui.

## Observação

1. Os caminhos dos arquivos informados devem conter a extensão arquivo .pdf.
2. Lista contendo o número das páginas, recomenda-se utilizar a função "Criar Lista a partir dos Elementos".

## Exemplo

Assumindo o caminho do arquivo referência como "C:/arquivo1.pdf" e o caminho do novo arquivo como "C:/arquivo2.pdf" e o número da página como "1", o ?arquivo2.pdf? será salvo com a página removida.
