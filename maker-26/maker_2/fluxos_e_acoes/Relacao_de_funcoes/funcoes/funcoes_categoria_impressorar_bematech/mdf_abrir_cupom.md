---
title: "MFD - Abrir cupom"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/mdf_abrir_cupom.htm"
---

Descrição:

Abre o cupom fiscal na impressora MFD.

Parâmetros:

1. CGC ou CPF do cliente(29 caracteres)

2. Nome do cliente(30 caracteres)

3. Endereço do cliente(80 caracteres)

![image1765.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1765.gif)

Retornos da Função (INTEIRO):

0 - Erro de comunicação

1 - Ok

-2 - Parâmetro inválido

-4 - Arquivo ini não encontrado ou parâmetro inválido para o nome da porta

-5 - Erro ao abrir a porta de comunicação

-27 - Status da impressora diferente de 6,0,0,0 (Ack, St1, St2 e St3)

Observações:

1. O cupom fiscal deve estar fechado.

2. Na impressora fiscal Bematech modelo MP-2100 TH FI o tamanho da descrição do endereço, impresso no cabeçalho do cupom fiscal, foi reduzido de 80 para 79 caracteres. Para manter a compatibilidade, será aceito o tamanho de 80 caracteres, mas internamente a impressora registrará apenas os 79 primeiros caracteres.

Nome Real:

ebfBematechFiscalMFDOpenCoupon

Compatibilidade:

Cliente
