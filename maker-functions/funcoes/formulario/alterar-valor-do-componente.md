---
title: "Alterar Valor do Componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

A função altera o conteúdo do componente que está no formulário passado como parâmetro pelo conteúdo
passado no 3º parâmetro.

## Parâmetro(s)

1. Formulário onde está o componente.
2. Componente que será alterado.
3. Novo valor do componente. (Variante)

## Retorno

Não possui.

## Observações

1. Esta função altera valores somente de componentes do formulário da qual ela foi chamada. Para alterar valor
do componente em outro formulário, deve-se utilizar a função "Alterar Valor do Componente em Outro Formulário".
2. Ao utilizar a função na camada servidor, caso o componente a ser alterado esteja vinculado a campo, a função só funcionará com o formulário em modo de inserção ou alteração.

## Exemplo

Assumindo como parâmetros "Cadastro" (Constante do tipo Formulário), MakerEdit1 (Constante do tipo
Componente) e "Salvador" (Letras), ao fluxo ser executado, o componente "MakerEdit1" passaria a ter o
conteúdo "Salvador".
