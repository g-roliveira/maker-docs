---
title: "FTP - Listar conteúdo de uma pasta"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_ftp/ftp_listar_conteudo_de_uma_pasta.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Essa função vai listar o conteúdo de uma pasta. Caso o valor informado no segundo  parâmetro tenha um valor lógico verdadeiro, será listado arquivos, pastas e outras informações dos mesmo, se o valor for falso será exibido apenas uma lista contendo os arquivos e pastas do diretório.

Parâmetros:

1. Um Objeto FTP (Variante) que represente uma conexão FTP aberta.

2. Um valor lógico, esse valor será o responsavel pelo tipo de retorno dessa função, se verdade, o retorno será mais detalhado, caso contrário, só será listado as pastas e arquivos contidas nesse diretório.

![image1225.gif](../../_assets/image1225.gif)

Retorno:

Lista contendo arquivos e pastas dentro do diretório informado (Letras)

Nome Real:

ebfFTPListFile

Compatibilidade:

Servidor
