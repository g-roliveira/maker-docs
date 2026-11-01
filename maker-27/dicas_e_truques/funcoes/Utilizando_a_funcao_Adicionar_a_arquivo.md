---
title: "Utilizando a função Adicionar a arquivo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/funcoes/Utilizando_a_funcao_Adicionar_a_arquivo.htm"
---

# Utilizando a Função Adicionar a Arquivo

Esse exemplo demonstra a utilização da função adicionar a arquivo.

1. Crie um formulário sem fonte de dados com as seguintes características:

![img22132.JPG](../../img22132.JPG)

2. Crie um novo fluxo. Para um melhor entendimento o fluxo ficará da seguinte forma:

![img22133.JPG](../../img22133.JPG)

3. Defina os seguintes parâmetros de entrada:

![img22134.JPG](../../img22134.JPG)

4. Defina a seguinte variável:

![img22135.JPG](../../img22135.JPG)

5. Adicione um objeto Pocessamento e no Montador de Expressões selecione a função: Abrir arquivo para escrita:

![img22136.JPG](../../img22136.JPG)

6. Adicione um objeto to Pocessamento e no Montador de Expressões selecione a função: Adicionar a arquivo:

![img22137.JPG](../../img22137.JPG)

7. Adicione um objeto to Pocessamento e no Montador de Expressões selecione a função: Fechar arquivo:

![img22138.JPG](../../img22138.JPG)

8. Adicione um objeto interação com a seguinte informação: Arquivo criado com sucesso!.

![img22139.JPG](../../img22139.JPG)

9. Salve o fluxo na camada servidor e associe-o ao botão Gerar Arquivo.
10. Execute- o no Webrun:

![img22140.JPG](../../img22140.JPG)
