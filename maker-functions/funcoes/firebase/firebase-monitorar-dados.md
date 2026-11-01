---
title: "Firebase - Monitorar Dados"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Cliente, Servidor

## Descrição

Monitora alterações/atualizações de um nó/registro em um no banco de dados Firebase.

## Parâmetro(s)

1. Referência da Conexão (No Maker Mobile e na camada Cliente, será obtido automaticamente).
2. Nome do Nó a ser monitorado.
3. Filtro a ser realizado (JSON).
4. Tipo de Ordenação ("F": Ordenar resultados pelo valor de uma chave filho específica; "C": Ordenar resultados por chaves filho;
"V": Ordenar resultados por valores filhos.
5. Valor de ordenação (Somente para o tipo "F". Informar o nome de um nó filho para ordenação)
6. Fluxo que receberá os dados de monitoramento.
O fluxo deverá deixar dois parâmetros reservados. O primeiro receberá a ação realizada que é "A": Adição; "D": Remoção; "U": Atualização
O segundo será o JSON com os dados recebidos.
7. Lista de parâmetros extra para o fluxo(Na camada cliente não se faz necessário reservar os parâmetros automáticos da função).

## Retorno

Não possui.

## Exemplo

Para o 3º Parâmetro no exemplo abaixo, serão monitorados os primeiros 12 elementos que iniciam com "A" e terminam com "D"
&#123;
"first": 12,
"startWith": "A",
"endWith": "D"
&#125;
