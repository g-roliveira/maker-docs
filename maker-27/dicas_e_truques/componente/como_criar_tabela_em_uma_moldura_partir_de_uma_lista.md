---
title: "Como criar tabela em uma moldura a partir de uma lista"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/componente/como_criar_tabela_em_uma_moldura_partir_de_uma_lista.htm"
---

Neste tópico, será demonstrada a criação de uma tabela no componente **Moldura** a partir de uma lista.

1. Crie um formulário com os componentes **Textos**, **Moldura** e **Botão** e sem fonte de dados:

![image704.jpg](../../image704.jpg)

2. Antes de criar o fluxo, clique em no componente **Início** para informar o **Formulário de Trabalho**:

![image705.jpg](../../image705.jpg)

3. Pressione **F11** e crie os **Identificadores** (variáveis):

![image706.jpg](../../image706.jpg)

4. Agora partiremos para a criação do fluxo. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image707.jpg](../../image707.jpg)

5. Insira um ![image708.jpg](../../image708.jpg) para criar uma tabela no componente **[Moldura](../../maker_2/formulario/componentes/moldura)** a partir de uma lista. No **[Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize as funções **Tabela - Criar tabela a partir de uma lista**,**Tabela para Lista** e **Abrir Consulta**:

![image709.jpg](../../image709.jpg)

**Observações**:

1. Na imagem acima, observe que foram mostrados os parâmetros necessários para o preenchimento e os demais são opcionais.
2. No **SQL Consulta,** foi utilizada a tabela **sig_funcionario** e selecionado os campos: **sig_funcionario.fun_nome**, **sig_funcionario.fun_salario** e **sig_funcionario.fun_idade**.

6. Insira uma ![image710.jpg](../../image710.jpg) para verificar a quantidade de linha. Com isso será feito o controle de linhas inseridas na **Moldura**. No **[Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Menor**:

![image780.gif](../../image780.gif)

7. Insira um ![image711.jpg](../../image711.jpg) para inserir linha em uma tabela. No **[Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Tabela - Inserir linha em uma tabela**:

![image712.jpg](../../image712.jpg)

8. Insira um ![image713.jpg](../../image713.jpg) para inicializar a variável **Contador de Célula**. No **[Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes)**, na aba **Identificadores**, tipo **Inteiro** adicione **1**:

![image1379.jpg](../../image1379.jpg)

9. Insira uma ![image715.jpg](../../image715.jpg) para verificar a quantidade de células. Com isso será feito o controle de células inseridas na **Moldura**. No **[Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Menor**:

![image781.gif](../../image781.gif)

10. Insira um ![image716.jpg](../../image716.jpg) para inserir células em uma linha. No **[Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Tabela - Inserir célula em uma linha**:

![image1235.jpg](../../image1235.jpg)

11. Insira um ![image716.jpg](../../image716.jpg) para incrementar a variável **Contador de Célula**. No **[Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Soma**:

![image782.gif](../../image782.gif)

**Associando fluxo a Evento**: Associe este fluxo ao formulário criado, aplicando ao componente **Botão** e ao **Evento** "**Ao Clicar**" e veja o resultado no Webrun:

![image718.jpg](../../image718.jpg)
