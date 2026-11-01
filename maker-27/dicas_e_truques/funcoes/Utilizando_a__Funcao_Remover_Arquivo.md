---
title: "Utilizando a Funcao Remover Arquivo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/funcoes/Utilizando_a__Funcao_Remover_Arquivo.htm"
---

Esse exemplo demonstrará o uso da função Remover Arquivo.

1. Crie um formulário sem fonte de dados com o seguinte layout:

![img22148.JPG](../../img22148.JPG)

2. Crie um fluxo. Para facilitar o entendimento o fluxo ficará da seguinte forma:

![img22149.JPG](../../img22149.JPG)

3. Defina o seguinte parâmetro de entrada:

![img22150.JPG](../../img22150.JPG)

4. Adicione um objeto Processamento e no Montador de Expressões selecione a seguinte função: Cria Novo Arquivo:

![img22151.JPG](../../img22151.JPG)

5. Adicione um novo objeto Processamento e no Montador de Expressões selecione a seguinte função: Definir Variável da Sessão.

![img22152.JPG](../../img22152.JPG)

6. Salve o fluxo na camada Servidor, associe-o ao botão Criar arquivo do formulário e defina o seguinte parâmetro de entrada.

![img22153.JPG](../../img22153.JPG)

7. Crie um segundo fluxo. Para facilitar o entendimento o fluxo ficará da seguinte forma.

![img22154.JPG](../../img22154.JPG)

8. Adicione um objeto Processamento e no Montador de Expressões selecione a função: Obter variável da sessão.

![img22155.JPG](../../img22155.JPG)

9. Adicione um novo Processamento e no Montador de Expressão selecione a função: Remover Arquivo:

![img22156.JPG](../../img22156.JPG)

10. Adicione um objeto interação com a seguinte informação: Arquivo Removido com Sucesso!

![img22157.JPG](../../img22157.JPG)

11. Salve o fluxo e associe-o ao botão Remover Arquivo.
12. Salve o formulário e execute-o no webrun:

![img22158.JPG](../../img22158.JPG)
