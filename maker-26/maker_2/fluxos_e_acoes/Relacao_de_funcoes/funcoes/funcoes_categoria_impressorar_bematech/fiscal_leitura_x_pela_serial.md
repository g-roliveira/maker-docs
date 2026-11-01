---
title: "Fiscal - Leitura X pela serial"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_leitura_x_pela_serial.htm"
---

Descrição:

Recebe os dados da Leitura X pela serial e grava em arquivo texto.

Parâmetros:

Não possui

![image1698.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1698.gif)

Retorno:

0: Erro de comunicação.

1: OK.

4: O arquivo de inicialização não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

8: Erro ao criar ou gravar no arquivo STATUS.TXT ou RETORNO.TXT.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

Observação:

O cupom fiscal deve estar fechado.

Nome Real:

ebfBematechFiscalReadingXSerial

Compatibilidade:

Cliente
