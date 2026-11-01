---
title: "Utilizando a Função Adicionar a Arquivo"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/funcoes/Utilizando_a_funcao_Adicionar_a_arquivo.htm"
---

Esse exemplo demonstra a utilização da função adicionar a arquivo.

1. Crie um formulário sem fonte de dados com as seguintes características:

![img22132.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe46.png)

2. Crie um novo fluxo. Para um melhor entendimento o fluxo ficará da seguinte forma:

![img22133.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe47.png)

3. Defina os seguintes parâmetros de entrada:

![img22134.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe48.png)

4. Defina a seguinte variável:

![img22135.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe49.png)

5. Adicione um objeto Pocessamento e no Montador de Expressões selecione a função: Abrir arquivo para escrita:

![img22136.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe50.png)

6. Adicione um objeto to Pocessamento e no Montador de Expressões selecione a função: Adicionar a arquivo:

![img22137.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe51.png)

7. Adicione um objeto to Pocessamento e no Montador de Expressões selecione a função: Fechar arquivo:

![img22138.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe52.png)

8. Adicione um objeto interação com a seguinte informação: Arquivo criado com sucesso!.

![img22139.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe53.png)

9. Salve o fluxo na camada servidor e associe-o ao botão Gerar Arquivo.
10. Execute- o no Webrun:

![img22140.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/img22140.JPG)
