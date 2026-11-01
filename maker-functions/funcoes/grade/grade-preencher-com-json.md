---
title: "Grade - Preencher com JSON"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função preenche uma grade a partir de um objeto JSON.

## Parâmetro(s)

1. Formulário que contém a grade.
2. Componente Grade.
3. Lista de JSON do cabeçalho. (Variante) (Ver observação 4)
4. Lista de JSON contendo os valores a serem adicionados na grade. (Variante)

## Retorno

Não possui.

## Observações

1. No parâmetro 4, cada linha da grade corresponde a um JSON dentro da lista.
2. Após preencher a grade com esta função, não é permitido entrar em modo de inserção/edição ou gravar/excluir os registros.
3. Não é possível ordenar a grade com a funcionalidade Shift + Duplo-Clique na coluna após o uso desta função.
4. Chaves do JSON cabeçalho:
name: identificador da coluna. Obrigatório.
title: descrição da coluna. Obrigatório.
width: largura da coluna. Valor padrão: divisão por igual do espaço disponível.
type: tipo da coluna. Valor padrão: text.
align: alinhamento da coluna. Valor padrão: left
visible: define se a coluna pode ser ocultada. Valor padrão: false
5. Os valores possíveis para alinhamento(align) das colunas são: center, left e right.

## Exemplos

JSON cabeçalho: JSON conteudo
[ [
&#123; &#123;
"name": "codigo", "codigo": "1",
"title": "Codigo", "valor": "150"
"width": 150, &#125;,
"type": "text", &#123;
"align": "center", "codigo": "2",
"visible": true "valor": "300"
&#125;
&#125;, ]
&#123;
"name": "valor",
"title": "Valor",
"width": 150,
"type": "text",
"align": "center",
"visible":true
&#125;
]
