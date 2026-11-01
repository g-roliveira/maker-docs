---
title: "Scanner de Dependência"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/visualizador_dependencia.htm"
---

O Scanner de Dependências tem como função permitir a visualização das dependências que envolvem os formulários, regras, tabelas e funções do projeto.

Pode ser acessado pelo menu Projetos e deste a opção ![image821.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image652.png) ou faça a combinação de teclas Ctrl+O.

![image817.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image657.png)

A tela possui as seguintes opções:

- ![image819.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image655.png)- trabalham para retornar ou avançar entre as visualizações da tela;
- ![image824.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image656.png) - espaço para digitar um item para pesquisa. Este pode ser controlado pelo botão ao lado:

![image825.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image658.png)

- - Regras - ative esta opção para que os fluxos sejam incluídos na pesquisa;
  - Formulários - ative esta opção para que os formulários sejam incluídos na pesquisa.
- ![image826.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image659.png) - este botão deve ser ativado pelo usuário, quando a tela for acessada. Atualizará a relação de itens sincronizandos com o projeto em desenvolvimento;
- ![image827.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image660.png) - ativa a área de Mensagens da tela. Esta área exibirá inconsistências entre as referências de fluxos de ações nos eventos dos formulários.

A tela possui três regiões principais:

- Lista de Objetos - composta pela exibição de  Regras, Tabelas, Formulários e Funções em uso ou criados no projeto. Ao lado de cada grupo de objetos, utilize o botão ![image832.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image832.gif) para expandir a ramificação. Os objetos serão exibidos na ordem ascendente da descrição e agrupados por categorias;
- Objetos dos quais &lt;nome do objeto&gt; depende - lista de precedentes para o funcionamento do elemento selecionado em Lista de Objetos;
- Objetos que dependem de &lt;nome do objeto&gt; - lista de dependentes do elemento selecionado em Lista de Objetos.

Observações:

1. um objeto no scanner de dependência que esteja em vermelho, significa que há pouco ou nenhum objeto sendo referenciado.
2. Para que as tabelas apareçam no visualizador de dependências, é necessário atualizar a lista de tabelas no dicionário de dados.
3. Caso o banco de dados utilizado seja o FireBird, esse recurso é suportado apenas a partir da versão 2.0.
4. O campo de pesquisa do Visualizador de Dependências é case sensitive, ou seja, os maiúsculos são diferenciados dos minúsculos.
5. Só serão visíveis formulários cujo pai seja dependente, se eles possuírem algum componente vinculado.
