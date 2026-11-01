---
title: "Utilizando o componente Lista dinâmica com chave composta"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/componente/utilizando_o_componente_lista_dinamica_com_chave_composta.htm"
---

O componente lista dinâmica possibilita a utilização de chave composta

Chave composta é quando o identificador único de uma tabela é formado por dois ou mais campos, que podem ou não ser chaves primárias.

Para proceder a essa configuração, siga os passos abaixo:

1. Vincule uma consulta e selecione os campos chaves e um campo descrição na propriedade SQL do componente Lista Dinâmica

![image1904.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1904.gif)

2. Escreva os nomes dos campos que compõem a chave separados por ponto e vírgula na propriedade Campo chave. Exemplo: campo1;campo2;campo3.

Observação: Estes campos foram selecionados na consulta vinculada ao componente.

![image1905.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1905.gif)

3. Escreva os nomes dos campos que compõem a chave separada por ponto e vírgula na propriedade Campo. Exemplo: campo1;campo2;campo3.

Observação: Estes campos foram selecionados na consulta vinculada ao formulário.

![image1906.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1906.gif)

Observação: Está funcionalidade só é útil quando a propriedade Campo da Lista dinâmica estiver preenchida.
