---
title: "Como personalizar a cor do gráfico no Maker Reports"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/relatorio/como_personalizar_a_cor_do_grafico_no_maker_reports.htm"
---

Selecione na consulta (fonte de dados) um campo que retorne as cores desejáveis.

Exemplo:

![image1299.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1299.jpg)

Veja que o campo cor traz os valores em hexadecimal (HTML) ou no padrão Delphi correspondente as descrições do campo Nome.

Com isso, basta selecionar o campo cor no condutor de dados da série de um gráfico. (Um novo componente (combo) chamado Cor foi habilitado, veja na imagem abaixo:)

![image1300.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1300.jpg)

Feito isto, veja o resultado do gráfico:

![image1301.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1301.jpg)

Observações:

1. Esta personalização de cor não funciona para o gráfico do tipo Linha rápida.
2. Não será respeitada o valor da cor quando selecionado numa constante. Ex: select ‘#FF1493’ AS COR from tabela.
3. Caso não queira personalizar a cor, basta deixa o componente Cor sem valor.
4. Deve ser utilizado a versão 2.5.1.133 ou superior do gerador de relatório para funcionar corretamente no Webrun.
