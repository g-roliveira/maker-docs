---
title: "Formulários Nativos - Login e Principal"
source_url: "https://manual.softwell.com.br/docs/webrun/formularios_nativos_login_principal"
---

Quando nenhum formulário customizado de login ou principal é definido na Área de Trabalho do Maker, o Webrun exibe suas **telas nativas**. Essas telas são prontas para uso e não exigem nenhuma configuração adicional para que o sistema funcione.

---

## Quando as telas nativas são utilizadas

O sistema decide automaticamente qual tela exibir com base nas propriedades configuradas na Área de Trabalho do Maker:

| Situação | O que o usuário vê |
| --- | --- |
| **Formulário de Login** não definido | Tela nativa de login |
| **Formulário Principal** não definido | Tela nativa principal |
| Formulários definidos nas respectivas propriedades | Formulários personalizados do projeto |

> Se você está criando um novo sistema e ainda não definiu formulários de login ou principal na Área de Trabalho, o Webrun já funciona com as telas nativas — basta cadastrar o sistema e um usuário.

---

## Como configurar no Maker

As propriedades ficam na **Área de Trabalho** do Maker. Clique com o botão direito no plano de fundo do projeto para abri-las:

| Propriedade | Função |
| --- | --- |
| **Formulário de Login** | Define qual formulário será a tela de entrada do sistema. Se vazio, usa a tela nativa. |
| **Formulário Principal** | Define qual formulário será a área de trabalho após o login. Se vazio, usa a tela nativa. |

### Como o menu é montado

O menu lateral da tela principal nativa é construído automaticamente a partir da estrutura de **Menus** definida na Área de Trabalho do Maker.

Para que um formulário ou relatório apareça no menu:

1. Acesse **Área de Trabalho → botão direito → Menus**.
2. Ative o menu do sistema e organize a estrutura com pastas (submenus), formulários e relatórios.
3. Associe cada item de menu ao formulário ou relatório desejado.

Itens sem menu associado **não aparecem** na tela principal nativa, mas continuam acessíveis pelo Maker e por chamadas diretas no código.

#### Onde fica o menu no Maker

No editor do Maker, a barra de menus do sistema fica na parte superior da área de edição, logo abaixo da barra de ferramentas principal. É por ali que você acessa e edita a estrutura de menus do projeto:

![Localização do menu no editor do Maker](https://manual.softwell.com.br/assets/images/editor_menu_legado-7959e0b774b26411668da4fd3cb9a658.png)

#### Demonstração: ativar o menu e inserir itens

O vídeo abaixo mostra como ativar o menu do sistema, criar submenus (pastas) e associar formulários à estrutura:

[Assistir vídeo](https://manual.softwell.com.br/videos/demonstracao_ativacao_menu_nativo.mp4)

---

## Tela de Login

A tela nativa de login é a primeira interface que o usuário vê ao acessar o sistema.

![Tela nativa de login](https://manual.softwell.com.br/assets/images/tela_login_nativa-531999a106d8f51f9feb35b12c35aaa9.png)

### Estrutura

A tela é dividida em duas áreas:

- **Lado esquerdo** — formulário de autenticação com:

  - Logo do sistema (ou logo padrão do Webrun, se nenhum ícone estiver definido)
  - Nome do sistema
  - Campo de usuário
  - Campo de senha (com botão para exibir/ocultar)
  - Botão de entrada
- **Lado direito** (visível apenas em telas grandes) — área decorativa com a logo do sistema e efeitos visuais animados.

### Recursos

- **Tema visual** — respeita a propriedade [TemaPadrao](tela_de_configuracoes/Parametros_de_configuracao/parametro_de_configuracao_tema_padrao) (claro ou escuro).
- **Responsividade** — em dispositivos móveis, o lado direito é ocultado e o formulário ocupa toda a tela.
- **PWA** — se o módulo PWA estiver ativo, um banner de instalação é exibido automaticamente na primeira visita.
- **ReCaptcha** — se configurado nos Parâmetros de Configuração, o Google reCAPTCHA é ativado automaticamente.
- **Autenticação integrada (NTLM)** — se a propriedade avançada `AutenticacaoIntegrada` estiver ativa, o login é redirecionado automaticamente para autenticação Windows, sem exibir o formulário.
- **Ícone e título** — exibe o ícone e o nome do sistema conforme configurados na Área de Trabalho (propriedades **Ícone da Aplicação** e **Descrição do Sistema**).

### Personalização visual

A aparência da tela de login segue o tema ativo do [MasterSkin](tela_de_configuracoes/master_skin). Cores de fundo, botões, textos e acentos são controlados pelas variáveis Bootstrap do tema — ao alterar o tema no MasterSkin, a tela de login reflete as mudanças automaticamente, sem nenhuma edição adicional.

---

## Tela Principal

Após a autenticação, o usuário é direcionado à tela principal nativa. Ela funciona como a **área de trabalho** do sistema no Webrun, fornecendo acesso a todos os formulários e relatórios cadastrados nos menus.

![Tela nativa principal](https://manual.softwell.com.br/assets/images/tela_principal_nativa-4c2f810d2681f650623e3a33b5450052.png)

### Barra superior

| Elemento | O que faz |
| --- | --- |
| **Botão de menu** (☰) | Abre e fecha o menu lateral. Em telas pequenas, o menu fica recolhido e é aberto por este botão. |
| **Logo do sistema** | Exibe o ícone configurado na Área de Trabalho. |
| **Indicador de modo** | Quando o usuário está em modo **Desenvolvimento** ou **Gerente**, um selo colorido aparece ao lado do logo. |
| **Favoritos** (★) | Abre a janela com os atalhos favoritos do usuário. |
| **Menu do usuário** | Exibe o nome do usuário logado e as opções disponíveis (detalhadas abaixo). |

### Menu lateral

O menu lateral concentra tudo o que o usuário pode abrir no sistema:

- **Campo de busca** — filtra os itens em tempo real, ignorando acentos e diferenças de maiúsculas/minúsculas. Pressione `Esc` para voltar o foco ao campo de busca.
- **Pastas** — agrupam formulários e relatórios. Clique para expandir ou recolher.
- **Formulários** — identificados pelo ícone de documento.
- **Relatórios** — identificados pelo ícone de gráfico.
- **Estrela de favorito** — ao passar o mouse sobre um item, uma estrela aparece para marcá-lo como favorito.
- **Separadores** — linhas visuais entre grupos de itens, conforme definido nos Menus do Maker.

#### Navegação pelo teclado

| Tecla | Ação |
| --- | --- |
| `↑` `↓` | Navega entre os itens do menu |
| `Enter` | Abre o formulário ou relatório selecionado |
| `Espaço` | Expande ou recolhe uma pasta |
| `Home` / `End` | Vai para o primeiro ou último item visível |
| `Esc` | Retorna o foco ao campo de busca |

Ao selecionar um item, o formulário é aberto na **área de conteúdo** central. Em telas pequenas, o menu lateral se fecha automaticamente após a seleção.

### Área de conteúdo

É nesta área que os formulários do sistema são exibidos. Quando nenhum formulário está aberto, a área fica vazia — ou exibe a **imagem de fundo**, se ela estiver configurada na Área de Trabalho.

### Favoritos

O usuário pode marcar formulários e relatórios como favoritos clicando na **estrela** ao lado de cada item do menu. Os favoritos são **salvos individualmente** para cada usuário.

Para acessar os favoritos:

1. Clique no botão de **estrela** na barra superior.
2. Uma janela exibe todos os atalhos marcados em formato de grade.
3. Clique em qualquer atalho para abrir o formulário ou relatório correspondente.

Se nenhum favorito foi definido, a janela orienta o usuário a clicar na estrela ao lado de um item do menu.

### Menu do usuário

As opções do menu do usuário variam conforme o nível de acesso:

**Usuário comum:**

- **MasterSkin** — personalização visual do sistema
- **Alterar senha**
- **Sair**

**Gerente / Desenvolvedor (acesso ampliado):**

- **Permissões de acesso** — Usuários, Grupos de usuários
- **Modo de trabalho** — alternar entre Modo Normal, Modo Gerente e Modo Desenvolvimento
- **Sistema** — Recarregar sistema, MasterSkin, Listagem, Verificação do sistema, Conexões adicionais, Assistente de regras, Log de acesso, Alterar senha
- **Sair**

No **Modo Gerente**, ícones de chave aparecem ao lado dos itens do menu, permitindo editar as permissões de acesso de cada item. Para mais detalhes, consulte [Trabalhando no Modo Gerente](trabalhando_modo_gerente).

### Recursos automáticos

| Situação | Comportamento |
| --- | --- |
| **Sessão ativa** | A conexão com o servidor é mantida automaticamente enquanto o usuário utiliza o sistema. |
| **Sessão expirada** | Uma mensagem de aviso é exibida com opção de voltar à tela de login. Dependendo da configuração do servidor, o redirecionamento pode ocorrer automaticamente após alguns segundos. |
| **Retorno pelo botão Voltar do navegador** | Se o usuário sair do sistema e voltar com o botão Voltar, é redirecionado ao login em vez de ver a tela principal com sessão expirada. |
| **Perda de conexão** | Uma sobreposição informa que o sistema está offline. Ao reconectar, a tela volta ao normal. |
| **Tema visual** | Respeita o tema padrão do sistema e a preferência individual do usuário (salva no navegador). |
| **Regras do sistema** | Os eventos **Ao Entrar** e **Ao Sair**, definidos na Área de Trabalho, são executados automaticamente ao acessar e ao sair do sistema. |
