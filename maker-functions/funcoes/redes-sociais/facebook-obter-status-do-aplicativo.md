---
title: "Facebook - Obter Status do aplicativo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=65"
---

**Categoria:** [Redes Sociais](../../categorias/redes-sociais)

**Compatibilidade:** Cliente

## Descrição

Esta função verifica o estado do aplicativo e se a sessão do usuário está definida como logado ou não no Facebook.

## Parâmetro(s)

1. Fluxo que receberá o Status do Aplicativo. (Fluxo)
2. Lista de Parâmetros do fluxo. (Variante, Opcional)

## Retorno

Não possui.

## Observação

O fluxo chamado no 1º Parâmetro receberá o Status do aplicativo. O status pode ser "connected" quando o
usuário autenticou a permissão do aplicativo no Facebook, "not_authorized" quando está logado no Facebook mas não
autenticado no Aplicativo ou "unknown" quando não está logado no Facebook, então não se sabe se está autenticado
no Aplicativo.
