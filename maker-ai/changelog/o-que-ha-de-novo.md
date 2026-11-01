---
title: "✨ O que há de novo! - 6.1.0.26"
source_url: "https://manual.softwell.com.br/changelog/o-que-ha-de-novo"
---

Confira os principais destaques de **novas funcionalidades** da IDE **Maker No-Code AI**, sempre organizados pela versão mais recente. Para a lista completa de mudanças e correções, consulte o release note da versão.

Novidades da versão6.1.0.2601 de julho de 2026

[Ver release note completo →](v6-1-0-26)

## ⭐ Destaques

🌐 WebrunChange 15415

### Autenticação com biometria facial

Login por reconhecimento facial, com container de botões de acesso atualizado nos templates.

🌐 WebrunChange 15514

### Tecnologia Kafka no Webrun

Implementação do *Apache Kafka* para mensageria no Webrun.

🌐 WebrunChange 15561

### Novo componente Preview

Exibição somente leitura de dados em tabela, com paginação, busca e suporte a imagens (SQL, JSON ou preenchimento via fluxograma).

🌐 WebrunChange 15492

### MultiSelect renovado

Busca textual, selecionar/desselecionar todos e valores exibidos em *badges* removíveis.

[Saiba mais →](../docs/maker/componentes/multiselect)

🌐 WebrunChange 15535

### Temas por usuário e por sistema

Seletor *Pessoal* / *Sistema* no *Master Skin*, com permissões diferenciadas para administradores.

🌐 WebrunChange 15572

### Barra de Navegação do CRUD personalizável

Cinco estilos de barra de navegação: *padrão*, *flutuante*, *dropdown*, *dock* esquerdo e *dock* direito, definíveis por formulário ou no sistema.

## 🤖Assistentes (IA)

📝 MakerChange 15627

### Histórico de chat persistente

O *Assistente de Sistema* passa a manter o histórico de conversa entre sessões.

📝 MakerChange 15515

### Sugestões de fluxogramas por IA

Novo item no menu de contexto (botão direito) para gerar sugestões de fluxogramas para os eventos do formulário.

📝 MakerChange 15511

### Sugestões de componentes por IA

Sugestões de componentes (botão direito) geradas com base no contexto do projeto.

📝 MakerChange 15516Change 15555

### Preencher dicas no Maker AI

Reimplementação da opção de *preencher dicas* e melhor design das sugestões de eventos.

📝 MakerChange 15489

### Consultas com alias automático

A geração automática de consultas via IA aplica *alias* a colunas com nomes duplicados, usando o dicionário de dados na montagem dos *JOINs*.

## 🧩Componentes

🌐 WebrunChange 15561

### Componente Preview

Tabela somente leitura com paginação, busca e suporte a imagens.

🌐 WebrunChange 15492

### MultiSelect renovado

Busca, selecionar todos e *badges* removíveis.

[Saiba mais →](../docs/maker/componentes/multiselect)

🌐 WebrunChange 15469

### CNPJ alfanumérico

Nova formatação e validação de CNPJ alfanumérico, conforme o padrão de 2026.

📝 MakerChange 15533

### Anexar ao container ao arrastar

Ao arrastar um componente sobre um container, o Maker o anexa automaticamente ao container.

## 📄Formulários

🌐 WebrunChange 15572

### Barra de Navegação do CRUD personalizável

A propriedade *Estilo da Barra de Navegação* pode ser definida por formulário ou no sistema, com cinco estilos disponíveis.

📝 MakerChange 15490

### Recarregar propriedades ao Salvar Tudo

(*Maker Web*) Recarregamento das propriedades e eventos da área de trabalho ao usar *Salvar Tudo*.

## 🔒Core e Segurança

🌐 WebrunChange 15415

### Autenticação com biometria facial

Implementação de login por reconhecimento facial.

🌐 WebrunChange 15514

### Tecnologia Kafka

Implementação do *Apache Kafka* para mensageria no Webrun.

🌐 WebrunChange 15686

### Tema visual padrão (claro/escuro)

Definição do tema padrão do Webrun para usuários que ainda não escolheram um tema, com configuração global e por sistema.

[Saiba mais →](../docs/webrun/tela_de_configuracoes/Parametros_de_configuracao/parametro_de_configuracao_tema_padrao)

🌐 WebrunChange 15605Change 15640

### Login modernizado e persistência de idioma

Modernização do formulário de login padrão e persistência do idioma ao fechar e reabrir o navegador.

🌐 WebrunChange 15684

### Evento pagehide no lugar do unload

Atualização do encerramento de sessão e da saída de formulários, acompanhando a modernização dos navegadores *Chromium*.

[Saiba mais →](../docs/webrun/evento_pagehide_unload)

## 🎨Master Skin, Skins e Templates

🌐 WebrunChange 15535

### Temas personalizados por usuário e sistema

Seletor *Pessoal* / *Sistema* no *Master Skin*, com permissões diferenciadas para administradores.

📝 MakerChange 15579Change 15621Change 15622

### Novas animações e templates atualizados

Novas animações de entrada nas telas de login e atualização final do template *Urano*.

## 🔎Aba Localizar

🌐 Webrun📝 MakerChange 15334Change 15465

### Carregamento de campo lista e InnerJoin

Suporte ao carregamento do campo lista nos componentes *Lista Simples* e *Lista Dinâmica*, além de suporte a *InnerJoin*.

[Saiba mais →](../docs/webrun/aba_localizar)

🌐 WebrunChange 15691Change 15721

### Filtros e usabilidade

*Spinner* de carregamento ao aplicar filtros e reimplementação dos filtros específicos por coluna.

## 🗂️Log de Acesso

🌐 WebrunChange 15726Change 15569Change 15666

### Auditoria ampliada e redesign

O Log de Acesso passa a registrar consulta de registros e ativação de abas, com novo design, log de filtros e geração de relatórios.

[Saiba mais →](../docs/webrun/log_de_acesso)

## ⚙️Produtividade e Infraestrutura

🌐 WebrunChange 15487

### Fluxos Web no painel administrativo

Nova tela *Fluxos Web* para visualização de fluxos web e parâmetros por sistema.

🌐 WebrunChange 15685

### Gerenciamento de memória em fluxo servidor

Liberação automática de parâmetros e variáveis de *fluxo servidor* ao finalizar a execução de regras.

📝 MakerChange 15725Change 15367Change 15564

### Melhorias no Maker

Performance em projetos remotos, novos atalhos favoritos no menu e lista lateral de tabelas maior no *Assistente SQL*.

📝 Maker🌐 WebrunChange 15679Change 15611

### Banco de Dados e PWA

MySQL atualizado para os drivers 8.4.0 e novo ícone do botão de instalação do PWA.

---

## 📞 Suporte

Precisa de ajuda? Contacte-nos:

- **Portal de Suporte**: [suporte.softwell.com.br](https://suporte.softwell.com.br)
- **Email**: [[email protected]](https://manual.softwell.com.br/cdn-cgi/l/email-protection)
- **Base de Conhecimento**: [baseconhecimento.softwell.com.br](https://baseconhecimento.softwell.com.br)
