---
title: "Obter Metadados do Formulário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Servidor

## Descrição

Essa função retorna o metadados da consulta de um formulário passado por parâmetro.

Parâmetro:
1. Formulário.

## Retorno

O retorno é uma lista de lista contendo: (Variante)
- O nome da tabela (letras);
- O nome do campo (letras);
- A descrição do campo de acordo com o dicionário de dados (letras);
- O tipo do campo (letras);
- O tamanho do campo (inteiro);
- A precisão do campo (inteiro);
- Se o campo é autoincremento (lógico);
- Se o campo aceita nulo (1 aceita e 0 não aceita);
- O alias (se existir) ou o nome do campo (letras).
