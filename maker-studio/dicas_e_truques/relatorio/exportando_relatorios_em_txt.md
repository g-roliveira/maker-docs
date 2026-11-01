---
title: "Exportando relatórios em TXT"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/relatorio/exportando_relatorios_em_txt.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Relatório &gt;&gt; Exportando relatórios em TXT

Temos o seguinte caso:

Uma empresa precisa gerar um arquivo TXT no seguinte layout.

Dados do Funcionário:

![image1889.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1889.gif)

Com a opção de exportação de relatórios para arquivo TXT, é muito fácil atender ao layout acima, é o que mostraremos a seguir.

Inicialmente, tem-se o relatório com os seguintes campos (veja na imagem).

![image1591.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1591.jpg)

Observação: A disposição dos campos acima, não afetará no layout do arquivo.

Observe que há 14 componentes (entre Texto e Campo Texto), mas para atender ao layout, são necessários apenas os campos Matrícula, Nome e Salário.

Para selecionar apenas os campos solicitados, vá em Menu – Arquivo – Configurar Impressão para Arquivo.

![image1592.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe1.png)

Observe os campos destacados. A propriedade Tipo do Arquivo define o separador dos controles. A outra opção em destaque é Controles Disponíveis, neste campo são listados os componentes existentes em cada banda (faixas) do relatório. A última opção destacada, Controles Selecionados, são listados todos os componentes selecionados.

Em Tipo do Arquivo, selecione a opção Tamanho Fixo e uma caixa Salvar Tamanho será habilitada. Esta opção será utilizada para atender o layout mostrado no início do exemplo.

Selecione a faixa Detalhe e dentre os componentes listados, selecione Matricula Nome e Salario.

![image1593.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe2.png)

Clique em cada componente selecionado e defina o tamanho de acordo com o layout: 10 para Matrícula; 60 para Nome e 18 para Salário.

Clique em OK e para atender todos os requisitos do layout, é necessário configurar o alinhamento de cada componente (Esquerda, Direita, etc.).

O layout informa que o campo Matrícula deve ser alinha do à direita. Então, selecione o componente desejado e configure a propriedade TextAlignment para taRightJustified como na imagem abaixo.

![image1890.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1890.gif)

Faça a mesma configuração para os demais componentes conforme layout.

Salve o relatório e feche o editor. Logo em seguida, adicione-o no menu do sistema e acesse pelo Webrun.

Na tela que foi aberta, selecione Texto no campo Formato e em seguida clique em Salvar. O arquivo será gerado conforme o layout definido.

![image1594.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1594.jpg)

Veja o resultado final:

![image1596.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/txt1.png)
