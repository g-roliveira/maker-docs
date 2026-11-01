---
title: "Permissões para Desenvolvimento no Maker"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/permissoes_para_desenvolvimento_no_Maker.htm"
---

Para utilização correta do Maker, é necessário que o usuário que esteja utilizando-o tenha as devidas permissões de acesso. Como o Maker acessa os sistemas a partir de apontadores (WFRE), que por padrão estão no diretório: C:\Arquivos de Programas\Softwell Solutions\Maker 3\Webrun 3\system\

O usuário deve possuir permissões de escrita e leitura em tal diretório, caso contrário, não conseguirá acessar ou modificar os .wfre.

Permissões para Importação de Arquivos Maker (FRZ)

Para importação de arquivos de extensão .FRZ no Maker, também há necessidade de privilégios administrativos no sistema operacional (Caso a versão do Maker seja anterior a 3 e o sistema operacional seja o Windows Vista ou Windows 7) para solucionar tal problema, deve-se desabilitar o UAC (User Account Control), pois o mesmo restringe algumas permissões de escrita mesmo quando o usuário possui privilégios administrativos.

Desabilitando o User Account Control (UAC)

Para desabilitar o UAC no Windows Vista, os seguintes passos devem ser seguidos:

1. Em Iniciar/Painel de Controle, selecione Contas de Usuário.
2. Com a tela Contas de Usuário aberta, clique em Ativar ou desativar o Controle de Conta de Usuário.
3. Desmarque a opção Utilzar o Controle de Conta de Usuário.
4. Clique em OK e reinicie o computador para que as configurações entrem em vigor.

Para desabilitar o UAC no Windows 7:

1. Em Iniciar/Painel de Controle, selecione a aba de pesquisas e digite UAC.
2. Clique na seguinte opção Alterar opções de controle de usuário.
3. Na tela que será aberta, existe uma espécie de "Nível" de segurança, que deve ser alterada para o menor valor(Never Notify).
4. Clique em OK e reinicie o computador para que as configurações entrem em vigor.
