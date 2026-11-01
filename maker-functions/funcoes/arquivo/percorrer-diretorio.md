---
title: "Percorrer Diretório"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Percorre o diretório passado por parâmetro e retorna uma lista com todos os arquivos e pastas contidos nesse diretório.

Parâmetro:
1. Corresponde ao endereço do diretório que será percorrido. (Letras)

## Retorno

Lista com os arquivos e diretórios contidos no diretório passado por parâmetro. (Variante)

## Observações

1. O retorno dessa função pode ser facilmente manipulado pelas funções da categoria lista.
2. Para verificar se um elemento da lista é arquivo ou diretório, utilize as funções "É diretório?" ou "É arquivo?".
3. Para que haja sucesso no uso da função, é necessário que o usuário que a utiliza tenha permissão de acesso aos diretórios e a pasta deve estar compartilhada.
4. Caso no diretório passado por parâmetro possua sub-diretórios com arquivos dentro, eles não serão retornados. A função percorre somente o diretório corrente.

## Exemplos

1. Assumindo como parâmetro c:/softwell (Sendo que dentro da pasta possui um arquivo Maker.txt e a pasta Webrun). O retorno será uma Lista com os elementos &#123;c:/softwell/Maker.txt, c:/softwell/webrun&#125;.
2. Assumindo como parâmetro \\192.168.1.50\softwell (pasta compartilhada - sendo que dentro da pasta possui um arquivo Maker.txt e a pasta Webrun). O retorno será uma Lista com os elementos &#123;\\192.168.1.50\softwell\Maker.txt, \\192.168.1.50\softwell&#125;.
