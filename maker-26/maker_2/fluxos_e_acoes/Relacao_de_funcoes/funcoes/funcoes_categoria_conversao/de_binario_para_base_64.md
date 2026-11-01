---
title: "De binário para base 64"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_conversao/de_binario_para_base_64.htm"
---

Descrição:

Converte um conteúdo binário para base 64.

Parâmetros:

1. Tabela retornada da consulta ao banco.

2. Campo da tabela.

![image1282.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1282.gif)

Retorno:

Conteúdo convertido para base 64.

Observação:

A Base 64 é usada para codificar dados. As especificações completas deste tipo de Base64 são dadas pelas RFC 1421 e RFC 2045. ( RFC é uma sigla de Request for Comments Ele é um documento que descreve os padrões de cada protocolo da internet previamente a serem considerados como um padrão).

Exemplo:

Assumindo como parâmetros a tabela "Consulta Pessoa"  que armazena o resultado de uma consulta SQL na tabela de pessoas e o campo "Foto" que é o campo que possui a foto da pessoa, o retorno será o conteúdo binário do campo foto convertido para Base64.

Nome Real:

ebfBinaryToBase64

Compatibilidade:

Banco de dados e Servidor
