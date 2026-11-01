---
title: "Como editar os serviços do Webrun manualmente"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/como_editar_servicos_webrun_manualmente.htm"
---

Alterando a memória inicial e máxima do Apache Tomcat:

1. Clique em Iniciar (do Windows) e clique em Executar. Na janela que se abrirá, digite services.msc e pressione a tecla Enter.
2. Localize o serviço Webrun 3, clique com o botão direito e selecione a opção Propriedades.
3. No campo Caminho do executável, copie o endereço:

![image325.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image325.jpg)

4. Retorne ao botão Iniciar (do Windows) e clique em Executar. Na janela, cole o caminho do executável.
5. Modifique o nome do executável para tomcat7w.exe e o parâmetro de RS(Run Service) para ES(Edit Server:

![image326.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image326.jpg)

6. Na janela que se abrirá, vá para a aba Java, altere a memória inicial (Initial memory pool) e a memória máxima (Maximum memory pool) para a metade da quantidade memória da máquina ( Ex.: 1024 cada um) e clique em Aplicar.

![image327.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image327.jpg)

7. Na aba General, clique em Stop para parar o serviço, depois em Start para iniciá-lo novamente.
