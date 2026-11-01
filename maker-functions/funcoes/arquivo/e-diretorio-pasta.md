---
title: "É Diretório/Pasta?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Verifica se o parâmetro é um diretório/pasta.

Parâmetro:
1. Elemento que será verificado. (Letras)

## Retorno

Se for diretório retorna "True" e se não for retorna "False". (Lógico)

## Observação

Caso o diretório/pasta esteja em rede deve-se passar o caminho do diretório na rede e não a unidade mapeada,
exemplo: \\servidor\softwell.

## Exemplos

1. Assumindo o parâmetro como C:\Softwell\Maker.txt" (Letras), o retorno seria "False".
2. Assumindo o parâmetro como "C:\Softwell" (Letras), o retorno seria "True".
