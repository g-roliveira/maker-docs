---
title: "Release Notes - Completo"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/releasecompleto.html"
---

Histórico de Atualizações Maker 3.9.2.34

- Suporte a sinônimos no Oracle
- Correção na exportação de dados para alguns projetos que apresentavam erro de compilação no MakerMobile
- Correção no erro apresentado ao criar um formulário no "Uso Geral" ao salvar com vínculo ao banco dados
- Correção Na aba de pesquisa dos fluxos ao selecionar, não estava mostrando a compatibilidade de camadas
- Correção Invalid Pointer ao Arrastar fluxo e associar ao componente
- Correção no Editor de SQL do Editor de Relatórios ao digitar o script SQL diretamente
- Correção na gravação tamanho da fonte do fluxos de ações (fonte de processamentos, subfluxos, etc).
- Melhoria de segurança na execução de fluxos que não estejam associadas diretamente ao formulário ou não seja externo.
- Por questões de segurança, um fluxo somente poderá ser executado externamente (quando usuário não está logado) se este estiver marcado como "Acesso Externo" ou caso esteja associado diretamente ao formulário.
- Estas restrições não se aplicam caso o projeto esteja em modo de desenvolvimento (não é compilado com JAR/WAR).
- Estas restrições se aplicam apenas aos fluxos da camada servidor.
- Melhoria de segurança nas requisições dos componentes Maker Flow.
- Correção na ordenação de colunas com alias composto.
- Correção na função adicional "Aba - Atualizar Formulário", a mesma não funcionava caso o formulário que contenha o componente Aba estivesse aberto dentro da moldura.
- Correção no posicionamento da descrição do componente CheckBox quando desabilitado.
- Melhoria na busca por palavras acentuadas no componente Tabela utilizando SGBD PostgreSQL.
- Correção na abertura de formulários que contenham caracteres especiais.
- Correção na busca por palavras acentuadas no componente Tabela.
- Correção na leitura das colunas do componente Tabela, após migração do banco de dados PostgreSQL para ORACLE.
- Correção na referência do formulário após exibir uma mensagem de erro.
- Correção na definição da janela para o redimensionamento do componente Tabela.
- Correção na centralização de formulários flutuantes.
- Correção da renderização das colunas do componente Grade.
- Inclusão do "preventDefault" para bloquear o submit ao realizar uma busca no componente Menu no Firefox.
- Tradução da mensagem de bloqueio de popup nos navegadores, para os idiomas suportados pelo Webrun.
- Correção no componente Tabela, a propriedade SQL ficava visível na resposta do servidor para escrita do componente na camada cliente.
- Correção na obtenção da conexão adicional, quando a propriedade Fonte de Dados está definida no componente Tabela.
- Atualização na biblioteca para seleção de datas:
- - Melhoria de performance(Redução do número de requisições no servidor ao navegar entre datas).
- - Atualização para um layout mais moderno.
- Adição de novos prototypes na classe HTMLMakerFlowComponent.js para que as funções de componente funcionem para os componentes MakerFlow.
- Inclusão de novas propriedades para componentes Maker 3. Estas propriedades possibilitarão que o desenvolvedor
- defina quais as propriedades (Nome)serão exibidas na resposta do servidor. Para que esta funcionalidade seja ativada,
- é necessário que a propriedade "HiddenProperties" seja definida no XML do Componente e que o componente seja aberto em
- modo design (Maker). Cada propriedade deverá ser separada por ";". Ex.: SQL;Agrupamento.
- Todas as demais propridades serão escritas no DOM da página que o componente é renderizado.
- Caso o desenvolvedor desejar que não sejam repassados o mapa de parâmetros para o fluxo que cria o omponente, o mesmo poderá
- definir no XML do componente uma propriedade de valor real denominada "HashMapParams" e passar o valor "false". Desta forma, a criação
- do componente será feita com um mapa contendo apenas o nome do componente (e as demais propriedades expostas estarão no DOM). Exemplo estrutura:
- Correção no PARSE SQL de componentes com caixa alta em alguns bancos de dados.
- Correção no foco dos formulários flutuantes quando os mesmos estavam abertos/minimizados.
- Componente Tabela, correção na busca por valores fracionados.
- Correção na definição de imagens para o componente Slider Panel.
- Melhoraria nas mensagens de feedback para as ações do usuário na interface do Tabela.
- Otimização na carga do cache para colunas do tipo Lista Dinâmica para o componente Tabela.
- Melhoria na responsividade do componente Tabela quando o formulário está aberto no componente Aba.
- Componente Tabela, campos para pesquisa não era tabulável.
- Inclusão da função "Aba - Fechar formulário".
- Componente Organograma, apresentava erro de script em alguns browsers.
- Correção no posicionamento do detalhe da Lista Dinâmica quando o mesmo estava anexado em uma moldura.
- Correção no posicionamento da barra de rolagem horizontal do componente Tabela.
- Correção na associação do evento para fechar formulário no componente Aba.
- Componente Tabela, propriedade Auto Ajuste Conteúdo não era respeitada.
- Correção na função "Menu - Definir Permissão" para replicar a permissão para os subníveis.
- Componente Lista Dinâmica apresenta erro ao realizar um filtro caso a consulta possuir UNION com ORDER BY.
- Correção no posicionamento da caixa de texto na tela de relatórios para o Skin Metro
- Correção do retorno do ID do formulário.
- Correção na apresentação dos botões do componente Lista Dupla após a utilização da função Mostrar Componente.
- Correção da função Habilitar componente para o componente Texto Longo com a propriedade "Texto" configurada como "Texto Básico/Avançado".
- A partir desta versão, o componente Texto Longo, quando configurado com a propriedade "Texto" como "Texto Básico/Avançado", aplicará as definições de cores
- para as propriedades "Apenas Leitura" e "Habilitado" de acordo com o Skin utilizado no projeto quando a propriedade "Cor" estiver configurada como "Cor Automática do Componente".
- A propriedade "Cor" terá prioridade sobre as cores definidas no Skin, exceto se o Skin estiver configurado como "!important" para a propriedade desejada.
- Inclusão da nova função adicional "Tabela - Modificar Consulta" do componente Tabela.
- Correção na renderização da etiqueta do componente Gráfico quando o mesmo era do tipo Gauge.
- Correção na renderização do componente Gráfico quando o mesmo não possuía dados.
- Correção na definição de máscaras para componentes com a propriedade "Apenas Leitura" ativa.
- - Foram realizadas melhorias para utilização de máscara MONETÁRIO com a propriedade conteúdo = LIVRE;
- - Foram realizadas melhorias para utilização de máscara VALOR com a propriedade conteúdo = LIVRE;
- Correção no posicionamento da lente de aumento para o componente imagem.
- Correção no tratamento do evento "Ao preencher Lista" no componente Lista Dinâmica.
- Correção no tratamento de eventos para o componente CheckBox no componente Grade.
- Ajuste na renderização de espaços em branco entre os textos para a aba localizar e Lista Dinâmica.
- Texto rico avançado ou básico não respeita a propriedade altura definida.
- Agendador de Tarefas - Duplica os agendamentos conforme usa o "Recarregar Sistema".

Histórico de Atualizações Maker 3.9.2.4

- Ajuste na leitura da propriedade conexão no montador de expressões quando o último parâmetro da função era Variante.
- Inclusão da função adicional "Tabela - Habilitar Coluna".
- Ajuste no gerenciamento do inspetor de objetos.
- Ajuste no alinhamento da descrição dos objetos no editor de fluxos de ações.
- Ajuste na exibição variáveis do Tipo Mapa no Depurador ao utilizar o Webrun UTF-8
- Ajuste na passagem do DataConnection para o Template Múltiplo.
- Inclusão da opção "segundos" na constante Hora no montador de expressões.
- Ajuste no gerenciamento de janelas no Simulador do MakerMobile para o Windows 10.
- Atualização da documentação da função adicional "Menu - Definir Permissão".
- Atualização da documentação da função adicional "Accordion - Atualizar Conteúdo da Seção".
- Remoção da opção "Esquerda" da propriedade Legenda do componente Gráfico (GoogleCharts).
- Inclusão da função adicional "Tabela - Obter Linhas Selecionadas".
- Melhoria na identificação de camadas para as funções adicionais (Categoria Maker 3+).
- Ajuste na tradução da dica do componente "Subrelatório" no editor de relatórios.
- Melhoria na persistência das categorias no editor de fluxos. As categorias expandidas/contraídas serão mantidas.
- Inclusão dos tipos de dados: "Monetário" e "Telefone 9º Dígito" na inicialização de um novo projeto.
- Atualização das referências de Webservice ao renomear uma regra.
- Melhoria no gerenciamento de requisições do Servidor de Relatórios.
- Ajuste no formulário de LOG do Template Metro.
- [Novo evento "Ao Soltar Atalho" para o componente Menu](menu_arrastaratalho)
- [Inclusão da propriedade "Texto da Pesquisa" para o componente Menu](menu_textopesquisa)
- [Melhorias nas definições de classes CSS para o componente Accordion](accordion_classes)
- Otimização no montador de expressões para sistemas com grande quantidade de relatórios.
- Melhoria na substituição de objetos no editor de fluxos. Ao substituir um processamento por uma decisão, por exemplo, o conteúdo da expressão será preservado.
- Ajuste no componente Timer, o mesmo não estava respeitando as propriedades "Visível e Habilitado".
- Implementação para suporte ao nono dígito para os DDD's 41 a 49 e 51 a 55.
- Ajuste no upload de múltiplos arquivos quando utilizado Webrun UTF-8.
- Ajuste nas dependências do Plugin Ficha Técnica.
- Inclusão dos campos de busca na aba localizar para o componente FAQ.
- Ajuste na codificação de dados no preview do componente Gráfico.
- Ajuste na exibição da grade de temas do componente FAQ.
- Melhoria na atualização do formulário ao modificar colunas da grade.
- Ajuste na documentação dos itens do plugin System Check.
- Ajuste nos componentes Lista Dinâmica/Lista Fixa, os mesmos não renderizavam o detalhe corretamente quando usados no componente Tabela.
- Ajuste no componente Tabela, agrupamento de colunas apresentava erro utilizando o navegador Internet Explorer.
- Componente Tabela, melhoria na leitura da propriedade "Desabilitar Linhas" utilizando banco de dados MySQL.
- Ajuste na renderização das seções do componente Accordion quando as mesmas eram a partir de uma consulta SQL.
- Ajuste na atualização do formulário ao modificar as colunas da grade.
- Ajuste no componente Tabela, o mesmo redimensionava as colunas ao selecionar a opção "Mostrar Todas as Colunas" no Menu popup do componente.
- Ajuste no componente Texto Rico, ordem de tabulação não era respeitada quando o componente possuia a propriedade Texto Rico como HTML Básico ou Avançado.
- Ajuste na leitura da propriedade Largura Exibição para o componente Lista Fixa.
- Ajuste no ícone "Next" da barra de navegação do formulário Skin PortalLight, o mesmo estava fora do padrão.
- Ajuste no componente Texto Rico(HTML Básico/HTML Avançado), o mesmo não aplicava corretamente a propriedade Habilitado ou Apenas Leitura quando modificado via função.
- Ajuste no Skin PortalLight para o posicionamento do Menu popup das colunas do componente Tabela.
- Ajuste na busca do componente Menu, o mesmo estava buscando por submenus que não estão visíveis.
- Ajuste no Skin Metro, scroll da barra de rolagem só funcionava em modo de inserção ou alteração.
- Ajuste na definição da propriedade "Apenas Leitura" para os componentes Lista e Lista Dinâmica através de fluxo.
- Ajuste na renderização do conteúdo do componente Imagem após ser feito um upload.
- Ajuste no componente Tabela, melhoria na obtenção dos dados para o carregamento da cor condicional.
- Ajuste na renderização do calendário para meses com mais de 05 semanas no Skin Portal Light.
- Ajuste no componente Tabela utilizando banco de dados MySQL, o mesmo não renderizava os dados quando os campos possuiam alias.
- Ajuste na renderização da barra de rolagem no IE11 utilizando o Skin PortalLight.
- Ajuste no processamento do evento "Ao Modificar" no evento do checkbox da grade em modo de navegação.
- Ajuste no componente Menu em Modo Gerente, um erro era apresentado ao setar as permissões de acesso, quando o componente não era carregado no formulário principal.
- Ajuste no MasterSkin, o mesmo não aplicava algumas propriedades aos componentes.
- Ajuste na propriedade "Texto Quando Nulo", o valor da propriedade não era traduzido quando o sistema estava em outro idioma.
- Ajuste na renderização de formulários nas seções do componente Accordion.
- Ajuste na responsividade do componente Opções em formulários abertos em Aba.
- Ajuste na posição do botão de subFormulário do componente Lista Dinâmica em formulários abertos em Aba.
- Ajuste na responsividade do componente Tabela quando aberto no componente Aba.
- Ajuste no MasterSkin, o mesmo não estava aplicando algumas propriedades do Skin PortalLight.
- Ajuste na propriedade "Desabilitar Linha" do componente Tabela, a mesma não estava sendo aplicada.
- Ajuste na definição da largura da imagem através da função Navegação - Adicionar Botão.
- Ajuste na exibição das seções do componente Accordion no Skin PortalLight.
- Ajuste no posicionamento da barra de ações do componente Tabela no PortalLight.
- Ajuste na barra de rolagem do Skin PortalLight quando o mesmo era apresentado no mobile.
- Ajuste no componente Menu, o mesmo apresentava erro ao realizar uma busca utilizando o navegador Internet Explorer.
- Ajuste no CSS do Portal Light, mensagem de erro era apresentada desconfigurada utilizando o Internet Explorer.
- Ajuste no CSS do Portal Light quando o mesmo era aberto no iPad.
- Publicação na Nuvem, atualização na chamada do serviço Web.
- Ajuste na carga de formulários filtrados através de variáveis de sessão no componente Accordion.
- Ajuste na leitura de itens do componente RSS.
- Ajuste na definição do evento Ao Modificar no componente CheckBox.
- Ajuste na leitura do parâmetro "Selecionar Multiplas Linhas" na função "Tabela - Criar Dinamicamente".
- Ajuste na renderização de gráficos com a função "Gráfico - Séries Novo" quando o SQL possuía caracteres especiais.
- Ajuste no encoding de caracteres para a tela de relatórios no Firefox.
- Skin Metro, Ajuste na definição de permissão em outra aba em Modo Gerente.
- Ajuste na leitura da propriedade "Dica" do componente ColorPicker.
- Master Skin, Ajuste na dependência da tabela do banco de dados.
- Componente RSS, melhoria na obtenção dos dados do arquivo XML.
- Ajuste na obtenção do status do componente FAQ.
- Ajuste no componente Tabela, o mesmo não atualiza a paginação quando era filtrado por constante.
- Implementação para suporte ao nono dígito para os DDD's 61, 62, 63, 64, 65, 66, 67, 68 e 69.
- Ajuste na definição de propriedades da aba ativa.
- Ajuste na renderização do gráfico do tipo Gantt (GoogleCharts).
- Ajuste no Skin PortalLight, não apresentava scroll no Mobile.
- Ajuste na renderização, quando não tinha dados, de gráficos (GoogleCharts) do tipo Pizza.
- Ajuste na leitura de variáveis do MasterSkin.
- Ajuste na definição de máscaras para componentes Caixa de Texto não vinculados a banco.
- Ajuste no componente Menu para a utilização da função Menu - Atualizar.
- Ajuste na responsividade de formulários flutuantes no componente Aba.
- Ajuste na definição da largura, ao redimensionar a coluna, da caixa de pesquisa no componente Tabela.
- Ajuste na exibição das legendas utilizando a função Gráfico - Series Novo.
- Ajuste na pesquisa do componente Tabela para database MySQL.
- Ajuste na leitura da propriedade "Visível" e "Habilitado" para o componente RSS.
- Ajuste na verificação de campos obrigatórios quando texto rico avançado ou básico.
- Ajuste na verificação de campos do tipo Lógico para o componente Tabela.
- Ajuste na centralização de formulários flutuantes.
- Implementado o evento Ao Soltar Atalho para o componente Menu.
- Ajuste na largura da grade da aba localizar no Internet Explorer.
- Inclusão da propriedade "Texto da Pesquisa" para o componente Menu.
- Ajuste na definição da barra de navegação do formulário através do MasterSkin.
- Ajuste na definição da propriedade apenas leitura para o Texto Rico.
- Melhoria no tratamento de leituras de variáveis de sessão.
- Ajuste na leitura da propriedade largura da exibição do componente Lista Dinâmica.
- Ajuste no componente Lookup criado dinamicamente, o mesmo não estava recebendo um novo valor.
- Ajuste na renderização de dados no componente Tabela para o banco de dados MySQL.
- Ajuste no posicionamento da barra de rolagem do componente Tabela em modo de inserção.
- Ajuste no fechamento de janelas flutuantes.
- Ajustes no posicionamento dos componentes na interface do componente Tabela.
- Conteúdo tipo data não carregava o ícone da aplicação ao clicar no calendário.
- Ajuste na checagem dos tipos dos parâmetros na função executar fluxo.
- Ajuste nas dependências do plugin SystemCheck.
- Ajuste no Skin PortalLight: adequação para o autoajuste do texto no componente Menu.
- Ajuste no Skin Metro: Está criando barras de rolagens em formulários no Chrome e IE.
- Ajuste na Tela de Gerenciar campos da Grid na Aba localizar padrão está sem os checkbox no Skin/Template Metro.
- Ajuste das colunas da Grade em modo de inserção.
- Inclusão da função "Ler Linha do Arquivo Definindo Charset".
- Melhoria na abertura de um formulário em que seu pai esteja numa moldura.
- Melhoria na função "Opções - Remover Item", a mesma persistia a referência.
- Melhoria na função "Opções - Remover Item por Label", a mesma persistia a referência.
- Melhoria na função "Opções - Limpar", a mesma persistia a referência.
- Melhoria na função "Opções - Adicionar Item", a mesma persistia a referência.
- Inclusão da função "Está em modo de navegação?".
- Inclusão da função "Abrir conexão com DB2".
- Inclusão da função "Lista Dupla - Adicionar Elemento".
- Inclusão da função "Lista Dupla - Limpar".
- Melhoria na função "Destruir Componente", a mesma apresentava erro de função não definida.
- Melhoria na função "Mudar Posição do Componente", adequação para componentes Maker 3.
- Melhoria na função "Destruir Componente", adequação para componentes Maker 3.
- Melhoria na função "Obter Posição Y do Componente", adequação para componentes Maker 3.
- Melhoria na função "Obter Posição X do Componente", adequação para componentes Maker 3.
- Melhoria na função "Obter Altura do Componente", adequação para componentes Maker 3.
- Melhoria na função "Obter Largura do Componente", adequação para componentes Maker 3.
- Melhoria na função "Obter Componente", adequação para componentes Maker 3.
- Melhoria na função "Mostrar Componente", adequação para componentes Maker 3.
- Melhoria na função "Componente Visível?", adequação para componentes Maker 3.
- Melhoria na função "Habilitar Componente", adequação para componentes Maker 3.
- Melhoria na função "Mostrar Componente", a mesma não funcionava caso o formulário estivesse em uma moldura.
- Melhoria na função "REST - Consumir WebService", a mesma estava sobrescrevendo os parâmetros da requisição.
- Melhoria na função "REST - Consumir WebService", a mesma não passava o charset do Webrun caso o mesmo não fosse informado.
- Melhoria na função "Atualizar Componente em Outro Formulário" quando utilizada no browser Firefox.
- Melhoria na função "Alterar Valor do Componente em Outro Formulário" quando utilizada no browser Firefox.
- Melhoria na função "Alterar Tamanho do Formulário" quando utilizada para formulários flutuantes.
- Melhoria na função "Obter Informações do Disco" quando utilizada no Webrun DotNet.
- Melhoria na função "Abrir Formulário" quando utilizada em formulário PopUp.
- Melhoria no gerenciamento de objetos da função "Para Letras".
- Melhoria na função "Compactar Para a Extensão ZIP", a mesma estava levando toda a estrutura de pastas.
- Melhoria na função "Lista Dinâmica - Novo", para armazenar a hierarquia da aba onde o componente está anexado.
- Melhoria na função "Lista Dinâmica - Novo" quando utilizadas em chamadas cliente/servidor.
- Melhoria na função "Lista Dinâmica - Novo", a mesma não permitia tabulação para o componente.
- Melhoria na função "Abrir Formulário" quando o mesmo já estivesse aberto.
- Melhoria na função "Fechar Formulário" quando a mesma era chamada em um formulário filho.
- Inclusão do parâmetro "Chave" na função "Mapa - Importar Biblioteca".
- Melhoria na função "Jasper - Gerar Relatório" para dar suporte a ordenação.
- Melhoria na função "Obter Valor do Componente em Outro Formulário" quando utilizada no browser Firefox.
- Inclusão do parâmetro "Corpo" na função "REST - Consumir WebService".
- Inclusão da função "HTML - Existe Barra de Rolagem?".

Histórico de Atualizações Maker 3.9.1.3

- Melhoria no esquema de Cores da IDE.
- Melhoria na definição de eventos para os formulário/componentes.
- Melhoria na indicação de compatibilidade para as funções e propriedades do Maker mobile.
- Ajuste na definição do skin ao criar um novo projeto.
- Melhoria do consumo de processamento do Profiler.
- Ajuste de cores para o cabeçalho da grade nos navegadores IE e Firefox.
- Melhoria do retorno da função "Lista Dinâmica - Novo" caso não esteja associada a campo.
- Melhorias para o componente Tabela.
- Ajuste na barra de rolagem da grade quando não possui coluna numérica.
- Melhoria na inserção de fluxos no componente Menu.
- Melhoria na busca do Menu.
- Ajuste nos atalhos no navegador Firefox.

Histórico de Atualizações Maker 3.9.1.1- Melhoria no esquema de Cores da IDE.
- Melhoria na descrição das propriedades "Classe CSS" e "Estilo CSS".
- Melhoria na criação de projetos com o banco de Dados PostgreSQL.
- Melhoria na recursos de plugins do Maker. Agora é possível incluir ícone para seu plugin
- Novos bancos homologados: MSSQL 2012 e 2014, PostgreSQL 9.5
- Melhoria do preview de formulários para o template Green.
- Melhoria para o Player de fluxos quando o nome do fluxo contém acentuação.
- Inclusão do ícone do log do sistema para o Template "PortalLight".
- Melhoria para Gerador de Relatório quando o nome do relatório contém acentuação.
- Melhoria para o Executor de SQL.
- Inclusão da propriedade Área Útil para o componente Gráfico (GoogleCharts).
- Atualização das dependência para o monitor de Sistema.
- Melhoria Para o Gerador de Relatório com parâmetros nulos.
- novo atalho para visualizar o Inspetor de Objetos.
- novo atalho para visualizar a Paleta de Ferramentas.
- Novo Botão Preview para o editor de Formulário.

Histórico de Atualizações Maker 3.9.0.0- Nova propriedade "Formulário" para o componente Moldura.
- Novo esquema de cores "Aurora".
- Inclusão da funcionalidade "Monitor do Sistema" nos templates.
- Inclusão do parâmetro "lista de Valores" na função Gráfico - Séries - Novo.
- Alteração no parâmetro responsivo dos formulários, todos os formulários criados a partir desta versão virão com a propriedade responsivo marcada como sim.
- Nova funcionalidade "Player de Fluxos", podendo executar os fluxos sem a necessidade de sair do Maker.
- Melhoria na interface do componente Gráfico, podendo pré-visualizar o gráfico sem necessidade de abrir no navegador.
- Melhoria do componente Tabela que não gerava o XML corretamente.
- Atualização de novas fontes para o Skin PortalLight.
- Inclusão do plugin SystemCheck.
- Inclusão do plugin Publicação na Núvem.
- Implementação da pesquisa do componente Menu.
- Inclusão do Skin PortalLight.
- Melhoria na barra de rolagem do componente Moldura com a propriedade 'Formulário'.
- Inclusão do plugin Estatísticas do Sistema.
- Melhoria no componente Gráfico para se renderizar com listas de valores.
- Melhoria no componente Menu, na identificação de itens do Menu que não podem ser arrastados.
- Implementação da propriedade 'Classe CSS' nos formulários.
- Implementação da propriedade 'Estilo CSS' nos componentes.
- Melhoria na personalização das mensagens de interação e tela de upload.
- Modificações na tela inicial do Webrun 3.9.
- Implementação do evento 'Ao Selecionar' do componente Galeria de Imagens.
- Inclusão das propriedades 'Formulário' e 'Parâmetros' no componente Moldura, podendo selecionar o formulário a ser aberto na renderização.
- Melhorias no CRUD no componente Tabela.
- Ajuste na exibição do botão de subformulário do componente Lista Dinâmica.
- Melhoria na pesquisa do componente Tabela quando o banco usado é PostgreSQL.
- Melhoria na função adicional 'Tabela - Recarregar Componente' que não desfazia o agrupamento.
- Melhoria no componente CheckBox que não exibia corretamente no Skin Metro.
- Ajuste no componente 'Galeria de Imagens' que não expandia imagens quando, no campo ID era definido uma GUID.

Histórico de Atualizações Maker 3.8.1.20

- Ajuste no empacotador de projetos para MySQL.
- Ajuste na importação de FRZ para MySQL.
- Ajuste no preview do formulário principal para o template Uranus.
- Melhoria na identificação de erros de script no CHROMIUM.
- Ajuste persistencia de conteúdos extensos para o banco ORACLE.
- Melhoria na identificação do serviço do Webrun.
- Ajuste na identificação de formulários abertos ao importar formulários.
- Ajuste na leitura do layout da IDE salvo.
- Suporte de múltiplas séries para o componente Gráfico(GoogleCharts).
- Ajuste no desempacotador de projetos para MySQL.
- Ajustes no gerenciador de formulários.
- Ajustes na consulta da aba Localizar.
- melhoria na renderização/atualização do inspetor de propriedades.
- Ajustes na exibição da coluna chave do componente tabela com conexão adicional.
- Melhoria na definição de templates e skins no Maker.
- Implementação da proriedade Fonte de Dados para os componentes: Accordion, Calendário, Galeria de Imagens, Organorama, Tabela.
- Ajustes na Criação de formulários.
- Ajustes na Obrigatoriedade dos campos dos formulários ao modificar a consulta do mesmo.
- Ajustes na persistência do gerenciador de objetos na área de trabalho do Maker.
- Ajustes no esquemas de cores do layout Maker3.
- Ajustes na consulta do formulário para conexão adicional.
- Ajustes nos ícones dos idiomas na tela inicial.

API 3.8.20

Histórico de Atualizações Maker 3.8.0.60- Compatibilidade da função "Formatar Número" com a camada cliente.
- Melhoria na função "HTML - Criar Elemento".
- Melhoria na função "Jasper - Gerar Relatório".
- Melhoria na função "Chamar Serviço Web SOAP (1.2)".
- Adição do parâmetro charset, na função "Ler Todo Arquivo Definindo Charset".
- Ajustes na persistência do layout.
- Melhoria na visualização da tela "Lista de valores e descrição" do componente "Opções".
- Ajuste na opção "Conexão Adicional" com relação a um formulário.
- Ajuste na nomenclatura dos fluxos com relação a quantidade de caracteres.
- Ajuste na busca do editor de fluxos.
- Ajuste no menu ( Menu -> Configurações -> Webrun).
- Ajuste no template Tons de Cinza com relação ao esquema de cores.
- Ajuste na Skin Maker 3 com relação ao desfocar um campo texto.
- Ajuste nas imagens dos idiomas.
- Ajuste no menu do template Executive.
- Ajuste no arquivo Maker.ini com relação a posição do inspetor de objetos.
API 3.8.4

Novas Funções:- Tabela HTML para Excel
- HTML - Obter elementos pelo Nome da Tag
- HTML - Imprimir Elemento
- Inserir Texto na Posição
- Obter e Definir Conteúdo

Histórico de Atualizações Maker 3.7.2.5- Atualização na tabulação do firefox com relação ao "lookup".
- Atualização na sobreescrita das teclas de atalho pelo webrun.
- Atualização no ícone de calendário quando a caixa de texto está definida como tipo Data.
- Atualização na criação de projetos do Maker 3.7.2.0 com relação aos bancos de dados MSSQL e MySQL.
- Atualização no componente timer.
- Atualização no Texto com propriedade apenas leitura.
- Implementação de hiperlink no componente Slider Panel.
- Atualização do hint dos botões de navegação "Próximo" e "Anterior".
- Inclusão da propriedade "Tamanho Máximo das Abas" no componente aba.
- Atualização ao alterar senha.
- Atualização ao fechar uma tela Maker Cromium.
- Atualização no formulário com relação ao arrastar um formulário como grade.
- Atualização nos filtros com "In"
- Atualização na exportação de formulários em base de dados SQLServer.
- Atualização no formulário com relação na aba Chave e Atualização.
- Atualização no tamanho de caracteres das constantes.
- Atualização no tamanho padrão na descrição dos fluxos para 250 caracteres.
- Atualização ao copiar e colar uma expressão.
- Atualização na mudança da fonte de um componente.
- Implementação do evento "Ao Parar" do componente Timer
- Atualização no componente ABA.
- Atualização no formulário que era renomeado através do menu e realizava um comportamendo indesejado.
- Atualização no filtro da tabela em relação ao tipo data.
- Atualização na exportação de projetos dos bancos de dados MSSQL e MySQL
- Inclusão da propriedade "Tamanho Máximo das Abas", no componente Aba.
- Atualização na ordenação de opções impostas no maker onde o Webrun apresentava comportamendo indesejado.
- Atualização no componente timer correspondente ao erro "d.c.inner" is not a function.
- Atualização no componente grade com relação ao comportamente apresentado ao acessa-la de um projeto em modo normal.
- Atualização no Webrun correspondente ao encerramento de sessão quando solicitada a troca de usuário.
- Atualização no Maker Mobile onde a lista dinâmica e lista simples apresentavam comportamendo indesejado.
- Atualização no formulário com grade, onde o mesmo aprensentava comportamendo indesejado no IE.
API 3.7.4

Novas Funções:- [Encerrar Sessão](encerrarsessao)

Histórico de Atualizações Maker 3.7.2.3- Atualização na importação de um MKF em sistema utilizando SQL Server.
- Atualização na importação de Templates de Fluxo.
- Atualização no formulário de log com relação a exibição de detalhes do valor alterado.
- Atualização na criação de projetos no Banco MySQL.
- Atualização no acesso de sistemas em background.
- Atualização no formulário de Log com relação aos acessos dos Bancos Oracle ou SQL Server.
- Atualização no MakerChromium.
- Atualização na criação de projetos em DB2.
- Atualização na criação de projetos em SQL-Server.
- Atualização na Grade com relação ao acesso de projetos em modo normal.
- Atualização no Webrun com relação ao encerramento de sessão ao solicitar troca de usuário.
- Implementação de duplo-toque na tela para o modo de edição da grade e no componente grade.
- Atualização da lista dinâmica e lista simples no mobile.
- Atualização no Componente timer.
- Atualização da grade com relação a comportamento no IE.
- Atualização para o registro do IP do usuário na tabela de LOGEvent

API 3.7.3

Novas Funções:- É Dispositivo Móvel?

Atualizações:- Inclusão da opção "CharSet" na função Enviar Envelope Soap
- Nova funcionalidade para a função "Mapa - Criar Marcador". Texto ao clicar
- Atualização na função "Lista Dinâmica - Novo" não funcionada corretamente e melhoria na passagem de parâmetros.

Histórico de Atualizações Maker 3.7.2.0- Links de ajuda disponível na inicialização do Maker
- Atualização do Engine utilizado para plugins e Componentes do Maker 3 permitindo maior suporte às funcionalidades do HTML5
- Ao editar a permissão de acesso no formulário, fluxos associados ao componente não são editados.
- Atualização da coluna PRO_VALOR para suporte maior de caracteres armazenados no banco.
- Atualização no montador de expressões, onde exibia propriedades cortadas ao clicar no último nivel.
- Atualização na tela Localizar, onde a mesma não está sensitive só realizando busca em minusculo.
- Atualização do drag and drop de um FRZ , onde ao realizar a mesma o Maker abre novamente a tela de importações.
- Atualização na tela de exportação, ao realizar uma pesquisa na mesma o campo ficaria da cor verde.
- Atualização nas Propriedade dos componentes, onde essas propriedades são exibidas cortadas caso o componente esteja proximo a barra de tarefa
- Atualização no Scanner de Dependências, o mesmo apresentava comportamento inadequado ao clicar em atualizar.
- [Implementação de um novo sistema de busca na tela de exportação.](busca_tela_exportacao_importacao#Busca%20-%20Tela%20de%20Importa%C3%A7%C3%A3o%20e%20Exporta%C3%A7%C3%A3o)
- [Implementação de um novo sistema de busca na tela de importação.](busca_tela_exportacao_importacao#Busca%20-%20Tela%20de%20Importa%C3%A7%C3%A3o%20e%20Exporta%C3%A7%C3%A3o)
- Atualização na tela de importação, na mesma apresentava a lista de objetos em branco ao realizar um filtro de seleção.
- Atualização na exportação de templates, ao exportar qualquer template (de fluxo) o mesmo gerava um FRZ inconsistente que não permitia mais importação.
- Atualização na tela de selecionar o WFRE no Maker, o mesmo estava podendo modificar a imagem do "MakerALL".
- Atualização na tabela de imagens, ao executar um delete na tabela de imagens com a galeria aberta, a mesma não é atualizada.
- Aumentar de 40 para 50 o limite de fluxos da versão TRIAL.
- Atualização no relatorio, o mesmo não aparece com a descrição no gerenciador de objetos abertos.
- Atualização na tela de Fluxos, Tela de edição de fluxos não estava com as cores padrão certas.
- Atualização na aba Projetos na opção exportar relatórios para Jasper , onde uma pasta era criada sem o conteúdo desejado.
- Atualização na tela de usuário e senha do Maker, no mesmo antes de aparecer os campos é possível realizar a importação de um FRZ.
- Atualização na propriedade de Habilitar ou Desabilitar botão de Alteração, onde o mesmo permitia a edição do formulário ao duplo clique.
- Atualização no componente Slider.
- Atualização no texo rico, onde ao inserir texto na posição do cursor no mesmo não funcionava após atualização da biblioteca.
API 3.7.2

Novas Funções:- [Captcha - Criar.](captcha_funcoes#Captcha%20-%20Criar)
- [Captcha - Validar.](captcha_funcoes#Captcha%20-%20Validar)
- [Menu - Definir Permissão.](menu_definir_permissao)
- [Lista Dinâmica - Novo.](listadinamica_novo)
- [Timer - Obter Horário](timer_obter_horario)
- [Interromper Fluxo Agendado](interromper_fluxo_agendado)

Atualizações:- Atualização da função "Fechar Formulário Pai".
- Atualização na função "Executar comandos SQL em transação" onde a mesma ao ser utilizada um erro era retornado.
- Atualização na função "Tabela - Exibir Coluna" .
- Atualização na função "Primeiro dia do Mês" onde a mesma sempre retornava a data em formato brasileiro mesmo que o padrão do sistema fosse outro.
- Atualização na função "Último dia do Mês" onde a mesma sempre retornava a data em formato brasileiro mesmo que o padrão do sistema fosse outro.
- Atualização na função "Gerar Relatório Servidor Externo", caso o valor passado por parâmetro seja nulo a mesma apresentava um erro.
- Atualização na função "Gerar Relatório", caso o valor passado por parâmetro seja nulo a mesma apresentava um erro.
- Atualização na função "Remover vinculo de parentesco entre formulários" onde a mesma não funcionava para flutuantes.

Histórico de Atualizações Maker 3.7.0.0

- Nova funcionalidade para edição de erros na geração de relatórios."
- Nova propriedade para o componente Imagem "Lente de Aumento".
- Nova propriedade para o componente Aba "Separar Formulário".
- Novas funções para o componente Calendário "Habilitar Componente" e "Mostrar Componente"
- Novo template Uranus.
- Suporte ao Servidor de Relatórios x64.
- Atualização na geração de relatório para excluir arquivos de cache na pasta Temp do windows.
- Atualização dos templates.
- Atualização na identificação de parâmetro e variável utilizada no fluxo.
- Atualização na busca dos templates na criação de projetos.

API 3.7.0.0

Novas Funções:- HTML - Clonar Elemento
- HTML - Remover Atributo de um Elemento (DOM)
- HTML - Obter Chaves de um Elemento (DOM)
- JSON - Criar Objeto
- JSON - Obter Texto
- Alertar Aguardando Texto
- Mapa - Camada de Sobreposição

Atualização:- "Obter Valor do Componente em outro Formulário", não obtia o valor do componente quando o formulário flutuante estava minimizado.

Histórico de Atualizações Maker 3.6.0.51- Atualização no Editor de Fluxo, quando setava as configurações padrões os fluxos tinham o zoom de 50%.
- Melhoria nas configurações de um projeto, ao clicar em Ok as configurações são salvas automaticamente sem a necessidade de reiniciar o Maker.
- Atualização nas dependências de um fluxo, ao renomear uma regra associada um erro era apresentado.
- Atualização na categorização de fluxos.
- Melhoria para categorização de relatórios no gerenciador de objetos.
- Melhoria no Profiler para apresentação do tempo de execução das demais instruções.
- Atualização para permitir a importação de fluxo por meio de Drag e Drop no Windows 8.
- Atualização na passagem de parâmetros quando o fluxo é associado ao componente diretamente pelo editor de fluxos.
- Atualização na documentação da função "Aba - Adiconar Nova Aba".
- Melhoria na interface da lista de sessão do Profiler.
- Atualização do template Executive.
- Atualização no Subfluxo, as categorias do fluxo não eram apresentadas dentro da categoria Uso Geral.
- Melhoria para que ao fechar o último fluxo no editor o mesmo também seja fechado.
- Atualização no gerenciador de objetos, ao clicar com o botão direito do mouse sobre o objeto e selecionar dependência o mesmo venha filtrado.
- Melhoria do componente Ação
- Atualização na criação de Trigger para o banco de dados PostgreSQL.
- Atualização na seleção de componentes de um formulário, um erro era apresentado ao modifica a lista de componentes.
- Melhoria no gerenciador de objetos, para que seja possível excluir o objeto com CTRL+DEL.
- Inclusão da função adicional "Aba - Atualizar Formulário".
- Atualização do Assistente SQL, não era possível selecionar a VIEW criada por meio do assistente.
- Atualização no Editor de Fluxos, ao customizar o fluxo, o menu de propriedades era apresentado de forma intermitente ao clicar com o botão direito do mouse na ligação do objeto.
- Melhoria na paleta de cores da cor condicional da grade, não era possível salvar uma cor personalizada.
- Atualização no Editor de Fluxo, ao copiar um objeto modificado e colar o mesmo, a alteração não persistia.
- Atualização na Exportação de Objetos, quando possuia muitos objetos a exportação não era concluída.
- Melhoria na exportação de relatório para Jasper, a estrutura de pasta não era criada.
- Atualização do Report Builder, componente gráfico apresentava erro ao mofidicar uma serie.
- Atualização no Montador de Expressão, ao copiar e colar um objeto Cor um erro era apresentado.

API 3.6.19

Novas Funções:

- Mapa - Remover Eventos.
- HTML - Atualizar Iframe.
- Obter mapa com formulários do sistema.

Atualizações:- Melhoria na função "Mapa - Importar biblioteca".
- Melhoria na função "Jasper - Gerar Relatórios" para que funcione em fluxos agendados.
- Atualização na função "Fechar Formulário Pai", não funcionava corretamente para formulários com a propriedade Pop Up = Não.
- Melhoria na função "CSS - Importar Conteúdo".
- Atualização na função "Grade - Mostrar barra de edição", quando utilizada impedia a execução de fluxos associados ao componente grade.
- Melhoria na função "Traduzir", adaptação para a camada cliente.
- Atualização da função "Obter valor do componente em outro formulário" não era possível obter o valor caso os formulários fossem modais e popup.

Histórico de Atualizações Maker 3.6.0.44- Atualização no Gerenciador de objetos que era acessado durante a atualização da API
- Atualização no zoom do fluxo, onde ao deletar um objeto com o zoom modificado, não ajustava
- Atualização nas propriedades dos objetos, que gerava um erro ao apagar uma propriedade que não pode ser nula
- Atualização na atualização dos parâmetros do subfluxo
- Atualização da barra de rolagem da Árvore de Chamadas do Profiler
- Remoção do menu Verificar atualização de Ajuda
- Melhoria na atualização da paleta de objetos dos Componentes Maker 3 ao pressionar F5

Histórico de Atualizações Maker 3.6.0.43- Melhoria de performance
- Atualização na identificação de parâmetros que possuem acentuação
- Melhoria para o componente Tabela. Inserção da função "Tabela - Recarregar Componente"
- Atualização na passagem de parâmetros do subfluxo, o usuário será notificado das modificações do subfluxo
- Atualização no Assistente SQL, para funcionamento com objetos procedure
- Melhoria nas Configurações Rede e Conectividade. Caso não exista "http://" o Maker escreverá automaticamente
- Atualização nas dependências de janelas ao trocar de usuário
- Atualização na exportação do Histórico SQL
- Atualização na identificação de parâmetros existentes no fluxo
- Atualização na identificação dos fluxos abertos
- Atualização na modificação do tipo de variáveis para parâmetros ou constante
- Atualização nos plug-ins, quando abertos não apresentavam os ícones
- Melhoria para que o Maker carregue o Projeto ao logar
- Atualização para o componente Player
- Atualização para o componente RSS
- Atualização no Objeto de Interação
- Atualização na identificação dos objetos desconectados no fluxo
- Atualização para o template Blue
- Melhoria para componente Player. Inserção da função "Player - Inserir/Substituir Lista de Reprodução"
- Atualização para o componente Ação
- Atualização na pontuação do fluxo
- Atualização ao copiar e colar uma expressão, caso possuir quebra de linha
- Melhoria ao depurar um fluxo, ao ligar o depurador o mesmo só estabelecerá conexão clicando em conectar
- Atualização ao excluir um parâmetro
- Atualização na apresentação da documentação das funções
- Atualização da apresentação da galeria de imagens para monitores widescreen
- Atualização no Gerador de Códigos
- Atualização nas dependências do fluxo
- Atualização no Montador de Expressões, quando aberto por ações pré definidas
- Atualização na chamada do Webrun
- Atualização para o template Executive
- Atualização no editor de relatórios. Não ordenava o campo do sub-relatório
- Atualização WebrunAdim. Não era possível alterar a memória disponível no servidor

API 3.6.15

Novas Funções:

- Executar Função
- Jasper - Gerar Relatório
- Ler Intervalo de Linhas de um Arquivo

Atualização(ões):

- Melhoria para a função "Obter informações da Consulta"
- Atualização para a função "Obter Objeto da Lista sem Validação"
- Melhoria para a função "Elemento para XML". Adicionado mais um parâmetro para indentação
- Atualização para a função "XML - Inserir Nó"
- Melhoria para a função "Abrir Consulta Dinâmica Avançada"
- Atualização para a função "Formulário está aberto?"
- Atualização para a função "Fechar Formulário numa Moldura"
- Melhoria para a função "Quebrar Texto"
- Melhoria para a função "Adiconar a Arquivo". Não era possível definir o CharSet
- Melhoria para função "Evento - Permitir Movimentação de um Componente". Não era possível executar um fluxo
- Atualização na função "Agendar Execução do Fluxo". Não retornava quando executada na camada cliente

Histórico de Atualizações Maker 3.6.0.23- Atualização no componente RSS. Inserção da propriedade "Abrir em outra aba"
- Inclusão do componente Tabela
- Atualização da lista dos campos de ordenação no Relatório. Quando existia uma subconsulta, o mesmo não listava
- Atualização da descrição da propriedade Nome da Aba no Menu. Modificado para Componente Aba
- Maker 3.6 realiza a busca do Serviço do Webrun 3.6
- Atualização na visualização de campos com o mesmo Alias
- Atualização ao minimizar a janela do Assistente de criação de Relatório/Baseado em Formulário
- Atualização na opção Enviar Relatório de Erros. Deve vir como Default
- Atualização na aba Visualização. Abrirá sempre o preview do navegador padrão
- Atualização do Ícone do WebrunAdmin
- Atualização no componente Accordion. Tela lista de Elementos teve a altura e largura alterado
- Atualização no tamanho da janela do Editor de Relatórios
- Atualização no componente Slider Panel
- Atualização ao salvar fluxo com o editar as propriedades. Era gerado um erro ao modificar a camada
- Atualização ao copiar um parâmetro de uma função
- Atualização ao salvar fluxo na camada cliente
- Atualização no Scanner de Dependências que não listava todos os objetos
- Atualização na exibição do hint no montador de expressões
- Atualização no posicionamento da janela do montador de expressões
- Atualização na atualização de categorias do fluxo após exclusão
- Atualização no assistente de criação de projeto. Um erro era apresentado após cancelar o assistente
- Atualização na proporção do zoom no editor de fluxos
- Atualização na passagem de parâmetros para o relatório
- Atualização na apresentação de ícones dos plugins
- Ajustes para que fluxos novos sejam definidos como padrão a camada cliente
- Atualização na exibição da lista de parâmetros de entrada
- Atualização na persistência do tipo de variável
- Remoção da opção "Desativar recursos visuais"
- Atualização no gerenciamento de janelas após sincronizar o dicionário de dados
- Atualização na tela de Gerador de Código (Banco de Dados). Ao minimizar, o Maker também era minimizado
- Atualização no objeto Subfluxo. A lista de parâmetros não era atualizada corretamente
- Atualização na apresentação da tela de plugins. Botões fora do padrão
- Atualização na tela de Compartilhamento de Formulários
- Atualização na geração de Relatórios
- Atualização na importação de templates para sistemas que estão na mesma base de dados
- Atualização no tratamento das condições que utilizam conjunto do SQL
- Atualização no Gerador de Relatórios nas requisições ao servidor de Banco de Dados
- Atualização no Gerador de Relatórios ao realizar rotinas
- Atualização na Propriedade Exibição do Componente Imagem
- Atualização na exclusão de Categorias do Fluxo
- Atualização na seleção do Idioma Base do projeto, um erro era apresentado após salvar o projeto
- Atualização no Gerador de Códigos
- Remoção da Propriedade Refatorar ao clicar com o botão direito sobre os objetos do fluxo
- Atualização no Componente Timer
- Atualização nas dependências do fluxo. Um erro era apresentado ao renomear um fluxo associado a mais de um formulário
- Atualização na inserção de registros para tradução
- Atualização no acesso dos formulários externos dos componentes Maker 3
- Atualização na listagem de parâmetros e variáveis. A seta de indicação não eram apresentadas em Subfluxos
- Atualização na mudança de função. O valor era perdido ao mudar de função no objeto Interação
- Atualização na Indição do serviço do Webrun
- Atualização no Compartilhamento de Formulários. Ao minimizar a tela, o Maker também minimizava
- Atualização no Assistente SQL para suporte a novas sintaxes e funcionalidades
- Atualização na barra de progesso ao importar um FRZ
- Atualização para erros na criação de projetos. Quando os projetos possuiam erros o mesmo voltava para a tela de login
- Atualização na apresentação das descrições dos processamentos ao modificar o Zoom
- Atualização nos Hints do Banco de Dados
- Atualização na apresentação da descrição das funções
- Atualização no Editor de Fluxo. Um erro era apresentado ao realizar uma busca no editor
- Atualização no Editor de Fluxo. Um erro era apresentado ao fechar um fluxo com a tecla de atalho CTRL + W
- Atualização nas Configurações do Sistema. Um alerta era apresentado ao cancelar a configuração
- Atualização na cópia das descrições dos componentes
- Atualização no Assistente SQL. A tela de Adicionar Novo Objeto possuia erro ortográfico
- Atualização no template Default em sistemas publicados
- Nova propriedade Largura de Exibição para o componente Lista Dinâmica
- Atualização na execução de script no Assistente de Banco da Dados
- Atualização para Fluxos Internos, Ao salvar o fluxo a GUID era mostrada na descrição
- Atualização na propriedade Nome dos componentes. Um erro era apresentado ao inserir caracteres especiais
- Atualização no Template Green
- Atualização ao salvar fluxo interno. Ao salvar como o mesmo não era visualizado no Gerenciador de Objetos
- Adicionado Repositórios de Objetos
- Atualização ao Fechar o Projeto. Um erro era apresentado ao tentar fechar o projeto com Subfluxo aberto
- Atualização no componente Imagem. Quando possuia imagem, a descrição ficava por cima da mesma
- Atualização no campo de busca do Gerenciador de Objetos
- Atualização no Gerenciador de Objetos. Ao importar um FRZ o mesmo não era atualizado
- Atualização no Profiler

API - 3.6.4

Novas Funções:- Multimídia - Carregar
- Multimídia - Reproduzir
- HTML - Obter Elementos pelo Nome da Classe
- HTML - Obter Janela Flutuante pelo Nome
- Obter Informações da Consulta
- Recarregar Relatório
- Abrir Consulta Dinâmica Avançada
- Executar Função
- Jasper - Gerar Relatório

Atualização(ões):- Ajuste na função "Abrir URL Numa Janela Flutuante", não era possível minimizar o formulário
- Atualização na função "HTML - Associar Fluxo ao Evento do Elemento"
- Atualização na função "Evento - Ao finalizar movimentação", disparava o fluxo ao mover o componente
- Ajuste na função "HTML - Remover Evento do Elemento"
- Atualização na função "Definir Variável Local"
- Atualização na função "Obter Variável Local"
- Ajuste na função "Abrir XML", não era possível definir o charset do arquivo
- Atualização na função "Sair do Sistema". Ao sair do sistema formulários flutuantes permaneciam abertos
- Atualização na função "Bytes para Letras"
- Atualização na função "HTML - Remover Evento do Elemento"
- Atualização na função "Sessão - Definir Evento ao Expirar"
- Atualização na função "Abrir Formulário numa Moldura", a função não mantinha a borda do componente
- Atualização na função "Agendar Execução do Fluxo". Foi acrescentado retorno na camada cliente
- Atualização no tratamento da remoção de eventos

Maker-3.5.0.18

- Suporte a biometria nos templates
- Atualização na identificação da propriedade Campo para o componente Galeria de Imagens
- Atualização na visualização do objeto interação
- Atualização na identificação dos atalhos com janela em foco
- Atualização na persistência dos campos obrigatórios
- Melhoria na identificação dos parâmetros no montador de expressões
- Melhoria na identificação de templates já existentes na base para evitar sobrescrita
- Melhoria na persistência das configurações de busca do fluxo do Maker3.ini
- Atualização na apresentação da tela do agendador de tarefas após abertura do Scanner
- Atualização na apresentação do componente Checkbox no editor de formulários
- Atualização no gerenciador de objetos abertos
- Nova propriedade "Carga Antecipada" para os formulários
- Atualização na atualização da tela de abertura do fluxo
- Atualização na identificação do nome do componente
- Atualização no valor padrão para a propriedade Visível dos componentes do Maker 3
- Atualização na identificação do tipo de dados na abertura do fluxo
- Atualização na avaliação do fluxo em fluxos com muitos processamentos
- Melhoria na localização de fluxos/funções no montador de expressões
- Atualização na persistência de fluxos novos
- Atualização na avaliação do fluxo em variáveis recém criadas
- Atualização na carga dos componentes do Maker 3 quando possuia a propriedade Visível = Não
- Atualização na atualização das categorias dos fluxos
- Atualização na identificação de fluxos incompatíves com a camada
- Melhoria de desempenho do Scanner de Dependências
- Melhoria de desempenho no gerenciador de objetos
- Melhoria de desempenho na importação de FRZ em projetos com muitos objetos
- Atualização na persistência da fonte de dados do formulário
- Atualização no valor padrão do componente Moldura
- Atualização no foco do componente quando adiciona um novo parâmetro na consulta
- Atualização na visualização da tela de documentação automática com Tema Clássico do Windows
- Atualização na persistência de templates do fluxo
- Melhoria na visualização de propriedades com descrição longa
- Atualização na busca de objetos no montador de expressões
- Atualização na seleção da constante Campo
- Atualização na identificação de tipos ao abrir uma imagem para Galeria
- Atualização na exportação de objetos em projetos com muitos objetos
- Atualização na fixação do gerenciador de objetos
- Atualização na identificação de fluxos internos para componentes do Maker 3
- Atualização na identificação do serviço do Webrun

API 3.5.1
Nova(s) função(ões):- Autenticar Usuário via Biometria
- HTML - Definir Atributo a um Elemento (DOM)
- HTML - Obter Atributo do Elemento (DOM)
- HTML - Obter Corpo da Página
- Inicia Com?
- Termina Com?

Atualização(ões):- Atualização no tratamento de dados na função "Obter XML com a Estrutura do Menu"
- Atualização no cálculo da função "Mapa - Definir Perímetro Circular"
- Atualização na função "Obter filhos de um elemento". Não funcionava corretamente em elementos com namespace
- Atualização na função "Formulário está aberto" para formulários popups
- Atualização na função "Abrir formulário numa moldura" não persistia corretamente a borda do componente
- Atualização na função "Abrir formulário filtrado numa moldura" não persistia corretamente a borda do componente
- Novo parâmetro na função "Abrir URL numa moldura" para definir se mantém a borda

API 3.2.6
Nova(s) Função(ões):

Exemplos do Facebook: http://download.softwell.com.br/suporte/Facebook.zip- Facebook - Exibir Postagem
- Facebook - Comentários
- Facebook - Compartilhar
- Facebook - Login/Logout
- Facebook - Habilitar Curtir/Recomendar
- Facebook - Exibir Caixa de Fãs
- Facebook - Obter status do aplicativo
- Facebook - Sugerir Recomendação
- Mapa - Obter coordenadas
- Mapa - Remover Marcador

Atualização(ões):- Novo parâmetro na função "Mapa - Criar Marcador" para centralizar o mapa no marcador criado
- Novo parâmetro na função "Mapa - Definir perímetro Circular" para centralizar o mapa no perímetro criado
- Atualização no tratamento de parâmetros opcionais na função "Mapa - Obter coordenadas pelo StreetView"

Maker-3.2.0.61

- Atualização no método ExecSQL em subrelatórios
- Melhoria na manipulação de componentes no editor de formulários
- Atualização na identificação de formulários selecionados no gerenciador de objetos
- Atualização na aba localizar da Galeria de Imagens. Ajuste para melhor agrupamento de imagens
- Atualização no comando COLAR após copiar texto da lista de formulários
- Atualização na apresentação do Maker em ambientes com Tema Clássico do Windows
- Atualização na identificação dos ícones dos navegadores existentes na opção Preview da área de trabalho do projeto
- Atualização no ícone de indicação do serviço do Webrun 3
- Atualização no versionamento de fluxos e relatórios na importação do FRZ
- Atualização na importação de ações pré-definidas no Oracle

API 3.2.5
Nova(s) Função(ões):

- Obter parâmetro do formulário

Atualizações:- Atualização na passagem de parâmetros da função "Upload de Múltiplos arquivos"
- Atualização na passagem de parâmetros da função "Upload"
- Atualização na execução de fluxos definidos no 3º parâmetro da função "Upload de Múltiplos arquivos"

Maker-3.2.0.53- Atualização na tela de campos da função Executar Atualização
- Atualização na persistência de valores padrão do formulário

Maker-3.2.0.52

- Atualização na aparência do componente IMAGEM
- Atualização no controle de salvamento do formulário após cancelar edição anterior
- Atualização na persistência da série do componente Gráfico
- Atualização na persistência das propriedades e eventos do formulário
- Atualização na persistência dos parâmetros em consultas SQL
- Atualização na passagem de parâmetros opcionais no Editor de Relatórios
- Atualização na importação de arquivos FRZ
- Atualização no assistente de criação de formulário

API 3.2.3
Novas funções:

- Abrir URL nuam janela flutuante

Atualização(ões):- Atualização na função "Executar Comando SQL" não funcionava com parâmetros opcionais

API 3.2.2

Atualização(ões):- Atualização na função "Remover botão de gravar +"
- Atualização na função "Executar Fluxo"
- Atualização na função "Obter formulário"
- Atualização na função "Abrir Relatório Imediatamente com Ordenação"
- Atualização na função "Abrir Relatório Imediatamente"
- Atualização na função "Obter formulário"

API 3.2.1
Novas funções:

- Remover atributo do elemento
- Obter formulário

Atualização(ões):- Atualização na função "Fechar Filhos de um Formulário" não funcionava em forms flutuantes
- Atualização na função "Atualizar componente em Outro Formulário";
- Atualização na função "Obter Valor Componente em Outro Formulário";
- Atualização na função "Alterar Valor do Componente em Outro Formulário"
- Atualização na função "Alterar Tamanho do Formulário" para suporte a flutuante
- Atualização na função "Atualizar Formulário na Moldura - Outro Formulário";
- Melhoria na função "Formulário está aberto?". Suporte a formulários flutuantes
- Atualização na função "Obter Formulário" para funcionar entre molduras no principal
- Atualização na função "Obter formulário" não diferenciava flutuante/pop-up
- Melhoria na função "Último dia do mês". Implementação para camada cliente
- Melhoria na função "Dia da semana". Implementação para camada cliente
- Atualização na função "Fechar formulário" em formulários flutuantes

Maker-3.2.0.15

- Atualização na listagem de fluxos
- Atualização na busca de uma função ou fluxo no editor de fluxos
- Atualização na identificação de fluxos internos nos eventos
- Atualização na visualização dos objetos após categorizar um formulário
- Atualização na importação do template em projetos distintos no mesmo banco
- Atualização na lentidão existente na edição de formulários
- Atualização na identificação de sistemas com instância
- Atualização na visualização dos objetos após salvar um fluxo
- Atualização na inicialização do Maker em ambientes com data no formato en_US
- Atualização na visualização do formulário recém criado
- Atualização na configuração de um projeto existente
- Atualização na visualização na tela de visualização parâmetros de entrada
- Atualização na inicialização da propriedade do template
- Atualização na exibição da imagem na tela principal do template blue

Maker

- Atualização no assistente de criação de tabelas
- Atualização na definição de campos obrigatórios na criação de formulários
- Atualização na obtenção do metadados no editor de relatórios
- Atualização na visualização de telas na IDE
- Atualização na exibição de propriedades do componente Slider

API 3.2.0

Novas funções

- Mapa - Importar biblioteca
- Mapa - Criar mapa em uma moldura
- Mapa - Associar Evento
- Mapa - Entrar em Modo Street View
- Mapa - Obter Coordenadas pelo Street View
- Mapa - Traçar Rota entre Pontos
- Mapa - Traçar Rota entre Pontos(Coordenadas)
- Mapa - Calcular Distância Entre dois Pontos
- Mapa - Definir Perímetro Circular
- Mapa - Alternar o Modo do Mapa
- Mapa - Criar Marcador
- Mapa - Centralizar
- Mapa - Angular Mapa 45°
- Mapa - Atualização Visual
- É publicado?

Atualizações

- Atualização na função "CSS - Importar Conteúdo"

Maker

- Atualização no assistente de criação de tabelas
- Atualização na validação de nomes válidos para o componente

API 3.0.5

Atualização(oes):

- Atualização na função "Autenticar Usuário". Suporte a Entidade (DataConnection)

Novas funções:

- Obter Lista de Conexões-Ponte do Sistema
- Criação da função "Postar Dados por Iframe"

API 3.0.4

Atualização(ões):

- Atualização na função "Abrir Relatório imediatamente com Ordenação"
- Atualização na função "Abrir Relatório imediatamente"
- Atualização na função "Abrir ActiveX numa moldura"

Maker

- Novo componente Galeria de Imagens
- Novo componente Timer
- Novos temas: Red, Office, Green e Mac
- Atualização na ação "colar" componente no formulário
- Atualização na listagem do .rtm (documentação automática);
- Atualização na listagem de variáveis no retorno do subfluxo
- Melhoria na identificação de compatibilidade da função
- Atualização na definição de cores no Skin 'Maker3' do editor de fluxos
- Atualização no assistente de criação de múltiplos formulários
- Atualização na tela de definições do formulário
- Atualização no posicionamento das telas na documentação automática
- Atualização na identificação dos botões do formulário
- Atualização na apresentação da aba Definições do Formulário
- Atualização na transição dos objetos
- Atualização na definição na Cor Condicional do Componente Grade
- Atualização na edição do componente gráfico
- Atualização na importação das regras dos temas do projeto
- Atualização na importação de temas no MySQL
- Atualização na apresentação das colunas na tela de importação
- Atualização na apresentação da barra de progresso
- Atualização na persistência da fonte do componente Lista Dupla
- Atualização na execução do Maker Profiler
- Melhoria na identificação da carga de propriedades, plugins e aba Desenvolvimento
- Atualização na tela de histórico de SQL
- Melhoria na identificação do serviço do Webrun

API 3.0.3

Nova(s) função(ões):

- Gerar Miniatura da Imagem

Atualizações:

- Melhoria na função Executar comando SQL. Suporte a consulta preparada

Maker

- Adicão do evento "Ao modificar" no componente ColorPicker

API 3.0.2

Nova(s) Função(ões):

- Adição de novas propriedades na função Caixa de Texto - Novo

API 3.0.1

Nova(s) Função(ões):

- Obter Lista de WFRE do Contexto

Maker

- Inclusão do Tradutor do sistema
- Atualização no gerador de nomes para os novos componentes
- Atualização na leitura dos temas do Maker 3
- Atualização na avaliação do fluxo na utilização de subfluxos
- Atualização na criação de formulários com conexão adicional

[Voltar](releasecompleto)
