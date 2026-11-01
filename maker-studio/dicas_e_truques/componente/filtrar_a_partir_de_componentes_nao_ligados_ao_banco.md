---
title: "Filtrar a partir de componentes não ligados ao banco"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/componente/filtrar_a_partir_de_componentes_nao_ligados_ao_banco.htm"
---

É possível filtrar componentes a partir de outros componentes, mesmo que não estejam ligados ao banco. Por exemplo: filtrar o componente [Lista Dinâmica](../../maker_3/formulario/componentes/lista_dinamica) a partir do componente [Caixa de Texto](../../maker_3/formulario/componentes/caixa_de_texto).

Para isso, utilizamos, como critério na Lista Dinâmica o seguinte [Parâmetro](../../maker_3/formulario/propriedades_e_eventos):  =:componente_&lt;Nome do componente&gt;.

Exemplificando, criaremos uma Lista Dinâmica, onde no SQL faça uma consulta na tabela FR_ACAO, obtendo os campos aco_codigo e aco_nome e filtraremos os registros a partir de uma caixa de texto.

Definir como critério do campo aco_codigo, o Parâmetro =:componente_MakerEdit1:

![image833.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image833.jpg)

Dessa forma, quando abrirmos a lista dinâmica, será feita a consulta na tabela FR_ACAO e usando como critério o valor contido no componente MakerEdit1:

![image834.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image834.jpg)

Existem várias combinações que podem ser feitas entre os componentes, são eles:

- Caixa de Texto filtrar Lista Dinâmica;
- Caixa de Texto filtrar Grade;
- Caixa de Texto filtrar SubForm;
- Lista Dinâmica filtrar Lista Dinâmica;
- Lista Dinâmica filtrar Grade;
- Lista Dinâmica filtrar SubForm.

Nenhum dos componentes precisa estar ligado ao banco.

Os filtros dos componentes [Grade](../../maker_3/formulario/componentes/grade) e [SubFormulário](../../maker_3/formulario/componentes/subformulario) ocorrem através da propriedade Parâmetros escolhendo a opção Componentes da tela Campos de Ligação:

![image835.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image835.jpg)

Por exemplo: em um formulário sem fonte de dados e com um componente [Caixa de Texto](../../maker_3/formulario/componentes/caixa_de_texto) que servirá para digitar algum valor para filtrar uma Grade ou um SubFormulário. Podemos definir o filtro no Select do formulário da Grade ou do Subformulário, utilizando o Parâmetro: =:componente_&lt;NomeDoComponente&gt;:

![image833.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image833.jpg)

Observe que, mesmo que o critério tenha sido definido em outro formulário, no momento em que definimos o componente, o formulário irá procurar aquele componente, mesmo em outro formulário.

![image836.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image836.jpg)

Dessa forma, um SubFormulário ou Grade pode ser filtrado por uma Caixa de Texto ou Lista Dinâmica, bastando apenas definir no select dos formulários.

Observações:

1. O nome do componente no filtro é case sensitive. Portanto, o Parâmetro tem que estar escrito de forma idêntica ao do componente;
2. Não deve existir outro componente com o mesmo nome no SubFormulário ou Grade;
3. Para que os componentes no formulário não ligados ao banco venham filtrados automaticamente, é necessário popular os componentes no evento "Ao Navegar" do formulário. Por exemplo, para que uma grade venha automaticamente filtrada por uma lista dinâmica, é necessário escolher um valor de início para a lista dinâmica, portanto, ela deve obedecer a alguma regra de negócio, que será chamada no evento de navegação do formulário.(Ex: Atualizar o componente no Evento "Ao Navegar")
