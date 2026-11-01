---
title: "Fiscal - Espaçamento de linhas entre os cupons"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_espacamento_de_linhas_entre_os_cupons.htm"
---

Descrição:

Programa o espaçamento de linhas entre os cupons.

Parâmetros:

1. Espaçamento entre os cupons

![image1672.gif](../../../../../image1672.gif)

Retorno:

0: Erro de comunicação.

1: OK.

2: Parâmetro inválido na função.

4: O arquivo de inicialização BemaFI32.ini não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

30: Função não compatível com a impressora YANCO.

Observações:

1. O parâmetro de entrada tem que ser  entre 0 e 255 indicando o número de linhas. O valor default da impressora é 8 linhas.

2. Na impressora fiscal YANCO, esta programação não existe.

Nome Real:

ebfBematechFiscalLinesAmongCoupons

Compatibilidade:

Cliente
