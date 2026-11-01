---
title: "Abrir URL em Outra Janela"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/abrir_url_em_outra_janela.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Abre uma url em outra janela

Parâmetros:

1. Url que será aberta.

2. Nome da janela (Caso nulo, ou não exista a janela, será criada uma nova janela).

3. Propriedade para a abertura da janela. (Opcional)

![image1582.gif](../../_assets/image1582.gif)

Retorno:

Não possui.

Observações:

1. As propriedades devem ser definidas em pares separados por vírgula. Ex: scrollbars=yes,resizable=yes

- As propriedades válidas e os possíveis valores são:

     toolbar = yes | no

     location = yes | no

     status = yes | no

     menubar = yes | no

     scrollbars = yes | no

     resizable = yes | no

     width = yes | no

     height = Número inteiro

     left = Número inteiro

     top = Número inteiro

2. Para colocar um caracter & que esteja entre os dados do valor de um parâmetro de uma URL utilize a combinação: %26 + &

3. A URL deve possuir o protocolo "http://" antes do endereço www, caso contrário, será tratato como uma URL relativa.

Nome Real:

OpenURLOnNewWindow

Compatibilidade:

Cliente
