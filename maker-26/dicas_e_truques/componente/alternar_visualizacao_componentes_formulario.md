---
title: "Alternar a visualização de componentes no formulário"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/componente/alternar_visualizacao_componentes_formulario.htm"
---

Objetivo

Aplicar a função Mostrar Componentes acionada por botões.

Metodologia

1. Crie ou modele um formulário para visualizar os componentes:

![image348.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image348.jpg)

2. Serão utilizados dois componentes [Grade](../../maker_2/formulario/componentes/grade) (posicionados um sobre o outro) e a visualização do conteúdo será controlada por fluxos, ao clicar no botão.
3. Ative o Editor de Fluxo de Ações.
4. Defina na tela Parâmetro de Entrada, para o campo Formulário Principal, o nome do formulário modelado para o exemplo.
5. Insira na área de trabalho do [Editor de Fluxos de Ações](../../maker_2/fluxos_e_acoes/editor_de_fluxo_de_acoes), um componente Processamento e defina:

   1. Utilize a função Mostrar Componente, informando para o primeiro parâmetro o nome do componente grade (por exemplo, aponte para a segunda grade) e para o segundo parâmetro determine Falso para desabilitá-lo:

![image349.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image349.jpg)

6. Insira outro componente Processamento e defina:
   1. Utilize a função Mostrar Componente, informando para o primeiro parâmetro o nome do componente grade (por exemplo, aponte para a primeira grade) e para o segundo parâmetro, determine Verdadeiro para habilitá-lo:

![image350.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image350.jpg)

7. Salve esse fluxo com o nome Ativar grade 1, definindo o tipo Cliente.
8. Associe esse fluxo ao evento Ao clicar do primeiro botão (aqui identificado Visualizar Departamento).
9. Repita os passos para a ação do segundo botão, invertendo as referências.
