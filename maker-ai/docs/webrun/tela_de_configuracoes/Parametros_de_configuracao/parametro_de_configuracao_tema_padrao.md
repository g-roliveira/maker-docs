---
title: "Parâmetro de Configuração — Tema Padrão"
source_url: "https://manual.softwell.com.br/docs/webrun/tela_de_configuracoes/Parametros_de_configuracao/parametro_de_configuracao_tema_padrao"
---

A propriedade **TemaPadrao** define qual tema visual o sistema apresenta para o usuário ao carregar — claro (`light`) ou escuro (`dark`).

Ela é aplicada globalmente na interface: tela de login, formulários, grades, páginas de erro e demais telas do sistema.

---

**Valores aceitos**

| Valor | Resultado |
| --- | --- |
| `dark` | Tema escuro (padrão do sistema caso nenhum valor seja definido) |
| `light` | Tema claro |

Qualquer valor diferente de `light` ou `dark` é ignorado e o sistema utiliza o tema `dark`.

---

**Opção 1 — Parâmetros Avançados do Webrun (configuração global)**

No Webrun, é possível definir o tema padrão globalmente nas [Parâmetros de Configuração](parametro_de_configuracao), criando um novo grupo:

1. Acesse a [Tela de Configurações](../tela_configuracoes) do Webrun.
2. Abra **Parâmetros de Configuração**.
3. Crie um novo **Grupo** com o nome `Interface`.
4. Dentro do grupo, crie o parâmetro `TemaPadrao`.
5. Atribua o valor desejado: `light` ou `dark`.
6. Salve as alterações.

Estrutura: **Interface** → **TemaPadrao** → `light` ou `dark`.

**Opção 2 — Propriedades Avançadas do sistema (configuração por sistema)**

1. Acesse a [Tela de Configurações](../tela_configuracoes) do Webrun.
2. Vá em **Gerenciar Sistemas** e clique no ícone de configurações ao lado do sistema desejado.
3. Acesse as **Propriedades Avançadas**.
4. Adicione a propriedade `TemaPadrao` com o valor desejado (`light` ou `dark`).
5. Salve as alterações.

**Opção 3 — Parâmetro avançado do Maker (afeta apenas um sistema específico)**

1. Na [Área de Trabalho](../../../maker/propriedades_e_eventos_da_area_de_trabalho) do Maker, defina o parâmetro na propriedade "Avançado".
2. Salve todo o projeto.

> **Prioridade:** a configuração avançada do sistema (Opção 2 ou 3) tem preferência sobre o parâmetro global (Opção 1). Se nenhuma das três estiver definida, o sistema usa o tema `dark`.

---

**Preferência do usuário**

O tema escolhido pelo usuário individualmente — ao clicar no botão de alternância de tema dentro do sistema — é salvo no navegador e tem prioridade sobre a configuração do servidor. Ou seja, se o usuário já tiver alternado o tema manualmente, a preferência dele é mantida mesmo que o servidor defina outro padrão.
