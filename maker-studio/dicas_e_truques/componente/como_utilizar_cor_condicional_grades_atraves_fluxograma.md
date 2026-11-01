---
title: "Como utilizar cor condicional em grades por meio de fluxograma"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/componente/como_utilizar_cor_condicional_grades_atraves_fluxograma.htm"
---

Existem duas maneiras de interagir com a Propriedade Cor Condicional do componente [Grade](../../maker_3/formulario/componentes/grade) pelo fluxo de ações:

- utilizando um fluxo que retorne um valor lógico;
- utilizando um fluxo retornando uma cor.

Exemplo 1: Fluxo retornando um valor lógico:

Crie um novo fluxo e defina dois Parâmetros de Entrada: mapeamento (do tipo Variante) e linha corrente (do tipo Inteiro).

Observação: É obrigatória a exata definição desses parâmetros nessa ordem e tipo:

![imagens665.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens665.jpg)

O parâmetro denominado linha corrente, do tipo inteiro, receberá a linha corrente do componente Grade, e o parâmetro denominado mapeamento, do tipo variante, receberá o mapeamento do tipo [coluna, valor da coluna].

O parâmentro mapeamento passa como chave o campo do banco de dados em UperCase, ou seja, passa a palavra em maiúsculo. Por exemplo, caso se queira uma chave que tem como nome fun_cod, deve-se obter o valor da chave FUN_COD do objeto.

Mesmo que não utilize esses parâmetros, mantenha-os. Para apenas ilustrar o exemplo, o fluxo terá uma ligação direta do Início ao Fim.

- O fluxo será assim:

![imagens.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens.jpg)

- Insira uma Decisão para comparar se a variável linha é par.

![imagens1.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens1.jpg)

- Insira um processamento para atribuir o valor "TRUE" a variável "Retorno".

![imagens2.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens2.jpg)

- Insira um processamento para atribuir o valor "FALSE" a variável "Retorno".

![imagens3.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens3.jpg)

- No "Fim", o retorno do valor lógico (usar constante).

![imagens666.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens666.jpg)

- No Webrun ficará assim:

![imagens4.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens4.jpg)

O fluxo poderá ser salvo tanto na camada Cliente como na camada Servidor.

Observação: O preenchimento será feito somente se o Valor de retorno for True.

Retornando ao formulário, ative a Propriedade Cor Condicional do componente Grade e observe, na ilustração abaixo, como aplicar o fluxo com a propriedade:

![imagens667.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens667.jpg)

No campo Condição, utilizamos um parâmetro comum denominado FUNCAO (o mesmo utilizado para definir Valor Padrão dos campos para formulário), definindo FUNCAO(fluxo:&lt;nome do fluxo&gt;) e, na coluna Cor, selecione a cor desejada. No campo abaixo, selecione o campo da grade que será formatado.

Observação: Os parâmetros de entrada poderão ser utilizados com componentes Decisão para definir critérios para aplicar a Cor Condicional. Os valores para as declarações dos Parâmetros de Entrada especificados neste exemplo serão passados automaticamente pelo Webrun que reconhece estas variáveis.

Exemplo 2: Fluxo retornando uma cor:

Basicamente, aplicam-se os mesmos procedimentos descritos acima, mudando apenas na utilização da Constante Cor:

![imagens668.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagens668.jpg)

Observação: Como é necessário definir a cor no Editor condicional de cores para grade, a grade exibirá a cor definida no fluxo porque possui prioridade.
