---
title: "Hoje"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_data_e_hora/hoje.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Essa função obtém a data atual e retorna.

Parâmetros:

Não possui.

![image1335.gif](../../_assets/image1335.gif)

Retorno:

Retorna a data atual com as horas.

Observações:

1. Ao utilizar a função em um fluxo na camada Servidor, a hora retornada será a definida no relógio do servidor de aplicações (Webrun).

2. Ao utilizar a função em um fluxo na camada Cliente, a hora retornada será a definida no relógio do cliente (não confiável).

3. Ao utilizar a função em um fluxo na camada Banco de Dados, a hora retornada será a definida no relógio do servidor de banco de dados.

Nome Real:

ebfDateToday

Compatibilidade:

Todas as camadas
