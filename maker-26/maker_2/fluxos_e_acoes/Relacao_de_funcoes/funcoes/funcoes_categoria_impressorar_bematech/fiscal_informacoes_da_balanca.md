---
title: "Fiscal - Informações da balança"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_informacoes_da_balanca.htm"
---

Descrição:

Requisita informação da balança pela serial.

Parâmetros:

1. Porta serial onde na qual a balança está conectada

2. Modelo da balança

             1: Modelo BP6

             2: Modelo CS15

3. Peso medido pela balança (Formato:"KKggg" (Ex: "01200" igual à 1Kg e 200g). Para as balanças da família BP é "SKKggg")

4. Preço por kilo, configurado na balança (Formato: "RRRCC")

5. Preço total do produto (Formato "RRRCCC")

![image1693.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1693.gif)

Observações:

0 - Erro de comunicação.

1 - Ok.

1 - Erro de execução.

2 - erro de parametros.

33 - Condição de alívio de prato (para modelos CS) ou peso negativo (para modelos BP).

34 - Peso instável.

35 - Peso excedido.

Nome Real:

ebfBematechFiscalBalancesInformation

Compatibilidade:

Cliente
