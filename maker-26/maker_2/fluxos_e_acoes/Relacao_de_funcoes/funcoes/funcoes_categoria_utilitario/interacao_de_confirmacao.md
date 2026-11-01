---
title: "Interação de Confirmação"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/interacao_de_confirmacao.htm"
---

Descrição:

É passado um parâmetro que será um texto, onde esse será confirmado ou negado conforme a escolha do usuário. Essa função abre uma caixa com opções "Ok" ou "Cancel". Ao clicar em "Ok" usuário confirmará uma operação retornando verdadeiro,  ou cancelará a mesma retornando falso.

Parâmetros:

1. Texto que servirá para interagir com o usuário.

![image1609.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1609.gif)

Retorno:

Se o usuário clicar em "OK" retorna verdadeiro (Lógico), se clicar em "Cancel", retorna falso.

Exemplo:

Passando como parâmetro "Confirmar operação?", o resultado será uma caixa de diálogo com os botões "OK" e "Cancel". Se o usuário clicar "Ok" o retorno será verdadeiro, caso contrário, será falso.

Nome Real:

ebfConfirm

Compatibilidade:

Cliente
