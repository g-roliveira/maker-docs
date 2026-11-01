---
title: "Como configurar Conexão Remota no SQL Server 2005"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/banco_de_dados/como_configurar_conexao_remota_sqlserver2005.htm"
---

# Como configurar Conexão Remota no SQL Server 2005/2008

1º Passo:

Para permitir que computadores acessem instâncias do SQL Server em outra máquina, a primeira coisa a ser feita é uma configuração na instância que receberá as conexões remotas, em nosso caso, o SQLEXPRESS no servidor SWS01 (como exemplo).

![image402.jpg](../../image402.jpg)

Para fazer isso, conecte-se localmente na instância do servidor, clique com o botão direito na instância conectada e aponte o mouse para Properties.

![image403.jpg](../../image403.jpg)

Depois de acessar a tela Server Properties, da instância do SQL Server, escolha, no menu da esquerda, a opção Connections. Na parte direita da tela, referente a Connections, procure a opção Allow remote connections to this server. Deixe essa opção marcada e clique em OK.

![image404.jpg](../../image404.jpg)

2º Passo:

Para permitir que o protocolo TCP/IP trafegue informações do SQL Server e que conexões possam ser estabelecidas por meio desse protocolo, vamos ativá-lo utilizando uma ferramenta disponível na instalação das ferramentas de administração. A ferramenta é o SQL Server 2005 Surface Area Configuration. Essa ferramenta, por padrão, encontra-se na pasta Configuration Tools do SQL Server 2005. Nessa ferramenta, utilizaremos os recursos de Configuração da Área de Superfície de Serviços e Conexões (Surface Area Configuration for Services and Connections).

![image405.jpg](../../image405.jpg)

Acesse Configuração da Área de Superfície de Serviços e Conexões (Surface Area Configuration for Services and Connections). No menu da esquerda, expanda o item da instância. Neste caso, SQLEXPRESS. Depois, expanda Database Engine e selecione Conexões Remotas (Remote Connections). Na tela da direita, selecione a opção Conexões locais e remotas (Local and remote connections) e, em seguida, usando somente TCP/IP (Using TCP/IP only), clique em OK.

![image406.jpg](../../image406.jpg)

Continuando com a configuração do TCP/IP, vamos utilizar agora outra ferramenta, SQL Server Configuration Manager. Nessa ferramenta, utilizaremos o recurso Configuração de Rede do SQL Server 2005 (SQL Server 2005 Network Configuration), que se encontra no menu da esquerda. Ao expandir esse item, encontramos os Protocolos para SQLEXPRESS (Protocols for SQLEXPRESS). Ao clicar nele, algumas opções se abrirão do lado direito da tela. Nas opções disponibilizadas, devemos deixar o protocolo TCP/IP com status de Habilidado (Enabled). Para fazer isso, clique com o botão direito do mouse. Após isso, ele aparecerá configurado.

![image408.jpg](../../image408.jpg)

Depois de configurar o status para Habilitado (Enabled), mais duas verificações devem ser feitas nas propriedades do protocolo TCP/IP. Para acessar essas configurações, clique com o botão direito do mouse em TCP/IP e, em seguida, em Propriedades. Uma tela com duas abas superiores se abrirá. A primeira aba Protocolo (Protocol) deve ficar com a propriedade Habilitado (Enabled) configurada para Sim (Yes).

![image409.jpg](../../image409.jpg)

Na segunda aba, Endereços IP (IP Addresses), devemos garantir que as propriedades Ativo (Active) e Habilitado (Enabled) estejam configuradas para Sim (Yes) e a Porta TCP com o valor 1433.

![image410.jpg](../../image410.jpg)

Após garantirmos essas configurações, clicamos em OK para salvar nossas alterações.

3º Passo:

Para iniciar o serviço do SQL Server Browser, utilizaremos novamente a ferramenta SQL Server Configuration Manger. Para acessar a área que controla os serviços do SQL Server, no menu da esquerda, será utilizado o item Serviços de SQL Server 2005 (SQL Server 2005 Services). Na parte direita da tela, os serviços relacionados com SQL Server são apresentados. O serviço Navegador do SQL Server (SQL Server Browser) encontra-se com seu Estado (State) configurado para Parado (Stopped). Para iniciar o serviço, clique com o botão direito do mouse no serviço e, em seguida, clique em Iniciar (Start). Esse processo levará alguns instantes, e o estado antigo passará a ser Em execução (Running).

![image411.jpg](../../image411.jpg)

Após a inicialização do serviço do Navegador do SQL Server (SQL Server Browser) e as configurações de liberação para acesso remoto e de TCP/IP, o serviço da instância do SQL Server deve ser reiniciado para que as alterações tenham efeito. Para fazer isso, na mesma tela onde foi iniciado o serviço do Navegador do SQL Server (SQL Server Browser), selecione o serviço do SQL Server (SQLEXPRESS), clique com o botão direito do mouse e aponte para Reiniciar (Restart). Aguarde alguns instantes a parada e a inicialização do serviço. Lembre-se de que SQLEXPRESS é a instância do SQL Server do servidor que utilizamos como exemplo.

![image412.jpg](../../image412.jpg)

Observações:

1. Para que as conexões remotas funcionem no SQL Server 2005, o Firewall da rede deve ter exceções para as instâncias do SQL Server 2005 e o serviço do Navegador do SQL Server (SQL Server Browser).
2. Existem restrições para o usuário da versão Standard Edition. Para mais detalhes, acesse o tópico [Recursos e Características das Versões do Maker](../../recursos_e_caracteristicas_das_versoes_do_maker).
