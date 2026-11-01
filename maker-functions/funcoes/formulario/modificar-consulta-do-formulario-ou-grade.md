---
title: "Modificar Consulta do Formulário ou Grade"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Servidor

## Descrição

Modifica a consulta de um formulário ou de uma grade.

## Parâmetro(s)

1. Formulário ou Grade vinculado ao componente grade.
2. Tabela navegável. (Tabela)
3. Atualizar formulário ou grade do Parâmetro 1? (Lógico)

## Retorno

Não possui.

## Observações

1. No caso de formulário, a seleção deve ser compatível com a seleção de origem, ou seja, os mesmo campos e tabela
devem estar presentes em ambos (Já que trata-se de uma nova associação de dados ao formulário sendo a consulta
anterior fechada. (O mesmo não vale quando existem Alias configurados aos campos)). Sendo uma grade, todos os
campos podem ser alterados.
2. Ao modificar a consulta do formulário, a nova consulta deixa de ser gerenciada pelo fluxo, ou seja, ele não
se encarregará de fechá-la, pois isso deverá ser uma tarefa do gerenciador do formulário (que a fechará
quando o formulário for fechado).
3. O 2º parâmetro pode ser obtido através da função Abrir Consulta Navegável.
