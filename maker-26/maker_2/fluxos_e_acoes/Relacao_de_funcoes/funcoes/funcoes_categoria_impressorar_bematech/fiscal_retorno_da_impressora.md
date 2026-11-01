---
title: "Fiscal - Retorno da impressora"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_retorno_da_impressora.htm"
---

Descrição:

Lê o retorno da impressora referente ao último comando enviado.

Parâmetros:

Não possui

![image1734.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1734.gif)

Retorno:

Lista de elementos( ACK: Primeiro byte, ST1: Segundo byte, Terceiro byte)

Observações:

1. Essa função deve ser usada após a execução de qualquer outra função da DLL para ler o Retorno da Impressora referente a função executada. Essa função devolve o status da impressora.

2. Se o retorno do Ack, St1 e St2 for 0,0,0 corresponde que a impressora não possui nenhum status de execução para retornar. Isso significa que nehuma função foi executada anteriormente

Nome Real:

ebfBematechFiscalPrinterReturn

Compatibilidade:

Cliente
