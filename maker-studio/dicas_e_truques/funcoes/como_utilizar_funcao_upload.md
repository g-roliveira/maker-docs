---
title: "Como Utilizar a Função Upload"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/funcoes/como_utilizar_funcao_upload.htm"
---

# Como utilizar a função Upload

Para exemplificar a utilização da função Upload, observe os passos abaixo:

1. Crie um novo fluxo.
2. Adicione um objeto [Processamento](../../maker_3/fluxos_e_acoes/objeto_processamento).
3. Ative o [Montador de Expressões](../../maker_3/fluxos_e_acoes/montador_de_expressoes) e selecione a Função Upload:

![image646.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fun1.png)

4. Informe, como primeiro parâmetro, o caminho para o qual você quer que o arquivo seja gravado. Caso o objetivo seja só o de efetuar o upload do arquivo, deixe o segundo parâmetro como nulo. Caso contrário, informe para o segundo parâmetro o nome de um fluxo e este utilizará:

1. O 1º parâmetro da função Upload - indicação do caminho e nome do arquivo salvo. ex.: /Imagem/Fotos.
2. O segundo parâmetro deve conter a regra que será executada (fluxo) depois que o arquivo estiver no servidor.
3. A regra chamada no 3º parâmetro pela função upload, recebe como parâmetro de entrada o caminho para onde foi enviado o arquivo.

![image414.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fun2.png)

![screenupload.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/screenupload.png)
