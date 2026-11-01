---
title: "Suporte Nativo ao Apache Kafka"
source_url: "https://manual.softwell.com.br/docs/webrun/kafka"
---

O **Apache Kafka** é uma plataforma de mensageria distribuída projetada para transmitir grandes volumes de dados em tempo real com alta disponibilidade e tolerância a falhas.

Ao contrário de um banco de dados, o Kafka funciona como um **log distribuído de eventos**: as mensagens são publicadas em **tópicos** por um **Producer**, ficam armazenadas de forma ordenada e persistente, e são lidas por um ou mais **Consumers** no seu próprio ritmo — sem que a mensagem seja destruída após o consumo.

| Conceito | Explicação simples |
| --- | --- |
| **Tópico** | É o "canal" pelo qual as mensagens trafegam. Equivale a uma categoria ou fila nomeada. |
| **Producer** | Componente que publica mensagens em um tópico. |
| **Consumer** | Componente que lê mensagens de um tópico. Vários consumers podem ler o mesmo tópico de forma independente. |
| **Group ID** | Identificador de grupo de consumers. Consumers no mesmo grupo dividem as partições (balanceamento de carga); consumers em grupos diferentes recebem todas as mensagens independentemente. |
| **Partição** | Unidade de paralelismo de um tópico. Mais partições = maior throughput. |
| **Offset** | Posição da última mensagem confirmada por um consumer. O Webrun usa commit manual de offset. |

---

### Por que usar Kafka no Webrun?

| Poder na IDE | O que isso permite construir? |
| --- | --- |
| **Processamento em segundo plano** | Dispare fluxos demorados sem travar a tela do usuário. A confirmação é instantânea e o trabalho ocorre nos bastidores. |
| **Integração robusta e desacoplada** | Conecte o Webrun a ERPs, CRMs e microsserviços externos de forma resiliente. Se o sistema externo estiver indisponível, as mensagens aguardam no tópico e são processadas assim que ele voltar — sem perda de dados. |
| **Distribuição de cargas de trabalho** | Absorva picos de atividade sem sobrecarregar o servidor. As requisições são enfileiradas e processadas de forma organizada e controlada. |
| **Comunicação entre fluxogramas** | Permita que diferentes fluxos ou sistemas "conversem" entre si: um fluxo de faturamento publica um evento, e o fluxo de logística o consome automaticamente, orquestrando operações complexas de forma limpa. |

---

### Principais Benefícios Técnicos

- **Alta disponibilidade:** o Kafka foi projetado para clusters com replicação de dados entre brokers.
- **Persistência de mensagens:** as mensagens não são apagadas após o consumo — ficam disponíveis pelo período de retenção configurado no broker.
- **Garantia de entrega:** o Webrun usa `acks=all` no Producer e commit manual de offset no Consumer, garantindo que uma mensagem só seja considerada processada quando o fluxo confirmar o sucesso.
- **Escalabilidade horizontal:** múltiplos consumers em grupos distintos podem processar o mesmo tópico em paralelo.
- **Suporte a SSL:** conexões criptografadas com truststore e keystore configuráveis.

---

### Conceitos importantes antes de usar

#### Consumer Event Loop vs. Poll Manual

O Webrun oferece **dois modos de leitura** de mensagens:

**1. Poll manual** — você chama a função de leitura dentro do seu fluxo quando quiser buscar mensagens. Indicado para leituras sob demanda, como verificar uma fila ao abrir um formulário.

**2. Event loop automático** (`Associar Mensagem ao Consumer`) — o Webrun cria uma thread em segundo plano que fica em escuta contínua no tópico e dispara automaticamente um fluxo servidor a cada mensagem recebida. Indicado para processamento reativo e em tempo real.

#### Commit de Offset

O Webrun usa **commit manual de offset**. Isso significa que:

- Em poll manual (`Obter Mensagem`, `Obter todas as mensagens`), o offset é confirmado automaticamente após a leitura.
- No event loop (`Associar Mensagem ao Consumer`), o offset **só é confirmado se o fluxo retornar `true`**. Se o fluxo falhar ou retornar `false`, a mensagem será reentregue na próxima execução — garantindo que nenhuma mensagem seja perdida silenciosamente.

---

### Funções disponíveis na IDE

#### Kafka - Abrir Conexão

**`ebfWebrunKafkaOpenConnection`**

Abre uma conexão com o servidor Kafka, criando o Producer, o AdminClient e as propriedades base para os Consumers. Deve ser chamada antes de qualquer outra operação Kafka no fluxo.

> **Sem SSL:** passe `false` para o parâmetro `ssl` e strings vazias para os demais parâmetros SSL.

---

#### Kafka - Criar Tópico

**`ebfWebrunKafkaCreateTopic`**

Cria um novo tópico no broker Kafka.

---

#### Kafka - Listar Tópicos

**`ebfWebrunKafkaListTopics`**

Retorna uma lista com os nomes de todos os tópicos disponíveis no broker.

---

#### Kafka - Enviar Mensagem

**`ebfWebrunKafkaSendMessage`**

Publica uma mensagem em um tópico.

---

#### Kafka - Obter Consumer

**`ebfWebrunKafkaGetConsumer`**

Obtém um Consumer pelo seu identificador.

---

#### Kafka - Obter Mensagem

**`ebfWebrunKafkaGetMessage`**

Realiza uma leitura (poll) e retorna a **primeira mensagem disponível** no tópico. O offset é confirmado automaticamente após a leitura. Se não houver mensagens no período informado, retorna string vazia.

---

#### Kafka - Obter todas as mensagens

**`ebfWebrunKafkaGetAllMessages`**

Realiza uma leitura (poll) e retorna **todas as mensagens disponíveis** no tópico dentro do período informado. O offset é confirmado em lote após a leitura.

---

#### Kafka - Associar Mensagem ao Consumer

**`ebfWebrunKafkaAttachEventConsumer`**

Associa um **fluxo servidor** a um consumer para execução automática a cada mensagem recebida.

> **Atenção:** Esta função aceita apenas **fluxos servidor**. Fluxos cliente são ignorados.

> **Atenção:** O consumer deve ser criado com **Obter Consumer** antes de chamar esta função. Se o consumer não existir na memória, um erro é lançado.

---

#### Kafka - Associar Fluxo ao Fechar Producer

**`ebfWebrunKafkaAttachEventShutdownProducer`**

Registra um **fluxo servidor** para ser executado quando o Producer Kafka for encerrado.

Se já existir um hook registrado para este Producer, ele é substituído pelo novo.

---

#### Kafka - Producer está aberto?

**`ebfWebrunKafkaIsProducerOpen`**

Verifica se o Producer está ativo na conexão corrente.

---

#### Kafka - Consumer está aberto?

**`ebfWebrunKafkaIsConsumerOpen`**

Verifica se um Consumer está registrado e ativo.

---

#### Kafka - Fechar Conexão

**`ebfWebrunKafkaCloseConnection`**

Fecha a conexão com o broker Kafka, encerrando o Producer, todos os Consumers e o AdminClient.

Consumers com **event loop ativo** (criados via `Associar Mensagem ao Consumer`) são sinalizados para parada segura — a própria thread do loop finaliza o consumer após concluir o processamento da mensagem corrente, evitando erros de concorrência.

---

#### Kafka - Deletar Tópico

**`ebfWebrunKafkaDeleteTopic`**

Remove um tópico do broker Kafka. A operação aguarda confirmação por até 30 segundos.

> **Atenção:** A deleção de tópicos é irreversível. Todas as mensagens armazenadas nele serão perdidas.

---

#### Kafka - Fechar Consumer

**`ebfWebrunKafkaCloseConsumer`**

Fecha um Consumer específico e remove-o da memória.

Se o consumer possuir um event loop ativo, ele é sinalizado para parada segura via `wakeup()` — a thread do loop finaliza o consumer após o ciclo corrente. Se não houver loop ativo, o consumer é fechado imediatamente.

---

### Conclusão

A integração nativa com o **Apache Kafka** posiciona o Webrun como uma plataforma capaz de orquestrar arquiteturas orientadas a eventos em escala corporativa. Agora é possível construir fluxos que publicam e consomem mensagens de forma assíncrona, garantindo que nenhum evento seja perdido mesmo em cenários de falha.
