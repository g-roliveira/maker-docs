---
title: "Filtrando um relatório por variável de sessão"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/relatorio/filtrando_um_relatorio_por_variavel_de_sessao.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Relatório &gt;&gt; Filtrando um relatório por variável de sessão

Não é possível utilizar a função pré-definida "FUNCAO_SESSAO_&lt;nome_da_variavel&gt;" no assistente de consulta do relatório. Caso seja necessário sua utilização, existe uma solução alternativa que é o REPORT_FILTER, no qual será demonstrado a seguir:

Para atribuir o valor de uma variável de sessão ao seu relatório, siga os seguintes passos:

1º passo: Crie um filtro no assistente de consulta do relatório:

Ex: =:maker

![image1019.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1019.gif)

2º passo: Crie uma variável de sessão com o seguinte escopo "REPORT_FILTER_&lt;nome do filtro&gt;":

Ex: REPORT_FILTER_maker

![Fluxo_Report_Filter.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ses1.png)

Se existir valor na variável de sessão, o relatório vai ser aberto e filtrado por esse valor. Lembrando que o filtro não será aplicado automaticamente para os relatórios gerados via fluxo.

Observação: O fluxo que define a variável de sessão deve ser salvo na camada servidor.
