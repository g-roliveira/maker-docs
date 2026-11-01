---
title: "Imagem - Alterar URL"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente, Servidor

## Descrição

Altera a URL de um componente imagem.

## Parâmetro(s)

1. Formulário que contém o componente imagem.
2. Nome do componente.
3. URL da imagem. (Letras)

## Retorno

Não possui.

## Observações

1. A função não permitirá a utilização de imagens que não se encontram nas pastas Upload ou TMP. Desta forma, caso exista alguma regra que altere a URL de um componente Imagem e o caminho da URL aponte para uma pasta diferente de Upload ou tmp, o funcionamento será incorreto.
2. Caso a imagem possua uma URL, as características do componente serão mantidas.
3. Caso a imagem inicial esteja definida como Centralizada, ao alterar a URL a mesma continuará assim.
4. Caso seja uma imagem do banco de dados, uma impressão digital ou a imagem esteja como estendida, ela sempre aparecerá nas dimensões do componente.
