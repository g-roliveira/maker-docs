---
title: "Problema com permissão ao empacotar projeto com banco SQL Server 2005"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/banco_de_dados/problema_com_permissao_empacotar_em_sql_server_2005.htm"
---

# Problema com permissão ao empacotar projeto com banco SQL Server 2005?

Execute o comando abaixo para dar a permissão necessária para [Empacotar](../../maker_2/empacotando_projetos/empacotando_projetos) projetos:

use [master]

GO

GRANT EXECUTE ON [sys].[sp_OACreate] TO [DOMÍNIO\Usuário]    // Domínio e usuário da rede.

GO

GRANT EXECUTE ON [sys].[sp_OADestroy] TO [DOMÍNIO\Usuário]

GO

GRANT EXECUTE ON [sys].[sp_OAGetErrorInfo] TO [DOMÍNIO\Usuário]

GO

GRANT EXECUTE ON [sys].[sp_OAGetProperty] TO [DOMÍNIO\Usuário]

GO

GRANT EXECUTE ON [sys].[sp_OAMethod] TO [DOMÍNIO\Usuário]

GO

GRANT EXECUTE ON [sys].[sp_OAStop] TO [DOMÍNIO\Usuário]

GO

GRANT EXECUTE ON [sys].[sp_OASetProperty] TO [DOMÍNIO\Usuário]

GO

sp_configure 'show advanced options', 1;

GO

RECONFIGURE;

GO

sp_configure 'xp_cmdshell', 1

GO

sp_configure 'Ole Automation Procedures', 1;

GO

RECONFIGURE;

GO
