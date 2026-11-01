---
title: "Chat - Usuário é Administrador do Grupo?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente

## Descrição

Verifica se um usuário é administrador de um grupo (em cache).

## Parâmetro(s)

1. Componente Chat.
2. ID do Grupo. (Inteiro)
3. ID do Usuário. (Inteiro)

## Retorno

Valor lógico indicando se o usuário é administrador do grupo. (Lógico)

## Observações

1. Essa função utiliza a cache do componente chat.
2. Se o grupo não estiver na lista do chat especificado, a função retornará falso.
