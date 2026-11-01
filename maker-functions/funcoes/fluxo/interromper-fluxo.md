---
title: "Interromper Fluxo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=10"
---

**Categoria:** [Fluxo](../../categorias/fluxo)

**Compatibilidade:** Cliente, Servidor

## Descrição

Interrompe a execução do fluxo. Caso seja passado alguma mensagem por parâmetro, esta é exibida.
Se houver algum processamento após a utilização dessa função, este não será executado.

Parâmetro:
1. Mensagem a ser exibida. (Letras, Opcional)

## Retorno

Não possui.

## Exemplo

Assumindo como parâmetro "Operação Cancelada" (Letras), quando a função for executada exibirá a mensagem "Operação Cancelada" e o fluxo será interrompido.
Nenhum processamento depois dele será executado.
