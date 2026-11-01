---
title: "Como criar tabela em uma moldura a partir de uma lista"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/componente/como_criar_tabela_em_uma_moldura_partir_de_uma_lista.htm"
---

Neste tópico, será demonstrada a criação de uma tabela no componente **Moldura** a partir de uma lista.

1. Crie um formulário com os componentes **Textos**, **Moldura** e **Botão** e sem fonte de dados:

![imagens704.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens704.jpg)

2. Antes de criar o fluxo, clique em no componente **Início** para informar o **Formulário de Trabalho**:

![imagens705.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens705.jpg)

3. Pressione **F11** e crie os **Identificadores** (variáveis):

![imagens706.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens706.jpg)

4. Agora partiremos para a criação do fluxo. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![imagens707.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens707.jpg)

5. Insira um Processamento ![imagens708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens708.jpg) para criar uma tabela no componente **[Moldura](../../maker_3/formulario/componentes/moldura)** a partir de uma lista. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize as funções **Tabela - Criar tabela a partir de uma lista**,**Tabela para Lista** e **Abrir Consulta**:

![imagens709.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens709.jpg)

**Observações**:

1. Na imagem acima, observe que foram mostrados os parâmetros necessários para o preenchimento e os demais são opcionais.
2. No **SQL Consulta,** foi utilizada a tabela **sig_funcionario** e selecionado os campos: **sig_funcionario.fun_nome**, **sig_funcionario.fun_salario** e **sig_funcionario.fun_idade**.

6. Insira uma Decisão ![imagens715.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens715.jpg) para verificar a quantidade de linha. Com isso será feito o controle de linhas inseridas na **Moldura**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Menor**:

![imagens780.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens780.jpg)

7. Insira um Processamento ![imagens708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens708.jpg) para inserir linha em uma tabela. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Tabela - Inserir linha em uma tabela**:

![imagens712.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens712.jpg)

8. Insira um Processamento ![imagens708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens708.jpg) para inicializar a variável **Contador de Célula**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Identificadores**, tipo **Inteiro** adicione **1**:

![imagens1379.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens1379.jpg)

9. Insira uma Decisão ![imagens715.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens715.jpg) para verificar a quantidade de células. Com isso será feito o controle de células inseridas na **Moldura**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Menor**:

![imagens781.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens781.jpg)

10. Insira um Processamento ![imagens708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens708.jpg) para inserir células em uma linha. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Tabela - Inserir célula em uma linha**:

![imagens1235.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens1235.jpg)

11. Insira um Processamento ![imagens708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens708.jpg) para incrementar a variável **Contador de Célula**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Soma**:

![imagens782.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens782.jpg)

12. Insira um Processamento ![imagens708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens708.jpg) para incrementar a variável **Contador de Linha**. No **[Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes)**, na aba **Fluxos e Funções**, localize a função **Soma**:

![imagensex2.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagensex2.jpg)

**Associando fluxo a Evento**: Associe este fluxo ao formulário criado, aplicando ao componente **Botão** e ao **Evento** "**Ao Clicar**" e veja o resultado no Webrun:

![imagens718.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens718.jpg)
