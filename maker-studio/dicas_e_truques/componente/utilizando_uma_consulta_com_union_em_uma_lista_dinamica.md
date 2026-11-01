---
title: "Utilizando uma consulta com UNION em uma Lista dinâmica"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/componente/utilizando_uma_consulta_com_union_em_uma_lista_dinamica.htm"
---

# Utilizando uma consulta com UNION em uma lista dinâmica

Ao utilizarmos uma consulta SQL com UNION em uma lista dinâmica não é possível fazer o filtro do componente durante a sua execução no Webrun. Ao realizar o filtro na Lista dinâmica, o Webrun obtém a consulta realizada e a refaz com o filtro informado, logo, caso na consulta contenha UNION a sintaxe ficará incorreta para o banco de dados.

Exemplo de um filtro com uma consulta UNION:

![image1793.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1793.jpg)

Observe que na cláusula WHERE, o campo informado para o filtro se referencia à primeira consulta, não existindo na segunda. Isso torna uma consulta inválida para o banco de dados. Neste caso, para que o filtro da lista dinâmica funcione corretamente, é necessário que a consulta principal busque os dados de uma tabela derivada e esta tabela derivada contenha a consulta com o UNION desejado.

Ex:

Será necessário fazer a seguinte consulta:

![image1917.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1917.gif)

Para utilizá-la em uma lista dinâmica monte da seguinte maneira:

![image1918.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1918.gif)

Desta forma será possível filtrar a consulta em tempo de execução no Webrun.
