---
title: "Excel - Criar Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=71"
---

**Categoria:** [Office](../../categorias/office)

**Compatibilidade:** Servidor

## Descrição

Esta função cria o arquivo no caminho especificado.

## Parâmetro(s)

1. Caminho do arquivo. (Letras)
2. Nome da folha ou Lista de Nomes. (Variante, Opcional)

## Retorno

A referência para o arquivo. (Variante)

## Observações

1. Caso o arquivo já exista, será recriado totalmente em branco.
2. Caso o nome da folha não seja especificado a mesma assumirá o valor "Folha1".

## Exemplo

Assumindo como parâmetro da função o texto "\\servidor\maquina\diretorio\exemplo.xlsx", o retorno será uma referência para o arquivo exemplo.xlsx.
