---
title: "Lista Dinâmica - Novo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Servidor

## Descrição

Cria um novo componente Lista Dinâmica.

## Parâmetro(s)

1. Aba. (Caso não seja informada o componente não será criado). (Letras)
2. Posição X. (Inteiro)
3. Posição Y. (Inteiro)
4. Descrição do Componente. (Letras)
5. Consulta SQL. (Constante SQL Consulta)
6. Campo Chave. (Variante)
7. Campo Lista. (Variante)
8. ID do Componente. (Variante)
9. Estilo CSS. (Variante)
10. Classe CSS. (Variante)
11. Mapa com parâmetros extras. (Variante, Opcional)

## Retorno

Não Possui.

## Observações

1. O mapa de parâmetros extras (parâmetro 9) aceita as seguintes chaves:
ALTURA, APENAS_LEITURA, BUSCA_INCREMENTAL, CHAMA_SUB_FORM, CODIGO_FORM,
DICA, HABILITADO, PAGINACAO, PLACE_HOLDER, TAMANHO, TIPO_FILTRO_INICIAL, VISIVEL (Letras).
COR (Cor).
2. Caso a altura não seja informada, o componente assumirá como padrão 21px. Caso a largura não seja informada, o componente assumirá como padrão 121px.
3. Não será possível realizar filtros por constantes ou funções pré-definidas.
