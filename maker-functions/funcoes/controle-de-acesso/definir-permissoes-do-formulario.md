---
title: "Definir Permissões do Formulário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=24"
---

**Categoria:** [Controle de Acesso](../../categorias/controle-de-acesso)

**Compatibilidade:** Servidor

## Descrição

Define permissões de acesso do formulário para o grupo informado.

## Parâmetro(s)

1. Código do grupo. (Inteiro) (Ver observação 1)
2. Código do formulário. (Inteiro) (Ver observação 2)
3. Estado do formulário (Visível ou Invisível). (Lógico)
4. Apenas leitura? (Lógico)
5. Tem permissão de inclusão? (Lógico)
6. Tem permissão de exclusão? (Lógico)

## Retorno

Não possui.

## Observações

1. O 1º Parâmetro pode ser obtido através da tabela fr_grupo.
2. O 2º Parâmetro pode ser obtido através da tabela fr_formulário.
3. O 3º parâmetro define se o grupo informado terá acesso ou não ao formulário.
4. As permissões definidas serão aplicadas imediatamente, desta forma, não é necessário que o usuário efetue um novo login para que as permissões tenham efeito.
