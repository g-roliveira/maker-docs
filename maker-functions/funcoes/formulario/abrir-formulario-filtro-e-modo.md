---
title: "Abrir Formulário Filtro e Modo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Servidor

## Descrição

A função abre o formulário no modo passado no 3º parâmetro e filtra automaticamente de acordo com o filtro
passado no 2º parâmetro.

## Parâmetro(s)

1. Formulário que será aberto. (Formulário)
2. Texto indicando o filtro a ser feito. (Letras)
3. Modo de Abertura do formulário. (Inteiro)

## Retorno

Não possui.

## Observações

1. Caso o banco utilizado seja SQL Server e o tipo de dado do filtro seja varchar, deve ser utilizado aspas
simples no filtro.
2. Caso o filtro seja uma chave estrangeira que relaciona a outra entidade, deverá ser utilizado o filtro
tabela.campo=valor (Junção de tabelas).
3. Modos de Abertura: 1 - Inclusão, 2 - Edição . (Para Mobile: [1] - Inclusão, [2] - Edição, [-1] - Navegação, [3]
- Exclusão).

## Exemplo

Assumindo como 1º parâmetro "CIDADE" (Formulário), 2º parâmetro "ESTADO = BAHIA" (Filtro) e 3º
parâmetro "2" (Modo Edição) o resultado será a abertura do formulário em modo de edição, somente com as
cidades que pertencem ao Estado Bahia.
