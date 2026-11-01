---
title: "Arredondar Casas Decimais"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=1"
---

**Categoria:** [Matemática](../../categorias/matematica)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função é utilizada para fazer o arredondamento de valores por casas decimais.
O número será arredondado para cima ou para baixo a depender do valor das casas decimais.
Caso o valor das casas decimais seja menor ou igual a 0,5 o número será arredondado para baixo, caso contrário, para cima.
Informando o terceiro parâmetro como verdadeiro, o arredondamento seguirá as normas da ABNT NBR 5891, cujo as regras podem ser encontradas no site oficial.

## Parâmetro(s)

1. Número a ser arredondado.
2. Quantidade de casas decimais, para a qual o número será arredondado. (Inteiro)
3. Seguir padrão ABTN? (Lógico, Opcional)

## Retorno

Retorna o número fracionado passado por parâmetro com as casas decimais arredondadas. (Fracionado)

## Observação

Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.

## Exemplos

1. Este exemplo não se aplica para as normas ABNT:
1. 1 Assumindo como o 1° parâmetro sendo: 9,5782 e o 2° parâmetro sendo: 2 (Inteiro) o retorno será 9.58.
1. 2. Assumindo como o 1° parâmetro sendo: 9,5566 e o 2° parâmetro sendo: 2 (Inteiro) o retorno será 9.56.
2. Através das normas ABNT:
2. 1. Assumindo como o 1° parâmetro sendo: 4,550, o 2° parâmetro sendo: 1 (Inteiro) e o 3º parâmetro sendo: Verdadeiro (Lógico) o retorno será 4.6.
2. 2 Assumindo como o 1° parâmetro sendo: 4,850, o 2° parâmetro sendo: 1 (Inteiro) e o 3º parâmetro sendo: Verdadeiro (Lógico) o retorno será 4.8.
