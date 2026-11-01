---
title: "Fiscal - Ler da memória por redução pela serial"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_ler_da_memoria_por_reducao_pela_serial.htm"
---

Descrição:

Recebe os dados da leitura da memória fiscal por intervalo de reduções pela serial e grava em arquivo texto.

Parâmetros:

Redução da Inicial (4 dígitos)

Redução da Final (4 dígitos)

![image1702.gif](../../../../../image1702.gif)

Retorno:

0: Erro de comunicação.

1: OK.

2: Parâmetro inválido na função.

4: O arquivo de inicialização não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

8: Erro ao criar ou gravar no arquivo STATUS.TXT ou RETORNO.TXT.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

Observação:

O cupom fiscal deve estar fechado.

Nome Real:

ebfBematechFiscalReadFiscalMemoryReductionSerial

Compatibilidade:

Cliente
