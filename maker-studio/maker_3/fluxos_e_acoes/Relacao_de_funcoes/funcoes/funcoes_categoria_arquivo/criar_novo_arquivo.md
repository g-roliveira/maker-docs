---
title: "Criar Novo Arquivo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_arquivo/criar_novo_arquivo.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Cria um novo arquivo no servidor.

Parâmetros:

1. Caminho absoluto do arquivo

![image1184.gif](../../_assets/image1184.gif)

Retorno:

Não possui.

Nome Real:

ebfFileCreate

Compatibilidade:

Banco de dados e Servidor

# Utilizando a Função Criar Novo Arquivo

Este exemplo demonstra a utilização da função Criar Novo Arquivo.

1. Crie um formulário com as seguintes características:

![img22141.JPG](../../_assets/img22141.JPG)

2. Para  um melhor entendimento o fluxo deverá  ficar da seguinte forma:

![img22142.JPG](../../_assets/img22142.JPG)

3. Crie um novo fluxo e informe o seguinte parâmetro de entrada:

![img22143.JPG](../../_assets/img22143.JPG)

4. Insira um objeto Decisão e selecione a seguinte função: Existe Subsequência:

![img22144.JPG](../../_assets/img22144.JPG)

5. Insira um objeto Processamento para a decisão SIM e selecione a seguinte função: Cria Novo Arquivo:

![img22145.JPG](../../_assets/img22145.JPG)

6. Insira um objeto Interação para a decisão Não, informando: "Informe o valor correto".

![img22146.JPG](../../_assets/img22146.JPG)

7. Salve o fluxo na camada servidor e associe-o ao botão Criar do formulário.
8. Execute-o no Webrun:

![img22147.JPG](../../_assets/img22147.JPG)
