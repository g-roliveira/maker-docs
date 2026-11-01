---
title: "Como alterar valor de um campo ao modificar seleção na Grade"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/componente/como_alterar_valor_campo_modificar_selecao_grade.htm"
---

Observe o formulário abaixo:

![image396.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image396.jpg)

O que iremos reproduzir, passo a passo, definirá o valor (apenas na tela) para um campo, chamado aqui de Descrição (campo do tipo [Caixa de Texto](../../maker_3/formulario/componentes/caixa_de_texto)): ao selecionar um registro do componente [Grade](../../maker_3/formulario/componentes/grade).

Siga os passos:

1. Habilite a visualização das tabelas do Maker (caso não recorde, acesse o tópico [Configurações](../../maker_3/configuracao_das_conexoes/configuracoes)).
2. Crie um formulário com a seguinte consulta (não importa a disposição dos campos) e salve com o nome "Definições do Formulários".

   Observação: Este SQL abaixo é do "Formulário da Grade"

![image397.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image397.jpg)

3. Crie outro formulário com o seguinte layout:

![image398.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image398.jpg)

1. Um componente [Grade](../../maker_3/formulario/componentes/grade) com o [Parâmetro](../../maker_3/formulario/propriedades_e_eventos):

   1. Formulário - a referência do formulário criado nos passos 1 e 2;

2. Um componente [Caixa de Texto](../../maker_3/formulario/componentes/caixa_de_texto).

4. Crie Um novo Fluxo clicando em ![imageFluxo.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imageFluxo.png) .

1. Um Parâmetro de Entrada:

   1. Linha Real - tipo Inteiro.

2. Em Parâmetros de Entrada, aponte o Formulário de trabalho para o primeiro formulário (criado nos passos 1 e 2);
3. Defina uma variável:

   1. Tabela do formulário - tipo Tabela.

4. Adicione um [processamento](../../maker_3/fluxos_e_acoes/objeto_processamento) para obter a tabela do formulário da grade, usando a função - "Obter Tabela do Formulário":

   Observação: No parâmetro da função "Obter Tabela do Formulário" você irá colocar o **( Formulário da Grade )**.

![image399.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image399.jpg)

5. Adicione um [processamento](../../maker_3/fluxos_e_acoes/objeto_processamento) para posicionar no registro da tabela do formulário da grade (isto ocorrerá em modo de execução, ao clicar na linha da grade). Utilize a função "Ir para posição da Tabela":

![image400.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image400.jpg)

6. Adicione um [processamento](../../maker_3/fluxos_e_acoes/objeto_processamento) para alterar o valor do componente (caixa de texto Descrição):

![image401.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image401.jpg)

5. Salve o fluxo e atribua ao Evento [Ao Modificar](../../maker_3/formulario/propriedades_e_eventos) do componente grade do formulário principal.

6. Acesse o Webrun e teste o formulário.

Observação: Não precisará associar o parametro de entrada com nenhum componente ou a um campo do banco de dados, pois a grade já traz a prosição automática das linhas para o parâmetro.
