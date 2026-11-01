---
title: "LDAP - Conectar"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_ldap/ldap_conectar.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Autentica um usuário via LDAP.

Parâmetros:

1. Servidor

2. Porta

3. Domínio

4. Usuário

5. Senha

![image1081.gif](../../_assets/image1081.gif)

Retorno:

Retorna a conexão LDAP se a autenticação foi efetuada com sucesso. Caso contrário, retorna Nulo. Caso o Servidor ou a Porta estejam incorretos, um erro será lançado.

Exemplo:

Servidor: authserv

Porta: 389

Domínio: softwell.local

Usuário: maker

Senha: 1

Nome Real:

ebfLDAPConnect

Compatibilidade:

Servidor
