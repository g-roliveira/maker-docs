---
title: "Exemplo de Utilização da NF-e 2.0 com a Função Chamar Serviço Web(SOAP1.2) – Certificado Digital"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/funcoes/exemplo_de_utilizacao_da_nf-e_2.0_com_a_funcao_chamar_servico_websoap1_2_certificado_digital.htm"
---

A função Chamar Serviço Web(SOAP1.2) – Certificado Digital faz uma chamada a um WebService utilizando protocolo HTTPS.

Parâmetros:

1. Arquivo com as informações sobre os certificados do serviço (KeyStore).
2. Senha para o arquivo com as informações sobre os certificados do serviço.
3. Arquivo com o certificado de quem chama o serviço.
4. Senha para o arquivo com o certificado de quem chama o serviço.
5. URL do WebService (Sempre com https:// antes).
6. Porta.
7. Nome do Método.
8. Variante (Parâmetros do método).

Retorno:

Conteúdo do XML retornado pelo WebService.

Exemplificando o uso da função para consultar um status de serviço de uma NF-e 2.0:

1º passo: Passe informações sobre keystore (arquivo com as informações sobre os certificados do serviço) e o certificado digital nos parâmetro 1,2,3 e 4.

2º passo: No 5º parâmetro, passe a URL com o conteúdo WSDL(Web Services Description Language) do Webservice.

Exemplo: &lt;https://nfe.fazenda.sp.gov.br/nfeweb/services/nfestatusservico2.asmx?WSDL&gt;

3º passo: No 6º parâmetro será informado o nome da porta do WebService a ser consumido.

Exemplo: NfeStatusServico2Soap12 (Esta informação encontra-se no WSDL do WebService).

4º passo: No 7º parâmetro será informado o nome do método do WebService a ser consumido.

Exemplo: nfeStatusServicoNF2 (Esta informação encontra-se no WSDL do WebService).

5º passo - No 8º parâmetro será enviada uma lista com os parâmetros necessários para o método informado no 7º parâmetro. Para saber como será montada esta lista de parâmetros, basta verificar no WSDL ou na documentação do WebService.

Exemplo: Para o nosso exemplo, o método nfeStatusServicoNF2 espera como parâmetro dois tipos complexos nfeDadosMsg (Parâmetro do método) e nfeCabecMsg (Cabeçalho da requisição SOAP).

Com isso, deve ser passado uma lista com a estrutura do objeto nfeDadosMsg no primeiro parâmetro e o objeto nfeCabecMsg no segundo parâmetro, como na imagem abaixo:

![image1480.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1480.jpg)

Tipo complexo: nfeDadosMsg:

*&lt;nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NfeStatusServico2" versao="2.00"&gt;*

*&lt;consStatServ xmlns="http://www.portalfiscal.inf.br/nfe" versao="2.00"&gt;*

*&lt;tpAmb&gt;1&lt;/tpAmb&gt;*

*&lt;cUF&gt;35&lt;/cUF&gt;*

*&lt;xServ&gt;STATUS&lt;/xServ&gt;*

*&lt;/consStatServ&gt;*

*&lt;/nfeDadosMsg&gt;*

Tipo complexo: nfeCabecMsg:

*&lt;nfeCabecMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NfeStatusServico2"&gt;*

*&lt;cUF&gt;35&lt;/cUF&gt;*

*&lt;versaoDados&gt;2.00&lt;/versaoDados&gt;*

*&lt;/nfeCabecMsg&gt;*

Observação:  É importante ter conhecimento de XML e estrutura de WebService para utilização desta função.
