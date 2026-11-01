---
title: "Fiscal - Relatório tipo 60 analítico"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_relatorio_tipo_60_analitico.htm"
---

Descrição:

Gera o relatório "Tipo 60 analítico" exigido pelo convênio de ICMS 85/2001. As informações serão geradas no arquivo RETORNO.TXT no diretório configurado no parâmetro "path" do arquivo ini. O diretório default é o diretório raiz (C:\).

Parâmetros:

Não possui

![image1731.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1731.gif)

Retorno:

0: Erro de comunicação.

1: OK.

4: O arquivo de inicialização não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

8: Erro ao criar ou gravar no arquivo STATUS.TXT ou RETORNO.TXT.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

Observações:

1. Após a linha "N..." serão gravadas as informações de vendas referentes às alíquotas tributárias. Portanto, o número de linhas irá variar de acordo com o número de alíquotas cadastradas na impressora.

2. As informações contidas no relatório Tipo 60 Analítico são referentes aos dados da última Redução Z. Portanto, para gerar o relatório referente ao movimento do dia você deve executar essa função após a Redução Z, caso contrário as informações geradas serão referentes ao movimento do dia anterior.

Nome Real:

ebfBematechFiscalAnalyticalReportType60

Compatibilidade:

Cliente
