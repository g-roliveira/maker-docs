---
title: "Aba - Adicionar Nova Aba"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente

## Descrição

Essa função adiciona uma aba de formulário ao componente aba.

## Parâmetro(s)

1. Componente Aba.
2. Código ou GUID do Formulário que será adicionado. (Letras)
3. Título da Aba. (Letras, Opcional)
4. Filtro do Formulário. (Letras, Opcional)

## Retorno

Não possui.

## Observações

1. Se o título da aba não for especificado, o componente irá obter e utilizar o nome do formulário automaticamente.
1. No parâmetro filtro, os campos devem ser iguais aos campos da tabela associada ao formulário que vai ser aberto.
2. No parâmetro filtro, não podem haver espaços.
3. Caso o banco utilizado seja SQL Server e o tipo de dado do filtro seja varchar, deverá ser utilizado aspas simples no filtro.
4. Caso o filtro seja uma chave estrangeira que relaciona a outra entidade, deverá ser utilizado o filtro tabela.campo=valor (Junção de tabelas).
5. Somente poderá ser usado o comparador lógico de igualdade ("=").

## Exemplo

Assumindo como 3º parâmetro "CIDADE" (Formulário) e como 4º parâmetro "ESTADO=BAHIA", o resultado seria a abertura do formulário "CIDADE" somente com as cidades que pertencem ao Estado Bahia.
