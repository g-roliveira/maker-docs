---
title: "Fiscal - Cancelar impressão de cheque"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_cancelar_impressao_de_cheque.htm"
---

Descrição:

Cancela a impressão do cheque que está sendo aguardado pela impressora. O cheque que está em impressão não pode ser cancelado.

Parâmetros:

Não possui

![image1652.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1652.gif)

Retorno:

0: Erro de comunicação.

1: OK.

4: O arquivo de inicialização não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

30: Função não compatível com a impressora YANCO.

Observações:

1. Função usada somente na impressora MP-40 FI II.

2. Na impressora fiscal YANCO, este cancelamento não existe.

Nome real:

ebfBematechFiscalCancelCheckImpression

Compatibilidade:

Cliente
