---
title: "Semáforo - Está Livre?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=33"
---

**Categoria:** [Semáforo](../../categorias/semaforo)

**Compatibilidade:** Servidor

## Descrição

Retorna se um semáforo está livre a partir de um identificador. Um semáforo está livre, se um processo chamou a função
"Semáforo - Adquirir" e ainda não usou a função "Semáforo - Liberar".

Parâmetro:
1. Identificador único para representação do semáforo. (Letras)

## Retorno

"Verdadeiro" se o semáforo estiver livre, "Falso" se não estiver livre. (Lógico)
