---
title: "Atualizar Formulário sem Interação"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

A função atualiza o formulário (apenas o registro corrente) onde está o evento sem interação de confirmação com o usuário.

Parâmetro:
Não possui.

## Retorno

Não possui.

## Observações

1. Se essa função for executada antes de salvar alterações feitas no formulário, estas serão perdidas, pois a
essa função traz os dados existente no banco.
2. Indicada para atualizar formulário Modal.
3. Esta função deve ser utilizada em formulário com consulta.
