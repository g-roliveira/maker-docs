---
title: "Alterando a memória inicial e máxima do Apache Tomcat (Windows)"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/diversos/alterando_memoria_inicial_maxima_apache_tomcat_windows.htm"
---

1. Ative a janela Executar, a partir do botão Iniciar, e execute o comando services.msc.
2. Localize o serviço Webrun 2, clique com o botão direito do mouse, selecione Propriedades.
3. Copie o caminho do executável.
4. Retorne para janela Executar e cole o caminho do executável.
5. Modifique o nome do executável para tomcat6w.exe e o parâmetro de RS (Run Service) para ES (Edit Server).
6. Na janela que se abrirá, na aba Java, altere a memória inicial (Initial memory pool) e a memória máxima (Maximum memory pool) para a metade da quantidade memória da máquina ( Ex.: 1024 cada) e clique em Aplicar.
7. Volte para a aba General, clique em Stop para parar o serviço, depois em Start para iniciá-lo novamente.

Observação: Na instalação do Maker (DVD de Instalação), é detectada e avaliada a quantidade de memória: sempre definida a metade que a máquina permite. Caso a máquina tenha menos que 256 Mb de memória, o Webrun não funcionará corretamente.
