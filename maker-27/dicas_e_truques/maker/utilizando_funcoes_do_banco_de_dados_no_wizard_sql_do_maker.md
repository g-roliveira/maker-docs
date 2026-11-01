---
title: "Utilizando funções do banco de dados no Wizard SQL do Maker"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/maker/utilizando_funcoes_do_banco_de_dados_no_wizard_sql_do_maker.htm"
---

# Utilizando funções do banco de dados no Assistente SQL do Maker

Este tutorial tem como objetivo, exemplificar a utilização de funções de banco de dados no Assistente SQL do Maker.

Neste exemplo utilizaremos uma função bastante simples, que consiste basicamente em somar dois valores:

CREATE OR REPLACE FUNCTION soma_postgre(num1 bigint, num2 bigint)

  RETURNS bigint AS

$BODY$

BEGIN

 return num1 + num2;

END$BODY$

  LANGUAGE plpgsql VOLATILE;

ALTER FUNCTION soma_postgre(bigint, bigint) OWNER TO postgres;

A função foi criada no PostgreSQL. Para saber como criar funções no PostgreSQL, consulte o manual do banco de dados.

Criada a função, é hora de adicioná-la a consulta.

Com o Maker aberto, selecione o formulário onde será utilizado a função. Neste exemplo será utilizado o formulário Somando Valores.

![image1897.jpg](../../image1897.jpg)

Clique sobre o botão ![image1942.gif](../../image1942.gif) , para que o Assistente SQL seja aberto.

![image1898.jpg](../../image1898.jpg)

Informe o nome da função e os parâmetros que a mesma receberá, como demonstra a figura abaixo:

![image1899.jpg](../../image1899.jpg)

A função deverá ser informada da seguinte forma: nome da função(campo1,campo2).

Exemplo: soma_postgre(man_somando_valores.man_som_num1,man_somando_valores.man_som_num2)

Selecione Resultados e observe a consulta.

![image1900.jpg](../../image1900.jpg)

Para obter o retorno da função no Webrun, basta adicionar um novo componente ao formulário e em sua propriedade Campo, determinar a função, como demonstra a figura abaixo:

![image1902.jpg](../../image1902.jpg)

![image1904.jpg](../../image1904.jpg)
