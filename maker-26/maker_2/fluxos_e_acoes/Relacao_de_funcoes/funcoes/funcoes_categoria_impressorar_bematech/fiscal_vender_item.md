---
title: "Fiscal - Vender item"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_vender_item.htm"
---

Descrição:

Vende item após a abertura do cupom fiscal. Essa função permite também a venda de itens com 3 casas decimais no valor unitário.

Parâmetros:

1. Codigo (13 caracteres)

2. Descricao (29 caracteres)

3. Aliquota

4. TipoQuantidade

               I - Inteira

               F - Fracionária

5. Quantidade (4 dígitos parte inteira e 3 dígitos parte fracionária)

6. CasasDecimais (2 ou 3).

7. ValorUnitario (8 dígitos)

8. TipoDesconto

                 $ - desconto por valor e

                 % - desconto percentual.

9. Valor Desconto (8 dígitos para desconto por valor (2 casas decimais) e 4 dígitos para desconto percentua)

![image1749.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1749.gif)

Retorno:

0: Erro de comunicação.

1: OK.

-2: Parâmetro inválido na função.

-3: Alíquota não programada.

-4: O arquivo de inicialização BemaFI32.ini não foi encontrado no diretório de sistema do Windows.

-5: Erro ao abrir a porta de comunicação.

-27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

Observações:

1. Imagine que há duas alíquotas com o valor 12% cadastradas na impressora. A primeira cadastrada na posição 01 como ICMS e a outra na posição 05 como ISS. Se você informar o valor 1200 ou 12,00 no parâmetro "alíquota" a função irá imprimir o item usando a alíquota 01 de ICMS. A função lê as alíquotas da impressora e usa o índice da primeira ocorrência. Para usar a alíquota de ISS você deverá passar o índice 05 e não o valor 1200 ou 12,00. Se você não tiver duas alíquotas com o mesmo valor cadastradas na impressora use sempre o valor no parâmetro alíquota.

2. O cupom fiscal deve estar aberto.

Nome Real:

ebfBematechFiscalSellItem

Compatibilidade:

Cliente
