---
title: "Fiscal - Resetar impressora"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_resetar_impressora.htm"
---

Descrição:

Reseta a impressora em caso de erro.

Parâmetros:

Não possui

![image1733.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1733.gif)

Retorno:

0: Erro de comunicação.

1: OK.

4: O arquivo de inicialização BemaFI32.ini não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

30: Função não compatível com a impressora YANCO.

Observações:

1. Será executada somente se a impressora estiver em erro.

2. Na impressora fiscal YANCO, este comando não existe.

Nome Real:

ebfBematechFiscalResetPrinter

Compatibilidade:

Cliente
