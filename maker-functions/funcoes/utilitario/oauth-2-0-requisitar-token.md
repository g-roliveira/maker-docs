---
title: "Oauth 2.0 - Requisitar Token"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Esta função realiza a requisição de tokens para serviços de cloud, como Google Cloud e Azure.

## Parâmetros

1. Objeto JSON - (Parâmetros da requisição). (Variante) (Ver observação 1)
2. Objeto JSON - (Parâmetros do cabeçalho). (Opcional) (Variante) (Ver observação 2)
3. URL (Variante) (Ver observação 3)
4. Devolver o JSON inteiro? (Lógico) (Ver observação 4)
5. Valor a ser retornado. (Letras) (Opcional) (Ver observação 5)

## Retorno

JSON referente a requisição (Letras).

## Observações

1. Os parâmetros da requisição deve ser um JSON contendo todos os parâmetros para realizar uma determinada requisição.
Exemplo: Assumindo que para requisitar um no serviço da Google Cloud, precisa de dois parâmetros "client_id" e "client_secret",
sendo assim, o Objeto Json assumirá o seguinte formato: &#123;"client_id": "id_do_cliente", "client_secret":"secret_do_client"&#125;.

2. Caso seja necessário definir os parâmetros do cabeçalho o JSON seguirá o seguinte formato:
Exemplo: &#123;"connection":"Keep-Alive"&#125;

3. Refere-se a URL nescessária para realizar a requisição.
Exemplo : "https://www.googleapis.com/oauth2/v4/token"

4. Caso queira capturar o valor específico de um chave do JSON, marcar como verdadeiro e no quinto parâmetro informar o nome da chave.

5. Caso o quarto parâmetro tenha sido marcado como verdadeiro informar o valor da chave.
Exemplo: "access_token".
