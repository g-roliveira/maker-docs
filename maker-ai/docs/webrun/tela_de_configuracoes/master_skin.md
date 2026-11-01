---
title: "MasterSkin"
source_url: "https://manual.softwell.com.br/docs/webrun/tela_de_configuracoes/master_skin"
---

O **MasterSkin** é a solução de personalização visual para sistemas desenvolvidos dentro da plataforma Maker, a partir da personalização das propriedades nativas do framework Bootstrap. Focado em agilidade, padronização e controle, ele permite configurar toda a identidade visual de uma aplicação de forma centralizada e segura, sem a necessidade de editar diretamente o código fonte.

Com uma interface prática, recursos modulares e integração com os componentes reais da aplicação, o MasterSkin facilita a criação de temas consistentes e responsivos para projetos de diferentes naturezas e complexidades.

![Tela do MasterSkin](https://manual.softwell.com.br/assets/images/master_skin_por_usuario-49b193c2e62bf5efd676a28b81983411.png)

> **Seu sistema, sua identidade — com consistência, velocidade e liberdade.**

### Principais Benefícios

A nova versão traz um conjunto de melhorias significativas em eficiência e controle visual, com destaque para:

- **Personalização por usuário e por sistema**, com seletor de escopo na interface do Master Skin
- Introdução de um assistente inteligente com comandos em linguagem natural
- Possibilidade de aplicar múltiplas instruções visuais de forma simultânea
- Reformulação da galeria de temas com foco em contraste e acessibilidade
- Validação aprimorada de regras no módulo de CSS adicional
- Maior integração com a estrutura real dos sistemas desenvolvidos
- Registro e rastreabilidade das alterações aplicadas

Essas mudanças oferecem mais controle para as equipes técnicas e reduzem o retrabalho associado à personalização de interfaces.

### Personalização por usuário e por sistema

Além do tema global da aplicação, o Master Skin permite definir customizações visuais em **dois escopos independentes**:

| Escopo | Aba na interface | Quem é afetado |
| --- | --- | --- |
| **Pessoal** | `Pessoal` | Apenas o usuário selecionado no seletor |
| **Sistema** | `Sistema` | Todos os usuários que não possuem tema pessoal salvo |

No topo da interface, os botões **Pessoal** e **Sistema** definem qual escopo está sendo editado:

- **Pessoal** — customiza o tema de um usuário específico. Um menu suspenso lista os usuários do sistema e a mensagem *Editando usuário [nome]* confirma qual conta está em edição.
- **Sistema** — customiza o tema padrão da aplicação, aplicado a quem não possui tema pessoal salvo.

> Administradores veem o seletor de usuários ao escolher **Pessoal**. Usuários comuns, ao abrir o Master Skin, editam automaticamente o próprio tema — o seletor de usuários não é exibido.

#### Tema do sistema

O tema do **Sistema** representa a identidade visual padrão da aplicação. As alterações feitas neste escopo são aplicadas a todos os usuários que ainda não salvaram um tema pessoal.

- Geralmente configurado por administradores ou desenvolvedores com acesso à Tela de Configurações
- O arquivo gerado segue a nomenclatura `custom_sigladosistema.css`
- Serve como base visual para novos usuários e como *fallback* quando não há customização individual

#### Tema pessoal

O tema **Pessoal** permite que cada usuário do sistema tenha sua própria aparência visual, independentemente do tema global.

- O usuário logado pode personalizar o **próprio** tema pelo Master Skin, sem depender de um administrador
- Administradores podem selecionar qualquer usuário no menu suspenso e editar o tema em nome dele — útil para padronizar a experiência de perfis específicos ou para suporte
- As alterações são salvas individualmente e carregadas automaticamente no próximo acesso daquele usuário

> A partir da versão 6.1.0.26, os templates do sistema também permitem que usuários **não administradores** acessem o Master Skin para personalizar o próprio tema.

#### Prioridade de aplicação

Quando o usuário faz login, o Webrun resolve o tema na seguinte ordem:

1. **Tema pessoal** do usuário logado (se existir)
2. **Tema do sistema** (customização global)
3. **Tema padrão** do Webrun (*claro* ou *escuro*), conforme a [configuração de `TemaPadrao`](Parametros_de_configuracao/parametro_de_configuracao_tema_padrao)

A preferência de tema claro/escuro escolhida manualmente pelo usuário no painel continua prevalecendo sobre as configurações do servidor.

#### Como personalizar

**Administrador** (editar tema de qualquer usuário ou do sistema):

1. Acesse o Master Skin pela [Tela de Configurações](tela_configuracoes) ou pelo menu do sistema
2. Escolha **Sistema** para o tema global, ou **Pessoal** para um usuário específico
3. Se escolheu **Pessoal**, selecione o usuário no menu suspenso
4. Ajuste cores, componentes, formulários, templates ou CSS adicional
5. Clique em **Salvar**

**Usuário final** (personalizar apenas o próprio tema):

1. Acesse o Master Skin pelo menu do sistema
2. A aba **Pessoal** já estará selecionada para o usuário logado
3. Faça os ajustes desejados e clique em **Salvar**

Para remover uma customização individual, selecione o usuário em **Pessoal** e use **Deletar** — ele passará a visualizar o tema do **Sistema**.

### Master Skin Assistant

O **Master Skin Assistant** interpreta comandos de personalização visual em linguagem natural e aplica alterações no escopo ativo — **Pessoal** ou **Sistema**.

#### Funcionalidades

![Escopo e Assistente do Master Skin](https://manual.softwell.com.br/assets/images/master_skin_escopo_assistente-e3ed43d22a02812a39a7f64d06226107.png)

- Compreensão em linguagem natural
- Aplicação simultânea de múltiplas alterações visuais
- Escolha do escopo (**Pessoal** ou **Sistema**) antes de enviar o comando
- Opção **Criar ambos os temas** para gerar as customizações nos dois escopos de uma vez
- Ajustes contextuais com base na estrutura do sistema
- Integração com o preview do sistema para validação imediata

#### Etapas de Uso

![Master Skin Assistant](https://manual.softwell.com.br/assets/images/ms_2-d664790b9a8a269b113b2ee1572d3a83.gif)

1. Acesse o assistente pela interface do MasterSkin
2. Selecione o escopo: **Pessoal** (usuário) ou **Sistema** (global)
3. Digite o comando de personalização desejado
4. Marque as opções desejadas: **Substituir alterações existentes**, **Salvar automaticamente** e/ou **Criar ambos os temas**
5. Envie com **Shift + Enter** e visualize as mudanças no preview

Esse recurso é indicado para alterações rápidas com alto nível de controle semântico, reduzindo o tempo de configuração manual.

### CSS Adicional

O módulo de **CSS Adicional** permite a inserção de regras manuais e customizações de CSS para ajustes finos de estilo, ideal para situações que exigem controle total por parte do desenvolvedor ou analista.

![Acesso ao Assistente](https://manual.softwell.com.br/assets/images/ms_2-65a7f3eebc62fd987207f77f7c7bdaef.png)

#### Funcionalidades

- Edição centralizada de regras CSS com escopo global ou seletivo
- Modificação direta pela plataforma, sem necessária utilização dos arquivos locais
- Validação visual das alterações antes da aplicação
- Integração direta com o tema ativo

Esse módulo opera de forma independente do assistente e é voltado a usuários que desejam realizar intervenções específicas, com total liberdade sobre o comportamento visual do sistema.

### Temas Prontos

A galeria de **Temas Prontos** foi ampliada e reorganizada com foco em padrões visuais aplicáveis a diferentes tipos de projetos. Os temas foram desenhados para garantir consistência, legibilidade e adaptação automática a diferentes tamanhos de tela.

![Acesso ao Assistente](https://manual.softwell.com.br/assets/images/ms_3-7e492b1bf6d120034785ccbdeaea7c7f.png)

#### Características

- Paletas otimizadas para acessibilidade e contraste (WCAG)
- Layouts modernos e responsivos
- Compatibilidade com todos os componentes nativos da plataforma
- Aplicação imediata com visualização antes da confirmação
- Possibilidade de clonagem e edição de temas existentes

Os temas prontos são recomendados para projetos que exigem padronização visual rápida ou como ponto de partida para customizações mais detalhadas.

#### Novas Propriedades Visuais

A nova versão do **MasterSkin** expande significativamente o conjunto de propriedades visuais disponíveis, permitindo personalizações ainda mais refinadas e alinhadas com as demandas modernas de interface.

Essas propriedades oferecem controle granular sobre elementos visuais específicos da plataforma Maker, garantindo que cada detalhe do sistema esteja em conformidade com a identidade visual do projeto.

### Destaques das Novas Propriedades

- **Cores de janelas flutuantes (modais)**
  Personalização completa de fundo, bordas, títulos e botões de ação nas janelas sobrepostas.
- **Cores das abas (tabs)**
  Definição de cores distintas para abas ativas, inativas e hover, com suporte a transições suaves e responsividade.
- **Sombras e elevações (elevation)**
  Ajustes de profundidade com controle sobre intensidade e direção das sombras, aplicáveis a painéis, cards, modais e menus.
- **Bordas e arredondamentos avançados**

## Benefícios Estratégicos

| Benefício | Descrição |
| --- | --- |
| ⏱️ Agilidade | Redução significativa no tempo de customização visual |
| 🎨 Consistência | Aplicação de padrões visuais reutilizáveis |
| 🔧 Controle | Módulo de CSS adicional com validação visual |
| 🤖 Autonomia | Assistente inteligente reduz dependência técnica |

Esses benefícios impactam diretamente o fluxo de trabalho das equipes de desenvolvimento, design e produto, tornando o processo de personalização mais previsível e eficiente.

---

## Conheça

[Assistir vídeo](https://manual.softwell.com.br/videos/masterskin.mp4)

## Conclusão

O **MasterSkin** evolui como uma ferramenta completa para gestão visual de sistemas desenvolvidos com o Maker. Com a adição de um assistente inteligente, reorganização dos temas e aprimoramento das ferramentas manuais, a nova versão oferece um equilíbrio entre automação, controle e flexibilidade.

A personalização visual torna-se uma etapa integrada, segura e rápida — com recursos pensados para a realidade de equipes técnicas que precisam entregar com qualidade e agilidade.
