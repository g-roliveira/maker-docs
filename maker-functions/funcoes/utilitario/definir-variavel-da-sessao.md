---
title: "Definir Variável da Sessão"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

As variáveis de sessão são utilizadas quando houver a necessidade de ter uma variável que se mantém para regras
diferentes. Variáveis de sessão não globais se mantém de acordo com o usuário e as globais se mantém para todo usuário.
Se for necessário, por exemplo, guardar a hora de login de um usuário para ser utilizada em várias regras diferentes, essa
variável de sessão será local. Se for necessário, por exemplo, guardar a quantidade de usuários logados, essa variável de
sessão será global.

## Parâmetro(s)

1. Nome da variável. (Letras)
2. Valor a ser armazenado. (Variante)
3. Escopo da variável. Recebe verdadeiro (se ela vai ser global) ou falso (não global - exclusiva da sessão do navegador). (Lógico)

## Retorno

Retorna o antigo valor da variável. Caso a variável não exista, retorna Nulo. (Letras)

## Observações

1. Filtragem de relatórios por variável de sessão. Caso exista uma variável de sessão com o formato
2. REPORT_FILTER_&lt;campo do filtro do relatório&gt;, o sistema preenche automaticamente o filtro.

## Exemplo

Assumindo como parâmetros: Contador (Letras), 6 (Inteiro) e Verdadeiro (Lógico), quando a função for executada vai ser criada uma varável global chamada Contador com o conteúdo 6.
