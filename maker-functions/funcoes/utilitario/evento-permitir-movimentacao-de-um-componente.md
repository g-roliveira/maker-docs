---
title: "Evento - Permitir movimentação de um componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Função que possibilita que um componente seja movimentado dentro de um formulário.

## Parâmetro(s)

1. Nome do componente. (Componente)
2. Permitir movimentação? (Lógico, Opcional)
3. Fluxo (Opcional)
4. Lista de parâmetros. (Variante, Opcional)

## Retorno

Não Possui.

## Observações

1. A regra associada no 3º parâmetro será disparada ao movimentar o componente, sendo que a mesma só poderá ser do
tipo cliente. A regra definida receberá automaticamente oito parâmetros. (Posição X, Posição Y, Posição X anterior, Posição Y anterior, Referência do Componente, Mouse X, Mouse Y, Referência da DIV).
2. Caso não seja definido o 2º parâmetro o mesmo assumirá o valor "true", permitindo a movimentação do componente.
