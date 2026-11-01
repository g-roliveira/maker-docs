---
title: "Como replicar as atualizações para outros computadores"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/diversos/como_replicar_atualizacoes_outros_computadores.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Diversos &gt;&gt; Como replicar as atualizações para outros computadores

Após atualizar o servidor, faça na(s) máquina(s) destino:

Sugestão: Recomenda-se que seja feito um backup dos arquivos da pasta C:\Arquivos de programas\Softwell Solutions\Maker 3\Webrun 3 antes da atualização.

1. Botão Iniciar do Windows, acesse a pasta Softwell Solutions, subpasta Webrun 3 e desta a opção Configuração do Webrun 3 e pare o serviço utilizando o botão ![image413.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image4135.jpg).
2. Apague a pasta Work que está localizada em C:\Arquivos de programas\Softwell Solutions\Maker 3\Webrun 3\tomcat (Diretório Padrão).
3. Apague a pasta Webrun que está localizada em C:\Arquivos de programas\Softwell Solutions\Maker 3\Webrun 3\tomcat\webapps (Diretório Padrão).
4. Acesse a pasta ...\Arquivos de programas\Softwell Solutions\Maker 3\Webrun 3\tomcat\webapps do computador de origem e copie o arquivo webrun.war.
5. Substitua o arquivo webrun.war da máquina que será atualizada (está localizado em C:\Arquivos de programas\Softwell Solutions\Maker 3\Webrun 3\tomcat\webapps).
6. Retorne a tela Configuração do Webrun 3, e reative o serviço.
