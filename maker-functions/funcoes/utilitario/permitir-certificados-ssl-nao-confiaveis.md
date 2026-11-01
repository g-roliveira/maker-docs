---
title: "Permitir certificados SSL não confiáveis?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Determina se a aplicação deve aceitar ou não certificados não confiáveis. Certificados não confiáveis são aqueles onde
a identidade do mesmo não pôde ser atestada.

Parâmetro:
1. "Falso" para não aceitar certificados não confiáveis ou "Verdadeiro" para o aceitá-los.

## Retorno

Não possui.

## Observação

Por padrão, a partir da versão 2.6.2.29 do Webrun, certificados não confiáveis são aceitos.

## Exemplo

Ao entrar no sistema, caso deseje não permitir certificados SSL não confiáveis, utilize esta função assumindo o parâmetro
como "falso". Dessa forma, caso utilize a função "Obter conteúdo da URL" e a URL informada esteja com um certificado
SSL inválido, o conteúdo não será acessado e uma janela de erro será apresentada.
