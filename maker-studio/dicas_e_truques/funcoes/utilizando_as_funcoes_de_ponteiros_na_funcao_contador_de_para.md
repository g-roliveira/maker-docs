---
title: "Utilizando as funções de Ponteiros na função \"Contador De Para\""
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/funcoes/utilizando_as_funcoes_de_ponteiros_na_funcao_contador_de_para.htm"
---

# Utilizando as funções de Ponteiros na função Contador De Para

A função Contador De Para possui uma limitação que ao declarar mais de uma variável do tipo Inteiro com o mesmo valor e utilizá-la na função, todas as variáveis declaradas são incrementadas.

Contanto foram criadas as funções de Ponteiros que podem ser utilizadas como referência para o incremento da função Contador De Para, são elas: Ponteiro - Criar Instância, Ponteiro - Definir Valor, Ponteiro - Obter Valor, segue abaixo exemplo para sua utilização.

1. Utiliza-se a função Ponteiro - Criar Instância e armazena seu retorno em uma variável do tipo variante. Esta função cria um ponteiro para ser utilizado posteriormente em Contador De Para.

![image1583.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe78.png)

2. A variável que foi criada é passada como parâmetro na função Contador De Para, dessa forma, a função obterá o valor do ponteiro e incrementará automaticamente.

![image1588.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe79.png)

3. O fluxo deverá ficar desta forma.

![image1589.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe80.png)

Caso queira obter o valor contido no ponteiro basta utilizar a função Ponteiro – Obter Valor.

![image1590.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe81.png)

Mais detalhes de cada função podem ser consultados em suas respectivas descrições.
