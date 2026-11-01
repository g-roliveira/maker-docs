---
title: "LDAP - Obter Valores"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_ldap/ldap_obter_valores.htm"
---

Descrição:

Obtém valores via LDAP. Deve ser passado o filtro que será executado e o tipo do retorno.

Parâmetros:

1. Conexão LDAP

2. Filtro a ser executado

3. Tipo de retorno

![image1083.gif](../../../../../image1083.gif)

Retorno:

Lista de valores a partir do filtro e retorno passados.

Exemplo:

Obter Grupos

Filtro: (objectClass=group)

Retorno: name

Nome Real:

ebfLDAPGetValues

Compatibilidade:

Servidor
