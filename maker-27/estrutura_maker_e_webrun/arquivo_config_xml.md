---
title: "Arquivo CONFIG.XML"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/estrutura_maker_e_webrun/arquivo_config_xml.htm"
---

Este arquivo registra as configurações definidas na tela Parâmetros de Configuração.

Já que o seu conteúdo é relativo às configurações que o usuário definir, temos, como padrão, grupos de parâmetros, como é exibido abaixo:

- Configuração do Agendador de tarefas - configuração do tempo de execução

&lt;group&gt;

&lt;group-name&gt;Agendador&lt;/group-name&gt;

&lt;item&gt;

&lt;item-name&gt;Tempo&lt;/item-name&gt;

&lt;item-param&gt;600000&lt;/item-param&gt;

&lt;/item&gt;

&lt;/group&gt;

- Configuração dos componentes de formulário

&lt;group&gt;

&lt;group-name&gt;Componentes&lt;/group-name&gt;

&lt;item&gt;

&lt;item-name&gt;CarregarMoreLookup&lt;/item-name&gt;

&lt;item-param&gt;1&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

&lt;item-name&gt;PaginacaoConsulta&lt;/item-name&gt;

&lt;item-param&gt;100&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

&lt;item-name&gt;PaginacaoGrid&lt;/item-name&gt;

&lt;item-param&gt;100&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

&lt;item-name&gt;PaginacaoMoreLookup&lt;/item-name&gt;

&lt;item-param&gt;100&lt;/item-param&gt;

&lt;/item&gt;

&lt;/group&gt;

- Configuração de ações a executar na chamada do Webrun

&lt;group&gt;

&lt;group-name&gt;Inicializacao&lt;/group-name&gt;

&lt;item&gt;

&lt;item-name&gt;oracle.jdbc.V8Compatible&lt;/item-name&gt;

&lt;item-param&gt;true&lt;/item-param&gt;

&lt;/item&gt;

&lt;/group&gt;

- Configurtação do Proxy

&lt;group&gt;

&lt;group-name&gt;Proxy&lt;/group-name&gt;

&lt;item&gt;

&lt;item-name&gt;Porta&lt;/item-name&gt;

&lt;item-param&gt;3128&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

&lt;item-name&gt;Senha&lt;/item-name&gt;

&lt;item-param&gt;123abc&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

&lt;item-name&gt;Servidor&lt;/item-name&gt;

&lt;item-param&gt;192.168.1.1&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

&lt;item-name&gt;Usuario&lt;/item-name&gt;

&lt;item-param&gt;jaime&lt;/item-param&gt;

&lt;/item&gt;

&lt;/group&gt;

- Configuração do Gerador de Relatório

&lt;group&gt;

&lt;group-name&gt;Relatorio&lt;/group-name&gt;

&lt;item&gt;

&lt;item-name&gt;GeradorLocalPadrao&lt;/item-name&gt;

&lt;item-param&gt;0&lt;/item-param&gt;

&lt;/item&gt;

&lt;/group&gt;

- Configuraçõs de Sessão

&lt;group&gt;

&lt;group-name&gt;Sessao&lt;/group-name&gt;

&lt;item&gt;

&lt;item-name&gt;DebugCachedFiles&lt;/item-name&gt;

&lt;item-param&gt;0&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

&lt;item-name&gt;DebugMode&lt;/item-name&gt;

&lt;item-param&gt;0&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

&lt;item-name&gt;RuleTimeout&lt;/item-name&gt;

&lt;item-param&gt;300&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

&lt;item-name&gt;Tempo&lt;/item-name&gt;

&lt;item-param&gt;36000&lt;/item-param&gt;

&lt;/item&gt;

&lt;/group&gt;
