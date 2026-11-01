---
title: "Abrir Consulta Dinâmica"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Executa uma consulta SQL dinâmica e retorna uma tabela com os dados.
Caso seja necessário passar parâmetros, este deve estar na consulta com uma interrogação (?) na ordem da passagem dos mesmos.

## Parâmetro(s)

1. Comando de Seleção. (Letras)
2. Conexão. (Variante, Opcional)
3. Quantidade de Parâmetros. (Inteiro)
4. Lista contendo parâmetros ou parâmetro. (N' Variante)

## Retorno

Retorna uma Consulta Dinâmica. (Tabela)

## Observação

Essa função é usada para fazer um SELECT (seleção) no banco de dados desejado.

## Exemplo

1° Parâmetro: SELECT TAB_COD FROM TABELA WHERE TAB_COD = ?
2° Parâmetro: (Null) - *Conexão Principal
3° Parâmetro: 1
4° Parâmetro: 10
