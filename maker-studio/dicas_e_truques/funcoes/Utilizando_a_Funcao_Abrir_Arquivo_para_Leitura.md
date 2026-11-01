---
title: "Utilizando a Função Abrir Arquivo para Leitura"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/funcoes/Utilizando_a_Funcao_Abrir_Arquivo_para_Leitura.htm"
---

Esse exemplo demonstrará a utilização da função Abrir Arquivo para Leitura.

1. Crie um formulário com as seguintes características:

![img22122.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe15.png)

2. Crie um novo fluxo. Para um melhor entendimento o fluxo ficará da seguinte forma:

![img22123.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe16.png)

3. Adicione um objeto Processamento e no Montador de Expressões selecione a seguinte função: Converter campo do tipo texto para tipo Arquivo:

![img22124.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe17.png)

- 1º parâmetro – Componente do tipo texto que será convertido em um do tipo arquivo
- 2º parâmetro - Quantidade de caracteres (aproximados) que aparecerão. O Firefox 3 necessita dessa propriedade para alterar a largura.

4. Salve o fluxo e associe-o  ao evento  Ao entrar do formulário.
5. Crie um novo fluxo. Para um melhor entendimento o fluxo ficará da seguinte forma:

![img22125.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe18.png)

6. Defina o seguinte parâmetro de entrada:

![img22126.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe19.png)

7. Defina as seguintes variáveis: Caminho_Arquivo, Referencia, Arquivo lido e Entrada do Arquivo:

![img22127.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe20.png)

8. Adicione um novo Processamento e no Montador de Expressões selecione a seguinte função: Abrir arquivo para leitura:

![img22128.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe21.png)

9. Adicione um Processamento e no Montador de Expressões selecione a seguinte função: Ler todo Arquivo:

![img22129.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe22.png)

10. Adicione um Processamento e no Montador de Expressões selecione a seguinte função: Alterar Valor do Componente:

![img22130.JPG](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe23.png)

11. Salve o fluxo e associe-o ao evento: Ao clicar do Componente Texto

![img22131.JPG](../../assets/images/legacy/img22131.JPG)
