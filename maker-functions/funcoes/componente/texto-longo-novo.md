---
title: "Texto Longo - Novo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente, Servidor

## Descrição

Função que cria um novo componente Texto Longo dinamicamente.

## Parâmetro(s)

1. Nome da Aba (caso ainda não exista, será criada). (Letras)
2. Posição X. (Inteiro)
3. Posição Y. (Inteiro)
4. Largura. (Inteiro)
5. Altura. (Inteiro)
6. Descrição. (Letras)
7. Valor inicial. (Letras)
8. Nome do componente. (Letras)
9. Quebra de Linha do valor inserido (Parâmetro 7). (Lógico)
10. Container. (Letras)
11. Estilo CSS. (Letras)
12. Classe CSS. (Letras)

## Retorno

Nome interno definido para o componente. (Variante)

## Observações

1. Caso o 8º Parâmetro não seja definido, será dado com a descrição (Parâmetro 6).
2. A função não vai ter retorno caso seja salva na camada servidor.
