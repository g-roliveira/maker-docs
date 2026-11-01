---
title: "Fiscal - Autenticação"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_autenticacao.htm"
---

Descrição:

Permite a autenticação de documentos.

Parâmetros:

Não possui

Retorno:

0: Erro de comunicação.

1: OK.

4: O arquivo de inicialização não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

27: Status da impressora diferente de 6,0,0 (ACK, ST1 e ST2).

![image1649.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1649.gif)

**Observações**:

1. Deverá ser executada imediatamente após um recebimento não fiscal ou o término de um cupom fiscal.

2. Poderá ser repetido até 5 vezes para cada recebimento, após isso o comando será ignorado.

3. Na impressora fiscal BEMATECH, serão aguardados 5 segundos para o posicionamento do documento e autenticará no documento a data, hora, número da loja, número do caixa e o número do último cupom fiscal. Se decorrido os 5 segundos sem o posicionamento do documento, a impressora retornará ao seu estado normal, retornando o status de "Comando Não Executado".

6. Na impressora fiscal YANCO, o documento deve ser posicionado antes do envio da função, caso contrário a autenticação será impressa na bobina.

Nome Real:

ebfBematechFiscalAuthentication

Compatibilidade:

Cliente
