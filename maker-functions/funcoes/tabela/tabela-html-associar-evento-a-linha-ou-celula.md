---
title: "Tabela HTML - Associar Evento a Linha ou Célula"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=52"
---

**Categoria:** [Tabela](../../categorias/tabela)

**Compatibilidade:** Cliente

## Descrição

Esta função associa um evento no padrão W3C (DOM Events Specification) a uma linha ou célula de uma tabela criada
previamente com as funções da categoria Tabela.

## Parâmetro(s)

1. GUID da linha ou GUID da célula. (Componente)
2. Descrição do evento. (Letras)
3. Fluxo que será executado quando o evento ocorrer. (Fluxo)
4. Lista com os parâmetros a serem passados para o fluxo. (Variante)

## Retorno

Não possui.

## Observações

1. Caso o componente passado no primeiro parâmetro seja nulo, o evento é associado ao formulário.
2. O fluxo que será associado ao componente deve obrigatoriamente ser do tipo cliente.

## Exemplo

Caso um fluxo de nome "Observador de eventos" precise ser chamado sempre que o usuário passar o mouse sobre um
componente Texto chamado "MakerLabel1", a função ficaria:
1º PARÂMETRO: Guid (Retorno das funções: Tabela - Inserir linha em uma tabela e Tabela - Inserir célula em uma tabela);
2º PARÂMETRO: onmouseover (Letras);
3º PARÂMETRO: Observador de eventos (Letras);
4º PARÂMETRO: nulo;
