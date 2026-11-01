---
title: "SFTP - Listar Conteúdo de uma Pasta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=73"
---

**Categoria:** [SFTP](../../categorias/sftp)

**Compatibilidade:** Servidor

## Descrição

Esta função listará o conteúdo de uma pasta. Caso o nome da pasta seja informada no segundo parâmetro, será listado apenas o conteúdo da pasta informada. Caso o valor informado no terceiro parâmetro tenha um valor lógico verdadeiro, será exibido informações detalhadas dos mesmos, se o valor for falso será exibido apenas uma lista contendo os arquivos e pastas do diretório.

## Parâmetro(s)

1. Referência do Canal. (Variante)
2. Pasta. (Letras)
3. Detalhes? (Lógico)

## Retorno

Lista de lista com as informações. (Variante)

## Observação

O primeiro parâmetro é o retorno da função "SFTP - Abrir Canal".
