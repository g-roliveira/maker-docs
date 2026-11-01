---
title: "Alterar Valor do Componente em Outro Formulário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente

## Descrição

Altera o valor de um componente que esteja em outro formulário que não o corrente.

## Parâmetro(s)

1. Formulário.
2. Componente.
3. Novo Valor. (Letras)

## Retorno

Não possui.

## Observações

1. Esta função não altera o valor do componente Lista Dinâmica. Para isso, utilize a função: Alterar Valor da Lista
Dinâmica.
2. É necessário que o outro formulário esteja aberto para que a alteração venha a ser executada com sucesso e que haja
parentesco entre o mesmo.
3. Maker Mobile: É necessário que o formulário esteja em modo de inclusão ou alteração para que o componente ligado a
banco tenha o valor alterado.

## Exemplo

Assumindo como 1º parâmetro o formulário "FORMULARIO1", 2º parâmetro o componente "COMPONENTE" e
como 3º parâmetro o valor "CONTEUDO", o componente "COMPONENTE" receberá o valor "CONTEUDO".
