---
title: "Acesso remoto em uma nova Instância no SQL Server 2005/2008"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/banco_de_dados/acesso_remoto_em_uma_nova_instancia_no_sql_server_2005.htm"
---

Para compartilhar projetos que utilizem banco de dados SQLServer, com instância, em uma rede, são ;necessárias algumas configurações:

- Na tela de Serviços do Windows, na opção chamada Navegador do SQL Server, deve está rodando para permitir o acesso remoto.

![image728.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image728.jpg)

- Com o serviço Navegador do SQL Server ativo, abra o SQL Server Configuration Manager.
- Em Configuração de rede do SQL Server 2005, aparecerão as instâncias do seu banco de dados. Clique nas instâncias e, no lado direito, habilite o protocolo TCP/IP.

![image729.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image729.jpg)

- Em Configuração do SQL Native Client, clique em Protocolo de Cliente. Ao lado aparecerão algumas configurações para Protocolo Cliente onde serão habilitados os protocolos Pipes Nomeados e TCP/IP.

![image730.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image730.jpg)
