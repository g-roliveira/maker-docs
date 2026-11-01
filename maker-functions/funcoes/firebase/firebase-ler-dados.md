---
title: "Firebase - Ler Dados"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Cliente, Servidor

## Descrição

Lê um nó/registro em um no banco de dados Firebase.

## Parâmetro(s)

1. Referência da Conexão(No Maker Mobile e na camada Cliente, será obtido automaticamente).
2. Nome do Nó.
3. Filtro a ser realizado (JSON).
4. Tipo de Ordenação ("F": Ordenar resultados pelo valor de uma chave filho específica; "C": Ordenar resultados por chaves filho;
"V": Ordenar resultados por valores filhos.
5. Valor de ordenação (Somente para o tipo "F". Informar o nome de um nó filho para ordenação).
6. Fluxo que receberá os dados lidos (JSON).
7. Lista de parâmetros extra para o fluxo(Na camada cliente não se faz necessário reservar os parâmetros automáticos da função).
8. Fluxo que receberá no primeiro parâmetro a mensagem de erro, quando o mesmo ocorrer (Letras).
9. Lista de parâmetros extra para o fluxo de Erro.

## Retorno

Não possui.

## Observação

O fluxo deverá ter o primeiro parâmetro reservado para recebimento dos dados lidos (Objeto JSON).

## Exemplo

Para o 3º Parâmetro segue exemplo abaixo, serão retornados os primeiros 12 elementos que iniciam com "A" e terminam com "D"
&#123;
"first": 12,
"startWith": "A",
"endsWith": "D"
&#125;
