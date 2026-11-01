---
title: "AD - Obter Contas de Computador"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_active_directory/ad_obter_contas_de_computador.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Obtém todas as contas de computador do Active Directory.

Parâmetros:

1. Servidor

2. Porta

3. Domínio

4. Usuário

5. Senha

![image1045.gif](../../_assets/image1045.gif)

Retorno:

Retorna uma lista contendo as contas de computador do Acitve Directory. Caso o Servidor ou a Porta estejam incorretos, um erro será lançado.

Exemplo:

Servidor: authserv

Porta: 389

Domínio: SOFTWELL.local

Usuário: maker

Senha: 1

Nome Real:

ebfADGetComputerHosts

Compatibilidade:

Servidor
