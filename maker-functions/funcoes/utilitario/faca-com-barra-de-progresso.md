---
title: "Faça com Barra de Progresso"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Mostra uma barra de progresso com a porcentagem percorrida, enquanto percorre os registros de uma tabela.

## Parâmetro(s)

1. Valor lógico que representa a condição de parada da barra de progresso. (Lógico)
2. Mensagem que aparecerá na barra de progresso. (Letras)
3. Quantidade de registros da tabela. (Número)

## Retorno

Mostra a Barra de progresso baseado na quantidade de registros da tabela. (Lógico)

## Observações

1. Para percorrer todos os registros da tabela é necessário que haja um processamento com a função "Tabela - Próximo registro"
da categoria "Banco de Dados".
2. Essa função é muito utilizada dentro de um componente de decisão usado como estrutura de repetição.
3. Não é possível utilizar a função "Faça com Barra de Progresso" após o uso da função "Upload".
4. Não é possível executá-la dentro de subfluxo servidor chamado por um fluxo cliente.
5. Ao fechar a barra de progresso, o processo que estiver em execução não será cancelado.
6. Quando o 1° parâmetro for "true" será exibida a barra de progresso.

## Exemplo

1. Em uma decisão, assumindo como parâmetros:
1º Uma função "Existem registros" da categoria Banco de Dados.
2º Parâmetro: "Carregando..." (Letras).
3º Parâmetro: Quantidade de registros existentes na tabela passada no primeiro parâmetro.
O resultado é uma barra de progresso que é executada enquanto tabela registros é percorrida. A mensagem mostrada na barra de progresso é "Carregando".
