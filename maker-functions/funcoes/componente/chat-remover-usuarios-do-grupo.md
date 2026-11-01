---
title: "Chat - Remover Usuários do Grupo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente

## Descrição

Remove usuários de um grupo (em cache).

## Parâmetro(s)

1. Componente Chat.
2. ID do Grupo. (Inteiro)
3. Lista contendo os IDs dos Usuários. (Variante)

## Retorno

Não possui.

## Observações

1. Essa função utiliza a cache do componente chat.
2. Se o grupo não estiver na lista do chat especificado, a função não irá fazer nada.
3. Alterações em grupos só serão feitas se o chat estiver com a propriedade "Permitir Criação de Grupos" habilitada.
4. O usuário logado deve ser administrador do grupo especificado para poder adicionar/remover usuários.
