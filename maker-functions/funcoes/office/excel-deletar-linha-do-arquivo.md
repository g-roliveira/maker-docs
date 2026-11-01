---
title: "Excel - Deletar Linha do Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=71"
---

**Categoria:** [Office](../../categorias/office)

**Compatibilidade:** Servidor

## Descrição

Esta função deleta a linha do arquivo.

## Parâmetro(s)

1. Referência para o arquivo. (Variante)
2. Nome da folha (Letras, Opcional) (Ver observação 2)
3. Número da linha a ser deletada. (Número)
4. Remover Linha em Branco? (Lógico, Opcional)

## Retorno

Não possui.

## Observações

1. Esta função de alteração deve ser seguida pela função "Excel - Salvar Arquivo", caso contrário as mudanças não serão aplicadas.
2. Caso o nome da folha não seja informado, as alterações serão realizadas na primeira folha do arquivo.
3. Se o quarto parâmetro for verdadeiro a função removerá todas as linhas em branco da folha.

## Exemplo

Assumindo como parâmetro a referência do arquivo e o nome da folha "Folha 1" e o número da linha 3, a função deletará a linha 3 da "Folha 1".
