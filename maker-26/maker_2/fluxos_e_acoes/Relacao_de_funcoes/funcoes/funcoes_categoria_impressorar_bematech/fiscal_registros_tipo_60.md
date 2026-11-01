---
title: "Fiscal - Registros tipo 60"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_registros_tipo_60.htm"
---

Descrição:

Esta função retorna os registro Tipo 60 Mestre e Analítico completos da impressora.(serão gravadas no arquivo RETORNO.TXT)

Parâmetros:

Não possui

![image1729.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1729.gif)

Retorno:

0: Erro de comunicação.

1: OK.

4: O arquivo de inicialização BemaFI32.ini não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

8: Erro ao criar ou gravar no arquivo STATUS.TXT ou RETORNO.TXT.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

Observações:

1. Esta função deve ser utilizada diariamente, após a emissão da Redução Z.

2. Os campos já estão formatados no tamanho que o relatório do Sintegra exige.

Nome Real:

ebfBematechFiscalRegisterType60

Compatibilidade:

Cliente
