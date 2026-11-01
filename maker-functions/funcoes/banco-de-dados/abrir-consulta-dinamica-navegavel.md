---
title: "Abrir Consulta Dinâmica Navegável"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Executa um comando de Seleção [SELECT] no Banco de dados retornando dinamicamente uma tabela com os dados.
Caso seja necessário passar parâmetros, este deve estar na consulta com uma interrogação (?) na ordem da passagem dos mesmos.

## Parâmetro(s)

1. Comando de Seleção. (Letras)
2. Conexão. (Variante, Opcional)
3. Quantidade de Parâmetros. (Inteiro)
4. Lista contendo os parâmetros. (N' Variante)

## Retorno

Retorna uma Consulta Dinâmica. (Tabela)

## Observações

1. Essa função é usada para fazer um SELECT (seleção) no banco de dados desejado. Utilize a função "Tabela para Lista" para visualizar todo o conteúdo do retorno.
2. Caso seja necessário executar a consulta em um outro banco de dados, é necessário passar a conexão no 2° Parâmetro.
3. Para criar essa conexão consulte a ajuda sobre a função "Abrir Conexão MSSQL" , "Abrir Conexão Firebird" ou qualquer outro banco.

## Exemplo

Assumindo como 1° Parâmetro = SELECT aco_codigo, aco_nome FROM fr_acao WHERE aco_codigo = ?, 2° Parâmetro = (Null) - *Conexão Principal, 3° Parâmetro = 1 e 4° Parâmetro = 10.
