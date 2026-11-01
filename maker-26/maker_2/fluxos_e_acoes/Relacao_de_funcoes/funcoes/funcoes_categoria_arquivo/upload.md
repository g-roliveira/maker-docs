---
title: "Upload"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_arquivo/upload.htm"
---

Descrição:

Essa função realiza o upload de um arquivo. Poderá ser informado o nome da pasta que será armazenado o arquivo,  uma possível regra chamada e os parâmetros que essa regra poderá receber(caso exista).

Parâmetros:

1. Nome da pasta (Caso nulo será armazenado em uma pasta chamada "Upload");

2. Nome de uma regra (Caso nulo a função realizará apenas o upload do arquivo)

![image1205.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1205.gif)

Parâmetros Seguintes:

Parâmetros passados para regra definida (2°Parametro). Para passar mais de um parâmetro basta clicar no botão (com sinal de adição) que se encontra abaixo.

Retorno:

Não possui.

Observações:

1. A regra chamada pela função upload, caso seja definida na camada servidor, não pode chamar um subfluxo cliente.

2. A regra chamada pela função upload, recebe como parâmetro de entrada o caminho o qual foi enviado o arquivo.

Nome Real:

ebfUploadFile

Compatibilidade:

Cliente e Servidor

# Como utilizar a função Upload

Para exemplificar a utilização da função Upload, observe os passos abaixo:

1. Crie um novo fluxo.
2. Adicione um objeto [Processamento](../../../objeto_processamento).
3. Ative o [Montador de Expressões](../../../montador_de_expressoes) e selecione a Função Upload:

![image646.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image646.gif)

4. Informe, como primeiro parâmetro, o caminho para o qual você quer que o arquivo seja gravado. Caso o objetivo seja só o de efetuar o upload do arquivo, deixe o segundo parâmetro como nulo. Caso contrário, informe para o segundo parâmetro o nome de um fluxo e este utilizará:

1. o primeiro parâmetro da função Upload - indicação do caminho e nome do arquivo salvo, e;
2. o segundo parâmetro deve conter a regra que será executada (fluxo) depois que o arquivo estiver no servidor.

![image414.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image414.jpg)

![image415.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image415.jpg)
