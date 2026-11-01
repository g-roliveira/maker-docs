---
title: "Fim do Arquivo?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Verifica se já chegou ao fim do arquivo. Muito usada com a função "Ler linha do arquivo", para verificar se o
arquivo já está no final.

Parâmetro:
1. Referência para um arquivo. (Variante) (Ver observação 1)

## Retorno

"True" se tiver chegado ao fim do arquivo, e "False" caso contrário. (Lógico)

## Observação

A referência do arquivo pode ser obtida através da utilização das funções "Abrir arquivo para escrita" ou "Abrir arquivo para leitura".
