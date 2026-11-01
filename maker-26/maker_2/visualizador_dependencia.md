---
title: "Scanner de Dependência"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/visualizador_dependencia.htm"
---

O Scanner de Dependências tem como função permitir a visualização das dependências que envolvem os formulários, regras, tabelas e funções do projeto.

Pode ser acessado pelo menu Objetos e deste a opção ![image821.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image821.gif). Pela barra de ferramentas, clique no botão ![image816.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image816.jpg) ou faça a combinação de teclas Ctrl+O.

![image817.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image817.jpg)

A tela possui as seguintes opções:

- ![image818.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image818.jpg) ![image819.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image819.jpg)- trabalham para retornar ou avançar entre as visualizações da tela;
- ![image824.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image824.gif) - espaço para digitar um item para pesquisa. Este pode ser controlado pelo botão ao lado:

![image825.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image825.gif)

- - Regras - ative esta opção para que os fluxos sejam incluídos na pesquisa;
  - Formulários - ative esta opção para que os formulários sejam incluídos na pesquisa.
- ![image826.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image826.gif) - este botão deve ser ativado pelo usuário, quando a tela for acessada. Atualizará a relação de itens sincronizandos com o projeto em desenvolvimento;
- ![image827.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image827.gif) - ativa a área de Mensagens da tela. Esta área exibirá inconsistências entre as referências de fluxos de ações nos eventos dos formulários.

A tela possui três regiões principais:

- Lista de Objetos - composta pela exibição de ![image828.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image828.gif), ![image829.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image829.gif), ![image830.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image830.gif) e ![image831.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image831.gif) em uso ou criados no projeto. Ao lado de cada grupo de objetos, utilize o botão ![image832.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image832.gif) para expandir a ramificação. Os objetos serão exibidos na ordem ascendente da descrição e agrupados por categorias;
- Objetos dos quais &lt;nome do objeto&gt; depende - lista de precedentes para o funcionamento do elemento selecionado em Lista de Objetos;
- Objetos que dependem de &lt;nome do objeto&gt; - lista de dependentes do elemento selecionado em Lista de Objetos.

Observações:

1. um objeto no scanner de dependência que esteja em vermelho, significa que há pouco ou nenhum objeto sendo referenciado.
2. Este recurso está disponível apenas para a versão Enterprise.
3. Para que as tabelas apareçam no visualizador de dependências, é necessário atualizar a lista de tabelas no dicionário de dados.
4. Caso o banco de dados utilizado seja o FireBird, esse recurso é suportado apenas a partir da versão 2.0.
5. O campo de pesquisa do Visualizador de Dependências é case sensitive, ou seja, os maiúsculos são diferenciados dos minúsculos.
6. Só serão visíveis formulários cujo pai seja dependente, se eles possuírem algum componente vinculado.
