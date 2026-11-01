---
title: "REST - Consumir WebService"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função consome um WebService através da API REST.

## Parâmetro(s)

1. Ação. (Letras)
2. URL. (Letras)
3. Parâmetros da Postagem. (Letras ou Mapa) (Ver observação 3)
4. Regra a ser executada. (Fluxo, Somente camada cliente ou Mobile)
5. Parâmetros da Regra. (Variante, Somente camada cliente ou Mobile)
6. Parâmetros do Cabeçalho. (Mapa de Parâmetros)
7. Parâmetro do Corpo. (Letras, Somente camada servidor, na camada cliente usar o 3º parâmetro) (Ver observação 5).
8. Charset. (Letras, Opcional, Somente camada servidor) (Ex.: UTF-8, ISO-8859-1)
9. Regra a ser executada caso tenha ocorrido um erro. (Fluxo, Somente camada cliente ou Mobile) (Ver observação 6);
10. Parâmetros da Regra caso tenha ocorrido um erro. (Variante, Somente camada cliente ou Mobile);

## Retorno

Objeto JSON com o formato abaixo:
&#123;
"headers": &#123;
"key1": "value1",
"key2": "value2"
&#125;,
"result": "Resultado do Webservice",
"status": "OK",
"statusCode": 200
&#125;

Variante (Ver observação 4 e 8).

## Observações

1. A regra do quarto parâmetro deverá possuir um parâmetro de entrada que irá receber o retorno do WebService.
2. Ações disponíveis (GET, POST, PUT, DELETE, HEADER, OPTIONS), é importante observar se o servidor suporta essas ações.
3. Caso a ação seja POST deverá ser criado um Mapa com parâmetros, Letras caso contrário.
4. A execução desta função na camada cliente ou Mobile é assíncrona e o retorno será enviado automaticamente como primeiro parâmetro do fluxo. (4º parâmetro) . Caso a execução desta função seja camada servidor, a execução será síncrona.
5. O 7º parâmetro somente é suportado para as ações PUT e POST, ao ser definir o 3º parâmetro será ignorado.
6. O 9º parâmetro somente é suportado na camada cliente e recebe automaticamente no primeiro parâmetro o código do erro da resposta. Ex.: 500 = "Erro interno do servidor".
7. Caso a URL para consumo seja um Fluxo WEB e o método solicitado seja POST/PUT deve-se setar o 6º parâmetro (Parâmetros do Cabeçalho) para Content-Type = application/x-www-form-urlencoded (Camada Cliente).
8. Quando utilizada na camada Cliente, as chaves do cabeçalho(headers) tem o retorno em caixa baixa, exceto no Internet Explorer.
Exemplo: Na camada cliente o parâmetro "Content-Type" é escrito como "content-type", como mostra a documentação:
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
