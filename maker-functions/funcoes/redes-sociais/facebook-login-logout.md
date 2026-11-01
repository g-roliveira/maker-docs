---
title: "Facebook - Login/Logout"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=65"
---

**Categoria:** [Redes Sociais](../../categorias/redes-sociais)

**Compatibilidade:** Cliente

## Descrição

Esta função habilita a opção de login/logout no Facebook.

## Parâmetro(s)

1. Nome da Moldura. (Componente)
2. AppID do Facebook. (Letras)
3. Habilitar Sair? (Lógico)
4. Quantidade de linhas de perfis a serem exibidos (Inteiro, Opcional)
5. Fluxo a ser executado no login/logout. (Fluxo, Opcional)
6. Parâmetros adicionais para o fluxo. (Variante)
7. Lista de permissões requisitadas. (Variante, Opcional)
8. Tamanho do botão de login. (Letras)
9. Mostrar Foto do Perfil? (Lógico)

## Retorno

Não possui.

## Observações

1. Por padrão, somente o perfil público do usuário é requisitado no 7º Parâmetro. A lista completa de permissões poderá ser obtida em "https://developers.facebook.com/docs/facebook-login/permissions/v2.0#reference".
2. As seguintes opções são válidas para o 8º parâmetro: "small", "medium", "large" ou "xlarge".
