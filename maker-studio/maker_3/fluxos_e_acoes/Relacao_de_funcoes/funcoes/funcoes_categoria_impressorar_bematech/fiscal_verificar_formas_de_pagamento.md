---
title: "Fiscal - Verificar formas de pagamento"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_verificar_formas_de_pagamento.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Retorna as formas de pagamento e seus valores acumulados.

Parâmetros:

Não possui

![image1757.gif](../../_assets/image1757.gif)

Retorno:

As formas de pagamento e seus valores acumulados

Observação:

Essa função retorna as informações das formas de pagamento na seguinte ordem:

1. Descricao da forma de pagamento.....................: 16 bytes

2. Valor acumulado (2 casas decimais)..................: 20 bytes

3. Valor recebido no último cupom (2 casas decimais)...: 20 bytes

4. Valor indicando se a forma foi usada para a emissão do cupom não fiscal vinculado (1 usado, 0 não usado): 1 byte

Nome Real:

ebfBematechFiscalVerifyPaymentForm

Compatibilidade:

Cliente
