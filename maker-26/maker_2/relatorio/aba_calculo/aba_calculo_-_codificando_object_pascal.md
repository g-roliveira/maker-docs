---
title: "Aba Cálculo - Codificando em Object Pascal"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/relatorio/aba_calculo/aba_calculo_-_codificando_object_pascal.htm"
---

# image251.gif   Aba Cálculo - Codificando em Object Pascal

Na aba de Cálculo, o usuário com conhecimentos mais avançados conta com eventos vinculados às bandas e aos componentes da aba de Desenho. Além de poder utilizar a linguagem de programação nativa do gerador de relatórios. Também tem a oportunidade de manipular os dados selecionados (fonte de dados criada na Aba Dados - Definindo os dados para um relatório). E, mais ainda, tem acesso à edição das propriedades das bandas citadas no tópico Aba Desenho e dos componentes citados no tópico Barras de Ferramentas em Relatórios:

![image173.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image173.jpg)

A aba Cálculo é limitada em relação ao Delphi. O Delphi é mais complexo. É desnecessário utilizar funções dentro de funções e sintaxe com encadeamentos complexos, ou seja, é recomendável utilizar sintaxes simples.

Formas de visualização

As formas de visualização do gerador de relatórios determinam o que será mostrado na aba cálculo no primeiro box (superior à esquerda) - "Faixas do Relatório":

![image278.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image278.gif)

Alternar entre as formas de visualização é uma prática simples. Basta clicar na área referenciada acima com o botão direito do mouse e aparecerão as seguintes opções:

- ![image251.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image251.gif) Variáveis - são exibidas as variáveis locais de cada banda:

- Header - variáveis da banda Cabeçalho;
- Detail - variáveis da banda Detalhe;
- Footer - variáveis da banda Rodapé.

- ![image280.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image280.gif) Eventos - são exibidos os códigos gerados pelo usuário, por banda. Após a sua seleção, pode-se criar uma variável local:

![image179.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image179.jpg)

A imagem acima mostra a criação de uma variável local no Cabeçalho e no evento Após Imprimir (AfterPrint).

- ![image281.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image281.gif) Módulo - é subdividido em duas áreas: Global e Manipuladores de Eventos:

![image282.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image282.gif)

- Global é composto por:
- - ![image283.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image283.gif) Declarações - podem ser declaradas as variáveis globais ou constantes nessa partição do gerador de relatórios.

![image180.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image180.jpg)

- ![image284.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image284.gif) Eventos - momento de programação. Aqui são escritos códigos a serem executados na inicialização do relatório ou no seu encerramento.

![image181.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image181.jpg)

- ![image285.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image285.gif) Programas - outra possibilidade de programação: é preciso clicar com o botão direito do mouse no box à direita da janela de opções (onde aparecem os tópicos variáveis, eventos e módulo) e selecionar Nova Função ou Novo Procedimento para escrever seus códigos.

![image182.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image182.jpg)

Observação: Com referência ao lixo contido em posições de memória em que é declarada uma variável de escopo global, deve-se notar: toda variável que seja declarada em escopo global deve ser inicializada antes de ser utilizada nos eventos das bandas. Esta ação evita que lixo contido em posições de memória (memória RAM do computador), que fica reservada para a variável declarada, seja considerado no momento em que ela (variável) for utilizada.

Manipuladores de Eventos - exibem as procedures de qualquer das bandas. Desejando excluir as procedures criadas, basta clicar em seu nome ao lado direito da janela de opções e selecionar a opção Excluir. Caso resolva excluir na área destinada à programação, a procedure ao invés de ser excluída gerará um erro.
