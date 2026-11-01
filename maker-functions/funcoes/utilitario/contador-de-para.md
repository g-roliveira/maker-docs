---
title: "Contador De Para"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Executa um laço (estrutura de repetição) com o intervalo definido nos parâmetros.

## Parâmetro(s)

1. Variável ou Ponteiro (Funções de ponteiro) que conterá o valor corrente do laço. (Ver observação 2.) (Inteiro)
2. Valor inicial do intervalo. (Caso seja definido como Nulo, então considera-se 0.) (Inteiro)
3. Valor final do intervalo. (Inteiro)
4. Incremento da variável. (Caso não seja definido, considera-se 1.) (Inteiro)

## Retorno

Retorna Verdadeiro enquanto a condição for satisfeita ou falso, caso contrário.
O resultado dessa função pode ser armazenado em uma variável do tipo lógico ou utilizado em um componente "Decisão". (Lógico)

## Observações

1. O valor inicial é atribuído à variável passada por parâmetro.
2. É recomendado a utilização da função "Ponteiro - Criar instância" no primeiro parâmetro desta função, pois A função "Contador De Para" possui
uma limitação que ao declarar mais de uma variável do tipo inteiro com o mesmo valor e utilizá-la na função, todas as variáveis declaradas são
incrementadas.

## Exemplos

1. https://manual.softwell.com.br/#/utilizando_as_funcoes_de_ponteiros_na_funcao_contador_de_para
2. Assumindo como parâmetro uma variável chamada "contador" (Inteiro), 1 (valor Inicial - Inteiro), 3 (Valor Final - Inteiro) e 1 (incremento), enquanto contador for menor ou igual a 3, retorna verdadeiro, caso contrário, retorna falso.
3. Assumindo como parâmetro o retorno da função "Ponteiro - Criar Instância", 2 (valor Inicial - Inteiro), 6 (Valor Final - Inteiro) e 1 (incremento), enquanto contador for menor ou igual a 6, retorna verdadeiro, caso contrário, retorna falso.
