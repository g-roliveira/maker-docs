---
title: "Ir para posição da Tabela"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para navegar entre os registros da tabela passada por parâmetro.

## Parâmetro(s)

1. Tabela com a Consulta.
2. Posição do registro na tabela. (Inteiro)

## Retorno

Tabela (Com o cursor apontando para o registro informado). (Tabela)

## Observação

A tabela passada como parâmetro deve ser obtida com a função "Obter Tabela do Formulário".

## Exemplo

Selecione uma função para ir para a posição da tabela, atribua ao 1º Parâmetro a consulta da tabela de um formulário com a função "Obter tabela do formulário", escolha de qual formulário deseja obter a tabela, atribua ao 2º Parâmetro o índice do registro que deseja obter, inserir a cima a função (Campo) para obter um campo deste registro e clica em salvar, selecione o campo que deseja obter a função e atribua o resultado a uma variável do tipo tabela.
