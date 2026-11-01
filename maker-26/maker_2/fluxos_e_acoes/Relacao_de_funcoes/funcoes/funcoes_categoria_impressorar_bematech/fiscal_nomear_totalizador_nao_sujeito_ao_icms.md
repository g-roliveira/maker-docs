---
title: "Fiscal - Nomear totalizador não sujeito ao ICMS"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_nomear_totalizador_nao_sujeito_ao_icms.htm"
---

Descrição:

Programa Totalizador Não Sujeito ao ICMS.

Parâmetros:

1. Índice

2. Totalizador (19 caracteres)

![image1711.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1711.gif)

Retorno:

0: Erro de comunicação.

1: OK.

2: Parâmetro inválido na função.

4: O arquivo de inicialização não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

Observações:

1. O cupom fiscal deve estar fechado.

2. Não pode haver outro totalizador cadastrado com o mesmo índice.

3. Será executada somente após uma Redução Z ou antes do movimento de valor na impressora.

4. Na impressora fiscal Bematech modelo MP-2100 TH FI o tamanho da descrição do totalizador foi reduzido para 15 caracteres. Para manter a compatibilidade, será aceito o tamanho de 19 caracteres, mas internamente a impressora registrará apenas os 15 primeiros caracteres.

Nome Real:

ebfBematechFiscalNameTotalizatorWithoutIcms

Compatibilidade:

Cliente
