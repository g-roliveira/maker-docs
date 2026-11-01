---
title: "X509 - Obter Informações do Certificado Digital"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Essa função retorna o certificado de sessão associado a um usuário autenticado via certificado digital.

Parâmetro:
1. Identificador do Usuário (Letras): Identificador do usuário obtido durante o processo de autenticação com o certificado digital (Observação 1).

## Retorno

Texto JSON contento as informações do certificado digital para autenticação, ou texto JSON vazio caso nenhuma informação seja encontrada (Letras).

## Observação

1. O parâmetro userId deve ser um identificador válido retornado no processo de autenticação via certificado digital, que fica disponível na URL de retorno após a autenticação.
