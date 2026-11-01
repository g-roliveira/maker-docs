---
title: "Obter Informações da Consulta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função recebe por parâmetro uma consulta e retorna uma lista de lista.

Parâmetro:
1. Consulta. (Tabela)

## Retorno

Lista de Lista (Variante), contendo:
1 - O nome da tabela (Letras);
2 - O nome do campo (Letras);
3 - A descrição do campo de acordo com o dicionário de dados (Letras);
4 - O tipo do campo (Letras);
5 - O tamanho do campo (Inteiro);
6 - A precisão do campo (Inteiro);
7 - Se o campo é autoincremento (Lógico);
8 - Se o campo aceita nulo (1 aceita e 0 não aceita);
9 - O alias (se existir) ou o nome do campo (Letras).

## Observação

Em banco de dados Oracle devido a uma limitação no drive, essa função não irá retornar o nome da tabela e nem descrição do campo de acordo o dicionário de dados.
