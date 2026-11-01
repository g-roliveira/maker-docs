---
title: "MongoDB - Consultar Registro"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Servidor

## Descrição

Consultar um documento ou registro;

## Parâmetro(s)

1. Referência da Conexão. (Variante)
2. Nome do Banco de Dados, Ex: BD_TESTE. (Letras)
3. Nome da coleção, Ex: Funcionário. (Letras)
4. Critério (Texto em formato JSON ou Mapa) (Variante, Opcional)
5. Ordenação (Mapa). (Variante, Opcional)
6. Limite de registros por consulta. (Inteiro, Opcional)
7. Número da página (Inteiro, Opcional)

## Retorno

JSON com os dados da consulta. (Variante)

## Observação

Se o parâmetro de critério for omitido, todos os documentos da coleção serão resgatados.

## Exemplo

* Limite de registro por consulta: Caso seja passado o valor 5, irá retornar apenas 5 registros na consulta, caso nulo, não haverá limite de retorno.
* Número da página: Deve ser inserido o número da página que deseja fazer a consulta. Esse parâmetro é utilizado para controle de paginação.
Critério:
* JSON : Texto em formato JSON.
* Exemplo: &#123;"CPF" : "668.678.816-98" &#125;;
Irá buscar o documento cujo o CPF é igual ao 668.678.816-98.
* MAPA: "Criar objeto mapa com parâmetros" com a função "criar lista a partir do elementos", informando sempre chave e valor.
* Os operadores mais conhecidos (&gt;, &gt;=, &lt;, &lt;=, !=, in, !in, or, and, not e nor), podem ser utilizados no critério de busca.
* Caso deseje algum operador diferente do citado acima, consulte a documentação: https://docs.mongodb.com/manual/reference/operator/query/
* Ordenação: Função "Criar objeto mapa com parâmetros" com o parâmetro de "Criar Lista a partir dos elementos", Chave e Valor.
* A chave deverá ser o nome do campo e o valor o tipo de ordenação. Caso seja ascendente usar o valor 1 e descendente -1.
