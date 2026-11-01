---
title: "Utilizando dois filtros de pesquisa (Lista Dinâmica) em Relatório"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/componente/utilizando_dois_filtros_de_pesquisa_lista_dinamica_em_relatorio.htm"
---

# Utilizando dois filtros de pesquisas (Lista Dinâmica) em Relatório

Neste tópico, será mostrada a utilização de dois Filtros de Pesquisas por meio do componente [Lista Dinâmica](../../maker_2/formulario/componentes/lista_dinamica).

O exemplo listará o Departamento e, em seguida, listará todos os Funcionários desse departamento. Neste exemplo, foram utilizadas as tabelas: SIG_DEPERTAMENTO e SIG_FUNCIONARIO.

Siga os passos abaixo:

1º passo - Na aba Relatório, clique em ![](../../image136.jpg)

Na tela acima, clique em ![](../../image818.gif)

Observações:

1. No campo ![](../../image819.gif)

   2. Após seleção da tabela SIG_DEPARTAMENTO, confirme a tela;
   3. Na tela Maker Params e no campo Campo selecione a opção dep_cod.
   4. No campo Campo para Listagem selecione a opção dep_nome;
   5. Após ter selecionados os campos, confirme a tela.

   4º passo - Continuando na tela Maker Params, selecione o parâmetro acao2:

   ![](../../image904.jpg)

   defina os dados do parâmetro acao2:

![](../../image905.jpg)

na área Detalhes. Para cada componente associe aos campos selecionados no Passo 3 (DEP_NOME, FUN_NOME e FUN_SALARIO):

![](../../image908.jpg)
