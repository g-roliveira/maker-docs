---
title: "Abrir arquivo para escrita"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Abre um arquivo para edição e retorna uma referência para o arquivo.

## Parâmetro(s)

1. Caminho do arquivo. (Letras)
2. Falso, para abrir o arquivo para edição sobrepondo o seu conteúdo original, ou verdadeiro, para abrir e
apenas inserir novos dados ao conteúdo existente. (Lógico)

## Retorno

Referência para o arquivo. (Variante)

## Observação

Caso o arquivo não exista, ele será criado automaticamente.

## Exemplos

1. Assumindo os parâmetros como "\\servidor\maquina\diretorio\exemplo.txt" e "Verdadeiro", o retorno seria a
referência para o arquivo exemplo.txt, sem apagar o conteúdo existente.
2. Assumindo os parâmetros como "c:/softwellmaker.txt" e "Falso", o retorno seria a referência para o arquivo
softwellmaker.txt, sobrepondo o conteúdo existente.
