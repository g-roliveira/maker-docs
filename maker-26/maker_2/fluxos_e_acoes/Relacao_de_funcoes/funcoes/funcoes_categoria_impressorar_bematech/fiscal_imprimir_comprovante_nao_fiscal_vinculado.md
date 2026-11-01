---
title: "Fiscal - Imprimir comprovante não fiscal vinculado"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_imprimir_comprovante_nao_fiscal_vinculado.htm"
---

Descrição:

Imprime o comprovante não fiscal vinculado.

Parâmetros:

1. Texto a ser impresso no comprovante não fiscal vinculado (618 caracteres)

Retorno:

0: Erro de comunicação.

1: OK.

2: Parâmetro inválido na função.

4: O arquivo de inicialização BemaFI32.ini não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

![image1688.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1688.gif)

Observações:

1. Na impressora fiscal BEMATECH, só pode ser usado durante 2 (dois) minutos após a abertura do comprovante não fiscal vinculado. Se esse tempo for ultrapassado o comprovante é fechado automaticamente.

2. Na impressora fiscal YANCO, não tem limite de tempo, para o fechamento do comprovante. O tamanho da linha é de 46 colunas.

Nome Real:

ebfBematechFiscalUseVoucherNoFiscalLinked

Compatibilidade:

Cliente
