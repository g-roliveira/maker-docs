---
title: "Definir Permissões do Componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=24"
---

**Categoria:** [Controle de Acesso](../../categorias/controle-de-acesso)

**Compatibilidade:** Servidor

## Descrição

Define permissões de acesso ao componente para o grupo informado.

## Parâmetro(s)

1. Código do grupo. (Inteiro) (Ver observação 1)
2. Código do formulário. (Inteiro) (Ver observação 2)
3. Código do componente (Propriedade Código). (Inteiro)
4. Estado do componente (Visível ou Invisível). (Lógico)
5. Apenas leitura? (Lógico)
6. Habilitar componente? (Lógico)

## Retorno

Não possui

## Observações

1. O 1º Parâmetro pode ser obtido através da tabela fr_grupo.
2. O 2º Parâmetro pode ser obtido através da tabela fr_formulário.
3. As permissões definidas serão aplicadas imediatamente, desta forma, não é necessário que o usuário efetue um novo login para que as permissões tenham efeito.
