---
title: "LDAP - Obter Valores"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=54"
---

**Categoria:** [LDAP](../../categorias/ldap)

**Compatibilidade:** Servidor

## Descrição

Obtém valores via LDAP. Deve ser passado o filtro que será executado e o tipo do retorno.

## Parâmetro(s)

1. Conexão LDAP. (Variante)
2. Filtro a ser executado. (Letras)
3. Tipo de retorno. (Letras)

## Retorno

Lista de valores a partir do filtro e retorno passados. (Variante)

## Exemplo

Assumindo os parâmetros como:
Obter Grupos
Filtro: (objectClass=group)
Retorno: name
