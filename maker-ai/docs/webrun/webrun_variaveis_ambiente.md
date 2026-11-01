---
title: "Variáveis de ambiente do Webrun"
source_url: "https://manual.softwell.com.br/docs/webrun/webrun_variaveis_ambiente"
---

Variáveis de ambiente são parâmetros do sistema operacional que armazenam informações essenciais para o funcionamento de programas, como caminhos de diretórios ou configurações específicas. Elas ajudam a definir o comportamento dos aplicativos de acordo com o ambiente em que estão executando.

A variável de ambiente `WEBRUN_HOME` é essencial para o correto funcionamento do Webrun. Ela deve ser configurada no sistema operacional, indicando o diretório onde o Webrun está instalado. Caso essa variável não esteja definida, o sistema poderá apresentar falhas ou não encontrar os arquivos necessários. Se ela não existir, o usuário precisará criá-la manualmente, fornecendo o caminho completo onde encontram-se as pastas:

- config
- systems
- reports

### Conexão com o banco de dados

A versão do `Webrun 5.0.0.41` passou a suportar a conexão de banco de dados por meio de variáveis de ambiente, permitindo maior flexibilidade e portabilidade. Isso facilita a configuração em diferentes ambientes sem a necessidade de alteração.

**Recomendamos a utilização desse recurso para ambientes de homologação e produção.**

Podemos realizar a configuração desse recurso de duas formas:

#### Definições das variáveis globais

Aplica-se para todos os sistemas que estão no contexto do Webrun.

- WEBRUN_DB_HOSTNAME
- WEBRUN_DB_PORT
- WEBRUN_DB_DATASOURCE
- WEBRUN_DB_USERNAME
- WEBRUN_DB_PASSWORD

#### Definições das variáveis por sistema

Aplica-se somente para o sistema especificado pela sigla que o corresponde.

- WEBRUN_DB_HOSTNAME_SIGLADOSISTEMA
- WEBRUN_DB_PORT_SIGLADOSISTEMA
- WEBRUN_DB_DATASOURCE_SIGLADOSISTEMA
- WEBRUN_DB_USERNAME_SIGLADOSISTEMA
- WEBRUN_DB_PASSWORD_SIGLADOSISTEMA

> Observações:
>
> - As definições das variáveis por sistema sempre terão prioridade de leitura.
> - As definições das variáveis globais são recomendadas quando o contexto do Webrun carregar um único sistema.

Exemplo:

![Webrun - Variáveis de Ambiente](https://manual.softwell.com.br/assets/images/webrun_variaveis_ambiente-44f0732d49c4904d44849fff37e5f129.png "Webrun - Variáveis de Ambiente")
