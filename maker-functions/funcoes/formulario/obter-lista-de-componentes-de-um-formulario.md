---
title: "Obter Lista de Componentes de um Formulário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Retorna uma lista contendo todos os componentes (e seus objetos) do formulário passado como parâmetro.

Parâmetro:
1. Formulário.

## Retorno

Lista de componentes do formulário. (Variante)

## Observações

1. Caso o parâmetro seja nulo, a função retornará a lista de componentes do formulário corrente.
2. Ao utilizar a função na camada cliente, os componentes da barra de navegação também serão listados independente da propriedade Navegação do Formulário.
3. Para que os componentes da barra de navegação não sejam listados, é necessário desabilitá-los nas definições do formulário.
