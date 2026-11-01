---
title: "Alternação da cor dos dados impressos (linhas) em um relatório"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/relatorio/alternacao_da_cor_dos_dados_impressos_linhas_em_um_relatorio.htm"
---

Para desenvolver um relatório (Gerador de Relatórios) que alterne a cor dos dados das linhas impressas no relatório, devem ser seguidos os passos abaixo. São eles:

1º passo: na aba "Data/Dados", crie uma fonte de dados de sua escolha:

![image990.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image990.jpg)

2º passo: na aba "Design/Desenho"

- cole um componente "Region/Região" na banda "Detail/Detalhe", o qual deve ser redimensionado de maneira que ocupe toda a área da banda.
- cole os componentes que serão utilizados para a projeção dos dados sobre o componente "Region/Região":

![image991.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image991.jpg)

3º passo: na aba "Calc/Cálculo"

- Clique com o botão direito do mouse sobre o quadrante superior esquerdo da aba e selecione a opção "Module/Módulo":

![image992.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image992.jpg)

- No mesmo quadrante, selecione a opção "Declarations/Declarações". Feito esse passo, efetue um clique sobre a opção "Variables/Variáveis" (quadrante superior direito) e, em seguida, efetue um clique no quadrante inferior esquerdo e declare uma variável do tipo inteiro (após a palavra "var"), a qual servirá de base para a mudança da cor de cada linha (banda "Detail/Detalhe" da aba "Design/Desenho") de dado impressa:

![image993.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image993.jpg)

4º passo: clique com o botão direito do mouse sobre o quadrante superior esquerdo da aba e selecione a opção "Events/Eventos":

![image994.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image994.jpg)

5º passo: o mesmo quadrante, selecione a opção "Report/Relatório". Feito esse passo, efetue um clique sobre a opção "BeforePrint" (quadrante superior direito) e, em seguida, inicialize a variável "Contador" com o valor "0":

![image995.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image995.jpg)

6º passo: no mesmo quadrante superior esquerdo, selecione a opção "Detail/Detalhe". Feito este passo, efetue um clique sobre a opção "BeforePrint" e, em seguida, desenvolva um algoritmo que verifique se o valor da variável "Contador" é par, incrementando-o na sequência:

![image997.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image997.jpg)

Observação: Algoritmo que foi desenvolvido acima:

 begin

if ((Contador mod 2)= 0) then

begin

Region1.Brush color:= clYellow;

end

else

begin

Region1.Brush. Color:=clWhite;

end;

Contador:=Contador+1;

end;

7º passo: na aba "Preview/Visualização", visualize o relatório gerado.

![image998.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image998.jpg)

Alternando de cor dos dados impressos em um relatório - este vídeo exemplifica como zebrar as linhas dos dados impressos em um relatório.
