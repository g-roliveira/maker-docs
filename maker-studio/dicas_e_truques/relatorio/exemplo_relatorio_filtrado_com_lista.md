---
title: "Exemplo de Relatório Filtrado com lista"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/relatorio/exemplo_relatorio_filtrado_com_lista.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Relatório &gt;&gt; Exemplo Relatório Filtrado com lista

Segue abaixo o exemplo de como gerar um relátorio filtrado com lista:

1º passo - crie um formulário com as seguintes características:

![image970.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil1.png)

2º passo -  crie um fluxo para o botão Adicionar. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image972.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil2.png)

3º passo - defina os seguintes parâmetros de entrada:

![image973.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil23.png)

4º passo - adicione um processamento para adicionar linha na grade:

![image974.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil4.png)

5º passo - adicione um processamento para atribuir à grade a coluna:

![image975.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil5.png)

6º passo - adicione um processamento para limpar o componente:

![image977.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil6.png)

7º passo - adicione um processamento para focar o componente:

![image978.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil7.png)

8º passo - salvo com destino Cliente.

9º passo - crie um fluxo para o botão Remover. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image979.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil8.png)

10º passo - Adicione um processamento para apagar a linha:

![image980.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil9.png)

11º passo -salve o fluxo com o destino Cliente.

12º passo - crie um fluxo para o botão Emitir Relatório. Para facilitar o entendimento o fluxo ficará da seguinte forma:

![image981.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil10.png)

13º passo - defina as variáveis que serão utilizadas no fluxo:

![image982.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil11.png)

14º passo - insira um processamento para obter o total de linhas:

![image983.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil12.png)

15º passo - insira uma decisão para verificar se o contador é menor ou igual ao número de linhas -1:

![image984.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil13.png)

16º passo - insira um processamento para abrir o relatório:

![image985.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil14.png)

17º passo - insira um processamento para obter o valor da grade:

![image986.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil15.png)

18º passo - insira um processamento para incrementar o contador:

![image987.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fil16.png)

19º passo - salve o fluxo com destino Cliente.

20º passo -  salve o formulário e execute-o no Webrun.
