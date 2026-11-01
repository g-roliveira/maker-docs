---
title: "Somatório"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=1"
---

**Categoria:** [Matemática](../../categorias/matematica)

**Compatibilidade:** Cliente, Servidor

## Descrição

Efetua o somatório dentro de um intervalo definido.
Para cada valor definido no intervalo (a partir do incremento), a regra definida será executada e retornará um valor.
Todos esses valores serão somados num total, o qual será o retorno da função.

## Parâmetro(s)

1. Nome da regra. (Letras)
2. Valor Inicial, padrão 0. (Número)
3. Valor Final. (Número)
4. Incremento, padrão 1. (Número)

## Retorno

Somatório, no intervalo definido, da execução das funções.

## Observação

Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.

## Exemplo

1. Assumindo o 1º Parâmetro como um fluxo "XYZ" que recebe um parâmetro e eleva o mesmo ao quadrado,
o 2º Parâmetro como 1, o 3º Parâmetro como 2, e o 4º Parâmetro como 1, o retorno da função seria 5 (1² + 2²).
