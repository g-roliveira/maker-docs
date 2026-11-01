---
title: "Acesso remoto em uma nova Instância no SQL Server 2005/2008"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/banco_de_dados/acesso_remoto_em_uma_nova_instancia_no_sql_server_2005.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Banco de Dados &gt;&gt; Acesso remoto em uma nova Instância no SQL Server MS SQL Server 2005/2008/2008R2/2012

# Acesso remoto em uma nova Instância no SQL Server MS SQL Server 2005/2008/2008R2/2012

Para compartilhar projetos que utilizem banco de dados SQLServer, com instância, em uma rede, são ;necessárias algumas configurações:

- Na tela de Serviços do Windows, na opção chamada Navegador do SQL Server, deve está rodando para permitir o acesso remoto.

![image728.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql1.png)

- Com o serviço Navegador do SQL Server ativo, abra o SQL Server Configuration Manager.
- Em Configuração de rede do SQL Server MS SQL Server 2005/2008/2008R2/2012, aparecerão as instâncias do seu banco de dados. Clique nas instâncias e, no lado direito, habilite o protocolo TCP/IP.

![image729.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql2.png)

- Em Configuração do SQL Native Client, clique em Protocolo de Cliente. Ao lado aparecerão algumas configurações para Protocolo Cliente onde serão habilitados os protocolos Pipes Nomeados e TCP/IP.

![image730.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql3.png)
