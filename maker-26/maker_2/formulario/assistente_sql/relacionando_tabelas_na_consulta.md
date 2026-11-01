---
title: "Relacionando tabelas na consulta"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/assistente_sql/relacionando_tabelas_na_consulta.htm"
---

Para relacionar objetos, é necessário que se executem os seguintes passos:

1. Seja efetuado um clique com o botão esquerdo do mouse sobre um campo de um objeto, mantendo o botão do mouse pressionado.
2. Ainda mantendo o botão do mouse pressionado, seja arrastado o campo do objeto ao campo do outro objeto.
3. Seja solto o botão do mouse.

Executados esses passos, aparecerá uma linha informando ao usuário que há ligação entre os dois campos dos objetos.

![image1215.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1215.jpg)

Clicando com o botão direito do mouse sobre a linha que relaciona os dois campos, são listadas as opções Remover (remove o objeto selecionado da área de trabalho do Assistente SQL) e Editar... (local no qual é definido o operador de ligação dos campos e o tipo de relacionamento entre os objetos).

![image1216.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1216.jpg)

Escolhida a opção Editar..., aparece a janela Propriedades da ligação.

![propriedade da ligação](https://suporte.softwell.com.br/Manual/Maker2_6/image72.jpg)

Nela estão contidas as opções:

- Campo Objeto esquerdo - apresenta o nome do primeiro objeto que contém o campo selecionado (que recebeu clique) no momento da ligação entre os objetos.
- Campos Objeto direito - apresenta o nome do segundo objeto que continha o campo para o qual foi direcionado o cursor do mouse no momento da ligação entre os objetos.
- A opção Selecionar tudo à esquerda - marcando esta opção e deixando a opção Selecionar tudo à direita desmarcada, independentemente de haver dados iguais entre os campos de ligação dos objetos relacionados, a consulta garante o retorno de todos os dados do Objeto esquerdo.
- A opção Selecionar tudo à direita - marcando esta opção e deixando a opção Selecionar tudo à esquerda desmarcada, independentemente de haver dados iguais entre os campos de ligação dos objetos relacionados, a consulta garante o retorno de todos os dados do Objeto direito.

Observações:

- 1. Marcando as duas opções descritas, independentemente de haver dados iguais entre os campos de ligação dos objetos relacionados, a consulta garante o retorno de todos os dados de ambos os objetos;
  2. Desmarcando ambos, apenas dados iguais entre os campos de ligação dos objetos relacionados serão garantidos pela consulta.
- Campo Coluna esquerda - apresenta o nome do campo selecionado (que recebeu clique) no momento da ligação entre os objetos;
- Campo Coluna direito -  apresenta o nome do campo para o qual foi direcionado o cursor do mouse no momento da ligação entre os objetos;
- Os operadores definem o tipo de relação entre os campos dos objetos. São operadores o sinal de: igual (=), maior (&gt;), menor (&lt;), maior ou igual (&gt;=), menor ou igual (&lt;=), diferente (&lt;&gt; ou !=), não é maior (!&gt;), e não é menor (!&lt;);
- Para confirmar, clique em OK, caso contrário, clique em Cancelar.
