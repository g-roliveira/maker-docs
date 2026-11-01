---
title: "Agendar Execução de Fluxo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_fluxo/agendar_execucao_de_fluxo.htm"
---

Descrição:

Agenda a execução de um fluxo para ser executado após um determinado tempo. O tempo deve ser definido em milisegundos.

Parâmetros:

1. Fluxo a ser executado. (Fluxo)

2. Lista de parâmetros da regra

3. Tempo para a regra ser executada, em milissegundos

![image1206.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1206.gif)

Observações:

1. Fluxo cliente somente agenda para a camada CLIENTE, e servidor somente para a camada SERVIDOR, para agendar  fluxos de outra camada utilize um subfluxo para agendar;

2. Fluxo servidor não interage com a tela, funções como "Habilitar Controle" ou mensagens não serão exibidos.

3. O primeiro parâmetro pode ser do tipo Letras tendo como valor o nome do fluxo.

Nome Real:

ebfSetRuleExecutionTime

Compatibilidade:

Cliente e Servidor
