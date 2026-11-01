---
title: "Obter Valor do Componente do Formulário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém o conteúdo de um componente do formulário principal ou de qualquer outro passado por parâmetro.

## Parâmetro(s)

1. Formulário onde está o componente.
2. Componente do qual se deseja obter o valor.

## Retorno

Conteúdo do campo passado como parâmetro. (Variante)

## Observações

1. É necessário que o componente esteja associado a um campo da tabela.
2. Se não for o formulário principal (que chama o fluxo) e o mesmo estiver aberto, o retorno será o conteúdo
do campo passado naquele registro. Caso o formulário passado não esteja sendo utilizado, o retorno será o primeiro
registro no banco.
3. Para obter o valor de um componente que se encontra em um Sub Form, deve ser passado o formulário do
Sub Form como parâmetro.

## Exemplos

1. No formulário "Cadastro" cujo conteúdo do campo "Cidade" é "Salvador", assumindo como parâmetros
Cadastros (Formulário), "Cidade" (Campo), o retorno será "Salvador".
