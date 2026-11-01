---
title: "Executar Fluxo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=10"
---

**Categoria:** [Fluxo](../../categorias/fluxo)

**Compatibilidade:** Todas as camadas

## Descrição

Executa o fluxo determinado pelo 1° parâmetro. Pode-se passar uma lista de parâmetros para o fluxo através do 2° parâmetro.

## Parâmetro(s)

1. Nome do fluxo que se deseja executar. Deve-se passar o nome exato ao cadastrado. (Letras)
2. Lista de parâmetros que o fluxo necessita. (Variante)

## Retorno

Caso seja um fluxo Servidor executando um Cliente, o retorno será nulo visto que, por não haver sincronia nesse tipo de execução, não é possível obter o retorno do fluxo Cliente. (Variante)

## Observação

Utilize a Função "Criar Lista a partidos do Elementos" para atender o 2° parâmetro. E caso não haja, deixar Nulo.
