---
title: "Fiscal - Imprime comprovante não fiscal vinculado"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_imprime_comprovante_nao_fiscal_vinculado.htm"
---

Descrição:

Imprime o comprovante não fiscal não vinculado.

Parâmetros:

1. Índice do totalizador para recebimento parcial (2 dígitos)

2. Valor do recebimento (14 dígitos com duas casas decimais).

3. Forma de pagamento (16 caracteres)

![image1686.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1686.gif)

Retorno:

0: Erro de comunicação.

1: OK.

2: Parâmetro inválido na função.

4: O arquivo de inicialização BemaFI32.ini não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

Observações:

1. O cupom fiscal deve estar fechado.

2. O totalizador deve estar cadastrado.

Nome Real:

ebfBematechFiscalAcceptanceNoFiscal

Compatibilidade:

Cliente
