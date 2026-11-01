---
title: "Utilização de Função da categoria Arquivo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/funcoes/utilizacao_de_funcoes_da_categoria_arquivo.htm"
---

# Utilização de Funções da Categoria Arquivo

Objetivo

Demonstrar a utilização de funções da Categoria Arquivo, envolvendo: Criar Arquivo, Abrir Arquivo para escrita, Adicionar a Arquivo, Fechar Arquivo, Descarregar para Arquivo.

Exemplo prático

1. Preparação do Ambiente:

![image651.jpg](../../image651.jpg)

Crie um formulário para a execução do fluxo. No exemplo, implementaremos um botão para executar o fluxo.

2. O fluxo:

![image652.jpg](../../image652.jpg)

Desenvolva um fluxo composto por um objeto Decisão e Processamentos. Será verificada a existência do um arquivo (nome e local fixo) para implementar o seu conteúdo. Caso não exista, será criado e implementado (com um texto fixo). Será utilizada uma variável do tipo Variante.

1. Insira um objeto Decisão que verificará se o arquivo existe:

   1. A função Existe Arquivo? retornará Verdadeiro ou Falso. Essa função utiliza apenas um parâmetro, no qual informamos o local e o nome do arquivo (no exemplo, foi informado d:\texto.txt):

![image653.jpg](../../image653.jpg)

2. Insira um objeto Processamento para o caso SIM:

   1. Esse processamento utilizará a função Abrir arquivo para escrita. Essa função possui dois parâmetros: no primeiro devemos informar o local e o nome do arquivo e no segundo informe Verdadeiro (para que o arquivo permita adicionar informações ) ou Falso (para que o arquivo, ao receber informações, sobreponha o seu conteúdo original). Atribua a expressão à variável criada:

![image654.jpg](../../image654.jpg)

3. Insira um objeto Processamento para o caso NÃO:

   1. Este processamento utilizará a função Criar novo arquivo. Esta função possui um parâmetro no qual informamos o local e o nome do arquivo (no exemplo, foi informado d:\texto.txt). Atribua a expressão à variável criada:

![image655.jpg](../../image655.jpg)

     d. Insira um objeto Processamento dando seguimento ao fluxo caso SIM ou NÃO:

1. Esse processamento utilizará a função Adicionar a arquivo. Essa função possui dois parâmetros: no primeiro, utilizaremos a variável que identificará o arquivo; e, no segundo parâmetro, informamos o conteúdo que será implementado:

![image656.jpg](../../image656.jpg)

5. Insira um objeto Processamento forçando a gravação dos dados no arquivo (dessa forma estará forçando que o Sistema Operacional lance os dados da memória para o arquivo em uso, garantindo que isso não ocorra em segundo plano):

   1. Esse processamento utilizará a função Descarregar para arquivo. Essa função possui um parâmetro no qual será feita a identificação do arquivo:

![image657.jpg](../../image657.jpg)

6. Insira um objeto Processamento para fechar o arquivo:

   1. Este processamento utilizará a função Fechar arquivo. Esta função possui um parâmetro no qual será a identificação do arquivo:

![image658.jpg](../../image658.jpg)

Salve o fluxo e atribua ao evento Ao Clicar do botão que adicionou no formulário.

Utilizando Funções da Categoria Arquivo - Esse exemplo demonstra a utilização de funções da Categoria Arquivo (Pode Ler?, Abrir arquivo para leitura, Ler todo Arquivo e Renomear Arquivo)
