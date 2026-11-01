---
title: "Abrir Conexão Postgres"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função abre uma conexão com um banco de dados em PostgreSQL, para a partir da mesma, o usuário poder executar comandos ou seleções no banco de dados.

## Parâmetro(s)

1. Host do Banco de Dados. (Letras)
2. Nome do Banco. (Letras)
3. Login. (Letras)
4. Senha. (Letras)

## Retorno

Retorna a referência da conexão PostgreSQL. (Variante)

## Observações

1. Ao utilizar esta função, uma conexão e aberta com a porta default do Postgres: 5432.
2. Para abrir uma conexão com uma porta diferente da default, utilize a função: "Abrir Conexão Postgres definindo Porta".

## Exemplos

1. No 1º Parâmetro pode ser utilizado "127.0.0.1".
2. Assumindo como 1° Parâmetro: 127.0.0.1, 2° Parâmetro: bd_treinamento, 3° Parâmetro: postgres e 4° Parâmetro: softwell
o retorno será a referência para uma conexão PostgreSQL caso a conexão seja efetuada com sucesso.
