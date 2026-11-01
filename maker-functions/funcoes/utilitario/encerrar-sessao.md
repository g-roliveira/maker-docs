---
title: "Encerrar Sessão"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Essa função encerra a sessão de um usuário no sistema de acordo os valor passado no primeiro parâmetro.

Parâmetro:
1. Tempo de inatividade. (Inteiro)

## Retorno

Não possui.

## Observações

1. O valor passado no 1º parâmetro define o tempo (em segundos) de inatividade do usuário no sistema.
2. Se o tempo informado no 1º parâmetro for igual a 0 (zero), a sessão irá expirar imediatamente.
3. Se o parâmetro avançado RedirecionarAoExpirar estiver ativo, ao expirar a sessão o usuário será redirecionado para a tela de login.
