---
title: "Produtório"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=1"
---

**Categoria:** [Matemática](../../categorias/matematica)

**Compatibilidade:** Cliente, Servidor

## Descrição

Efetua o produtório dentro de um intervalo definido.
Para cada valor definido no intervalo (a partir do incremento), a regra definida será executada e retornará um valor.
Todos esses valores serão multiplicados num total, o qual será o retorno da função.

## Parâmetro(s)

1. Nome da regra. (Fluxo)
2. Valor inicial, padrão 1. (Número)
3. Valor final. (Número)
4. Incremento, padrão 1. (Número)

## Retorno

Produtório, no intervalo definido, da execução das funções. (Número)

## Observações

1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
2. Utilize a função "Potência" para elevar um número ao quadrado.

## Exemplo

Assumindo como 1° Parâmetro sendo o fluxo: "XYZ" onde este fluxo recebe um parâmetro e eleva o mesmo ao quadrado,
o 2° Parâmetro sendo o valor: 1, o 3° Parâmetro sendo o valor: 2, e o 4° Parâmetro sendo o valor: 1, o retorno da função será 4 (1² * 2²).
