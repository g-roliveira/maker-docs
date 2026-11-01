---
title: "Obter Parâmetro da Requisição"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/obter_parametro_da_requisicao.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Obtém um parâmetro da requisição.

Parâmetros:

1. Nome do parâmetro na requisição

![image1617.gif](../../_assets/image1617.gif)

Retorno:

Retorna o valor do parâmetro definido na requisição ou Nulo caso o mesmo não exista.

Observação:

Esta função deve ser utilizada no evento "Ao Entrar".

Exemplos:

Caso o parâmetro seja "sys", então o retorno será a sigla do sistema.

Caso o parâmetro seja "formID", então o retorno será o ID do formulário.

Nome Real:

ebfRequestGetParameter

Compatibilidade:

Servidor
