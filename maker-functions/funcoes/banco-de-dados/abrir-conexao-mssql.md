---
title: "Abrir Conexão MSSQL"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função abre uma conexão com um banco de dados "MSSQL", para a partir da mesma, o usuário poder executar comandos ou seleções no banco de dados.

## Parâmetro(s)

1. Host do Banco. (Letras)
2. Nome do Banco. (Letras)
3. Login. (Letras)
4. Senha. (Letras)
5. Fechar conexão automaticamente? (Lógico)

## Retorno

Retorna a referência de uma conexão MSSQL. (Variante)

## Exemplo

Assumindo como 1° Parâmetro: 127.0.0.1, 2° Parâmetro: bd_treinamento: 3° Parâmetro: sa, 4° Parâmetro: 123456 e 5° Parâmetro: true,
o retorno será a referência para uma conexão MSSQL caso a conexão seja efetuada com sucesso.
