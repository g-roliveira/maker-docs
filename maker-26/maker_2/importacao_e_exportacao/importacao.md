---
title: "Importação"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/importacao_e_exportacao/importacao.htm"
---

A tela de Importação possibilita a seleção de um arquivo *.FRZ que foi criado a partir da exportação de objetos do Maker.

Para importar um arquivo, clique no botão ![image441.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image441.gif) da [Barra de Ferramentas do Maker](../barra_de_ferramenta_do_sistema) ou então ative o menu Objetos, opção Importar.

![image1126.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1126.jpg)

Na tela que é ativada, temos:

- Arquivo -  permite selecionar o sistema a ser importado.
- Sistema - apresenta a sigla do sistema do qual foi feita a exportação dos objetos.
- Data e Hora de Geração - apresenta a data e hora em que os objetos foram exportados.
- Atualização completa do sistema - marcando esta opção, será importada toda a estrutura dos objetos contidos no arquivo de exportação.
- - Imagens - marcando esta opção, serão importadas todas as imagens do arquivo;
  - Tipos de dados - marcando esta opção, serão importados todos os tipos de dados criados no sistema no qual o arquivo de exportação foi gerado;
  - Menus - marcando esta opção, toda a estrutura de menus e submenus que foi extraída do outro sistema será criada no sistema para o qual o arquivo está sendo importado;

- Ações - Esta opção foi descontinuada na versão 2.5 do Maker.

Observação: Caso esta opção esteja marcada, deve-se desativar para que o usuário possa selecionar uma determinada quantidade de itens.

- Salvar versão atual - armazena a estrutura de todas as propriedades de objetos e do sistema antes do início da importação efetivamente.
- Abas:
- - Formulários - lista o nome de todos os formulários contidos no arquivo.
  - Relatórios - lista o nome de todos os relatórios contidos no arquivo.
  - Fluxos - lista todos os fluxos de ações contidos no arquivo.
  - Dicionário de Dados - lista todas as entidades contidas arquivo.
  - Estrutura e Dados - lista todas as entidades contidas no arquivo. O usuário poderá selecionar pelos campos check, importar apenas Estrutura ou Estrutura e Dados.

Observação: Esta funcionalidade está disponível para projetos criados nos bancos de dados Microsoft SQL Server, Postgresql e Oracle.

- Tarefas - lista todas as tarefas (configuradas na tela Agendador de Tarefas e exportadas pela tela Exportação) contidas no arquivo.

- Tradução - Possibilita a importação  de todos os elementos traduzidos para um determinado idioma na tabela de tradução.
- - Os componentes checkbox da grade da aba Tradução são utilizados para selecionar os tipos de tradução que serão importados ou exportados, esses tipos são setados no status da tradução e podem ser (Sem Tradução, Tradução Automática, Tradução Manual, Revisão, Concluído).

- Funções - lista todas as funções contidas no arquivo. As funções apresentam-se organizadas por Categorias. Utilizando botões de seleção, escolha o conteúdo que será importado.

Para selecionar um item para ser importado nas abas:

- Formulários, Relatórios, Fluxos, Dicionário de Dados e Tarefas, deve-se marcar o checkbox que aparece à esquerda do nome do item. Caso queira selecionar todos os itens, deve-se marcar o checkbox titulado que aparece na parte inferior esquerda da aba.
- Estrutura e Dados - caso queira importar apenas a estrutura de criação da entidade, deve-se marcar o checkbox contido na coluna Estrutura; mas se quiser importar apenas a estrutura de dos dados, deve-se marcar o checkbox contido na coluna Dados.

Observação: Este recurso está disponível apenas para a versão Enterprise.

Independentemente da aba que estejamos visualizando, existirão duas colunas:

- Nome - informando o nome do objeto que pode ser importado (caso o campo de check esteja marcado);
- Status - informa se o objeto listado existe ou não no projeto atual.

Utilize o campo Salvar versão atual para manter a versão do sistema antes de a importação sobrepor os elementos do arquivo *.FRZ que possuem a mesma identificação no projeto atual.

Clicando com o botão da direita sobre um item da coluna Nome ou Status, temos comandos no menu pop-up que aparace para ajudar a selecionar elementos:

- ![image444.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image444.gif) - permite selecionar todos os elementos da lista;
- ![image445.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image445.gif) - desfaz a seleção;
- ![image446.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image446.gif) - inverte a seleção do conjunto de itens selecionados;
- ![image447.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image447.gif) - seleciona apenas os itens que não existem no banco;
- ![image448.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image448.gif) - seleciona apenas os itens existentes no banco.

Observações:

1. Bloqueio da importação de arquivos *.FRZ nas versões Enterprise e Professional para a versão  Standard. Existem outras restrições para usuários da versão Standard Edition. Para mais detalhes, acesse o tópico [Recursos e Características das Versões do Maker](../../recursos_e_caracteristicas_das_versoes_do_maker).
2. O usuário deverá criar a pasta C:\Documents and Settings\&lt;nome do usuário&gt;\Configurações locais\Dados de aplicativos\Softwell Solutions\Maker 2\debug\import_export para que o Maker possa registrar arquivos de log das importações e exportações que venha realizar. [Saiba mais!](../../dicas_e_truques/maker/verificando_log_de_importacao_ou_exportacao_de_arquivo_frz_no_maker)
3. Para importar uma tarefa é necessário que a regra exista.
