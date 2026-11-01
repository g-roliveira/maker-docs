---
title: "Como filtrar Lista Dinâmica por meio do outro componente Lista Dinâmica"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/componente/como_filtrar_lista_dinamica_atraves_do_outro_componente_lista_dinamica.htm"
---

Este exemplo tem como objetivo apresentar como filtrar o conteúdo de uma Lista Dinâmica, por meio da prévia seleção de um dado de outra Lista Dinâmica.

Para exemplificar, utilizaremos um formulário que possui dois campos do tipo Lista Dinâmica, para cadastrar Estado e Cidade. Os dois campos possuem tabelas próprias e relacionam-se com o formulário principal pelo seguinte modelo:

![image873.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image873.jpg)

Abaixo segue o layout do formulário principal:

![image874.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image874.jpg)

Observe a consulta criada para o campo Cidade:

Select

ger_cidade.cid_cod,

ger_cidade.cid_nome

From

ger_cidade Inner Join

ger_estado On ger_cidade.est_cod = ger_estado.est_cod

Where

ger_estado.est_cod = :est_cod

Dessa forma, quando for cadastrar a informação para o campo Cidade, o conteúdo da lista será filtrado de acordo com o conteúdo anteriormente definido em Estado.

![image875.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image875.jpg)

Lista filtrando lista - Esta vídeoaula exemplifica como filtrar um componente lista por meio de outro componente lista.
