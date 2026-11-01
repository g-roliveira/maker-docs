---
title: "O que há de novo?"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/whatisnew.htm"
---

# O que há de novo? - Maker

ATENÇÃO: Para obter os novos recursos de TEMPLATES para projetos migrados, é necessário realizar a importação manualmente do FRZ do respectivo TEMPLATE. Para os projetos criados a partir da última versão, este procedimento não se faz necessário

#### Novidades Maker Studio

#### (Em homologação) Novidades Maker Studio 1.0.0.501 e Webrun Studio 1.0.0.501

**Maker Studio**

- [GERADOR DE RELATÓRIOS] Novo parâmetro para inclusão de log. Quer saber mais? [Clique aqui.](estrutura_maker_e_webrun/pasta_reports_do_webrun)
- [LISTAGEM] Novas propriedades para o componente. Quer saber mais? [Clique aqui.](novidades/novo_componente_listagem)
- A partir desta versão, componentes não tabulável não serão listados no "Editor de Tabulação".
- [FUNÇÃO Grade - Modificar Consulta] - novo parâmetro "Manter SQL", quando definido como "Verdadeiro", a consulta aplicada permanecerá em Cache, assim operações como filtro e exportação serão baseadas na consulta atual.

**API de Funções**

1. **Novas funções:**

- Bluetooth - Ativar
- Bluetooth - Desativar
- Bluetooth - Dispositivos Pareados
- Bluetooth - Está ativo?
- Bluetooth - Existe?
- JSON - Obter Objeto de um Arquivo
- Obter Classe de um Objeto (Obtém a classe do objeto, exemplo: Letras [String], Lógico [Boolean] e etc.)
- REST - Obter Conteúdo do Corpo

2. **Melhorias:**

- JSON - Obter Texto - suporte a indentação do texto obtido (Camada Servidor).
- Jasper - Gerar Relatório - suporte a caminho absoluto ou relativo.

**Webrun Studio**

- [GRADE] Suporte ao parâmetro(Manter SQL) da função "Grade - Modificar Consulta".
- [GRADE] Filtro Avançado: Caso o componente permita a customização do usuário, as configurações aplicadas no filtro avançado serão salvas automaticamente na pasta do usuário.
- [GRADE] Exportação de Dados:

1. **EXCEL:**

- Largura da coluna auto ajustável ao tamanho do conteúdo.
- Melhoria na identificação e aplicação da formatação da coluna do tipo data.

2. **PDF:**

- Renderização da coluna de acordo o tamanho do campo na grade.
- Identificação automática do estilo de folha.

- [GRADE] Melhoria na renderização do componente.
- [GRADE] Responsividade das colunas do componente.
- [LISTAGEM] Novas funcionalidades.
- [TABELA] Componente sempre se comportava de forma responsiva, agora o componente será responsivo de acordo a propriedade definida no formulário.
- [MSSQL] Melhoria para o restabelecimento de conexão em operações em background (Agendador de tarefas).
- Correções de bugs.

#### Novidades Maker Studio 1.0.0.113 e Webrun Studio 1.0.0.113

Filtro da Grade:

- Filtro Simples

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/filtro-grade/filtroSimples.gif)

- Filtro Avançado

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/filtro-grade/filtroAvancado.gif)

Para mais detalhes [clique aqui](maker_3/formulario/componentes/grade#filtroGrade)

API de Funções:

- Função "OAuth - Gerar Token de Autorização"
- Função "Grade - Habilitar Filtro Avançado"
- Função "Função "RPS - Assinar XML"
- Função "Chamar Serviço Web via SOAP - Certificado Digital"
- Função "Grade - Modificar Paginação"
- Função "Grade - Alterar Modo do Filtro"

**Novas funções para serem utilizadas com WhatApp:**

- Função "ChatAPI WhatsApp - Definir URL Webhook"
- Função "ChatAPI WhatsApp - Enviar Arquivo"
- Função "ChatAPI WhatsApp - Enviar Áudio"
- Função "ChatAPI WhatsApp - Enviar Mensagem"
- Função "ChatAPI WhatsApp - Obter Fila de Mensagens"
- Função "ChatAPI WhatsApp - Limpar Fila de Mensagens"
- Função "ChatAPI WhatsApp - Obter Lista de Grupos"

Para poder utilizar estas funções acesse este **[link](utilizando_funcoes_chatapi_whatsapp)**.

Webrun:

- [GRADE] Melhoria na tradução dos operadores da grade.
- [GRADE] Melhorias nas mensagens apresentadas ao usuário final da aplicação.
- [GRADE] Ajuste na renderização das colunas quando o fomulário for responsivo.
- [GRADE] Melhoria na exibição do loading de ações.
- [GRADE] Atualização do CSS do filtro por coluna.
- [GRADE] Padronização no menu de contexto.
- [GRADE] Ajuste na renderização das colunas quando o fomulário for responsivo.
- [GRADE] Dados da linha editada diverge quando a grade está paginada.
- Atualização das bibliotecas do 'Isomorphic' para a Grade
- [Aba Localizar] Modificação no grid_sort.jsp para envio do json com as informações das posições das colunas.
- [GRADE] Implementação da leitura da propriedade 'Habilitar Filtro'.
- [GRADE] Implementação da leitura da propriedade 'Modo do Filtro'.
- [GRADE] Implementação da funcionalidade 'groupByMaxRecords'.
- [GRADE] Melhoria na obtenção da quantidade de registros da grade quando filtrada em Cache.
- [GRADE] Ajuste para que o a quantidade de registros da grade retorne corretamente quando filtrada no cliente.
- [GRADE] Inclusão do Editor de Filtro para o componente.
- [GRADE] Implementação da leitura da propriedade 'groupByMaxRecords' do Agrupamento
- [GRADE] Implementação de filtro na camada cliente.
- [GRADE] Inclusão da propriedade filtro na camada servidor.
- [GRADE] Melhoria na tradução dos operadores da grade.
- [GRADE] Melhoria nas mensagens.
- Melhoria nos Skins.

#### Novidades Maker Studio 1.0.0.100 e Webrun Studio 1.0.0.101

API de Funções:

- Função "Chamar Serviço Web via SOAP" agora com suporte a envio de arquivos via protocolo MTOM/XOP
- Função "Abrir Conexão com Informix"
- Função "Tabela para JSON"

Webrun

- Melhoria na renderização de menus extensos com a orientação Vertical (Executive, Uranus)
- Atualização das bibliotecas para inclusão do Apache CXF (possibilita o consumo de Webservices com MTOM/XOP)
- Melhoria no tratamento de eventos para o navegador Mozilla Firefox.

Maker

- Melhoria no progresso de download do APK/Fonte de um projeto Mobile
- Melhorias no CSS do Safira para o Internet Explorer 11

#### Novidades Maker Studio 1.0.0.71 e Webrun Studio 1.0.0.72

API de Funções:

- Função "WebSocket - Obter Status da Conexão" compatível com a camada servidor
- Função "WebSocket - Fechar Conexão" compatível com a camada servidor
- Função "WebSocket - Enviar Mensagem" compatível com a camada servidor
- Função "WebSocket - Conectar compatível" com a camada servidor
- Inclusão da função "Grade - Obter informações do Cabeçalho"
- Inclusão da função "Grade - Habilitar Agrupamento"

Maker

- [Inclusão da opção "Limpar Cache na inicialização" na aba Outros em Configurações](maker_3/configuracao_das_conexoes/configuracoes#Outros)
- [Inclusão da propriedade "Exibir Sumário Geral" em Agrupamento](maker_3/formulario/componentes/grade#grade-agrupamento)

#### Novidades Maker Studio 1.0.0.70 e Webrun Studio 1.0.0.70

Agrupamento da Grade:

- Agrupamento

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/Agrupamento.PNG)

- Exibição de Sumário

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/Agrupamento-Sumario.png)

- Agrupamento Múltiplo

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/Agrupamento-Multiplo.PNG)

- Novas propriedades para exibição do agrupamento e sumarização na grade

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/Agrupamento-propriedade.PNG)

Para mais detalhes [clique aqui](maker_3/formulario/componentes/grade#grade-agrupamento)

Novidades Maker Studio 1.0.0.32 e Webrun Studio 1.0.0.61

- [Principais Novidades do Componente Grade:](maker_3/formulario/componentes/grade)

- [Exportação simples e rápida para os formatos mais comuns:](maker_3/formulario/componentes/grade#Exportacao)
  - EXCEL
  - PDF
  - JSON
  - HTML
  - LISTAGEM
  - TEXTO
  - XML
- [Maior controle na visualização dos dados realizando o congelamento das colunas](maker_3/formulario/componentes/grade#Congelamento)
- [Maior facilidade para reordenar as colunas, apenas arrastando e soltando a coluna desejada : Veja a comparação!](maker_3/formulario/componentes/grade#Reordenar)
- [Maior facilidade para realizar o ocultamento de colunas diretamente do menu de contexto do novo componente : Veja a comparação!](maker_3/formulario/componentes/grade#Ocultamento)
- [Ordenação Ascendente e Descendente dos registros diretamente do menu de contexto do novo componente](maker_3/formulario/componentes/grade#Ocultamento)
- [Otimização de performance do componente : Veja a comparação!](maker_3/formulario/componentes/grade#Performance)
- [Layout Moderno](maker_3/formulario/componentes/grade#NovoLayout)

- [Nova função Excel - Criar Nova Folha, onde é possível adicionar uma nova folha ao arquivo desejado](novidades/funcoes_excel#ExcelNovaFolha)
- Nova compatibilidade das funções Firebase, sendo possível utilizá-las na camada cliente
- [Novo Skin Safira: Visual Moderno e Responsivo](skinsresponsivos#Safira)
- Maior estabilidade

Webrun Studio

- [Atualização da função Upload Multiplos Arquivos](multiselect)
- [Skins Responsivos](skinsresponsivos)

- [Ametista](skinsresponsivos#Ametista)
- [Blue](skinsresponsivos#Blue)
- [Default](skinsresponsivos#Default)
- [Executive](skinsresponsivos#Executive)
- [Green](skinsresponsivos#Green)
- [Light](skinsresponsivos#Light)
- [Mac](skinsresponsivos#Mac)
- [Multiplo](skinsresponsivos#Multiplo)
- [Metro](skinsresponsivos#Metro)
- [Office](skinsresponsivos#Office)
- [Portal Light](skinsresponsivos#PortalLight)
- [Red](skinsresponsivos#Red)
- [Uranus](skinsresponsivos#Uranus)

- Nova Grade
- [Novo Skin Ametista](Ametista)
- [Novo Componente MultiSelect](selectmultiple)

Webrun Studio 1.0.0.31

- [Implementação de WebSocket, a partir desta versão é possível abrir conexões direta com o servidor via Websocket.](novidades/funcoes_websocket)
- [Leitura Biométrica, funcionalidade desenvolvida para efetuar o login na aplicação via scanner de impressão digital, sem a necessidade da utilização do applet.](novidades/configuracao_biometria)
- [Impressão Direta, funcionalidade desenvolvida para impressão de texto diretamente na impressora do sistema sem a necessidade da utilização do applet.](novidades/configuracao_impressao)
- [Implementação para manipulação de arquivos Office Excel e Word.](novidades/funcoes_excel)
- Otimização no upload de imagens, com o novo parâmetro avançado ["ImagemRedimensionarAoEnviar"](http://suporte.softwell.com.br/maker/manual_3/pt/maker_3/propriedades_e_eventos_da_area_de_trabalho.htm) é possível definir o tamanho máximo da imagem a ser enviada para o servidor.
- Otimização na exportação do sistema, a partir desta versão o desenvolvedor pode escolher se exportará seus sistemas no formato WAR com todas as Skins ou somente a Skin do sistema.
- Atualização de seguraça das bibliotecas do WebrunStudio.

API de Funções:

**- Novas funções para conexão com banco de dados em tempo real (Firebase).**

- Firebase - Ao Desconectar
- Firebase - Atualizar Dados
- Firebase - Conectar
- Firebase - Ler Dados
- Firebase - Monitorar Dados
- Firebase - Parar Monitoramento

**- Novas funções para conexão com banco de dados NoSQL (MongoDB).**

- MongoDB - Abrir Conexão
- MongoDB - Atualizar Registro
- MongoDB - Atualizar Registro (JSON)
- MongoDB - Consultar Registro
- MongoDB - Converter String para ObjectID
- MongoDB - Excluir Registro
- MongoDB - Fechar Conexão
- MongoDB - Inserir Registro
- MongoDB - Inserir Registro (JSON)

**- Novas funções para conexão via Websocket.**

- WebSocket - Conectar ao Servidor
- WebSocket - Enviar Mensagem Cliente Servidor
- WebSocket - Enviar Mensagem Servidor Clientes
- WebSocket - Fechar Conexão
- WebSocket - Liberar EndPoint
- WebSocket - Obter EndPoint
- WebSocket - Obter Número de Clientes
- WebSocket - Obter Status da Conexão
- WebSocket - Servidor em Uso?

**- Novas funções para manipulações de arquivos Office (Excel e Word).**

[![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png "Download do Exemplo")](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_Excel.frz)
**[Excel](novidades/funcoes_excel)**

- Excel - Abrir Arquivo
- Excel - Atualizar Linha do Arquivo
- Excel - Criar Arquivo
- Excel - Deletar Linha do Arquivo
- Excel - Ler Dados do Arquivo
- Excel - Preencher Arquivo
- Excel - Salvar Arquivo

[![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png "Download do Exemplo")](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_Word.zip)
**[Word](novidades/funcoes_word)**

- Word - Abrir Arquivo
- Word - Criar Arquivo
- Word - Criar Parágrafo
- Word - Criar Tabela
- Word - Ler Arquivo
- Word - Ler Tabela
- Word - Mala Direta
- Word - Salvar Arquivo

**- Novas funções para transferência de arquivos utilizando SFTP.**

- SFTP - Abrir Canal
- SFTP - Abrir Conexão
- SFTP - Adiconar Arquivo
- SFTP - Criar Diretório
- SFTP - Deletar um Arquivo
- SFTP - Deletar um Diretório
- SFTP - Fechar Canal
- SFTP - Fechar Conexão
- SFTP - Listar Conteúdo de uma Pasta
- SFTP - Nível Acima
- SFTP - Obter Arquivo do Servidor
- SFTP - Obter Diretório de Trabalho Remoto Corrente
- SFTP - Trocar a Pasta Atual

**- Nova função para leitura OCR.**

- [OCR - Ler Texto do Arquivo](novidades/OCR2)

**- Demais funções:**

- Área de Desenho - Remover Objeto Área de Desenho
- HTML - Obter Elemento pelo Nome do Atributo
- Mapa - Criar Ícone Para Rota Dinâmica
- Mapa - Movimentar Ícone na Rota
- Mapa - Obter Endereço a partir das Coordenadas
- Mapa - Obter Locais Próximos
- Mapa para JSON
- Validar Email

[**### Baixe o sistema exemplo com as funcionalidades.**](http://download.softwell.com.br/suporte/exemplos/ExemploNovidadesMakerStudio.mkr)

#### Novidades Maker Studio 1.0.0.17 e Webrun Studio 1.0.0.17

Maker e Webrun

- Atualização de segurança das bibliotecas AXIS do Webrun Studio.
- Novo layout da tela de configurações do sistema
- Inclusão do recurso "Fluxo de erros" para personalização de exceções exibidas pelo banco de dados:

  - "Com o parâmetro avançado "Fluxo:TratarErroSQL", será possível definir um fluxo para
  que, ao ocorrer erros de banco de dados, o fluxo defino seja executado. O fluxo
  receberá automaticamente um parâmetro de entrada que será a mensagem/exceção
  gerada.".
- Componente Tabela: nova funcinalidade para remoção da imagem associada para colunas do tipo imagem ou botão.
- Melhoria no levantamento de exceções na camada cliente, quando a exceção for lançada será possível verificar a pilha de erros.
- Nova implementação do evento "Ao Autenticar". Com a nova implementação de autenticação a regra informada no evento "Ao
  Autenticar" deve retornar o código do usuário, assim o Webrun Studio irá encarrega-se de aplicar todas as permissões de acesso do sistema.
- Implementação do parâmetro avançado "AoAutenticarLegacy". O parâmetro tem por finalidade realizar a autenticação do usuário no sistema da forma
  legada, passando como parâmetro de retorno da regra do evento "Ao Autenticar" o
  código do grupo que o usuário será autenticado.
- Inclusão da propriedade "Charset" para o componente RSS.
- Inclusão dos templates MobileMaterialDesign e MobileBootstrap para projetos Mobile.

- API de funções:

  - Implementação da função "Logger - Adicionar Mensagem" para a camada cliente.

  - Inclusão do parâmetro "Escapar" na função "Elemento para XML".

  - Implementação da Nova função "Criptografia Simétrica - Criptografar Mensagem".

  - Implementação da Nova função "Criptografia Simétrica - Decriptografar Mensagem".

  - Implementação da função "Mapa - Obter Distância Entre Dois Pontos".

  - Implementação da função "Push - Enviar Mensagem - Firebase".

  - Melhoria na função "Mapa - Importar Biblioteca". Inserção da biblioteca Geometry, para que seja possível realizar cálculos entre pontos.

- Bugs fix.

#### Novidades Maker Studio 1.0.0.9 e Webrun Studio 1.0.0.9

Maker e Webrun

- Inclusão dos canais: "Em Homologação" e "Estável", referentes às versões disponíveis no Live Update.
- Inclusão do componente Consulta.
- Inclusão do editor de sintaxe JS, HTML e CSS ao componente Integração.
- Atualização na leitura da propriedade "Busca Incremental" do componente Lista Dinâmica.

  - Para projetos criados em versões anterioes à "Studio 1.0.0.7", será necessário realizar uma das instruções existentes no arquivo a seguir.
- Inclusão das bibliotecas de Push Notification para uso no Mobile.
- [Edição direta no objeto FIM.](novidades/Objeto_FIM)
- Atualização do driver do MySQL para o uso do MySQL 5.6+.
- Inclusão das teclas de atalho para o novo calendário.
- Inclusão de novas funções:

  - "Mapa - Associar Fluxo ao Evento do Marcador".

  - "Obter Valor dos Parâmetros da Consulta".

  - "Listar Parâmetros da Consulta".

  - "HTML - Scroll Infinito".

  - "Executar JavaScript em um Contexto".
- [Inclusão da chamada de um fluxo de Callback na função "Mapa - Importar Biblioteca", com isso, a importação das bibliotecas com os procedimentos posteriores ficam síncronos, evitando inconsistências.](novidades/Mapa_Importar_Callback)
- [Inclusão de 2 novos parâmetros na função 'REST - Consumir WebService'. Chamada de um fluxo de erro(Callback) caso ocorra erros na requisição e sua lista de parâmetros respectivamente.](novidades/Rest_Callback_Error)

#### Novidades Maker Studio e Webrun Studio

Maker e Webrun

- [Compilação nativa com Java 1.8 e suporte nativo ao Tomcat 8.5.](recursos_avancados/tecnologia_atualizada)
- Atualização das bibliotecas do Jasper.
- Novo layout das telas iniciais do Webrun.
- Melhoria de segurança nas requisições dos componentes Maker Flow.
- Melhoria na execução de eventos dos componentes Maker Flow.
- Inclusão do parâmetro Container para as funções adicionais ' * - Novo ' dos componentes Maker 3. EX: Ação - Novo.
- Otimização do componente Lista. O componente não herda mais as características da Lista Dinâmica e com isso, o número de requisições ao servidor é reduzida ao clicar em expandir para selecionar um item.
- Inclusão da propriedade "Modelo" para o componente Caixa de Texto, com o intuito de manter a opção de utilizar o calendário legado.
- [Novo componente Integração.](novidades/novo_componente_integracao)
- [Novo componente Container.](maker_3/formulario/componentes/container)
- Propriedade Nome da Classe para os componentes da categoria padrão:

  - Permite especificar uma classe padrão do componente.
- [Nova API de Mensagens:](novidades/nova_api_message)

  - Mensagens personalizadas.

  - Auto fechamento.

  - Chamadas assíncronas.
- [Componente Listagem:](novidades/novo_componente_listagem)

  - Permite a geração dinâmica de listagem a partir de uma consulta (SQL).
- Componente Consulta:

  - Permite filtrar diversos formulários/cadastros em uma única tela. Facilitando o acesso aos dados.
- Componentes Maker 3:

  - Recurso Container para o componente Aba.

  - Recurso Container para o componente Accordion.

  - Recurso Container para o componente Ação.

  - Recurso Container para o componente Calendário.

  - Recurso Container para o componente Consulta.

  - Recurso Container para o componente Galeria de Imagens.

  - Recurso Container para o componente Gráfico.

  - Recurso Container para o componente Integração.

  - Recurso Container para o componente Listagem.

  - Recurso Container para o componente Organograma.

  - Recurso Container para o componente Slider.

  - Recurso Container para o componente Slider Panel.

  - Recurso Container para o componente Tabela.

  - Recurso Container para o componente Timer.
- Implementação da nova propriedade "Nome da Classe (CSS)" para os componentes Maker:

  - Árvore.

  - Botão.

  - Caixa de Texto.

  - Check.

  - Container.

  - Grade.

  - Gráfico.

  - Imagem.

  - Lista.

  - Lista Dinâmica.

  - Lista Dupla.

  - Moldura.

  - Opções.

  - Subformulário.

  - Texto.

  - Texto Longo.
- Implementação da propriedade "Valor Inicial" para os componentes não vinculados a campo:

  - Caixa de Texto.

  - Check.

  - Lista.

  - Lista Dinâmica.

  - Opções.

  - Texto Longo.

#### Novidades Maker 3.9.2.34 e Webrun 3.9.2.34

Maker e Webrun

- [IMPORTANTE: Verifique as atualizações de segurança para as aplicações Maker.](novidades/ajustesseguranca)
- Atualização na biblioteca para seleção de datas:

  Melhoria de performance(Redução do número de requisições no servidor ao navegar entre datas)

  Atualização para um layout mais moderno
- Atualização do Assistente de Consulta SQL
- Melhoria na busca por palavras acentuadas no componente Tabela utilizando SGBD PostgreSQL.
- Otimização na carga do cache para colunas do tipo Lista Dinâmica para o componente Tabela.
- Melhoraria nas mensagens de feedback para as ações do usuário na interface do Tabela.
- Melhoria na responsividade do componente Tabela quando o formulário está aberto no componente Aba

API de Funções/Funções Adicionais

Novas funções

- Aba - Fechar formulário
- Tabela - Modificar Consulta

[Consulte o release notes completo](novidades/releasecompleto#39234)

#### Novidades Maker 3.9.2.4 e Webrun 3.9.2.5

Maker e Webrun

- [Novo evento "Ao Soltar Atalho" para o componente Menu](novidades/menu_arrastaratalho)
- [Inclusão da propriedade "Texto da Pesquisa" para o componente Menu](novidades/menu_textopesquisa)
- [Melhorias nas definições de classes CSS para o componente Accordion](novidades/accordion_classes)
- Suporte ao nono dígito para os DDD's 41 a 49, 51 a 55 e 61 a 69.
- Otimização da avaliação de expressões da cor condicional do componente Tabela
- Melhoria na identificação de compatibilidade de camadas das funções adicionais
- Inclusão dos tipos de dados: "Monetário" e "Telefone 9º Dígito" na inicialização de um novo projeto.

API de Funções/Funções Adicionais

Novas funções

- Ler Linha do Arquivo Definindo Charset
- Está em modo de navegação?
- Abrir conexão DB2
- Lista Dupla - Limpar
- Lista Dupla - Adicionar Elemento
- Tabela - Habilitar Coluna
- Tabela - Obter Linhas Selecionadas

Melhorias. As funções listadas abaixo são compatíveis com os componentes da categoria Maker 3.

- Mostrar Componente
- Habilitar Componente
- Componente Visível
- Obter Posição X do componente
- Obter Posição Y do componente
- Obter Largura do Componente
- Mudar Posição do Componente
- Obter Componente
- Destruir Componente
- Existe Componente?

Inclusão do parâmetro "Chave" para a função função Mapa - Importar Biblioteca. Este parâmetro é necessário quando o uso de chamadas à API do
Google Maps exceder o limite de uso.

[Consulte o release notes completo](novidades/releasecompleto#3924)

#### Novidades Maker 3.9.1.3

- [Uma nova era em suas mãos. Veja o novo componente cognitivo FAQ](novidades/faq_componente)
- [Integração com a API da MakerPlanet através do plug-in disponível na IDE (As API's da MakerPlanet são extensões de terceiros com custos adicionais determinados pelo fabricante)](novidades/makerplanet)
- [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_JSON.FRZ) [Utilize JSON facilmente com as novas funções de JSON.](novidades/funcoes_json)
- [Conexão Remota com banco de dados através do Executor de Scripts.](novidades/conexaoremota)
- [Nova Propriedade Cor para os valores do Gráfico (GoogleCharts).](novidades/grafico_cor)
- [Nova Propriedade Área Útil (%) para o Gráfico (GoogleCharts).](novidades/grafico_areautil)
- [Novos atalhos para o Inspetor de Propriedades e Paleta de Componentes. Confira!](novidades/novasteclasdeatalho)
- [Visualize o formulário diretamente da IDE de forma mais fácil.](novidades/formintoide)
- [Consulte o release notes completo](novidades/releasecompleto#3913)

#### Novidades do Maker 3.9!

- [Publique seus sistemas na NUVEM com apenas UM CLIQUE! Veja como é facil!](novidades/DeployNaNuvem)
- Componente Tabela 3.0!
  [Suporte a edição diretamente no componente](novidades/TabelaCrudNovidades)
  [Novos eventos](novidades/TabelaCrudNovidades)
  [Suporte novos tipos de coluna (Lista Dinâmica, Lista, Botão, Imagem e Caixa de Texto)](novidades/TabelaCrudNovidades)
- [Conheça o Monitor do Sistema e acompanhe de perto a Saúde do Seu Servidor!](novidades/monitor_do_sistema)
- [Confira a segurança de sua aplicação e o uso de boas práticas com o System Check.](novidades/system_check)
- [Execute os fluxos diretamente da IDE!](novidades/PlayerDeFluxos)
- [Conheça o novo Template para Portais! Confira o Portal Light!](novidades/TemplatePortalLight)
- [Acompanhe as estatísticas do seu sistema com o novo plugin DashBoard](novidades/PluginEstatisticasSistema)
- [Pesquisa rápida e fácil no menu da aplicação. Conheça a nova propriedade "Pesquisa" do componente Menu.](novidades/PesquisaMenu)
- [Confira o layout "Aurora" no Maker 3.9!](novidades/TemplateAurora)
- [Abrir formulário na Moldura ficou mais fácil! Confira a nova propriedade "Formulário" do Componente Moldura.](novidades/PropriedadeFormularioMoldura)
- [Defina estilos CSS diretamente no formulário!](novidades/PropriedadeClasseCss)
- [Nova propriedade Estilo (CSS) Para os componentes Maker](novidades/PropriedadeEstiloCss)
- API de funções
  [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_REST_Consumir_WebService.FRZ) (Novo) REST - Consumir WebService
- [Novo evento "Ao Selecionar" para o componente Galeria de imagens.](novidades/EventoAoSelecionarGaleriaDeImagens)
- [Consulte o release notes completo](novidades/releasecompleto)

#### Novidades Maker 3.8.1.20

**[IMPORTANTE: ANTES DE MIGRAR SEU PROJETO, UTILIZE ESTE PROCEDIMENTO](novidades/migrando_versao_38060_38120)**
- Melhorias no componente Tabela
  [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/Tabela_CriarDinamicamente.FRZ)
  [Agora é possível criar o componente Tabela em tempo de execução através da função "Tabela - Criar Dinamicamente".](novidades/tabelaCriarDinamicamente)
  [Novos botões de paginação para navegação entre os registros.](novidades/tabelaPaginacao)
  [Nova propriedade "Campo" da coluna do cabeçalho](novidades/tabelaCampo)
- Melhorias no componente Gráfico (GoogleCharts)
  [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/Grafico_RecarregarComponente.FRZ)
  [Nova função adicional "Gráfico - Recarregar Componente".](novidades/grafico_recarregarComponente)
  [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_MultiplasSeries.FRZ) [Suporte a múltiplas séries.](novidades/grafico_multiplas_series)
  [Nova propriedade animação.](novidades/grafico_animacao)
- Melhorias/Correções no Template Localizar
  Leitura da propriedadade "Entrar Como Pesquisa";
  Leitura do dicionário de dados (em alguns bancos não era apresentado corretamente);
  Ao ordenar o componente tabela, o ResulSet do formulário ficava desatualizado;
  Definição do tamanho da coluna terá como prioridade o maior tamanho (entre a precisão do campo e o título da coluna);
  Adição do critério "Lower" em campos do tipo Letras para ignorar o Case Sensitive na busca;
  Ícones de exportação não apareciam corretamente no Skin Mac.
  Listagem de campos da busca avançada não era exibida corretamente caso a quantidade de campos fosse maior que o tamanho do formulário;
- [Suporte a filtro por constantes do sistema para os componentes Maker 3 que possuem fonte de dados.](novidades/componentes_constante)
- [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/Tabela_FiltroSemVinculoBanco.FRZ) Suporte a filtro por componente sem vínculo a campo para os componentes Maker 3 que possuem fonte de dados.
- Suporte a conexão adicional para os componentes Maker 3 que possuem fonte de dados.
- Modificação automática do Skin ao alterar o template utilizado no sistema.
- [Gravação do Layout (itens docáveis da IDE)](novidades/maker_layout)
- [Melhoria na identificação de erros de script no CHROMIUM.](#)
- API de funções
  Abrir consulta dinâmica avançada (a partir desta versão, retorna uma tabela navegável)
  [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/ExemplosFuncoes_Metadados_ListaAbas_PropriedadesConexao.FRZ) (Novo) Obter Metadados do Formulário
  [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/ExemplosFuncoes_Metadados_ListaAbas_PropriedadesConexao.FRZ) (Novo) Obter propriedades da conexão
  [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/ExemplosFuncoes_Metadados_ListaAbas_PropriedadesConexao.FRZ) (Novo) Obter Lista com Nomes das Abas
- [Consulte o release notes completo](novidades/releasecompleto#a38120)

#### Novidades Maker 3.8.0.60

- [Componente Tabela 2.0 (Nova Grade). Conheça as novas funcionalidades.](novidades/novatabela)
- [Novo componente Gráfico baseado na API do GoogleCharts](novidades/grafico_maker3)
- [Novo componente Organograma baseado na API do GoogleCharts](novidades/organograma)
- [Novo Template e Skin Metro no Maker 3.8.](novidades/templatemetro)
- [Nova área de trabalho Maker, inovadora e completamente personalizável.](novidades/drag_and_dock)
- [Nova propriedade "FormularioLocalizar". Agora é possível ter sua própria aba localizar](novidades/formulariolocalizar)
- [Nova propriedade "Fonte da Descrição" para os componentes Caixa de Texto, Texto Rico e outros.](novidades/fonte_da_descricao)
- [Rotinas de fluxos simplificadas.](novidades/templates_de_fluxos)
- Novo inspetor de propriedades.
- Nova paleta de componentes.
- Troca de Skin diretamente no fluxo
- Duplo-clique no evento passa a chamar o fluxo associado/novo fluxo
- Inclusão do tipo "CorCondicional" para utilização nas propriedades de componentes Maker 3.8+
- Melhoria do tipo "Lista" para componentes do Maker 3.8+
- Melhoria de performance no carregamento e edição de itens do componente "Menu".
- Melhoria de performance na leitura do Skin selecionado no "Master Skin".

#### Novidades Maker 3.7.2.7

- [Informações acessíveis a partir da tela inicial](novidades/telainicial)
- [Responsivo versão 2: Ajuste para dispositivos móveis](novidades/responsivov2)
- [Maior controle no tempo de sessão do usuário](novidades/encerrarsessao)
- [Nova API para Captchas (Local)](novidades/captcha_funcoes)
- [Possibilidade de criar lista dinâmica em tempo de execução](novidades/listadinamica_novo)
- [Importação e exportação de artefatos do projeto com mais facilidade](novidades/busca_tela_exportacao_importacao#Busca%20-%20Tela%20de%20Importa%C3%A7%C3%A3o%20e%20Exporta%C3%A7%C3%A3o)
- [Nova função adicional: Timer - Obter Horário](novidades/timer_obter_horario)
- [Controle de permissão do Componente Menu dinamicamente](novidades/menu_definir_permissao)
- [Melhoria no log de formulários. Nova coluna IP para identificação no IP do usuário que fez a alteração.](novidades/registrodeipdolog)
- [Personalização do tempo e quantidade de tentativas inválidas no login](novidades/logintentativa)
- Nova propriedade "Tamanho máximo da aba" para o componente Aba
- Melhoria no tratamento de parâmetros com quebra de linha na requisição para Servidor de Relatórios
- Atualização no posicionamento do calendário, quando aberto através do componente Grade
- Melhoria no tratamento da barra de rolagem e tabulação entre os componentes para o Firefox
- [Consulte o release notes completo](novidades/releasecompleto)

#### Novidades Maker 3.7

- [API de Funções.](novidades/Api_de_funcoes)
- [Formulários responsivos.](novidades/responsivo)
- [Novo template Uranus.](novidades/Template_Uranus)
- [Suporte as versões do postgreSQL 9.1 e SQL Server 2012.](novidades/Homologacao_dos_bancos_de_dados)
- [Suporte a Servidor de Relatórios x64.](novidades/ServidorRelatoriosx64)
- [Criação de atalhos no formulário principal.](novidades/Formulario_Principal)
- [Customização de erros na geração de relatórios](novidades/Relatorios_com_customizacao_de_erros)
- [Suporte a Navegação.](novidades/Componentes_Maker)
- [Nova funcionalidade no componente Imagem (Lente de aumento).](novidades/Nova_funcionalidade_no_componente_imagem)
- [Nova propriedade "Separar formulário" para o componente Aba](novidades/Nova_propriedade_para_o_componente_aba)
- [Limpeza automática dos arquivos de cache na geração de relatório.](novidades/Limpeza_automatica_dos_arquivos_de_cache_na_geracao_de_relatorios)
- [Atualização automatática dos parâmetros de configuração do Maker.](novidades/Parametros_de_configuracao_do_projeto)
- [Consulte o release notes completo](novidades/releasecompleto)

#### Novidades Maker 3.6

**- [Componente Player](maker_3/formulario/componentes/player)
- [Componente Chat](maker_3/formulario/componentes/Chat)
- [Componente Leitor de RSS](maker_3/formulario/componentes/rss)
- [Componente Tabela](maker_3/formulario/componentes/tabela)
- [Compartilhamento de formulários](#repositorio_form)
- Botão minimizar para os formulários flutuantes
- [Suporte a ambientes x64 para o Leitor Biométrico](#x64)
- Suporte a filtros dinâmicos nos componentes do Maker 3
- Abrindo formulários em aba a partir do menu
- [Redirecionamento automático para página de login ao expirar a sessão](#redireciomento)
- [Busca na estrutura do componente Menu](#menubusca)
- [Atualização do Assistente SQL](#assistentesql)
- [Atualização do JasperReports](#jasper)

#### Novidades Maker 3.5

**- [Carga Antecipada de formulários](novidades/cargaantecipada)
- [Ícone do projeto na URL (favicon)](novidades/iconedaaplicacao)
- [Identificação de Parâmetros](novidades/identificacao_params)
- [Otimização de performance nas requisições do formulário ao servidor;](maker_3/formulario/componentes/csssprite)
- Otimização de performance na geração/compilação do projeto; (WAR/JAR);
- Otimização de desempenho do Scanner de Dependências;
- Otimização de desempenho no gerenciador de objetos;
- Otimização de desempenho na importação de FRZ em projetos com muitos objetos;
- Otimização na identificação dos parâmetros no montador de expressões;
- Otimização na localização de fluxos/funções no montador de expressões;
- Otimização na identificação de templates já existentes na base para evitar sobrescrita;
- Otimização na persistência das configurações de busca do fluxo do Maker3.ini;
- Otimização na visualização de propriedades com descrição longa;
- Diversos ajustes;**

#### Novidades do Maker 3.2

- [Integração com redes sociais (Facebook)](redessociais/facebook/facebook)
- [Visualize Mapas facilmente com a API 3.2](makermaps/makerMaps)
- Tema com suporte a Múltiplos Sistemas&gt;
- Temas com layout responsivo
- Diversas melhorias e correções**

O Maker 3 possui uma interface mais fácil e intuitiva que auxilia o desenvolvedor no momento de criação de seus projetos, com um preview de formulários e fluxos, uma nova árvore de objetos e muito mais!

## Mais produtividade:

O Maker 3 surge a partir da necessidade de aumentar ainda mais a produtividade dos desenvolvedores na criação dos seus projetos, com as seguintes mudanças:

- **Nova interface que auxilia na produção;**
- **Componentes que tornam a ferramenta mais intuitiva;**
- **Novas funcionalidades no fluxo de ações;**
- **Novas teclas de atalho;**
- **Unificação Maker e Webrun;**

## Mais poder:

Agora, o desenvolvedor possui uma infinita gama de configurações, possibilidade de criar seus próprios componentes e adicioná-los a IDE e personalização de sua tela inicial utilizando o próprio Maker.

- [Adição de novos componentes;](#novoscomponentes)
- [Liberdade de criação de componentes pelos próprios desenvolvedores;](maker_3/formulario/componentes/componentes)
- [Maior liberdade de configuração;](#maiorpersonalizacao)
- [Novas propriedades;](#propriedades)
- [Novas funções;](#novasfuncoes)
- [Personalização da tela inicial com o próprio Maker;](#telainicial)

## Nova interface que auxilia na produção:

O Maker 3 possui uma interface mais fácil e intuitiva que auxilia o desenvolvedor no momento de criação de seus projetos, com um preview de formulários e fluxos, uma nova árvore de objetos e muito mais!

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tela_inicial.png)

#### Repositório de objetos categorizado e moderno

Agora o repositórios de objetos é categorizado e possui um visual mais moderno.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/controledeobjetos.jpg)

#### Pré-visualização do formulário ou fluxo sem a necessidade de abri-los

Nesta versão os formulários e fluxos podem ser pré-visualizados com a combinação SHIFT + passar o mouse.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/pre_visualizacao_objetos.jpg)

#### Visualize o projeto diretamente do Maker!

Com a Aba visualização é possível observar o sistema dentro da própria IDE.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/preview_maker3.jpg)

## Nova paleta de objetos

No Maker 3 foi adicionada uma nova paleta de objetos versátil, que pode ser acessada a qualquer momento com apenas um clique (botão direito) sobre qualquer área do formulário.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/paleta_objetos_new.png)

**Novos componentes**

Nesta versão foram inseridos 8 novos componentes que auxiliam no desenvolvimento dos projetos, tais como: Aba, Ação, Accordion, Galeria de Imagens, Menu, Slider, Slider Panel e Timer. Além do componente "ColorPicker" da biblioteca jQuery.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/componentes_novos.png)

#### Acessar as propriedades dos componentes ficou mais rápido

Com o conceito de aperfeiçoar e melhorar a usabilidade da IDE, no Maker 3 é possível alterar todas as propriedades dos componentes em apenas um único lugar.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/localizador_de_propriedades.png)

#### Definições acoplada ao formulário

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/definicoes.jpg)

#### Possibilidade de copiar eventos de um componente para outros, utilizando as teclas **CTRL+C** e **CTRL+V**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/copiar_eventos_de_um_componente.jpg)

#### Possibilidade de copiar fluxos e seus parâmetros associados aos eventos para outros eventos

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/copiar.jpg)

#### Diretório para listagem do skin.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/listagem_de_diretorios.jpg)

#### Adição de novas funcionalidades na área de trabalho

- Adição do Parâmetro Formulário de Senha;
- Adição do Parâmetro Formulário de Grupos;
- Adição do Parâmetro Formulário de Usuários;
- Adição do Parâmetro Formulário de Importação;
- Adição do Parâmetro Formulário de Log;
- Adição do Parâmetro Formulário de Login.

**Sendo os formulários de "login" e "principal" essenciais para execução do projeto no Webrun.**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/parametros_da_area_de_trabalho.jpg)

### Adição de Plug-ins

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/plugin2.png)

#### Busca Textual

Este plug-in permite localizar qualquer objeto pré-existente no projeto a partir de uma palava chave. Após localizado, é possível ainda executar o objeto selecionado.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/busca_plugin.png)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/busca_textual.png)

#### Ficha Técnica

Este plug-in apresenta um resumo do sistema provendo informações como média geral do fluxo, produtividade, entre outros para um melhor dimensionamento do projeto.

![icon_ficha.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_ficha.png)

![ficha_tecnica.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ficha_tecnica.png)

#### MasterSkin

Com este plugin, o usuário poderá personalizar todo visual do seu sistema, sem a necessidade de um alto conhecimento em HTML e CSS.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/skin_master_plugin.png)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/makerskin.png)

#### Visão Hierárquica

Este plugin, lista todos os fluxos vinculados aos componentes dos formulários.

![visao_hierarquica.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/visao_hierarquica.png)

![hierarquia.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/hierarquia.png)

#### Opção de Arrastar arquivo para área de trabalho do Maker (importação de arquivos)

Ao selecionar objetos .FRZ que estejam em alguma pasta e arrastá-los para a área de trabalho do Maker, a janela de Importação será aberta para que os arquivos sejam importados.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/importacao.jpg)

#### Portal de acessibilidade

Permite acesso ao fórum, manual e outras opções dentro da própria IDE.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/imagem_212.png)

####

O Maker e Webrun nunca foram tão unidos, a partir desta versão as configurações do Webrun poderão ser feitas na própria IDE e o status de conexão será apresentado continuamente.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/unificacao_webrun.jpg)

É necessário salientar que nesta versão será necessário
que o webrun esteja instalado na máquina onde o maker será executado para garantir o perfeito funcionamento da IDE.

#### Novas propriedades dos componentes:

Propriedade **AUTO COMPLETAR** do componente Caixa de Texto: Ao definir esta propriedade como SIM, ao digitar sobre o mesmo será apresentado uma lista com os valores que foram digitados anteriormente.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/funcionalidade_auto_completar.png)

**Propriedade Ao clicar na aba do formulário**: Ao definir um evento a esta propriedade, o mesmo será executado toda vez que o usuário clicar sobre uma aba do formulário.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ao_clicar_aba.png)

**Propriedade para adição e remoção de botões da aba localizar** : O usuário poderá definir as configurações da aba localizar
.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/aba_localizar.jpg)

Propriedade **EDITAR NO DUPLO CLIQUE** do formulário: Com esta propriedade o usuário poderá determinar a possibilidade de entrar em modo de edição ao executar o duplo clique sobre o formulário no Webrun.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/editar_duplo_clique.jpg)

Novas Propriedades do componente Grade:

- Propriedade **LARGURA COLUNA NUMÉRICA** do componente Grade: Determina a largura da coluna que contém a numeração das linhas da grade;
- Propriedade **HABILITAR COLUNA NUMÉRICA** do componente Grade: Permite habilitar ou não a coluna númerica do componente;
- Propriedade **EXECUTAR APENAS DUPLO CLIQUE** do componente Grade: Ao definir está propriedade apenas o evento ao duplo clicar será habilitado no componente;
- Propriedade **ATIVAR AO MODIFICAR DA PÁGINA** no componente Grade : Ao definir está propriedade como SIM, o evento associado será disparado toda vez que o usuário paginar o componente.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novas_propriedades_grade.jpg)

#### Possibilidade de configurar todos os objetos do fluxograma

A partir de agora todos os objetos do fluxo de ações podem ser reconfigurados.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/confg_fluxo.jpg)

## Novas funcionalidades no Editor de fluxo de ações

O Editor de fluxo de ações sofreu uma grande reformulação nesta versão, com funcionalidades que aumentam significamente a produtividade, como:

## Novas funcionalidades no Editor de fluxo de ações

O Editor de fluxo de ações sofreu uma grande reformulação nesta versão, com funcionalidades que aumentam significamente a produtividade, como:

- **Grade de posicionamento de objetos**:
- **Nova paleta de acesso aos objetos**;
- **Zoom de objetos;**
- **Criação de fluxos templates**:
- **Busca de fluxos, variáveis e constantes****nos objetos**;
- **Traçar rota**;
- **Novo montador de expressões**;
- **Vinculação automática do formulário em uso com o formulário de trabalho de fluxos internos;**
- **Novo tipo (Formulário) utilizado nos parâmetros de entrada das definições de ações;**
- **Desfazer do posicionamento dos objetos do fluxo;**
- **Editor de variáveis retrátil;**
- **Criação e edição de parâmetros de entrada;**
- **Ligação automática de objetos utilizando a tecla ctrl;**
- **Alinhamento de vários objetos selecionados com base no primeiro selecionado;**
- **Avaliação de Fluxograma;**
- **Ao pressionar Shift no editor de fluxograma é possível observar o seu conteúdo interno**;
- **Ao pressionar a tecla tab no editor de fluxos é possível navegar entre os grupos de objetos desconectados**.

**Grade de posicionamento de objetos para facilitar a organização dos mesmos**:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/posicionamento_grade.jpg)

Nova paleta de objetos para o editor de fluxo. Todas funcionalides em um só lugar!

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orbitaljpg.jpg)

**Zoom**:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/maker3_zoom.jpg)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fluxo_1.jpg)

**Criação de fluxos templates para facilitar utilização de rotinas:**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fluxo_1.jpg)

**Busca de fluxos, variáveis e constantes****nos objetos**:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fluxo_busca.jpg)

**Traçar rota para facilitar a visualização do trajeto que o fluxo executará:**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/maker3_6.png)

### Novo montador de expressões

Agora o montador de expressões é mais inteligente e intuitivo com funcionalidades que auxiliam no aumento da produtividade no momento de desenvolvimento.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/montador_new_2.jpg)

#### Atalhos para adicionar parâmetros e copiar/colar um nó da árvore do montador de expressões

Possibilidade de copiar um nó criado e colar em outro parâmetro, através das teclas de atalho.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/concatenacao.jpg)

#### Acesso a Funções e fluxos, Parâmetros e Variáveis

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/menu_flutuante.png)

#### Possibilidade de rotacionar a expressão

Há a possibilidade de rotacionar os objetos do **Montador de Expressão**, para uma melhor visualização conforme o gosto do usuário

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rotacionar_montador.png)

#### Zoom na expressão

É possível visualizar toda a expressão sem precisar utilizar a barra de rolagem.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/zoom_expressao.png)

**Vinculação automática do formulário em uso com o formulário de trabalho de fluxos internos**

Ao criar um fluxo interno, o formulário utilizado ja é apresentado como formulário de trabalho no editor de fluxo de ações.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/formulario_principal.jpg)

**Novo tipo (Formulário) utilizado nos parâmetros de entrada das definições de ações**

É apresentado um novo tipo formulário na listagem de objetos que podem ser passados como parâmetros de entrada.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/parametro_de_entrada_formulario.jpg)

#### **Desfazer do posicionamento dos objetos do fluxo**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/desfazer_fluxo.jpg)

#### **Editor de variáveis retrátil**

**O editor de variáveis permanece na tela, podendo ser visualizado apenas com o passar do mouse no canto direito da tela do Editor de Fluxo de Ações.**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/variaveis_retratil.png)

#### **Ligação automática de objetos utilizando a tecla ctrl**

Agora é possível ligar objetos desconectados, apenas clicando sobre os mesmos e pressionando a tecla ctrl.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/desfazer_fluxo.jpg)

#### **Avaliação de Fluxograma**

Nesta versão, foi implementado uma funcionalidade que permite ao desenvolvedor garantir a utilização das boas práticas no momento de criação de suas regras, permitindo-se assim a garantia dos conceitos definidos na engenharia de software, tais como: funcionalidade, manutenabilidade, eficiência, funcionalidade e portabilidade.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/avaliacao.jpg)

No canto superior direito é possível observar a nota do fluxo avaliado e ao passar o mouse será apresentado os pontos em que as boas práticas não foram introduzidas:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/observacoes_fluxo.jpg)

Ao modificar os pontos que estão divergentes as boas práticas, automaticamente a avaliação do fluxo será modificada, conforme apresentado abaixo:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fluxo_nota_10.jpg)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fluxo_100_okjpg.jpg)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/avaliacao_total.jpg)

Segue abaixo a pontuação da avaliação:

Caso Parâmetros de entrada não utilizados o valor descontado será 0;

   * Apenas sinaliza e não desconta nada

1. Caso haja Variáveis que não estejam sendo utilizadas o valor subtraído será 5.0;

2. Alinhamento dos objetos: Caso os objetos estejam desalinhados o valor total será subtraido por 0.5

3. Caso os objetos do fluxo não possuam Documentação o valor descontado será 10.0

4. Quantidade de funções no montador de expressões

Caso haja entre 7 e 9 funções na mesma expressão o valor subtraído  será de 0.5;

Caso haja entre 10 e 12 funções na mesma expressão o valor subtraído  será de 1.0;

Caso haja entre 13 e 15 funções na mesma expressão o valor subtraído  será de 1.5;

Caso haja mais de 15 funções na mesma expressão o valor subtraído será de  2.0;

5. Caso haja Funções fora da camada o valor subtraído será de 10.0

6. Quantidade de decisões

Caso haja entre 10 e 12 objetos  o valor subtraído será de 0.5;

Caso haja entre 13 e 15 objetos  o valor subtraído será 1.5;

Caso seja Acima  de 15 o valor subtraído será de 2.0;

7. Quantidade de elementos desconectados

Caso haja elementos desconectados o valor subtraído será de1.0;

8. Objetos sem expressão

Casos haja objetos vazios o valor subtraído será de 10.0;

9. Variáveis sem atribuição

Caso haja objetos sem atribuição o valor subtraído será de 10.0;

10. Quantidade de objetos no fluxo

Caso haja 21 a 30 objetos   o cálculo de avaliação será feita da seguinte forma  ( (X - 20) * 0.3 )

Caso haja mais de 30 será de 3

## Novos atalhos

Crie formulários ou fluxos a partir da área de trabalho

Para Melhorar

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/area_de_trabalho_novo.jpg)

Acesso às funcionalidades do Maker com apenas um clique

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/acessibilidade.jpg)

Ligação de objetos, no editor de fluxos, com **CTRL + CLIQUE**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ctrl_clique.png)

Atalhos no Montador de Expressão

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/montador_1.jpg)

1. **ENTER**: Abre o menu flutuante para acesso às variáveis, fluxos e funções que serão utilizadas na expressão;
2. **CTRL + S**: Salva a expressão e fecha o montador de expressão;
3. **ESC**: Fecha o menu flutuante ou o montador de expressões;
4. **CTRL+PAGE DOWN e CTRL + PAGE UP** : Navega entre os parâmetros da função, abrindo o editor com o tipo do parâmetro selecionado;
5. **F2**: Com ele é possível editar o nó da árvore do montador de expressão;
6. Ao posicionar o mouse sobre um elemento é apresentado o botão para inserir e remover parâmetros;
7. Ao posicionar o mouse sobre um elemento que é parâmetro de uma função de multiplos parâmetros é apresentado dois botões para inserir e outro para removê-lo;
8. Agora é possível realizar o drag and drop dos elementos de mesmo nível;
9. Com os novos botões é possível rotacionar a expressão em horizontal e vertical;
10. Ao posicionar o mouse sobre qualquer elemento é apresentado dois botões, copiar e colar;
11. Na árvore de fluxos e funções ao pressionar seta para cima e para baixo é possível navegar entre os elementos;
12. Na árvore de fluxos e funções ao pressionar as setas para direita e esquerda,+ ou -, abre e fecha a categoria selecionada.

## Compartilhamento de formulários

O compartilhamento de formulários tem como finalidade reaproveitar um ou mais formulários de um projeto (na mesma base) para outros projetos na mesma base. Desta forma, a manutenção do formulário será realizada apenas uma vez e todos os outros projetos terão a alteração replicada automaticamente. Crie um template único para todos os seus sistemas na mesma base e compartilhe os formulários entre os sistemas, isso facilitará no desenvolvimento de novos sistemas e baseado em reuso de software você poderá aproveitar suas telas mais complexas desenvolvidos em outros sistemas Maker, tendo ainda mais produtividade no desenvolvimento de suas soluções.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/repositorio.png)

## Redirecionamento automático para página de login ao expirar a sessão

Com o novo parâmetro RedirecionarAoExpirar, é possível redirecionar para a página de login automaticamente quando a sessão do usuário expirar. Aproveite esta nova praticidade do Maker 3.6 e experimente em suas aplicações essa nova funcionalidade.

## Suporte a ambientes x64 para o Leitor Biométrico

Com os novos drivers que suportam a arquitetura 64 bits, é possível utilizar a biometria nativa do Maker em suas aplicações independente de qual arquitetura seja utilizada, seja ela 32 ou 64 bits, assim seus sistemas poderão evoluir ainda mais no que diz respeito a segurança da informação.

## Suporte a filtros dinâmicos nos componentes do Maker 3

Com o Maker 3.6 é possível criar dinamicamente a maioria dos componente da categoria Maker 3, agregando mais liberdade para que o desenvolvedor Maker possa criar os componentes conforme sua necessidade. Além disso, suporte a filtros dinâmicos também foram adicionados e filtros como "Variável de sessão", "Componente" e "Outros" poderão ser utilizados dando ainda mais versatilidade e inovação para as suas regras. Atenda à necessidade do seu cliente cada vez mais assertivamente com os novos filtros de componentes Maker.

## Botão minimizar para os formulários flutuantes

Implementado o botão de minimizar para formulários flutuantes, onde os mesmos ficam agrupados na parte inferior do formulário principal.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/minimizados.JPG)

## Abrir formulários em aba a partir do menu

Possibilidade de abrir os formulários através do menu, utilizando o componente aba, havendo maior controle de todos os formulários abertos.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/abas.JPG)

- [Utilizando o Menu com Abas](novidades/menuaba)

## Busca na estrutura do componente Menu

Com a finalidade de melhorar a usabilidade e facilitar a manutenção do menu, foi implementado a busca para os formulários, fluxos e relatórios na versão 3.6 do Maker. Para acessar essa funcionalidade, basta acessar a Estrutura do Menu que se localiza no componente Menu do formulário principal do projeto.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/MenuBusca.png)

Realizando uma busca na estrutura do menu

Para realizar a pesquisa basta acessar a Estrutura do Menu, acima da árvore à direita haverá uma caixa de texto para realização da Busca. Ao realizar a pesquisa de um determinar objeto (formulário, fluxo ou relatório), é feito um filtro (do tipo contendo) a partir da palavra que é formada.

Observe na imagem abaixo o uso da busca em um sistema com diversos formulários:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/BuscaMenuSistema.png)
Opção de Busca no componente Menu

## Atualização do Assistente SQL

Para facilitar a utilização do Join no Assistente SQL, foi implementado a adição de objetos vínculados à tabela, que permite criar um Join de uma tabela para outra, sendo que ambas precisam ter vínculo entre si.

#### **Observe nas imagens abaixo como utilizar o Add Linked Object:**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/AssistenteSqlLink.png)

Observe nessa imagem que ao clicar na tabela, a opção da âncora (localizada na parte superior direita da tabela) permite escolher outra tabela que possua vínculo com a mesma. Após selecionar uma das opções, a tabela escolhida será aberta com o Join setado, conforme imagem abaixo.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/AssistenteSqlLinkJoin.png)

## Atualização do JasperReports

Atualização da biblioteca JasperReports da versão 3.1.2 para a versão 5.6.1. Desta forma, os relatórios desenvolvidos com o JasperStudio serão suportados. Além disso, uma nova função criada Jasper - Gerar Relatório, facilita ainda mais esta integração. Consulte a documentação da função para mais detalhes.

## Novas funções

Função Upload

Função Upload Múltiplos Arquivos

Função Contrair Elemento

Função Obter Elemento Html a partir do Nó

Função Abrir Conexão Postgres Definindo Porta

Função Altera Cor da Fonte e do Fundo do Componente

Função Alterar Cursor do Componente

Função Alterar Hint do Componente

Função Alterar tamanho da fonte do componente

Função Associar Componente a uma Moldura

Função Botão - Alterar Imagem

Função Imagem - Novo

Função Alterar Conteúdo da MOldura

Função Alterar Posição da Barra de Rolagem X

Função Alterar Posição da Barra de Rolagem Y

Função Exibir/Ocultar Barra de Rolagem

Função Moldura - Obter Posição da Barra de Rolagem X

Função Moldura - obter Posição da Barra de Rolagem Y

Função Moldura - Remover Componentes da Moldura

Função Remover Seleção do Componente

Função Texto Estático - Novo

Função Texto Longo - Novo

Função Definir Permissões do Componente

Função Definir Permissões do Menu

Função Definir Permissões do Relatório

Função Definir Permissões do Formulário

Função Binário para Base 64 - atualização

Função Binário para Base 64 - atualização

Função Alterar tamanho do formulário

Função Asssociar Evento ao Formulário

Função Mudar Cor de Fundo da DIV

Função Obter Altura do Formulário

Função OBter GUID do Formulário Atual

Função Desabilitar Componente Grade

Função Grade - Ir Para Página

Função Obter Posição Atual da Paginação

Função CSS - Definir Propriedade

Função CSS - Obter propriedade

Função CSS - Remover Propriedade

Função HTML - Anexar Elemento

Função HTML - Associar Fluxo ao Evento do Elemento

Função HTML - Cria Elemento

Função HTML - Definir atributo a um Elemento

Função HTML - Definir conteúdo do ELemento

Função HTML - Obter Atributo do Elemento

Função HTML - Obter Componente Maker

Função HTML - Obter Conteúdo do Elemento

Função HTML - Obter Elemento pelo ID

Função HTML - Obter Filhos de um Elemento

Função HTML - Obter Pai do Elemento

Função HTML - Remover Evento do Elemento

Função HTML - REMover FIlho de um Elemento

Função Obter Objeto da Lista sem validação da Posição

Função Caixa de Dialogo de Confirmação com personalização

Função Ler código de barras ou QRCode

Função Mapeamento - Existe Chave?

Função Mapeamento - Obter Chave na posição

**Multimídia - Reproduzir**

**Multimídia - Recarregar**

Função Incluir Dados Registro Corrente(+) Assíncrono

Função Incluir Dados Registro Corrente Assíncrono

Função Tabela - Alterar cor da Linha ou Célula

Função Tabela - Alterar estilo do elemento

Função Tabela - Alterar valor da Celula

Função Tabela - Alterar Valor da Linha

Função Tabela - Exibir Linha ou Célula

Função Tabela - Exibir ou Ocultar Linha

Função Tabela - Obter Altura

Função Tabela Obter Tamanho

Função Tabela - Obter Valor da Célula

Função Quebra de Linha com Retorno

Função Abrir URL na Mesma Janela

Função Alterar Idioma

Função Alterar Modo do Sistema

Função Atualizar a coordenada do eixo X

Função Atualizar a coordenada do eixo Y

Função Autentica Usuário

Função Chamar Webservice com https para mobile

Função Definir variável local

Função Enviar Envelope Soap 1.2

Função Evento - Ao finalizar movimentação

Função Evento - Ao movimentar um componente

Função Evento - Permitir movimentação de um componente

Função Iniciar Captura Digital do Logon

Função Obter Diretórios de Skins

Função Obter Nome da Aba Ativa

Função Obter tipo de conexão de internet

Função Obter Variável de Ambiente

Função Obter variável local

Função Postar Dados

Função Recarregar Sistema

Função Redimensionar imagem

Função Sair do Sistema

Função Sigla do Sistema

Função Listar Atributos de um Elemento XML

Função XML  - Adicionar Elemento FIlho

Função XML  - Clonar Nó

Função XML - Inserir Nó

Função XML - Remover Nó

Função XML - Validar Schema

Função XPath - Obter Nós

## **Personalização da tela inicial com o proprio Maker**

Nesta versão é possível configurar todo o ambiente externo da aplicação, podendo assim ser definido os formulário de Login, Formulário de Grupo , Formulário de senha, Formulário de Log e Formulário do Serial.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tela_login_webrun.jpg)

##

##

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/m1.png)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/m3.png)

## Novos Componentes

[- Aba](maker_3/formulario/componentes/aba)
[- Ação](maker_3/formulario/componentes/acao)
[- Accordion](maker_3/formulario/componentes/accordion)
[- Calendário](#)
[- Chat](maker_3/formulario/componentes/Chat)
[- Leitor de RSS](maker_3/formulario/componentes/rss)
[- Menu](maker_3/formulario/componentes/menu)
[- Player](maker_3/formulario/componentes/player)
[- Slider](maker_3/formulario/componentes/slider)
[- Slider Panel](maker_3/formulario/componentes/sliderpainel)
[- Galeria de Imagens](maker_3/formulario/componentes/galeria_imagens)
[- Tabela](maker_3/formulario/componentes/tabela)
[- Timer](#)
[## Criando novos Componentes](maker_3/formulario/componentes/componentes)

[Topo](#top)

[## Release Notes - Changelog](novidades/releasecompleto)

[Topo](#top)

[## Menu com Aba](novidades/menuaba)

[Topo](#top)
