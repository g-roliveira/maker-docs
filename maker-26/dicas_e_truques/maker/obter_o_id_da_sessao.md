---
title: "Obter o ID da Sessão"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/maker/obter_o_id_da_sessao.htm"
---

As tabelas FR_SESSAO e FR-SESSAO_VI foram depreciadas para os projetos iniciados com a versão 2.5.x do Maker. Ou seja, não serão mais utilizadas para os novos projetos, mas permanecerá a sua estrutura no banco de dados para manter a compatibilidade com projetos desenvolvidos em versões anteriores.

Algumas rotinas, antes executadas por consulta às tabelas, serão executadas por fluxo. Como exemplo, Para obter o ID da Sessão, terá que desenvolver um Fluxo.

Siga os passos:

1. No [Editor de Fluxo de Ações](../../maker_2/fluxos_e_acoes/editor_de_fluxo_de_acoes), insira um componente [Processamento](../../maker_2/fluxos_e_acoes/objeto_processamento).
2. Edite o componente e por meio do Montador de Espressões, clique na aba Fluxos e Funções e localize a Função Retornar Constante do Sistema.
3. Para o parâmetro da função (do tipo Letras), será passado conexaoid.

![funcao_retornar_constante_da_sessao.bmp](https://suporte.softwell.com.br/Manual/Maker2_6/funcao_retornar_constante_da_sessao.bmp)

A função Retornar Constante do Sistema pode ser utilizada para qualquer situação, quando necessitar do valor resultante de uma [Função Predefinida](../../maker_2/formulario/funcoes_predefinidas) (mesmas funções usadas em [Valor Padrão](../../maker_2/formulario/propriedade_do_formulario) ou no [Assistente SQL](../../maker_2/formulario/assistente_sql/usando_funcoes_predefinidas_em_consultas)), só que de uma forma mais simplificada. Observe que, para definir o parâmetro da função, escreve-se apenas o conteúdo correspondente ao corpo da função. O exemplo acima citado (caso use para definir o valor padrão de um campo do formulário) seria utilizado da seguinte forma: FUNCAO("CONEXAOID").
