---
title: "Formulário está aberto?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente

## Descrição

Verifica se o formulário passado por parâmetro está aberto.

Parâmetro:
1. Formulário.

## Retorno

Retorna verdadeiro se o formulário estiver aberto, caso contrário retorna falso. (Lógico)

## Observações

1. Esta função não identifica os formulários que foram abertos numa moldura. Para tal, deve utilizar a função
"Executar fluxo no Formulário numa Moldura" passando uma regra que irá verificar se o formulário na moldura
está aberto.
2. Esta função só irá funcionar caso exista algum parentesco entre os formulários.
