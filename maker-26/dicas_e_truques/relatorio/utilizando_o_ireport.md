---
title: "Utilizando o IReport"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/relatorio/utilizando_o_ireport.htm"
---

# Utilizando o iReport

O que é:

O iReport é uma ferramenta que provê suporte para a criação de relatórios nos formatos PDF (arquivo somente leitura), XLS (arquivo do aplicativo Microsoft Excel) e HTML (linguagem de marcação para o ambiente web), os quais são suportados pelo Webrun. Apesar da existência desse suporte, a Softwell Solutions não se responsabiliza por subsidiar o usuário em como utilizar a ferramenta, descrevendo apenas os recursos básicos para a criação de um relatório (documentação abaixo).

Como Baixar:

O download da ferramenta pode ser feito por meio do link &lt;http://www.mirrorservice.org/sites/download.sourceforge.net/pub/sourceforge/i/ir/ireport/iReport-nb-3.1.2-windows-installer.exe&gt; . Após a conclusão do download, basta instalá-la. Cabe ainda lembrar que, para a perfeita execução da ferramenta, é necessário ter instalada no computador a Máquina Virtual Java.

Acessando o Banco pelo iReport:

Para acessar um Banco de Dados no Ireport, clique em Dados --> Conexões/Fonte de Dados e escolha um tipo de conexão. Nesse caso, escolhemos Conexão de Banco de Dados JDBC.

![image999.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image999.jpg)

- Para acessar outros bancos, é preciso importar o arquivo JDBC, na tela do Classpath em opções. No botão Adicionar JAR, é preciso informar o destino do arquivo. Após essas configurações, salve o relatório.

![image1000.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1000.jpg)

Criando Relatório Simples:

Para a criação de um relatório, clique em Arquivo --> Novo Documento, irá abrir uma tela onde será pedido o nome do relatório. Depois se abrirá uma pagina em branco.

![image1001.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1001.jpg)

- Para colocar uma tabela no relatório vá em Data -->Query do Relatório, e será aberta uma tela na qual deverá ser informada a consulta.

![image1002.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1002.jpg)

- Outra forma de colocar a tabela no relatório é acessando os mesmos passos descritos acima. Quando for aberta a tela de consulta, clique no botão "Query designer". Quando clicar, abrirá uma tela com todas as tabelas criadas no seu banco, arraste uma para o espaço vazio da tela e selecione os campos. Clique em Ok para finalizar. Após colocar todas as tabelas, salve o relatório.

![image1003.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1003.jpg)

Tela de escolha de Tabela

![image1029.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1029.jpg)

Tela de consulta.

- Para adicionar os campos da tabela no relatório, clique em Visualizar --->Campos do Relatório. Essa tela mostrará todos os campos existentes. Clique em cima do campo e arraste ate a banda Detail.

![image1005.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1005.jpg)

- Outra maneira de adicionar os campos na tabela é utilizando o componente Campo Texto. Depois de adicionado no relatório, clique com o botão direito em cima do componente. Em seguida, clique na aba Campo Texto e em Expressão do Campo Texto digite o nome do campo.

![image1006.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1006.jpg)

Depois que colocar todos os campos e configurar seu relatório, salve-o. Para a visualização do relatório criado, clique em Criar (build) ---> Executar Relatório (usar conexão ativa)".

![image1007.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1007.jpg)

Agrupamentos do Relatório:

Utilizando os conhecimentos acima, poderá ser adicionado um grupo ao relatório. Clique em Visualizar ---> Agrupamentos do Relatório.... Na tela que abriu, clique em novo e, na próxima tela, informe o nome do grupo e sua expressão. Marque a opção Iniciar em uma nova coluna. Após a criação do grupo, salve o relatório.

![image1008.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1008.jpg)

Observação: É preciso ir no Query do Relatório e colocar a expressão order by pra poder funcionar o agrupamento.

- Quando é criado um grupo, são criadas duas novas bandas Nomedogrupo Header e Nomedogrupo Footer.

![image1009.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1009.jpg)

- Coloque o campo que é passado na expressão do grupo na banda para funcionar com o título do grupo. Após configurar o relatório, salve - o .

![image1010.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1010.jpg)

Criando Variáveis no Relatório:

Para criar uma variável e utilizá-la no relatório, clique em Visualizar ---> Variáveis do Relatório. Na tela que se abriu, clique em novo. Na próxima tela, informe o nome da variável, seu tipo, o tipo de cálculo e sua variável de expressão.

![image1011.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1011.jpg)

- Para adicionar a variável no relatório, é só arrastá-la para a banda  e selecionar onde deseja  introduzir . Nesse caso, coloque na banda Ordem Alfabética Footer.

![image1012.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1012.jpg)

Tela de Variáveis

![image1014.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1014.jpg)

Relatório em desenvolvimento

![image1015.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1015.jpg)

Relatório pronto com o cálculo feito de acordo com os valores do grupo

Observação: As variáveis criadas devem ter o mesmo tipo dos campos da tabela.

Criando Parâmetro:

Para criar um parâmetro, clique em Visualizar--->&gt; Parâmetro do Relatório.Na tela que se abriu clique em novo. Na tela seguinte, informe o nome do parâmetro, o tipo, um valor-padrão, se tiver, e a descrição.

![image1016.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1016.jpg)

Observação: Os parâmetros criados devem ser do mesmo tipo do campo da tabela.

Colocando Filtro no Relatório:

Para colocar um filtro, você terá que modificar no Query do Relatório. Usando a condição Where, informe que campo receberá o parâmetro. Após essas configurações, salve seu formulário e o execute.

![image1017.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1017.jpg)

- Ao visualizar, uma tela aparecerá pedindo que informe o campo de pesquisa que deseja filtrar:

![image1018.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1018.jpg)

Em seguida, o relatório será gerado:

![image1019.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1019.jpg)

Colocando Gráfico no Relatório:

Selecione o componente e coloque na banda summary.Para este exemplo, vamos utilizar um gráfico do tipo torta, clique com o botão direito em cima dele e, depois, clique em Propriedades do Gráfico, ou de um duplo clique em cima do componente, vá ate a aba Dados do Gráfico e depois Detalhes.

![image1020.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1020.jpg)

- Expressão de Chave - identifica cada fatia. Ex: $F&#123;letra_alfabetica&#125;
- Expressão de Valor - a variável que criamos. Ex: $V&#123;Valor_Total&#125;
- Expressão de Texto - é o rótulo que será exibido para cada fatia. Ex: $F&#123;letra_alfabetica&#125;

Salve o relatório e o execute, o gráfico se localiza na ultima página do relatório.

![image1021.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1021.jpg)

Criando Sub-relatório:

Para a criação do sub-relatório, você deverá escolher o componente e na tela que será aberta clique em finalizar, depois dê um duplo clique no subformulário e navegue até a aba Sub-Relatório (Outros), onde será informado o campo Expressão de Sub-Relatório. o local onde o sub-report. jasper está, ou seja, o seu sub-relatório compilado. Na aba Parâmetro do Sub-Relatório, clique em Adicionar na tela que foi aberta e informe o nome do parâmetro e a expressão.

![image1022.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1022.jpg)

Observe os dois relatórios em destaque criados e o componente de sub-relatório.

![image1023.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1023.jpg)

Aba propriedade do sub-relatório (outro).

![image1024.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1024.jpg)

- Navegue para o subrelatório e crie um parâmetro com o mesmo nome e o mesmo tipo do parâmetro feito no formulário mestre. Na tela de consulta do relatório, usando a condição Where, informe o parâmetro;

![image1025.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1025.jpg)

- Depois compile o sub-relatório e navegue para o relatório principal. Em seguida, salve e visualize.

![image1026.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1026.jpg)

Visualizando um Sub-Relatório no Webrun:

Para visualizar no WebRun um relatório com um sub-relatório, devem ser feitas as seguintes configurações: clicando com o botão direito no componente sub-relatório adicionado no relatório pai; clique em Propriedades; aba Sub-Relatório (Outro); e no campo Expressão de Sub-Relatório. Nesse campo, informe o caminho onde está o seu arquivo.jasper que é o nome do arquivo do sub - relatório compilado. O arquivo compilado deve estar na pasta "c: \Aqruivos de Programas\Softwell Solutions\Maker2.5\WebRun2\Report\Bridg\id" do relatório criado no Maker.

![image1027.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1027.jpg)

- Após essas configurações, salve o relatório principal e coloque o arquivo jrxml na pasta onde se encontra o arquivo.jasper e, no arquivo data, substitua o nome do feito no Maker pelo relatório feito no iReport. Reinicie o serviço do Webrun e abra seu relatório no sistema.

![image1028.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1028.jpg)

Relatório criado no Jasper e gerado na Webrun.

- Observações:
- - $F para campos;
  - $V para variáveis;
  - $P para parâmetros;
  - $R para recursos localizados.

Observação geral: A versão atual do iReport suportado pelo Webrun é a 3.1.2. Versões  diferentes podem ocasionar erros de compatibilidade (Por exemplo: Relátorio que usa imagens criados no iReport 3.0.0, geram erro, quando gerado no formato PDF) Como resolução, pode-se tomar um dos caminhos a seguir:

1 - Utilizar a versão 3.1.2 do IReport.

ou

2 - Modificar a biblioteca utilizada pelo Webrun:

1. Remova o arquivo pasta webrun\WEB-INF\lib\jasperreports-3.1.2.jar;
2. Inclua o arquivo correspondente à versão em utilização. Ex.: jasperreports-3.0.0.jar;
3. Reinicie o Webrun.
