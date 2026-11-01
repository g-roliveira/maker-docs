---
title: "Abrir Conexão Firebird"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função abre uma conexão com um banco de dados "Firebird", para a partir da mesma, o usuário poder executar comandos ou seleções no banco de dados.

## Parâmetro(s)

1. Host do Banco de Dados. (Letras)
2. Login. (Letras)
3. Senha. (Letras)

## Retorno

Retorna a referência de uma conexão firebird. (Variante)

## Exemplos

1. No 1º Parâmetro pode ser utilizado "127.0.0.1:C:\Firebird\Nome do Banco.FDB".
2. Assumindo como 1º Parâmetro: 127.0.0.1:C:\Firebird\Treinamento.FDB, 2º Parâmetro: SYSDBA e 3º Parâmetro: masterkey,
o retorno será a referência para uma conexão Firebird caso a conexão seja efetuada com sucesso.
