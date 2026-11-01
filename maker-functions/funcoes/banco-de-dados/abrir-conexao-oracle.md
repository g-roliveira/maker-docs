---
title: "Abrir Conexão Oracle"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função abre uma conexão com um banco de dados Oracle, para a partir da mesma, o usuário poder executar comandos ou seleções no banco de dados.

## Parâmetro(s)

1. Host do Banco de Dados. (Letras)
2. Nome do Banco. (Letras)
3. Login. (Letras)
4. Senha. (Letras)

## Retorno

Retorna a referência de uma conexão Oracle. (Variante)

## Exemplos

1. No 1º Parâmetro pode ser utilizado "127.0.0.1".
2. Assumindo como 1° Parâmetro: Nulo, 2° Parâmetro: 127.0.0.1:8081:XE, 3° Parâmetro: sa e 4° Parâmetro: 123456
o retorno será a referência para uma conexão Oracle caso a conexão seja efetuada com sucesso.
