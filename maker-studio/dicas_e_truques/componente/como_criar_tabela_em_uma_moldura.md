---
title: "Como criar tabela em uma moldura"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/componente/como_criar_tabela_em_uma_moldura.htm"
---

Neste tópico, será demonstrada a criação de uma tabela no componente **Moldura**.

1. Crie um formulário com os componentes **Moldura** e **Botão,** sem fonte de dados:

![image692.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image692.jpg)

2. Antes de criar o fluxo, clique no componente **Início** para informar o **Formulário de Trabalho**:

![image693.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image693.jpg)

3. Pressione **F11** e crie os **Identificadores** (variáveis):

![image694.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image694.jpg)

4. Agora partiremos para a criação do fluxo. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image695.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image695.jpg)

5. Insira um Processamento ![image696.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image696.jpg) para criar uma tabela no componente **[Moldura](../../maker_3/formulario/componentes/moldura)**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Tabela - Criar tabela em uma moldura**:

![image1236.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1236.jpg)

6. Insira uma Decisão ![image698.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image698.jpg) para verificar a quantidade de linha. Com isso será feito o controle de linhas inseridas na **Moldura**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Menor**:

![image777.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image777.jpg)

7. Insira um Processamento ![image696.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image696.jpg) para inserir linha em uma tabela. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Tabela - Inserir linha em uma tabela**:

![image700.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image700.jpg)

8. Insira um Processamento ![image696.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image696.jpg) para inicializar a variável **Contador de Célula**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Identificadores**, tipo **Inteiro,** adicione **1**:

![image1380.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1380.jpg)

9. Insira uma Decisão ![image698.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image698.jpg) para verificar a quantidade de células. Com isso será feito o controle de células inseridas na **Moldura**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Menor**:

![image778.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image778.jpg)

10. Insira um Processamento ![image696.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image696.jpg) para inserir células em uma linha. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Tabela - Inserir célula em uma linha**:

![image1205.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1205.jpg)

11. Insira um Processamento ![image696.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image696.jpg) para incrementar a variável **Contador de Célula**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Soma**:

![image779.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image779.jpg)

Insira um Processamento ![image696.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image696.jpg) para incrementar a variável **Contador de Linha**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Soma**:

![imageex2.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imageex2.jpg)

Associando fluxo a Evento: Associe este fluxo ao formulário criado, aplicando ao componente **Botão** e ao **Evento** "**Ao Clicar**" e veja o resultado no Webrun:

![image7030.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image7030.jpg)
