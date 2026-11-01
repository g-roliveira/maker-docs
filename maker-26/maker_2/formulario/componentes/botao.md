---
title: "Botão"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/componentes/botao.htm"
---

# image135.gif   Botão

Este componente pode ser usado para chamadas de outros formulários, de listagens e de relatórios, além de outras ações que podem ser atribuídas a ele em um de seus eventos.

Este componente pode informar o nome do formulário, caso ele chame algum. Dessa forma, este botão pode servir como um filtro, passando informações do formulário "pai" para o novo formulário. O formulário "filho" chamado será filtrado, com informações vinculadas a um campo, passadas pelo formulário "pai".

O botão possui como propriedades particulares:

- Formulário - nesta propriedade, é informado o nome do formulário que será chamado, caso o botão seja clicado;

Observação: Quando inserido em um formulário, sem fonte de dados, o botão com a propriedade para abrir formulário não funciona. Temos que usar o método antigo: Ação Predefinida - Abrir Formulário.

- Propriedade Parâmetros - e nesta propriedade que indicamos um ou mais campos de ligação entre o formulário e o Botão. Esta propriedade serve de filtro para os dados.

![campos de ligação](https://suporte.softwell.com.br/Manual/Maker2_6/image54.jpg)

Selecione o Campo do formulário detalhe que irá se relacionar com o Campo do formulário master e clique no botão ![image136.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image136.gif) (equivalente). Mais abaixo, defina o Tipo de ligação, informando:

- Padrão (AND) - a ligação entre os dados é verdadeira quando forem iguais;
- Ignorar Nulo - a ligação será verdadeira mesmo que os dados do formulário detalhe sejam nulos;
- União (OR) - a ligação será verdadeira contendo valores do formulário detalhe ou apenas do formulário master;
- Eventos do componente Botão:
- - Ao clicar - ao selecionar esta opção, selecione uma regra para o evento ao clicar no formulário.

Para mais detalhes, acesse o tópico [Propriedades e Eventos](../propriedades_e_eventos).
