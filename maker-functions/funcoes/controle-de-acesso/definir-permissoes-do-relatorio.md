---
title: "Definir Permissões do Relatório"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=24"
---

**Categoria:** [Controle de Acesso](../../categorias/controle-de-acesso)

**Compatibilidade:** Servidor

## Descrição

Define se o grupo informado poderá acessar ou não o relatório.

## Parâmetro(s)

1. Código do Grupo. (Inteiro) (Ver observação 1)
2. Código do Relatório. (Inteiro) (Ver observação 2)
3. Pode Acessar? (Lógico)

## Retorno

Não possui.

## Observações

1. O 1º Parâmetro pode ser obtido através da tabela fr_grupo.
2. O 2º Parâmetro pode ser obtido através da tabela fr_relatório.
3. A permissão definida será aplicada imediatamente, desta forma, não é necessário que o usuário efetue um novo login para que a permissão tenha efeito.
