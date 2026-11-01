---
title: "Manter Cursores Após Commit"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Mantém os cursores de uma consulta aberto mesmo após ser dado um commit.

Parâmetro:
1. Conexão com o banco de dados. (Variante, Opcional) (Ver observação 1)

## Retorno

Não possui.

## Observações

1. Se o 1º Parâmetro for passado nulo, a função assume que a conexão principal será considerada.
2. É recomendável utilizar esta função em projetos postgres que utilizem pool de conexões e estejam manipulando funções de transações de banco de daos (Abrir, commit e rolback)
