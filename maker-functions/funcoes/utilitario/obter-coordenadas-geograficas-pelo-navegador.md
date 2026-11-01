---
title: "Obter Coordenadas Geográficas pelo Navegador"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Esta função obtém as coordenadas geográficas do navegador do usuário utilizando a API de Geolocalização do HTML5. A execução é assíncrona na camada cliente ou Mobile e, de acordo com o resultado (sucesso ou erro), dispara a regra correspondente com um objeto JSON estruturado.

## Parâmetro(s)

1. Regra a ser executada em caso de sucesso. (Fluxo somente camada cliente ou Mobile)
2. Parâmetros da Regra em caso de sucesso. (Variante somente camada cliente ou Mobile)
3. Regra a ser executada em caso de erro. (Fluxo somente camada cliente ou Mobile)
4. Parâmetros da Regra em caso de erro. (Variante somente camada cliente ou Mobile)

## Retorno

Objeto JSON com o formato abaixo:

&#123;
"headers": &#123;&#125;,
"result": &#123;
"latitude": "Valor numérico representando a latitude",
"longitude": "Valor numérico representando a longitude",
"accuracy": "Valor numérico que indica a acurácia da medição (em metros)",
"altitude": "Valor numérico representando a altitude (pode ser null se não disponível)",
"altitudeAccuracy": "Valor numérico representando a acurácia da altitude (pode ser null)",
"heading": "Valor numérico indicando a direção do movimento (pode ser null)",
"speed": "Valor numérico indicando a velocidade (pode ser null)",
"timestamp": "Timestamp da obtenção da localização"
&#125;,
"status": "OK", // Em caso de sucesso; caso contrário, "ERROR"
"statusCode": 200 // Código 200 em caso de sucesso; ou código de erro retornado pela API
&#125;

## Observações

1. A função solicitará ao usuário a permissão para acessar sua localização. Se o acesso for negado ou ocorrer algum erro durante a obtenção, a regra de erro será executada com um objeto contendo o código e a mensagem do erro.
2. Caso o navegador não suporte a API de Geolocalização, a função automaticamente dispara a regra de erro, retornando um objeto com status "ERROR", código 0 e a mensagem "Geolocation não é suportada por este navegador.".
3. A execução desta função na camada cliente ou Mobile é assíncrona, e o retorno é enviado automaticamente como primeiro parâmetro da regra definida (sucesso ou erro).
4. Como a API de Geolocalização não utiliza cabeçalhos HTTP, a propriedade headers do objeto retornado é um objeto vazio.
