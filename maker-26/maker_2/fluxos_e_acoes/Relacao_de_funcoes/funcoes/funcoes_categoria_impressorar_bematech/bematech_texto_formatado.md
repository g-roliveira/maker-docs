---
title: "Bematech Texto Formatado"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/bematech_texto_formatado.htm"
---

Descrição:

Essa função recebe como parâmetro uma constante letras, que será o texto a ser impresso, uma constante do tipo inteiro onde será e o identificador do tipo da letra, quatro valores lógicos, onde o primeiro identifica se  Itálico, o segundo valor lógico identifica se é Sublinhado, o terceiro  identifica se é Expandido e por ultimo identifica se é Enfatizado/Negrito. Todos os valores lógicos ativam o seu modo com o valor quando o seu  conteúdo for Verdadeiro e desativam quando for falso. O ultimo parâmetro é o identificador da impressora que é opcional.

Parâmetros:

1. Texto para ser impresso

2. Tipoletra

3. Itálico

4. Sublinhado

5. Expandido

6. Enfatizado/Negrito

7. Identificador da impressora

![image1639.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1639.gif)

Retorno:

Inteiro

Observação:

Para obter o identificador da impressora você deve utilizar a função "Iniciar Impressora" que retorna o Identificador. Esse identificador só será usado em caso de mais de uma impressora.

Exemplo:

Bematech Imprimir Texto Formatado

Parâmetro 1 : &#145;TESTE IMPRESSÃO&#146; (Texto para ser impresso)

Parâmetro 2 : Verdadeiro (Itálico)

Parâmetro 3 : Falso  (Sublinhado)

Parâmetro 4 : Falso  (Expandido)

Parâmetro 5 : Falso  (Enfatizado/Negrito)

Nome Real:

ebfBematechFormataTX

Compatibilidade:

Cliente
