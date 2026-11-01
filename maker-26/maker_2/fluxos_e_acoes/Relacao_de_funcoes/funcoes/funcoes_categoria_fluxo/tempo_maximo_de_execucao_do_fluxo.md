---
title: "Tempo máximo de execução do fluxo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_fluxo/tempo_maximo_de_execucao_do_fluxo.htm"
---

Descrição:

O valor passado como parâmetro será o tempo máximo que o fluxo poderá ser executada, caso o fluxo atinja o tempo

máximo ela será terminada.

Parâmetros:

1. Tempo em segundos

![image1217.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1217.gif)

Exemplo:

Assumindo como parâmetro 100 (Inteiro), o tempo máximo de execução da regra deixaria de ser 90 segundos(padrão)para ser 100 segundos.

Observações:

1. O Tempo normal de uma regra, antes de ser interrompida pelo sistema, é de 90 segundos.

2. Havendo subfluxos, a função tem que ficar no fluxo principal.

Nome Real:

ebfRuleSetTimeout

Compatibilidade:

Servidor
