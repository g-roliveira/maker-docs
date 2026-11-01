---
title: "Abrir conexão MYSQL"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função abre uma conexão com um banco de dados em MYSQL, para a partir da mesma, o usuário poder executar comandos ou seleções no banco de dados.

## Parâmetro(s)

1. Host do Banco de Dados. (Letras)
2. Nome do Banco de Dados. (Letras)
3. Login. (Letras)
4. Senha. (Letras)
5. Fechar Conexão quando terminar? (Lógico)

## Retorno

Retorna uma conexão. (Variante)

## Exemplo

Assumindo como 1° parâmetro: 127.0.0.1, 2° parâmetro: o nome do banco, 3°parâmetro: SA, 4° parâmetro: 123456 e 5°parâmetro o valor falso o retorno será uma conexão com o banco MYSQL.
