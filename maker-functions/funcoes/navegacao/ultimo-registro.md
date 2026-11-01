---
title: "Último Registro"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=30"
---

**Categoria:** [Navegação](../../categorias/navegacao)

**Compatibilidade:** Todas as camadas

## Descrição

Vai para o último registro do formulário corrente.

Parâmetro:
Não possui.

## Retorno

Não possui.

## Observações

1. O uso dessa função tem uma melhor performance quando usada em regras clientes.
2. Esta função ao ser executada no evento ao entrar de um formulário, corre o risco do form ainda está carregando e a
função ocasionar um erro, pois se trata de um processo assíncrono. Para evitar tal problema, agende a execução do fluxo.
