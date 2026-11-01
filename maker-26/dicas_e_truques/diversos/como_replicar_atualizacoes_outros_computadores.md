---
title: "Como replicar as atualizações para outros computadores"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/diversos/como_replicar_atualizacoes_outros_computadores.htm"
---

Após atualizar o servidor, faça na(s) máquina(s) destino:

Sugestão: Recomenda-se que seja feito um backup dos arquivos da pasta C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Webrun 2 antes da atualização.

1. Botão Iniciar do Windows, acesse a pasta Softwell Solutions, subpasta Webrun2 e desta a opção Configuração do Webrun 2 e pare o serviço utilizando o botão ![image413.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image413.jpg).
2. Apague a pasta Work que está localizada em C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Webrun 2\tomcat (Diretório Padrão).
3. Apague a pasta Webrun que está localizada em C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Webrun 2\tomcat\webapps (Diretório Padrão).
4. Acesse a pasta ...\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\webapps do computador de origem e copie o arquivo webrun.war.
5. Substitua o arquivo webrun.war da máquina que será atualizada (está localizado em C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Webrun 2\tomcat\webapps).
6. Retorne a tela Configuração do Webrun 2, e reative o serviço.
