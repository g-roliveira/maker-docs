---
title: "Mudar Posição Componente"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/mudar_posicao_componente.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Esta função altera a posição do componente passado como parâmetro.

Parâmetros:

1. Componente que mudará de posição.

2. Nova posição X (Horizontal) do componente.

3. Nova posição Y (Vertical) do componente.

![image1507.gif](../../_assets/image1507.gif)

Retorno:

Não Possui.

Exemplo:

Assumindo como parâmetros o componente "Cidade"  (MakerEdit1), o valor 150 (Inteiro) e o valor 250 (Inteiro), quando o fluxo for executado a  posição X do componente será 150 e a Y será 250.

Observações:

1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo   .

2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo "formulário" para uma constante do tipo "Letras"

Nome Real:

ebfFormSetPosition

Compatibilidade:

Cliente e Servidor
