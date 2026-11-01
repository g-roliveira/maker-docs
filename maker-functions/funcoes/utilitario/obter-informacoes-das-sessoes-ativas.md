---
title: "Obter Informações das Sessões Ativas"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Essa função obtém as informações das sessões ativas no(s) sistema(s).

Parâmetro:
1. Sigla do sistema. (Letras, Opcional)

## Retorno

Objeto JSON com as informações. (Variante)

## Observações

1. Quando não especificado a sigla do sistema, a função retornará as sessões ativas de todos os sistema que possuem usuários conectados.
2. O objeto JSON retornado terá as seguintes informações:
2. 1 Quantidade de usuários conectados
2. 2. Informações da sessão do usuário:
2. 2.1 Data e hora do login.
2. 2.2 Milissegundos da data.
2. 2.3 Navegador utilizado.
2. 2.4 ID da sessão.
