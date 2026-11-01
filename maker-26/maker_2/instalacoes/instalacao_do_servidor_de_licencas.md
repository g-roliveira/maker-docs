---
title: "Instalação do Servidor de Licenças"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/instalacoes/instalacao_do_servidor_de_licencas.htm"
---

O Sentinel, mais conhecido como Servidor de Licenças, é à ferramenta de proteção a sua cópia do Maker. Abaixo, mostraremos como instalá-lo e configurá-lo.

O instalador vem incluso no Dvd do Maker, e se encontra em DVD de Instalação\Support\Sentinel Protection Installer.exe.

Execute o Aplicativo, a seguinte tela aparecerá. Clique no botão Next.

![image1704.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1704.jpg)

Na próxima tela, será necessária a aceitação dos termos de serviço do sistema. Marque a opção I accept the terms in the license agreement e em seguida clique no botão Next.

![image1705.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1705.jpg)

Aqui, selecione a opção Complete e em seguida no botão Next.

![image1706.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1706.jpg)

Observação: Na opção Custom o usuário pode modificar configurações de instalação como local de instalação e demais alterações.

Clique no botão Next.

![image1707.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1707.jpg)

Aqui a instalação informa que o Firewall do usuário terá suas configurações alteradas, mas que isso não trará problemas de segurança para o mesmo. Clique no botão Yes para começar a instalação.

![image1708.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1708.jpg)

Instalação em progresso.

![image1709.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1709.jpg)

Instalação concluída, clique no botão Finish para finalizar.

![image1710.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1710.jpg)

Reinicie o computador para que as alterações sejam aplicadas.

Depois da reinicialização do sistema, abra o navegador e digite o endereço http://127.0.0.1:7002/, nessa tela o desenvolvedor poderá configurar o controle de acesso e monitorar a utilização das licenças existentes.

![image1711.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1711.jpg)

No meu ao lado encontramos três opções:

![image1712.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1712.jpg)

Clique em Keys Information, a seguinte tela será mostrada.

![image1713.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1713.jpg)

1. Keys# informa quantos Tokens estão disponíveis no servidor.
2. Serial Number informa o serial do Token.
3. Hard Limit informa a quantidade de licenças disponíveis no Token, nesse exemplo são 10.
4. Licenses-In-Use informa quantas licenças então sendo usadas no momento.

Na área Configurações é possível definir algumas configurações do servidor de licenças como mostrado abaixo.

![image1714.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1714.jpg)

1. Error log define o nome do arquivo que será gravado com o log, deve-se utilizar somente o nome sem extensão como, por exemplo, systemcorporatelog.
2. Response log define o nome do arquivo que será gerado o log de resposta, deve-se utilizar somente o nome sem extensão como, por exemplo, responsecorporatelog.
3. SKLM Port define a porta de acesso ao painel de controle de licenças.  No exemplo, a porta utilizada é a 7002.
4. Server Port porta de acesso que os terminais utilizam para acessar a licença.
5. Protocol(s) define o tipo de protocolo que será utilizado pelo servidor de licenças.
6. Authorized user list define a lista de ips que estão autorizados a acessar o painel de controle do servidor de licenças. O IP 127.0.0.1 é padrão, nesse exemplo apenas a maquina local e o ip 192.168.1.136 tem acesso

Observação: sempre depois de uma alteração é necessário que o usuário clique no botão Update para que as configurações sejam salvas.

Após instalação do Servidor de Licenças, é necessário configurar as estações para acessar o servidor.

Por padrão, o Maker tenta localizar automaticamente o Servidor de Licenças Corporativas sendo executado na rede. Caso não seja encontrado, é necessário definir manualmente o endereço do servidor. Utilize o aplicativo LicenseConfig.exe, disponível na pasta de instalação do Maker, para configurar o IP do Servidor.

Este utilitário é de simples manuseio. Siga os passos abaixo:

1. Copie o executável para a pasta do Maker. (Caso não exista);
2. Digite o endereço IP do Servidor no campo apropriado.

![image1715.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1715.jpg)

3. Clique sobre aplicar.

   1. Se tudo ocorrer bem, a seguinte tela será apresentada

![image1718.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1718.jpg)

2. Caso contrário, verifique se o IP está correto e se o Servidor de Licenças está funcionando corretamente.

Instalando o Servidor de Licenças -Este video demonsta a Instalação do Servidor de licenças.
