---
title: "Parâmetros de Configuração - Segurança"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/parametros_de_configuracao_seguranca.htm"
---

# Parâmetros de Configuração - Seguranca

Com a configuração dos parâmetros explicados neste tópico, é possível restringir o acesso à tela de configurações do Webrun. Definindo o parâmetro:

- RestringirAcessoAdministrativo - propriedade utilizada para determinar o nível de acesso que os usuários terão à área de administração. Por padrão, a área administrativa do Webrun está configurada para ser acessada para todos os IP's. Como valor para esta propriedade, podem ser definidos:

- E - restringe o acesso apenas para os IP's cadastrados na propriedade PrefixoExterno do grupo [Sessao](webrun_2/parametro_configuracao/parametros_configuracao_sessao);
- A - restringe todos os acessos;

Observações:

1. Tanto o valor E quanto A não valem para os IP's definidos na propriedade AdministracaoIPsPermitidos.
   1. N - qualquer acesso será permitido.
2. AdministracaoIPsPermitidos: são definidos os IP's que não fazem parte da restrição de acesso à área administrativa do Webrun.
