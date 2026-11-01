---
title: "Abrir arquivo para leitura"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Abre um arquivo apenas para leitura, ou seja, sem permitir alterações no arquivo.

Parâmetro:
1. Caminho do arquivo. (Letras)

## Retorno

Retorna a referência para o arquivo. (Variante)

## Observação

A referência para o arquivo retornada por essa função não permite a posterior utilização de funções que farão
alteração no arquivo. Caso queira abrir um arquivo para fazer uma alteração, utilize a função "Abrir arquivo para
escrita".

## Exemplo

Assumindo o parâmetro como "\\servidor\maquina\diretorio\exemplo.txt", o retorno seria uma
referência para o arquivo "exemplo.txt".
