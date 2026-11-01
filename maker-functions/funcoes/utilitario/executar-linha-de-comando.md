---
title: "Executar Linha de comando"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Executa uma linha de comando no "SHELL" do SERVIDOR, retornando o resultado.

## Parâmetro(s)

1. Linha de comando a ser executada. (Letras)
2. Continuar após acabar o comando? (Lógico)

## Retorno

Resultado do comando executado quando necessário. (Só retornará resultado, caso o comando executado necessite de retorno.) (Letras)

## Observações

1. Se o 2° parâmetro estiver verdadeiro, o fluxo só vai continuar após terminar de executar o comando.
2. O comando é executado somente no servidor.
3. Caso o comando executado não possua retorno, será retornado nulo.

## Exemplo

Uma função assumindo como parâmetros "cmd /c mkdir c:\softwell" (Letras) e Falso (Lógico). Esse exemplo cria uma
pasta com o nome "softwell".
