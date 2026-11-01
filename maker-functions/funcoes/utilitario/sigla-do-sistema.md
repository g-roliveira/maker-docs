---
title: "Sigla do Sistema"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

A função retorna o Código (ou sigla) do sistema atual em que o fluxo está sendo executado.

Parâmetro:
Não possui.

## Retorno

Retorna o código (ou sigla) do sistema utilizado. (Letras)

## Observação

Caso existam mais de um sistema com a mesma sigla na pasta systems, esta função retornará o Sigla do sistema com
instância. Exemplo: CTP_SISTEMA02

## Exemplo

Se o fluxo for executado no "Sistema de Contabilidade Pública", que tem como sigla "CTP", a função retornará
"CTP".
