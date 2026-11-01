---
title: "Agendar Execução de Fluxo Sem Pai"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=10"
---

**Categoria:** [Fluxo](../../categorias/fluxo)

**Compatibilidade:** Cliente, Servidor

## Descrição

Agenda a execução de um fluxo para ser executado após um determinado tempo.
O tempo deve ser definido em milisegundos.

## Parâmetro(s)

1. Digite o nome da regra. (Fluxo)
2. Lista de parâmetros da regra. (Variante)
3. Tempo para a regra ser executada, em milissegundos. (Número)

## Retorno

Não possui.

## Observações

1. Fluxo cliente somente agenda para a camada CLIENTE, e servidor somente para a camada SERVIDOR, para agendar fluxos de outra camada utilize um subfluxo para agendar;
2. Essa função não agenda fluxos de interação com a tela, funções como "Abrir Formulário" ou mensagens não serão exibidos.
