---
title: "Fiscal - Vender item com departamento"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_vender_item_com_departamento.htm"
---

Descrição:

Essa função permite a venda de itens com entrada de departamento, desconto e unidade de medida.

Parâmetros:

1. Codigo do produto (49 caracteres)

2. Descricao do produto (201 caracteres)

3. Aliquota

4. ValorUnitario (9 dígitos com tres casas decimais)

5. Quantidade(7 dígitos)

6. Acrescimo (10 dígitos com 2 casas decimais)

7. Desconto (10 dígitos com 2 casas decimais)

8. Índice do departamento (2 dígitos)

9. Unidade de medida (2 caracteres)

![image1750.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1750.gif)

Observações:

1. Imagine que há duas alíquotas com o valor 12% cadastradas na impressora. A primeira cadastrada na posição 01 como ICMS e a outra na posição 05 como ISS. Se você informar o valor 1200 ou 12,00 no parâmetro "alíquota" a função irá imprimir o item usando a alíquota 01 de ICMS. A função lê as alíquotas da impressora e usa o índice da primeira ocorrência. Para usar a alíquota de ISS você deverá passar o índice 05 e não o valor 1200 ou 12,00. Se você não tiver duas alíquotas com o mesmo valor cadastradas na impressora use sempre o valor no parâmetro alíquota.

2. O cupom fiscal deve estar aberto.

3. Na impressora fiscal YANCO, esta venda não existe.

Retorno:

0: Erro de comunicação.

1: OK.

-2: Parâmetro inválido na função.

-3: Alíquota não programada.

-4: O arquivo de inicialização não foi encontrado no diretório de sistema do Windows.

-5: Erro ao abrir a porta de comunicação.

-27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

-30: Função não compatível com a impressora YANCO.

Nome Real:

ebfBematechFiscalSellItemDepartment

Compatibilidade:

Cliente
