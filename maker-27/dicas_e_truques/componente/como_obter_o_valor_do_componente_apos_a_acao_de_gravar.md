---
title: "Como obter o valor do componente após a ação de gravar"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/componente/como_obter_o_valor_do_componente_apos_a_acao_de_gravar.htm"
---

Supondo que, no formulário, exista um fluxo que capture o valor de um componente, após utilizar o botão ![image882.gif](../../image882.gif), o conteúdo não é obtido.

Quando você utiliza ![image882.gif](../../image882.gif), o formulário entra em modo de inclusão. Isso quer dizer que os campos estarão nulos ou com seus valores padrão. Por isso, não conseguirá obter valores que foram definidos na sua última inserção.

Caso necessite de algum valor definido em componentes, utilize a **variável de sessão** e regra do tipo **servidor**.

Nos links abaixo, seguem exemplos com a **Variável de Sessão:**

- [Utilizando Variável de Sessão](../funcoes/utilizando_variavel_de_sessao);
- Filtro de pesquisa de Relatório utilizando Variável de Sessão.
