---
title: "Semáforo - Adquirir"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=33"
---

**Categoria:** [Semáforo](../../categorias/semaforo)

**Compatibilidade:** Servidor

## Descrição

Adquire um semáforo a partir de um identificador. Essa função bloqueia uma ocorrência por tempo indeterminado
e recebe um valor lógico que define se apenas o proprietário do semáforo pode liberá-lo.

## Parâmetro(s)

1. Identificador único para representação do semáforo. (Letras)
2. Tempo de espera para adquirir o semáforo (em milissegundos). (Inteiro)
3. Define se apenas o proprietário do semáforo pode liberá-lo. (Lógico)

## Retorno

Retorna identificador dono do semáforo. (Letras)

## Observação

1. A função tentará adquirir o semáforo até o tempo máximo especificado no 2º parâmetro. Caso não consiga, retornará
uma exceção.
2. Caso o "Pool de Conexões" esteja ativo no sistema, não deverá ser habilitado o terceiro parâmetro desta função.
