---
title: "PDF - Inserir Metadados Customizados"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=71"
---

**Categoria:** [Office](../../categorias/office)

**Compatibilidade:** Servidor

## Descrição

Essa função insere metadados customizados ao arquivo PDF.

## Parâmetro(s)

1. Caminho do arquivo.(PDF - Origem) (Letras)
2. Caminho do arquivo.(PDF - Destino) (Letras)
3. Propriedades customizadas.(JSON). (Variante) Ver observação 1

## Retorno

Não possui.

## Observações

1. As propriedades customizadas trata-se de um json contendo a chave(o nome da propriedade desejada) e o valor da propriedade.
Ex: &#123;"softwell":"2007"&#125;.
1. Deve-se utilizar a função "JSON - Criar Objeto".
