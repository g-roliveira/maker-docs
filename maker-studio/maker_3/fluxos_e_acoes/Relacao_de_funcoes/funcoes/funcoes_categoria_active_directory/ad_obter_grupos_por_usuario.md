---
title: "AD - Obter Grupos por Usuário"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_active_directory/ad_obter_grupos_por_usuario.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Obtém os grupos do Active Directory de um determinado usuário.

Parâmetros:

1. Servidor

2. Porta

3. Domínio

4. Usuário

5. Senha

6. Usuário o qual irá obter os grupos

![image1047.gif](../../_assets/image1047.gif)

Retorno:

Retorna uma lista contendo os grupos do Acitve Directory do usuário passado pelo último parâmetro. Caso o Servidor ou a Porta estejam incorretos, um erro será lançado.

Exemplo:

Servidor: authserv

Porta: 389

Domínio: SOFTWELL.local

Usuário: maker

Senha: 1

Usuário a obter os grupos: joao

Nome Real:

ebfADGetGroupsByUser

Compatibilidade:

Servidor
