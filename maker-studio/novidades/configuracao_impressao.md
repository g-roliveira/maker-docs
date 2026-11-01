---
title: "Configurações da Impressão Direta"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/configuracao_impressao.html"
---

# Instalação - Serviço de Impressão

Guia para instalação do Serviço de Impressão no Windows.

Para o perfeito funcionamento do serviço de impressão é necessário realizar as seguintes configurações:

1. O computador que utilizará o serviço de impressão deve ter o Java instalado. Caso não tenha o Java instalado, é possível realizar o download  [neste link.](https://www.java.com/pt_BR/download/).
2. [Instalar o serviço de impressão.](http://download.softwell.com.br/suporte/Instaladores/Softwell_Servico_de_Impressao.zip) .

Após realizar o processo supracitado é necessário realizar a configuração do serviço de impressão.:

1. Informe a porta em que o serviço de impressão irá escutar e clique em Avançar. Por padrão, a porta definida é 9001 conforme ilustrado abaixo:

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/IMPPorta.png)

2. Informe o caminho da instalação do servidor de impressão e clique em Avançar.

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/IMPCaminhoInstalacao.png)

3. Clique em instalar e aguarde o término da instalação.

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/IMPFinalInstall.png)

Após a instalação, o serviço "Softwell Serviço de Impressão" será adicionado nos Serviços do Windows.

4. Agora é necessário realizar as configurações no WebrunStudio, para tal vamos abrir a tela de configurações e criar os seguintes parâmetros:

Criar um novo grupo denominado **Impressao**

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/Config1.png)

Criar um novo parâmetro para o grupo criado: **Porta** e definir a mesma porta informada na instalação do serviço de impressão.

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/Config2.png)

Clicar em Salvar.

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/Config3.png)

Observação: È de **extrema importância** a configuração da porta no WebrunStudio para perfeito funcionamento
do serviço de impressão.

A impressão é realizada na impressora padrão do sistema.
