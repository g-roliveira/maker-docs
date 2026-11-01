---
title: "Exemplo Utilizando as funções de XML"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/funcoes/exemplo_utilizando_as_funcoes_de_xml.htm"
---

Este exemplo mostrará como utilizar as funções de XML.

Para este exemplo utilize o seguinte código.

![cod.PNG](../../cod.PNG)

Crie uma regra para obter o item1 da sala.

Seu fluxo ficará desta forma:

![sem_titulo.png](../../sem_titulo.png)

Para obter o valor do item1 será necessário 'navegar' pelos elementos.

O primeiro passo será abrir o XML:

![sem_titulo1.png](../../sem_titulo1.png)

Utilize a função 'Abrir XML' passando como parâmetro o código do XML, guarde seu retorno em uma variável do tipo 'Variante', esta variável será a referência do XML.

Será necessário obter a raiz do XML, no segundo processamento utilize a função 'Obter Raiz' e guarde seu retorno em uma variável do tipo 'Variante'.

![Sem_título2.png](../../sem_titulo2.png)

Ao obter a raiz da XML você terá a referência do elemento &lt;casa&gt;, agora você poderá obter qualquer filho deste elemento.

Obtenha a referência do elemento &lt;sala&gt;, para isso utilize a função 'Obter Filho de Elemento', passando a referência da raiz e o elemento que se deseja obter, neste caso, 'sala'.

![Sem_título3.png](../../sem_titulo3.png)

Guarde o retorno desta função em uma variável do tipo 'Variante' que será a referência do elemento &lt;sala&gt;.

Observe que esta variável tem a referência deste elemento &lt;casa&gt;&lt;sala&gt;, portanto para obter o elemento &lt;item1&gt; deverá ser feito o mesmo procedimento do item anterior.

![Sem_título4.png](../../sem_titulo4.png)

Salve o retorno desta função em uma variável do tipo 'Variante'.

Agora já é possível obter o valor do elemento &lt;item1&gt;.

No último processamento utilize a função 'Obter o Valor de um Elemento XML' e passe a variável que esta referenciando o elemento &lt;item1&gt;.

![Sem_título5.png](../../sem_titulo5.png)

Ao executar esta função no Webrun deverá ser retornado o valor 'Janela'.

![Sem_título6.png](../../sem_titulo6.png)
