---
title: "Fiscal - Cancelar item anterior"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_cancelar_item_anterior.htm"
---

Descrição:

Cancela o último item vendido.

Parâmetros:

Não possui

![image1653.gif](../../../../../image1653.gif)

Retorno:

0: Erro de comunicação.

1: OK.

4: O arquivo de inicialização não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

Observações:

1. O cupom fiscal deve estar aberto

2. Ao menos um ítem deve ter sido vendido

3. Não deve ter sido cancelado nenhum item imediatamente anterior

Nome Real:

ebfBematechFiscalCancelPreviousItem

Compatibilidade:

Cliente
