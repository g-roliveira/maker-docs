---
title: "Remover Arquivo ou Pasta Vazia"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Remove um arquivo ou uma pasta vazia no servidor.

Parâmetro:
1. Local da pasta ou arquivo a ser deletado.

## Retorno

Se o arquivo ou pasta vazia for removido(a) com sucesso, retorna "True". Caso contrário, retorna "False". (Lógico)

## Observação

Caso deseje remover uma pasta que contenha arquivos dentro, utilizar a função "Remover Pasta de Arquivos".

## Exemplos

1. Assumindo que o parâmetro seja "C:\MakerFlow", caso a pasta exista e esteja vazia, ela será apagada.
2. Assumindo que o parâmetro seja "C:\MakerFlow\maker.txt", caso o arquivo exista, ele será apagado.
