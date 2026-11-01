---
title: "Chat - Adicionar Assistente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Servidor

## Descrição

Essa função adiciona um assistente virtual ao componente.

## Parâmetros

1. Formulário
2. Componente
3. Nome do Assistente
4. Imagem (GUID da Imagem armazenada na galeria de imagens).
5. APIKEY (APIKEY obtida na conta da openai).
6. Identificador do Assistente (Obtida na conta da openai)

## Retorno

Valor lógico indicando se o assistente foi adicionado.

## Observações

1. As informações da APIKEY e Identificador do assistente podem ser obtidas no link: https://platform.openai.com/playground
2. Após a utilização dessa função, é recomendado utilizar a função "Chat - Atualizar Componente".
