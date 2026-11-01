---
title: "FTP - Listar o conteúdo de uma pasta informada"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_ftp/ftp_listar_o_conteudo_de_uma_pasta_informada.htm"
---

Descrição:

Essa função vai listar o conteúdo de uma pasta que será passada como parâmetro. Caso o valor informado no terceiro parâmetro tenha um valor lógico verdadeiro, será listado arquivos, pastas e outras informações dos mesmo, se o valor for falso será exibido apenas uma lista contendo os arquivos e pastas do diretório.

Parâmetros:

1. Um Objeto FTP (Variante) que represente uma conexão FTP aberta.

2. Pasta que terá o seu conteúdo retornado.

3. Um valor lógico, esse valor será o responsavel pelo tipo de retorno dessa função, se verdade, o retorno será mais detalhado, caso contrário, só será listado as pastas e arquivos contidas nesse diretório.

![image1226.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1226.gif)

Retorno:

Lista contendo arquivos e pastas dentro do diretório informado (Letras)

Nome Real:

ebfFTPListFileFromFolder

Compatibilidade:

Servidor
