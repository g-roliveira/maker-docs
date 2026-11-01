---
title: "Utilizando o Evento ao pressionar Tecla"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/utilizando_o_evento_ao_pressionar_tecla.htm"
---

Neste exemplo será apresentado a utilização do evento ao pressionar tecla do Maker. O exemplo consiste basicamente em obter as teclas UP, DOWN, LEFT e RIGHT do teclado e focar o componente associado à mesma.

Primeiramente, crie um formulário com as seguintes características.

![image1916.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tec1.png)

Nota: O formulário possui a propriedade Navegação definida como Não e a propriedade Aba localizar definida como Não.

O evento Ao Pressionar Tecla, por padrão recebe 5 parâmetros de entrada automáticos, [Saiba mais!](../../maker_3/formulario/propriedades_e_eventos#ao_pressionar_tecla_dica)

É necessário informá-los, para que a regra seja executada corretamente.

![image1917.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tec2.png)

Para um melhor entendimento o fluxo ficará da seguinte forma:

![image1918.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tec3.png)

1. Insira um objeto Decisão e no Montador de Expressões selecione a função Igual, informando como parâmetro o código da tecla e o valor 38, que é o código da tecla pressionada.

![image1943.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tec4.png)

2. Insira um objeto processamento e no Montador de Expressões selecione a função Focar componente.

![image1944.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tec5.png)

Repita o processo anterior para as demais decisões e processamentos, informando respectivamente os códigos 37, 39 e 40, junto com os componentes Left, Right e Down.

Criado o fluxo salve-o e associe-o ao evento Ao pressionar tecla do formulário.

![image1919.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tec6.png)

Não é necessário associar os parâmetros de entrada aos componentes, pois se tratam de parâmetros automáticos.

![image1920.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tec7.png)

Salve o formulário e execute-o no Webrun.

![image1921.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tec8.png)
