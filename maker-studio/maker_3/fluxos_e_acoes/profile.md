---
title: "Profiler"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/fluxos_e_acoes/profile.htm"
---

O Profiler é um utilitário estatístico utilizado para avaliação das regras utilizadas no sistema a fim de identificar possíveis gargalos e evitar que o produto final chegue até o cliente com pouco desempenho. Com o Profiler, pode-se obter informações como:

- Tempo de execução da regra:

![image1333.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1333.jpg)

- Consumo de tempo de um processamento dentro da regra:

![image1334.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1334.jpg)

- Número de execuções:

![image1356.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1356.jpg)

## Executando o Profiler

No editor de Fluxo de Ações, clique no botão ![image1324.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image326.png) e o Makerprofiler será aberto.

![image1335.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1335.jpg)

A tela do Makerprofiler possui as seguintes opções:

- ![image1336.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1336.jpg)  - Conecta a sessão do Webrun (apenas as sessões que estão em Modo Projeto serão listadas).
- ![image1337.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1337.jpg) - Encerra a sessão conectada.
- ![image1340.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1340.jpg) - Inicia a coleta de dados.
- ![image1339.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1339.jpg)- Encerra coleta de dados para análise.
- ![image1343.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1343.jpg) - Pausa a coleta de dados.
- ![image1344.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1344.jpg) - Exibe o conteúdo coletado até o momento do clique neste botão.

- Lista de resultados coletados:

![image1345.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1345.jpg)

Observação: Estes resultados ficarão em memória até que a opção Finalizar do Profiler seja acionada.

Dicas:

1. Ao executar duplo clique em um fluxo da árvore de chamadas, o fluxo será aberto no Maker.
2. Ao executar um  duplo clique em um dos processamentos dentro da árvore de chamadas, o fluxo é aberto com foco no processamento selecionado.
3. Os resultados obtidos podem ser visualizados em Segundos, Milissegundos, Nanosegundos e Microssegundos. Para configurá-los, basta selecionar na lista ![image1822.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1822.gif).
4. Os resultados coletados podem ser salvos para consultas posteriores. Clicando com botão direito do mouse em um dos resultados na árvore Últimos resultados e selecionando Mover para resultados salvos conforme mostra a ilustração abaixo:

![image1346.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image383.png)

Observações:

1. Sempre que desejar encerrar a coleta de dados é necessário acionar a opção Finalizar. Enquanto não for selecionada esta opção, a coleta de dados será efetuada, mesmo que venha a fechar o Profiler. Um exemplo de uso deste comportamento: o analista acessa o sistema pelo Profiler em um determinado momento, seleciona a opção Iniciar e fecha o Profiler, retornando no dia seguinte e abrindo-o novamente para obter os resultados da coleta efetuada durante todo o dia.
2. Não é possível utilizar o Debug e o Profiler simultaneamente, além disso, enquanto não for acionada a opção Finalizar do Profiler, não poderá ser utilizado o Debug para depurar regras deste sistema.
3. O Makerprofile está disponível no Webrun a partir da versão 2.6.0.0.
4. O Profiler monitora para fluxos da camada "Servidor".
