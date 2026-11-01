---
title: "Timer - Criar Objeto"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente

## Descrição

Esta função cria um novo objeto Temporizador, recebe por parâmetro o nome do temporizador, que será usado nas funções de iniciar, pausar, parar e zerar. Recebe ainda, o Formulário e o componente do tipo caixa de texto no qual este temporizador será constantemente atualizado.

## Parâmetro(s)

1. Nome do Temporizador. (Letras)
2. Formulário onde o componente a ser utilizado pelo Timer.
3. Componente. (Caixa de Texto)

## Retorno

Retorna a referência do timer. (Variante)

## Observação

Caso seja necessário utilizar as funções que manipulam componente, Exemplo: 'Mostrar Componente', deve-se utilizar o ID do componente informado nessa função.

## Exemplo

Neste exemplo, o edit com nome tempo do Formulário "Cadastro de Tempo" irá constantemente ser atualizado com o valor do temporizador criado:
1º Parâmetro: Temporizador (letras)
2º Parâmetro: Cadastro de Tempo
3º Parâmetro: Tempo.
