---
title: "Exemplo de como transportar dados do arquivo para tabela"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/maker/exemplo_de_como_transportar_dados_do_arquivo_para_tabela.htm"
---

Este exemplo irá descrever como transportar dados (registros) de um arquivo-texto para uma tabela existente no banco de dados.

Os dados (registros) do arquivo deverão estar separados por ponto e vírgula (;).

Para este exemplo, foi criada uma tabela Funcionário contendo os campos: Código e Funcionário.

Utilizando o Assistente de criação de formulários, defina o nome para o formulário e não defina Fonte de Dados:

![image890.jpg](../../image890.jpg)

O formulário criado conterá um fluxo. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image872.gif](../../image872.gif)

Criando um Novo Fluxo, salve com o Destino Servidor. Defina os Identificadores:

![image891.jpg](../../image891.jpg)

Coloque um ![image708.jpg](../../image708.jpg) para abrir o arquivo que contém os dados. No Montador de Expressão, na aba Fluxos e Funções, localize a função Abrir arquivo para leitura:

![image873.gif](../../image873.gif)

Coloque uma ![image710.jpg](../../image710.jpg) para verificar se é fim de arquivo. No Montador de Expressão, na aba Fluxos e Funções, localize a função Fim do Arquivo:

![image874.gif](../../image874.gif)

Coloque um ![image708.jpg](../../image708.jpg) para obter as linhas do arquivo. No Montador de Expressão, na aba Fluxos e Funções, localize a função Ler linha do arquivo:

![image875.gif](../../image875.gif)

Coloque um ![image708.jpg](../../image708.jpg) para obter as linhas do arquivo. No Montador de Expressão, na aba Fluxos e Funções, localize a função Separar Texto:

![image876.gif](../../image876.gif)

Coloque um![image708.jpg](../../image708.jpg)  para inserir dados na tabela. No Montador de Expressão, na aba Fluxos e Funções, localize a função Executar Atualização:

![image877.gif](../../image877.gif)

Na SQL ATUALIZAÇÃO, clique em ![image878.gif](../../image878.gif). Abrirá a tela Construtor SQL: Inserção. Localize a tabela FUNCIONARIO:

![image892.jpg](../../image892.jpg)

Na tela acima, observe que é necessário selecionar os campos. Abrirá a tela Montador de Expressão.

Para FUNCIONARIO.CODIGO:

![image879.gif](../../image879.gif)

Para FUNCIONARIO.DESCRICAO:

![image880.gif](../../image880.gif)

Coloque um ![image708.jpg](../../image708.jpg) para fechar o arquivo. No Montador de Expressão, na aba Fluxos e Funções, localize a função Fechar arquivo:

![image881.gif](../../image881.gif)

Associando fluxo a Eventos: Associe este fluxo ao formulário criado, aplicando ao componente Botão e ao Evento "Ao Clicar".

Exportando dados para Tabela - este vídeo exemplifica a utilização de fluxos para a importação de dados de arquivo texto para o banco.
