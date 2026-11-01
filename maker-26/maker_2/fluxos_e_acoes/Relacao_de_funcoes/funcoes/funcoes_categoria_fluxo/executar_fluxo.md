---
title: "Executar Fluxo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_fluxo/executar_fluxo.htm"
---

Descrição:

Executa o fluxo determinado pelo parâmetro 1. Pode-se passar uma lista de parâmetros para o fluxo através do parâmetro 2.

Parâmetros:

1. Nome do fluxo que se deseja executar. Deve-se passar o nome exato ao cadastrado.

2. Lista de parâmetros que o fluxo necessita (Caso não haja, deixar Nulo).

![image1209.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1209.gif)

Retorno:

Retorno do fluxo. Caso seja um fluxo Servidor executando um Cliente, o retorno será Nulo. Visto que, por não haver sincronia nesse tipo de execução, não é possível obter o retorno do fluxo Cliente.

Nome Real:

ebfFlowExecute

Compatibilidade:

Todas as camadas
