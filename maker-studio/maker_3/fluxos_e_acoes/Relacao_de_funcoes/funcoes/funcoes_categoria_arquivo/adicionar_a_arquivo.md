---
title: "Adicionar a arquivo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_arquivo/adicionar_a_arquivo.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Armazena no arquivo o conteúdo passado pelo segundo parâmetro.

Parâmetros:

1. Variável onde a referência do arquivo foi armazenada. Essa referência é o retorno da função "Abrir arquivo para escrita".

2. Conteúdo que será adicionado ao arquivo.

![image1181.gif](../../_assets/image1181.gif)

Retorno:

Não possui.

Exemplo:

Assumindo como parâmetros a referência para o arquivo "HelpMaker.txt" (Letras), e "Maker Flow" (Letras),  o conteúdo "Maker Flow" passado será adicionado no arquivo HelpMaker.txt.

Nome Real:

ebfFileAppend

Compatibilidade:

Banco de dados e Servidor

# Utilizando a Função Adicionar a arquivo

Esse exemplo demonstra a utilização da função adicionar a arquivo.

1. Crie um formulário sem fonte de dados com as seguintes características:

![img22132.JPG](../../_assets/img22132.JPG)

2. Crie um novo fluxo. Para um melhor entendimento o fluxo ficará da seguinte forma:

![img22133.JPG](../../_assets/img22133.JPG)

3. Defina os seguintes parâmetros de entrada:

![img22134.JPG](../../_assets/img22134.JPG)

4. Defina a seguinte variável:

![img22135.JPG](../../_assets/img22135.JPG)

5. Adicione um objeto Pocessamento e no Montador de Expressões selecione a função: Abrir arquivo para escrita:

![img22136.JPG](../../_assets/img22136.JPG)

6. Adicione um objeto to Pocessamento e no Montador de Expressões selecione a função: Adicionar a arquivo:

![img22137.JPG](../../_assets/img22137.JPG)

7. Adicione um objeto to Pocessamento e no Montador de Expressões selecione a função: Fechar arquivo:

![img22138.JPG](../../_assets/img22138.JPG)

8. Adicione um objeto interação com a seguinte informação: Arquivo criado com sucesso!.

![img22139.JPG](../../_assets/img22139.JPG)

9. Salve o fluxo na camada servidor e associe-o ao botão Gerar Arquivo.
10. Execute- o no Webrun:

![img22140.JPG](../../_assets/img22140.JPG)
