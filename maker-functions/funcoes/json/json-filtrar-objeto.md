---
title: "JSON - Filtrar Objeto"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=68"
---

**Categoria:** [JSON](../../categorias/json)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função filtra um objeto JSONArray (lista de objetos JSON) retornando apenas os elementos que satisfazem os critérios de busca informados por parâmetro. A função suporta dois formatos de filtros: Simples (Igualdade) e Avançado (Operadores e Lógica Booleana).

## Parametro(s)

1. Objeto JSONArray
- Tipo: Variante
- Descrição: lista de registros que deseja filtrar.

2. Lista de Lista contendo chave e valor
* Tipo: Variante
* Descrição: A lista de critérios de filtro a ser aplicada. O formato varia entre o modo Simples e Avançado.

## Retorno

Objeto JSONArray Filtrado.
- Tipo: Variante (Array de Objetos).
- Descrição: Um novo Array contendo apenas os elementos que passaram em todas as regras de filtro. Se a lista de filtros estiver vazia ou for inválida, o Array original será retornado.

Formatos de Filtros:

A função detecta automaticamente o formato dos filtros.

1. Modo de Filtro Simples (Compatibilidade / Apenas Igualdade)

Este modo é ativado quando todos os filtros possuem apenas 2 itens na lista interna.

- Formato: [ [chave, valor], [chave, valor], ... ]
- Logica: Trata todos os filtros como AND (todos devem ser verdadeiros)
- Operador: Implicitamente usa Igualdade (=)

## Exemplo

[
["status", "ATIVO"], // status DEVE ser igual a "ATIVO" E
["categoria", "ALIMENTOS"] // categoria DEVE ser igual a "ALIMENTOS"
]

2. Modo de Filtro Avancado (Operadores e Logica)

Este modo é ativado quando pelo menos um filtro possui 3 ou 4 itens na lista interna. Ele suporta diferentes operadores e a combinação de logica AND (E) e OR (OU).

- Formato: [ [chave, operador, valor, tipoLogico], ... ]
- Logica: Os filtros são agrupados automaticamente.
- Filtros AND (padrao) devem ser todos verdadeiros.
- Pelo menos um filtro OR deve ser verdadeiro.
- O resultado final é (todos os ANDs) E (pelo menos um OR).

## Exemplo

[
// AND: O valor deve ser maior ou igual a 100.50 E
["valorTotal", "&gt;=", 100.50],
// OR: O status DEVE ser "PENDENTE" OU
["status", "equals", "PENDENTE", "OR"],
// OR: O status DEVE ser "AGUARDANDO"
["status", "equals", "AGUARDANDO", "OR"]
]

Este exemplo selecionará itens onde o valorTotal é &gt;= 100.50 E (o status é PENDENTE OU o status é AGUARDANDO).*

Tabela de Operadores Validos:

1. (= ou equals) Igual a (comparação estrita de texto).
2. (!= ou notequals) Diferente de.
3. (&gt;) Maior que (comparação numérica, se possível).
4. (&lt;) Menor que (comparação numérica, se possível).
5. (&gt;=) Maior ou igual a (comparação numérica, se possível).
6. (&lt;=) Menor ou igual a (comparação numérica, se possível).
7. (contains) Contém o texto (não sensível a maiúsculas/minúsculas).
8. (startswith) Começa com o texto (não sensível a maiúsculas/minúsculas).
9. (endswith) Termina com o texto (não sensível a maiúsculas/minúsculas).
10. (regex) Corresponde a uma expressão regular.
