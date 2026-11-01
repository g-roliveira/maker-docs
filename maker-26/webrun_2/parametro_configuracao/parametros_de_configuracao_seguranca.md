---
title: "Parâmetros de Configuração - Segurança"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/webrun_2/parametro_configuracao/parametros_de_configuracao_seguranca.htm"
---

# Parâmetros de Configuração - Seguranca

Com a configuração dos parâmetros explicados neste tópico, é possível restringir o acesso à tela de configurações do Webrun. Definindo o parâmetro:

![image1506.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1506.jpg)

Na tela Parâmetros de Configuração, ao clicar em ![image1871.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1871.gif), mostra os componentes:

- ![image598.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image598.gif) - permite criar um novo parâmetro para o grupo;
- ![image597.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image597.gif) - permite excluir o parâmetro e seus valores. O controle de check ao lado de cada parâmetro será utilizado para esse fim;
- ![image599.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image599.gif) - Permite excluir um valor do parâmetro. podem existir muitos valores para cada parâmetro;
- ![image600.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image600.gif) - Permite adicionar um novo valor ao parâmetro. podem existir muitos valores para cada parâmetro.

Abaixo, verifique o principal parâmetro para o grupo Seguranca:

- RestringirAcessoAdministrativo - propriedade utilizada para determinar o nível de acesso que os usuários terão à área de administração. Por padrão, a área administrativa do Webrun está configurada para ser acessada para todos os IP's. Como valor para esta propriedade, podem ser definidos:

Observações:

1. Para adicionar o parâmetro siga os passos abaixo:
   1. Acesse as configurações do Webrun;
   2. Clique em Parâmetros Avançados;
   3. Crie um novo Grupo com o nome Seguranca;
   4. Crie um novo parâmetro com o nome RestringirAcessoAdministrativo;
   5. Atribua E, A ou N como valor do parâmetro criado anteriormente.

2. Valores aceitos pelo parâmetro:
   1. E: restringe o acesso apenas para os IP's cadastrados na propriedade PrefixoExterno do grupo [Sessao](parametros_configuracao_sessao);
   2. A: Restringe Todos os acessos;
   3. N: Sem Restrição.

3. Tanto o valor E quanto A não valem para os IP's definidos na propriedade AdministracaoIPsPermitidos.
4. AdministracaoIPsPermitidos: são definidos os IP's que não fazem parte da restrição de acesso à área administrativa do Webrun.
