---
title: "MongoDB - Excluir Registro"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Servidor

## Descrição

Excluir um documento ou registro.

## Parâmetro(s)

1. Referência da conexão. (Variante)
2. Nome do Banco de Dados, Ex: BD_TESTE. (Letras)
3. Nome da coleção, Ex: Funcionario. (Letras)
4. Critério (Mapa). (Variante, Opcional)

## Retorno

Não possui.

## Observação

Se o parâmetro de critério for omitido, todos os documentos da coleção serão removidos.

## Exemplo

Critério:
* MAPA: "Criar objeto mapa com parâmetros" com a função "criar lista a partir do elementos", informando sempre chave e valor.
* Os operadores mais conhecidos (&gt;, &gt;=, &lt;, &lt;=, !=, in, !in, or, and, not e nor), podem ser utilizados no critério de busca.
* Caso deseje algum operador diferente do citado acima, consulte a documentação: https://docs.mongodb.com/manual/reference/operator/query/
