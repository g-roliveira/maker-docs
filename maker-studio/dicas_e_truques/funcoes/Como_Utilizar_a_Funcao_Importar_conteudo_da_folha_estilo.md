---
title: "Como Utilizar a Função Importar Conteudo da Folha Estilo"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/funcoes/Como_Utilizar_a_Funcao_Importar_conteudo_da_folha_estilo.htm"
---

# Como Utilizar a Função Importar Conteúdo da Folha Estilo

Esse exemplo irá demonstrar o uso da função Importar conteúdo da folha estilo.

1. Crie um formulário com o seguinte layout:

![img22114.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fun3.png)

2. Crie um Fluxo;
3. Adicione um objeto [Processamento](http://ares/manual2.6/maker_2/fluxos_e_acoes/objeto_processamento.htm) e no [Montador de Expressões](http://ares/manual2.6/maker_2/fluxos_e_acoes/montador_de_expressoes.htm) e selecione a Função Importar conteudo da folha estilo:

![img22112.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fun4.png)

4. Informe como parâmetro o conteúdo da folha de estilo no padrão CSS, por exemplo:

1. Se desejar alterar a cor de um componente  [Caixa de Texto](http://ares/manual2.6/maker_2/formulario/componentes/caixa_de_texto.htm)  e o plano de fundo do formulario

.label &#123; color: #FF0000 !important; &#125;

.tabArea &#123; background- color: #FFFF0F !important; &#125;

![img22113.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fun5.png)

5. Salve o fluxo na camada cliente e adicione ao evento Ao entrar do formulário.
6. Execute o formulário no webrun:

![img22111.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fun6.png)
