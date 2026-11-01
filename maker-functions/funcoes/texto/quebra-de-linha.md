---
title: "Quebra de Linha"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=3"
---

**Categoria:** [Texto](../../categorias/texto)

**Compatibilidade:** Todas as camadas

## Descrição

Usado para quebrar a linha (pular linha) em um texto, onde o parâmetro recebido será a quantidade de linhas à serem
puladas.

Parâmetro:
1. Quantidade de quebra de linhas. (Inteiro)

## Retorno

Retorna um texto com a quantidade de quebra de linha passada como parâmetro. (Letras)

## Exemplo

Em um processamento com uma concatenação onde o 1º parâmetro é "Maker" (Texto) o segundo é uma Quebra de 1 Linha
(Função "Quebra de linha" passando 1(Inteiro) como parâmetro) e o terceiro é "Flow" (texto), o retorno seria:
"Maker
// Quebra de Linha
Flow".
