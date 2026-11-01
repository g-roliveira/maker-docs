---
title: "Criar Nova Pasta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Cria uma nova pasta no servidor.

Parâmetro:
1. Caminho absoluto da pasta. (Letras)

## Retorno

Verdadeiro, caso toda a estrutura de pastas tenha sido criada. Falso, caso contrário. (Lógico)

## Observação

Caso a pasta definida no primeiro parâmetro já exista, a mesma é mantida e a função retorna "False".

## Exemplo

Assumindo como parâmetro a referência para a pasta "C:\Pasta", caso já exista uma pasta de mesmo
caminho absoluto, o retorno será "False".
