---
title: "Exemplo da utilização de Sub-Relatório"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/relatorio/exemplo_utilizacao_sub-relatorio.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Relatório &gt;&gt; Exemplo da utilização de Sub-Relatório

Este exemplo irá aplicar o componente Sub-Relatório ![image698.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image698.gif) .Construiremos um relatório com duas fontes de dados: a primeira fonte selecionará a tabela FR_REGRAS_FUNCOES_TIPOS e todos os seus campos, que terá um relacionamento de 1:N com a segunda fonte, que selecionará a tabela FR_REGRAS_FUNCOES com todos os seus campos, como ilustra a imagem abaixo:

![image538.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rel9.png)

Observação: O relacionamento deve ser feito de filho para pai, ou seja, relacionar o campo FUN_TIPO da tabela FR_REGRAS_FUNCOES para o campo FTP_COD, da tabela FR_REGRAS_FUNCOES_TIPOS.

Após a definição da fonte de dados para o relatório, na aba Desenho trabalharemos com a fonte de dados FR_REGRAS_FUNCOES_TIPOS para o relatório principal. Para ver ou alterar a fonte de dados do relatório, acesse o menu Relatório e clique na opção Dados.

No cabeçalho do grupo, insira dois componentes: ![image699.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image699.gif) para o título Categoria e, ao lado um componente Campo Texto ![image700.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image700.gif), que iremos vincular ao campo FTP_NOME da fonte FR_REGRAS_FUNCOES_TIPO:

Na banda Detalhe, insira:

- dois componentes Texto ![image701.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image701.gif): um para o título Descrição da Função e outro para o título Retorno;
- um componente Sub-Relatório ![image698.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image698.gif) logo abaixo dos dois títulos.

Após inserir o componente sub-relatório, uma nova aba na parte inferior será apresentada:

![image702.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rel10.png)

Clique na aba do sub-relatório e defina a fonte de dados, apontando para FR_REGRAS_FUNCOES e utilize apenas a banda Detalhes, inserindo os campos FR_REGRAS_FUNCOES.FUN_NOME e FR_REGRAS_FUNCOES.FUN_RETORNO.

Depois, formate o relatório como desejar. Abaixo segue uma sugestão de layout:

![image539.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image539.jpg)
