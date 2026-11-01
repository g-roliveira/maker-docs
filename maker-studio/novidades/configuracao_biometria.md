---
title: "Instalação - Serviço de Digital"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/configuracao_biometria.html"
---

Guia para instalação do Serviço de Digital no Windows.

Para o perfeito funcionamento do scanner de digitais são necessários realizar as seguintes configurações:

Procedimentos para o computador do cliente

1. [Instalar o NetFramework 4.5.1](https://www.microsoft.com/pt-br/download/details.aspx?id=40779).
2. Instalar o driver de acordo com o modelo do aparelho de leitor de digital homologado que atualmente é o Nitgen FingKey Hamster I, II, III e DX. Para maiores informações, acesse o site do fabricante: &lt;http://www.nitgen.com.br/pt-br/produtos&gt;
3. Baixe o instalador do "Serviço de Digital"
   [**clicando aqui.**](http://download.softwell.com.br/suporte/Instaladores/Softwell_Servico_de_Digital.zip)

Procedimentos para o computador do servidor

1. Para a utilização do serviço de digital é necessário instalar o servidor de digitais na máquina do servidor. Para isso siga as instruções contida [**neste link**](../maker_3/instalacoes/como_instalar_o_servidor_biometrico)

Após realizar o processo supracitado é necessário realizar a configuração do serviço de digital:

1. Informe a porta em que o serviço de digital irá escutar e clique em Avançar. Por padrão, a porta definida é 9000 conforme ilustrado abaixo:

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/BIOPorta.png)

2. Informe o caminho da instalação do servidor de digital e clique em Avançar.

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/BIOCaminhoinstalacao.png)

3. Clique em instalar e aguarde o término da instalação.

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/finalInstall.png)

4. Após a instalação, o serviço "Softwell Serviço de Digital" será adicionado nos Serviços do Windows.
5. Agora é necessário realizar as configurações no WebrunStudio, para tal vamos abrir a tela de configurações [**(clique aqui para saber mais)**](../webrun_3/tela_configuracoes) e criar os seguintes parâmetros:

Criar um novo grupo denominado **ServicoDigital**

Criar um novo parâmetro para o grupo criado: **Porta** e definir a mesma porta da instalação do serviço de digital.

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/BIOConfigmanager.png)

[Veja o exemplo: Realizando login por leitura biométrica](biometria)

Observações:

1. O acesso ao dispositivo de scanner de digitais é bloqueado pelo Mozilla Firefox em páginas HTTPS pois no acesso feito ao leitor biométrico é utilizado o protocolo HTTP, para contornar isso siga as instruções [clicando aqui.](https://support.mozilla.org/pt-BR/kb/conteudo-misto-bloqueado-no-firefox#w_como-desbloquear-conteajdo-misto)
