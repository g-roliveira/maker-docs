---
title: "Exemplo de Relatório Filtrado com lista"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/relatorio/exemplo_relatorio_filtrado_com_lista.htm"
---

Segue abaixo o exemplo de como gerar um relátorio filtrado com lista:

1º passo - crie um formulário com as seguintes características:

![image970.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image970.jpg)

2º passo -  crie um fluxo para o botão Adicionar. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image972.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image972.jpg)

3º passo - defina os seguintes parâmetros de entrada:

![image973.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image973.jpg)

4º passo - adicione um processamento para adicionar linha na grade:

![image974.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image974.jpg)

5º passo - adicione um processamento para atribuir à grade a coluna:

![image975.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image975.jpg)

6º passo - adicione um processamento para limpar o componente:

![image977.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image977.jpg)

7º passo - adicione um processamento para focar o componente:

![image978.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image978.jpg)

8º passo - salvo com destino Cliente.

9º passo - crie um fluxo para o botão Remover. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image979.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image979.jpg)

10º passo - Adicione um processamento para apagar a linha:

![image980.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image980.jpg)

11º passo -salve o fluxo com o destino Cliente.

12º passo - crie um fluxo para o botão Emitir Relatório. Para facilitar o entendimento o fluxo ficará da seguinte forma:

![image981.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image981.jpg)

13º passo - defina as variáveis que serão utilizadas no fluxo:

![image982.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image982.jpg)

14º passo - insira um processamento para obter o total de linhas:

![image983.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image983.jpg)

15º passo - insira uma decisão para verificar se o contador é menor ou igual ao número de linhas -1:

![image984.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image984.jpg)

16º passo - insira um processamento para abrir o relatório:

![image985.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image985.jpg)

17º passo - insira um processamento para obter o valor da grade:

![image986.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image986.jpg)

18º passo - insira um processamento para incrementar o contador:

![image987.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image987.jpg)

19º passo - insira um comentário para informar o laço:

![image988.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image988.jpg)

20º passo - salve o fluxo com destino Cliente.

21º passo -  salve o formulário e execute-o no Webrun.
