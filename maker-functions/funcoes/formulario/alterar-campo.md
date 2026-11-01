---
title: "Alterar Campo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Altera o campo do formulário com o conteúdo passado no 2° parâmetro.

## Parâmetro(s)

1. Campo para ser alterado. (Campo)
2. Novo valor do campo. (Variante)

## Retorno

Não possui.

## Observações

1. Para selecionar o campo é necessário indicar o nome do formulário no "Início" do fluxo .
2. Caso não queira indicar o formulário no início, pode escrever o nome (Letras) do campo como parâmetro.
3. O campo precisa estar associado a um campo da Tabela. Caso o isso não ocorra, usa-se a função "Alterar
valor do componente" da categoria "Formulário".
4. A função não determina qual o formulário onde deve ser alterado, no entanto caso queira alterar um valor da
grade será necessário usar a função "Alterar valor do componente".
5. Ao utilizar a função na camada servidor, caso o componente a ser alterado esteja vinculado a campo, a função só funcionará com o formulário em modo de inserção ou alteração.

## Exemplo

Assumindo como parâmetros o campo "Telefone" (Letras) de uma tabela qualquer e o valor "3354-9554" (Letras),
após o fluxo ser executado o campo "Telefone" conterá o conteúdo "3354-9554".
