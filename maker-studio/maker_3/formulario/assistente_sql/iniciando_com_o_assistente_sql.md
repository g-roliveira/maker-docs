---
title: "Iniciando com o Assistente SQL"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/assistente_sql/iniciando_com_o_assistente_sql.htm"
---

É um utilitário visual para auxílio na construção de consultas em linguagem SQL.

![image1148.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image51.png)

Esta é a tela principal do Assistente SQL. Ela é constituída das seguintes partes:

- Área de Construção de Consultas (1) - é a área principal da ferramenta, na qual será exibida a representação visual das consultas SQL. Também é possível modificar propriedades e relacionamentos entre os atributos das entidades. Caso esta tela tenha sido aberta pelo botão Assistente de Consulta da tela Definições do Formulário, a primeira tabela escolhida é a tabela que servirá como fonte de dados do formulário.
- Painel de Atributos (2) - é utilizado para a definição dos atributos que participarão da consulta. Há ainda possibilidades de criações de: apelidos, cálculos, ordenamentos, agrupamentos, subseleções, critérios de pesquisa, dentre outros. Também  se deve observar que todo campo que for marcado como campo de saída neste painel, e que não pertença à tabela principal do formulário, uma vez usado no formulário associado a um componente, não poderá ser editado, pois o Webrun só suporta ações de inclusão, alteração e exclusão de registro na tabela principal.
- Árvore de Entidades (3) - lista todas as entidades (tabelas e visões) contidas do banco de dados no qual está o projeto. A listagem é feita em ordem alfabética, agrupando as entidades pela similaridade de seus nomes;
- As abas 6,7 e 8 disponibilizam visualizações diferentes da consulta construída. A aba corrente (Diagrama) é explicada pelos itens numerados de 1 até 6; a aba Resultados mostra o resultado da consulta e é explicada pelo item 7; e a aba SQL mostra a estrutura textual da consulta construída e é explicada pelos itens 8 e 9.
- A aba Main(4) do Assistente SQL é utilizada para navegação entre a consulta principal e possíveis subconsultas:
- - Com um clique com o botão direito do mouse, na área de trabalho da aba, é apresentado um menu pop-up com as seguintes opções:
  - - Adicionar Objeto... - abre a tela Adicionar Novo Objeto, pela qual há suporte para a escolha de novas tabelas e visões, permitindo [inserir novos objetos](adicionando_um_objeto_a_consulta);
    - Adicionar tabela derivada - este recurso cria uma nova entidade na área de trabalho da aba, além de habilitar uma segunda aba para a construção da [Tabelas Derivadas](adicionando_uma_tabela_derivada);
    - Uniao - este recurso habilita o botão de controle de [união](trabalhando_com_unions) (5), pelo qual se pode navegar entre as consultas;
    - Editar.. - este recurso viabiliza a definição da limitação de registros por consulta, [edita o tipo de select](editando_o_tipo_de_select_da_consulta) para a consulta e dentre outras configurações possíveis.

![image1815.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image52.png)

É possível [criar subconsultas](adicionando_uma_sub-consulta) por meio de um clique com o botão direito do mouse sobre uma tupla vazia da coluna Expressão. Ao executar este passo, execute um clique em outra área da tela para que apareça uma nova aba, a partir da qual poderá ser configurada a subconsulta.

- A aba Diagrama (6) - é a tela mostrada na primeira imagem acima;
- A aba Resultados (7) - exibe o resultado da execução da consulta. Além disso, pelo campo "Exibir os primeiros x registros" (9), é possível delimitar a quantidade de registros que são mostrados na grade da tela, sendo necessário ainda a efetuação de um clique sobre o botão Atualizar para confirmar a configuração. Caso seja definido o valor -1 no campo, então serão retornados todos os registros da consulta:

![image62.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image55.png)

- A aba SQL (8) - apresenta o código SQL gerado pela estrutura definida na Área de Construção de Consulta.
- O botão ![criar view](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image54.png) (10) dá acesso ao recurso de criação de uma visão no banco de dados no qual foi criado o projeto. É utilizada como estrutura da visão a consulta criada na aba Diagrama:

![image63.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image56.png)

![informações da view](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image57.png)

Observação: A tela do Assistente SQL, quando acessada pelas Constantes: SQL e SQL Consulta (da tela Propriedades, aberta pela tela [Montador de Expressao](../../fluxos_e_acoes/montador_de_expressoes) do [Editor de Fluxo de Ações](../../fluxos_e_acoes/editor_de_fluxo_de_acoes)), apresenta o botão ![parâmetros](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image58.png), cuja função é a da abertura da tela de definição dos parâmetros definidos na consulta: Ex: =:parametro

![image1149.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image59.png)

![image164.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image60.png)

Com um clique sobre o botão ![image165.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image61.png) (chamado Construtor), aparece a tela Montador de Expressões, na qual são escolhidos/definidos os valores dos parâmetros.

No **Maker 3**, serão visualizadas informações dos campos das tabelas, tais como: **Campo Chave**, **Tipo do Campo**. Como demonsta a imagem abaixo:

![image1208.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image62.png)

Além de exibir informações sobre o campo, se forem inseridas tabelas com ligação no banco e no assistente for feita a ligação entre as elas, o Maker exibirá o seu relacionamento. Como demonsta a imagem abaixo:

![image1230.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image63.png)

Observações:

1. O maker não dá suporte a tabelas/campos que contenham caracteres especiais.

2. O Maker não trabalha com tabelas temporárias.

3. Quando utilizado a seguinte expressão tabela.campo &gt;:cod no assistente de consulta, caso o usuário clique na aba Resultado é mostrado todos os valores,pois o Maker insere o valor 0 implicito na consulta.
4. Não é possível utilizar mais de um campo com o mesmo nome em uma consulta, mesmo que sejam provenientes de tabelas diferentes do banco de dados. Para este caso, é necessário o uso de apelidos (Alias) nos campos em que os nomes se repetem.
5. Não é possível ter acesso a procedure no assistente SQL do Report Builder 10.
6. Não é permitido colocar mais que 256 campos em uma consulta.
7. No caso da criação de uma consulta com mais de uma entidade, o recomendado é que o primeiro campo selecionado na aba Diagrama seja da entidade que está sendo considerada como principal.
8. Ao utilizar as telas do Maker em uma determinada resolução, o tamanho e posições das janelas são salvas. Logo, se a resolução for diminuída, as janelas aparecerão com os tamanhos da última vez em que foram acessadas. O tamanho delas independe da resolução atual do monitor.
9. Assistente SQL não suporta o "Distinct ON". Como alternativa, utilize o recurso VIEW do banco de dados.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
