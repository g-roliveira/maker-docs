---
title: "Semáforo - Adquirir"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_semaforo/semaforo_adquirir.htm"
---

Descrição:

Adquire um semáforo a partir de um identificador. Essa função bloqueia uma ocorrência por tempo indeterminado e recebe um valor lógico que define se apenas o proprietário do semáforo pode liberá-lo.

Parâmetros:

1. Identificador único para representação do semáforo

2. Tempo de espera para adquirir o semáforo (em milisegundos).

3. Define se apenas o proprietário do semáforo pode liberá-lo

![image1084.gif](../../../../../image1084.gif)

Retorno:

Retorna identificador dono do Semáforo.

Observação:

A função tentará adquirir o semáforo até o tempo máximo especificado no 2º parâmetro. Caso não consiga, retornará uma exceção.

Nome Real:

ebfSemaphoreAcquire

Compatibilidade:

Servidor
