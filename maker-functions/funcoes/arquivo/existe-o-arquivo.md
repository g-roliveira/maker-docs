---
title: "Existe o Arquivo?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Verifica se existe um arquivo no servidor.

Parâmetro:
1. Caminho absoluto do arquivo. (Letras)

## Retorno

Verdadeiro caso o arquivo exista. Caso contrário, retorna Falso. (Lógico)

## Observação

Caso o arquivo esteja em rede deve-se passar o caminho do arquivo na rede e não a unidade mapeada, exemplo:
\\servidor\softwell\ExisteArquivo.pdf.

## Exemplos

1. Assumindo como parâmetro "C:\MakerSoftwell.txt" e o mesmo exista, o retorno da função será "True".
2. Assumindo como parâmetro "C:\MakerSoftwell.txt" e o mesmo não exista, o retorno da função será "False".
