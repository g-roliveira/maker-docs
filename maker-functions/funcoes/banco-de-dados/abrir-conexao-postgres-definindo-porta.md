---
title: "Abrir Conexão Postgres Definindo Porta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função abre uma conexão com um banco de dados em Postgres, na qual o usuário define a porta em que deseja abrir conexão
uma vez a conexão aberta o usuário poder executar comandos ou seleções no banco de dados.

## Parâmetro(s)

1. Host do Banco. (Letras)
2. Nome do Banco. (Letras)
3. Usuário. (Letras)
4. Senha. (Letras)
5. Porta. (Letras)

## Retorno

Retorna a referência da conexão Postgres. (Variante)

## Exemplo

Assumindo como 1° Parâmetro: 127.0.0.1, 2° Parâmetro: bd_treinamento, 3° Parâmetro: postgres, 4° Parâmetro: softwell e 5° Parâmetro: 5491
o retorno será a referência para uma conexão postgres caso a conexão seja efetuada com sucesso.
