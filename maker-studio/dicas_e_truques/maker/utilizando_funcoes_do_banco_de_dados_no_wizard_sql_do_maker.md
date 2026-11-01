---
title: "Utilizando funções do banco de dados no Assistente SQL do Maker"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/utilizando_funcoes_do_banco_de_dados_no_wizard_sql_do_maker.htm"
---

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

![image1897.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/soma1.png)

Clique sobre o botão ![image1942.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/soma2.png) , para que o Assistente SQL seja aberto.

![image1898.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/soma3.png)

Informe o nome da função e os parâmetros que a mesma receberá, como demonstra a figura abaixo:

![image1899.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/soma4.png)

A função deverá ser informada da seguinte forma: nome da função(campo1,campo2).

Exemplo: soma_postgre(stt_somando_valores.stt_som_valor_1,stt_somando_valores.stt_som_valor_2)

Selecione Resultados e observe a consulta.

![image1900.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/soma5.png)

Para obter o retorno da função no Webrun, basta adicionar um novo componente ao formulário e em sua propriedade Campo, determinar a função, como demonstra a figura abaixo:

![image1902.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/soma6.png)

![image1904.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/soma7.png)
