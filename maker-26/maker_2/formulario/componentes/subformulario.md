---
title: "SubFormulário"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/componentes/subformulario.htm"
---

# image138.gif   SubForm

O Subform é um componente com capacidade de agregar um formulário já existente no seu formulário. Com ele podemos fazer relacionamentos um para um entre formulários.

O Subform possui poucas particularidades em relação aos demais componentes.São elas:

- Propriedade Formulário - nesta propriedade é informado o código do formulário que estará fazendo parte do Subformulário;
- Propriedade Parâmetros - é nesta propriedade que indicamos um ou mais campos de ligação entre o formulário principal e o SubFormulário. Essa propriedade serve de filtro para os dados.

![image322.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image322.jpg)

Selecione o Campo do formulário detalhe que irá relacionar com o Campo do formulário master e clique no botão ![image139.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image139.gif) (equivalente). Mais abaixo, defina o Tipo de ligação, informando:

- Padrão (AND) - a ligação entre os dados é verdadeira quando forem iguais;
- Ignorar Nulo - a ligação será verdadeira mesmo que os dados do formulário detalhe sejam nulos;
- União (OR) - a ligação será verdadeira contendo valores do formulário detalhe ou apenas do formulário master.

Todos os componentes possuem Propriedades e Eventos. Para conhecê-los [clique aqui](../propriedades_e_eventos).

Observações:

1. Ao utilizar mais de um subformulário ou grade num mesmo formulário master, não deverá existir mais de um componente (subformulário ou grade) vinculado ao mesmo formulário detalhe.
2. No Webrun, quando o componente do subformulário estiver excedendo à área limite, é necessário ajustar o subformulário no formulário do Maker.
3. Um formulário que será utilizado como subformulario deverá conter apenas uma aba, caso o mesmo possua mais de uma serão exibidos o(s) componente(s) de todas as  abas sobrepostos.
4. Os eventos Ao Entrar, Ao Navegar, Ao Pressionar Tecla, Ao Sair não se aplicam quando o formulário está em um subform.
5. O subform não é um copia perfeita do formulário é apenas uma pré-visualização do mesmo. Sendo assim alguns componentes demonstrados no formulário, podem não ser demonstrados da mesma forma no subform.
