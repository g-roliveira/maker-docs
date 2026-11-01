---
title: "Abrir Conexão DB2"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função abre uma conexão com um banco de dados em DB2, para a partir da mesma, o usuário poder executar comandos ou seleções no banco de dados.

## Parâmetro(s)

1. Host do Banco de Dados. (Letras)
2. Nome do Banco de Dados. (Letras)
3. Login. (Letras)
4. Senha. (Letras)
5. Porta. (Letras, Opcional)

## Retorno

Retorna a referência da conexão DB2. (Variante)

## Observação

Caso a porta não seja definida no 5º parâmetro, a conexão assumirá a porta padrão (50000).

## Exemplo

Assumindo como 1° Parâmetro: 127.0.0.1, como 2° parâmetro o nome: SAMPLE, como 3° parâmetro: db2admin, como 4° parâmetro: 123456 e como 5º parâmetro: nulo. O retorno será a referência da conexão.
