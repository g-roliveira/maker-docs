---
title: "Abrir Formulário Filtrado"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Servidor

## Descrição

Esta função abre o formulário passado no 1º parâmetro e filtra automaticamente pelo filtro passado no 2º
parâmetro.

## Parâmetro(s)

1. Formulário que será aberto (GUID).
2. Texto indicando o filtro. (Letras)

## Retorno

Não possui.

## Observações

1. O campo passado no filtro tem que ser igual ao campo da tabela associada ao formulário que vai ser
aberto.
2. No filtro não podem haver espaços.
3. Caso o banco utilizado seja SQL Server e o tipo de dado do filtro seja varchar, deverá ser utilizado
aspas simples no filtro.
4. Caso o filtro seja uma chave estrangeira que relaciona a outra entidade, deverá ser utilizado o filtro
tabela.campo=valor (Junção de tabelas).
5. Somente poderá ser usado o comparador lógico de igualdade ("=").

## Exemplo

Assumindo como 1º parâmetro "CIDADE" (Formulário) e como 2º parâmetro "ESTADO=BAHIA", o resultado
seria a abertura do formulário "CIDADE" somente com as cidades que pertencem ao Estado Bahia.
