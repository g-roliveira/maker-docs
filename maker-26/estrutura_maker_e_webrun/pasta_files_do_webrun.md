---
title: "Pasta FILES do Webrun"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/estrutura_maker_e_webrun/pasta_files_do_webrun.htm"
---

Toda vez que é feito um upload de uma imagem no Webrun, essa imagem pode ser armazenada de três formas diferentes:

- Associada ao banco - quando armazenada em um campo;
- Associada a uma URL - quando se utiliza a função Criar imagem estática;
- Armazenada na pasta FILES - gerando um GUID, identificando o objeto. Esta pasta (localizada em ***C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Webrun 2\tomcat\webapps\&lt;contexto do Webrun&gt;\files***) é criada automaticamente no armazenamento de uma imagem. Isso acontece quando o campo associado que receberá a imagem for do tipo string. Caso o campo seja binário, o conteúdo da imagem é armazenado diretamente no banco.

Observação: A estrutura "C:\Arquivos de programas\Softwell Solutions\Maker 2.5" é referente a instalações feitas a partir do Dvd Instalador do Maker 2.5. A estrutura "C:\Arquivos de programas\Softwell Solutions\Maker 2.6" refere-se a instalações feitas a partir do Dvd Instalador do Maker 2.6.
