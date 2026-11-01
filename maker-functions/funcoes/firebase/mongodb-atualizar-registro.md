---
title: "MongoDB - Atualizar Registro"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Servidor

## Descrição

Atualizar um documento ou registro.

## Parâmetro(s)

1. Referência da conexão. (Variante)
2. Nome do Banco de Dados. Ex: BD_TESTE;
3. Nome da coleção. Ex: Funcionário;
4. Critério de busca do documento a ser alterado (Mapa). (Variante, Opcional)
5. Dados a serem atualizados (Mapa). (Variante)

## Retorno

Não possui.

## Observação

Se o parâmetro de critério for omitido, todos os documentos da coleção serão atualizados.

## Exemplo

Critério:
* MAPA: "Criar objeto mapa com parâmetros" com a função "criar lista a partir do elementos", informando sempre chave e valor.
* Os operadores mais conhecidos (&gt;, &gt;=, &lt;, &lt;=, !=, in, !in, or, and, not e nor), podem ser utilizados no critério de busca.
* Caso deseje algum operador diferente do citado acima, consulte a documentação: https://docs.mongodb.com/manual/reference/operator/query/
Documento novo:
* MAPA: "Criar objeto mapa com parâmetros" com a função "criar lista a partir do elementos", informando sempre chave e valor.
* Pode ser especificados todos o campos, alguns campos ou apenas um campo a ser alterado.
