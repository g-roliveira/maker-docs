---
title: "Log de Acesso"
source_url: "https://manual.softwell.com.br/docs/webrun/log_de_acesso"
---

O **Log de Acesso** é uma funcionalidade de auditoria do Webrun que registra e exibe o histórico de ações realizadas no sistema, como **login**, **logoff**, **abertura/fechamento de formulários**, **execução de relatórios**, etc.

Em alguns ambientes, o Log de Acesso também pode exibir o **detalhamento de modificações**, mostrando o que foi **incluído**, **alterado** ou **excluído** durante o uso de um formulário.

![Interface do formulário](https://manual.softwell.com.br/assets/images/interface_log_acesso-7041517ddc989c5544caa5fedb29bbfa.png)

---

## Filtros de pesquisa

| Filtro | O que faz | Exemplo |
| --- | --- | --- |
| Usuário | Mostra ações de um usuário específico. | `master` |
| Sistema | Restringe ao sistema selecionado. | `ROM` |
| Data (de / até) | Limita a consulta a um período. | `01/01/2026` a `30/06/2026` |
| Descrição | Procura por registros no banco que batam com a descrição imputada | `formulário Clientes` |
| Filtrar resultados | Campo para busca de subsequências entre os resultados mostrados na tabela | `Entrou` |

**Observações:**

- Você pode usar **um ou vários filtros ao mesmo tempo**.
- O botão **Limpar** remove os filtros preenchidos e atualiza a consulta.

---

## Modos de visualização

A área de resultados possui dois modos (selecionados no topo):

### Modo Lista

Exibe os registros em uma lista/tabela com **Data/Hora**, **Usuário**, **Sistema** e **Descrição**.

Quando o **detalhamento de modificações** estiver disponível, algumas linhas exibem um indicador de alterações e permitem **expandir** para ver os detalhes.

### Modo Agrupado

Organiza os registros por **origem** (por exemplo: um formulário ou relatório). Itens que não pertencem a um formulário específico ficam no grupo **Sistema**.

Esse modo é útil para entender “o que aconteceu” dentro de um mesmo contexto, sem misturar ações de telas diferentes.

---

## Detalhamento de modificações (quando disponível)

Quando habilitado no ambiente, o Log de Acesso mostra, além do histórico, as modificações feitas durante o uso de formulários:

- **Inclusão**: exibe os valores inseridos.
- **Alteração**: exibe **antes** e **depois** (normalmente destacando apenas o que mudou).
- **Exclusão**: exibe os valores removidos.

> Se o detalhamento não estiver disponível, você ainda terá o histórico de acessos e ações normalmente.

---

## Paginação

No rodapé dos resultados, você encontra:

- **Registros por página** (por exemplo: 25, 50, 100)
- **Página atual / total de páginas**
- **Navegação** (primeira, anterior, próxima e última)
- **Ir para página** (aparece automaticamente quando houver mais de 5 páginas)

---

## Busca rápida nos resultados

A interface disponibiliza uma **busca rápida** que filtra apenas o que já está aparecendo na lista (sem precisar refazer a pesquisa completa).

- Digite um termo para filtrar.
- Use o botão **[X]** para limpar e voltar a exibir tudo.

---

## Script de criação da tabela FR_LOG_ACCESS

```sql
CREATE TABLE fr_log_access
(
    log_id integer NOT NULL
    log_usuario character varying(30),
    log_data_hora timestamp without time zone NOT NULL,
    log_descricao character varying(500),
    log_sistema character varying(3),
    CONSTRAINT fr_log_access_pkey PRIMARY KEY (log_id),
    CONSTRAINT fr_log_access_log_id_key UNIQUE (log_id)
);

CREATE SEQUENCE fr_log_access_log_id_seq;

ALTER TABLE fr_log_accesss
    ALTER COLUMN log_id SET DEFAULT nextval('fr_log_access_log_id_seq');

ALTER SEQUENCE fr_log_access_log_id_seq
    OWNED BY fr_log_access.log_id;
```
