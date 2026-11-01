---
title: "Fiscal - Número de série"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_numero_de_serie.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Retorna o número de série da impressora.

Parâmetros:

Não possui

![image1719.gif](../../_assets/image1719.gif)

Retorno:

Número de série da impressora

Observações:

1.  Na impressora fiscal YANCO serão retornados 10 bytes, referente ao número de série do equipamento, o restante será preenchido com espaços em branco.

2. Nas impressoras fiscais MP-2000 TH FI, MP-6000 TH FI, MP-25 FI e MP-50 FI serão retornados os 15 primeiros caracteres de seu número serial. O número serial nestas impressoras é alfanumérico com o tamanho de 20 caracteres.

Nome Real:

ebfBematechFiscalSeriesNumber

Compatibilidade:

Cliente
