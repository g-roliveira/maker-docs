---
title: "Evento pagehide e encerramento de sessão"
source_url: "https://manual.softwell.com.br/docs/webrun/evento_pagehide_unload"
---

Esta página explica a mudança adotada pelos navegadores modernos e como ela afeta o **Webrun** no dia a dia: encerramento de sessão, recarregamento da página (F5) e regras do **Maker**.

A primeira parte traz o **contexto técnico** para quem desenvolve ou mantém sistemas. A segunda descreve o **comportamento prático da sessão** — útil tanto para usuários quanto para quem configura regras no Maker.

---

## Parte 1 — Contexto técnico

### O que mudou nos navegadores?

Os navegadores baseados em **Chromium** (Chrome, Edge e outros) estão **descontinuando o suporte ao evento `unload`**, usado tradicionalmente para detectar quando o usuário sai ou fecha uma página.

Esse evento passou a ser considerado **pouco confiável**: pode deixar de ser disparado em alguns cenários (dispositivos móveis, cache do navegador) e ainda prejudica a performance. O substituto recomendado é o evento **`pagehide`**.

Para acompanhar essa evolução, o **Webrun passou a utilizar `pagehide`** no lugar de `unload` nas rotinas de encerramento de formulários, sistemas e componentes.

### Preciso fazer alguma alteração?

**Na maioria dos casos, não.** Sistemas que utilizam apenas os recursos nativos do Webrun — como eventos de saída de formulário (**OnUnLoad**) e encerramento de sistema — continuam funcionando normalmente, sem necessidade de ajuste.

---

## Parte 2 — Comportamento da sessão

Quando o usuário sai da página do sistema (F5, fechar aba ou navegar para outro endereço), o Webrun avisa o servidor. O encerramento **não é imediato**: o servidor aguarda **5 segundos** antes de encerrar a sessão daquele sistema.

### O que acontece em cada situação?

| Situação | Sessão | Observação |
| --- | --- | --- |
| **F5 / recarregar a página** | **Permanece** | A nova carga da página cancela o aviso de encerramento em até 5 segundos. |
| **Navegação interna no Webrun** (outro formulário, menu etc.) | **Permanece** | O usuário continua dentro do mesmo sistema. |
| **Fechar aba ou sair para outro site** | **Encerrada após 5 segundos** | Nenhuma nova instância da página cancela o encerramento. Novo acesso exige login. |
| **Logout explícito ("Sair")** | **Encerrada na hora** | Sem aguardar os 5 segundos. |

### Impacto nas regras do Maker

O encerramento opera em **dois níveis**: a página do sistema (controle de sessão) e cada formulário (limpeza e regras do cliente).

| Regra | Quando executa | No F5 |
| --- | --- | --- |
| **"Ao Sair"** (regra do formulário, no cliente) | Ao sair da página ou do formulário | **Pode executar**, mas a sessão **não é encerrada** |
| **"Sessão - Definir Regra Ao Expirar"** (regra no servidor) | Somente quando o encerramento é confirmado no servidor | **Não executa** |

**Atenção ao desenvolver:** não trate a regra **"Ao Sair"** como equivalente a logout. Ela pode rodar ao recarregar a página (F5). Lógica que depende de saída definitiva — gravar status offline, encerrar processo externo etc. — deve usar **"Sessão - Definir Regra Ao Expirar"** ou o fluxo explícito de **"Sair"** do sistema.

### Operações que não encerram a sessão

Algumas ações do sistema desativam o encerramento automático antes de recarregar ou redirecionar a página. Nestes casos, **nenhum aviso de encerramento é enviado** ao servidor:

- Recarregar o sistema
- Trocar de usuário
- Alternar modo projeto / modo normal
- Recarregar menus

### Voltar / Avançar do navegador

Se a página for restaurada do cache do navegador (botões **Voltar** ou **Avançar**), o Webrun verifica se a sessão ainda está ativa. Se já tiver sido encerrada, o usuário é informado e redirecionado conforme a configuração do sistema.

### Resumo

> O F5 avisa o servidor que a página está saindo, mas a nova carga cancela esse aviso em até 5 segundos. Saída real encerra a sessão; logout explícito encerra na hora. A regra "Ao Sair" pode executar no refresh, mas não encerra a sessão — use **"Sessão - Definir Regra Ao Expirar"** para lógica de saída definitiva.

---

## Referências

- [Chrome 144 — Release notes](https://developer.chrome.com/release-notes/144?hl=pt-br)
