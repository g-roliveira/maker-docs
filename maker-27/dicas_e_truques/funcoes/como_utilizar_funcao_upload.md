---
title: "Como utilizar a função Upload"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/funcoes/como_utilizar_funcao_upload.htm"
---

Para exemplificar a utilização da função Upload, observe os passos abaixo:

1. Crie um novo fluxo.
2. Adicione um objeto [Processamento](../../maker_2/fluxos_e_acoes/objeto_processamento).
3. Ative o [Montador de Expressões](../../maker_2/fluxos_e_acoes/montador_de_expressoes) e selecione a Função Upload:

![image646.gif](../../image646.gif)

4. Informe, como primeiro parâmetro, o caminho para o qual você quer que o arquivo seja gravado. Caso o objetivo seja só o de efetuar o upload do arquivo, deixe o segundo parâmetro como nulo. Caso contrário, informe para o segundo parâmetro o nome de um fluxo e este utilizará:

1. o primeiro parâmetro da função Upload - indicação do caminho e nome do arquivo salvo, e;
2. o segundo parâmetro deve conter a regra que será executada (fluxo) depois que o arquivo estiver no servidor.

![image414.jpg](../../image414.jpg)

![screenupload.png](../../screenupload.png)
