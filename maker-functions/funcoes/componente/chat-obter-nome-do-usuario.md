---
title: "Chat - Obter Nome do Usuário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente

## Descrição

Obtém o nome de um usuário do chat (em cache).

## Parâmetro(s)

1. Componente Chat.
2. ID do Usuário. (Inteiro)

## Retorno

Nome do usuário. (Letras)

## Observações

1. Essa função utiliza a cache do componente chat.
2. Se o usuário não estiver na lista do chat especificado, a função retornará um texto vazio.
3. O resultado dessa função pode não refletir o nome do usuário em tempo real no banco de dados. Se o cache do chat estiver desatualizada, ele irá apresentar diferenças. Para isso é possível utilizar a função "Chat - Atualizar Componente" para atualizar a cache do chat.
