---
title: "Exemplo de como transportar dados do arquivo para tabela"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/exemplo_de_como_transportar_dados_do_arquivo_para_tabela.htm"
---

Este exemplo irá descrever como transportar dados (registros) de um arquivo-texto para uma tabela existente no banco de dados.

Os dados (registros) do arquivo deverão estar separados por ponto e vírgula (;).

Para este exemplo, foi criada uma tabela Funcionário contendo os campos: Código e Funcionário.

Utilizando o Assistente de criação de formulários, defina o nome para o formulário e não defina Fonte de Dados:

![image890.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans1.png)

O formulário criado conterá um fluxo. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image872.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans2.png)

Criando um Novo Fluxo, salve com o Destino Servidor. Defina os Identificadores:

![image891.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans3.png)

Coloque um ![image708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para abrir o arquivo que contém os dados. No Montador de Expressão, na aba Fluxos e Funções, localize a função Abrir arquivo para leitura:

![image873.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans4.png)

Coloque uma ![image710.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dec.png) para verificar se é fim de arquivo. No Montador de Expressão, na aba Fluxos e Funções, localize a função Fim do Arquivo:

![image874.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans5.png)

Coloque um ![image708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para obter as linhas do arquivo. No Montador de Expressão, na aba Fluxos e Funções, localize a função Ler linha do arquivo:

![image875.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans6.png)

Coloque um ![image708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para obter as linhas do arquivo. No Montador de Expressão, na aba Fluxos e Funções, localize a função Separar Texto:

![image876.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans7.png)

Coloque um![image708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png)  para inserir dados na tabela. No Montador de Expressão, na aba Fluxos e Funções, localize a função Executar Atualização:

![image877.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans8.png)

Na SQL ATUALIZAÇÃO, clique em ![image878.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql.png). Abrirá a tela Construtor SQL: Inserção. Localize a tabela fr_usuario:

![image892.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans9.png)

Na tela acima, observe que é necessário selecionar os campos. Abrirá a tela Montador de Expressão.

Para usr_codigo:

![image879.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans10.png)

Para usr_login:

![image880.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans11.png)

Coloque um ![image708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para fechar o arquivo. No Montador de Expressão, na aba Fluxos e Funções, localize a função Fechar arquivo:

![image881.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/trans12.png)

Associando fluxo a Eventos: Associe este fluxo ao formulário criado, aplicando ao componente Botão e ao Evento "Ao Clicar".
