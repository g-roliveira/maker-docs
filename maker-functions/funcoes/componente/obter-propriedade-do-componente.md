---
title: "Obter Propriedade do Componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém o valor da propriedade passada por parâmetro.

## Parâmetro(s)

1. Formulário. (Opcional)
2. Componente.
3. Propriedade. (Letras)

## Retorno

Valor atual da propriedade. (Variante)

## Observações

1. Na camada servidor, caso o formulário não seja informado, a função adotará o formulário corrente. Na camada cliente,
sempre será o formulário corrente.
2. O nome da propriedade deverá o nome real e não o de exibição.

## Exemplo

Assumindo como componente "MakerEdit2" e propriedade "AutoAjuste", o retorno será o valor corrente desta propriedade.
