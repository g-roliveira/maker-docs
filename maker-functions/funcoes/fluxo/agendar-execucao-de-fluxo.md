---
title: "Agendar Execução de Fluxo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=10"
---

**Categoria:** [Fluxo](../../categorias/fluxo)

**Compatibilidade:** Cliente, Servidor

## Descrição

Agenda a execução de um fluxo para ser executado após um determinado tempo.
O tempo deve ser definido em milisegundos.

## Parâmetro(s)

1. Fluxo a ser executado.
2. Lista de parâmetros da regra. (Variante)
3. Tempo para a regra ser executada, em milissegundos. (Número)

## Retorno

Identificador do agendamento. (Inteiro)

## Observações

1. CAMADA CLIENTE - o fluxo a ser executado deve ser da mesma camada.
CAMADA SERVIDOR - o fluxo a ser executado deve ser da mesma camada.
Para agendar fluxos de camadas diferentes, use o subfluxo para agendar.
2. Fluxo servidor não interage com a tela, funções como "Habilitar Controle" ou mensagens não serão exibidos.
3. O primeiro parâmetro pode ser do tipo Letras tendo como valor o nome do fluxo.

ATENÇÃO: PARA AGENDAR UM FLUXO SEM VÍNCULO COM QUEM O INICIOU, UTILIZE A FUNÇÃO "AGENDAR
EXECUÇÃO DE FLUXO SEM PAI", COM ISSO, O GARBAGE COLLECTOR DO JAVA CONSEGUIRÁ LIMPAR MAIS OS OBJETOS TENDO UMA MAIOR LIBERAÇÃO DE MEMÓRIA.
