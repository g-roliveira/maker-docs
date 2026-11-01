---
title: "REST - Consumir Webservice - 2.0"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Essa função realiza uma requisição para um determinado endpoint informado por parâmetro.
Métodos HTTP suportados: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS.

## Parâmetros

1. URL (Letras).
2. Método HTTP (Letras).
3. Parâmetros do Cabeçalho (Variante)(Opcional)(Observação 1).
4. Parâmetros da Requisição (Variante)(Opcional)(Observação 2).
5. Parâmetro do Corpo (Letras)(Opcional).
6. Content-Type (Letras)(Opcional).
7. Charset (Opcional)(Letras)(Ver observação 3)
8. Caminho do Certificado Digital (Letras)(Opcional)(Ver observação 4).
9. Senha do Certificado Digital (Letras)(Opcional)(Ver observação 4).
10. Mapa com os Arquivos (Variante)(Opcional)(Ver Observação 5).

## Retorno

Objeto JSON contendo as seguites informações:

status - Status da Requisição HTTP
code - Código de Resposta HTTP
headers - Cabeçalhos da Resposta
result - Resultado do consumo do endpoint (Letras)

Exemplo de Retorno:
&#123;
"status": "Unprocessable Entity",
"code": 422,
"headers": &#123;
"Date": "Thu, 01 Jun 2023 19:35:58 GMT",
"Server": "Apache",
"Content-Type": "application/json;charset=UTF-8",
"Keep-Alive": "timeout=60, max=999",
"Connection": "Keep-Alive",
"Transfer-Encoding": "chunked"
&#125;,
"result": "&#123;&#125;" // Resultado do consumo do endpoint (Letras)
&#125;

## Observações

1. O terceiro parâmetro quando definido, deve-se informar um objeto mapa contendo a chave e valor.
2. O quarto parâmetro quando definido, deve-se informar um objeto mapa contendo a chave e valor.
3. O sétimo parâmetro caso não seja definido, automaticamente obterá o charset do Webrun.
4. Deve ser passado somente se o endpoint que será requisitado exija autenticação com Certificado Digital. Ao passar
um caminho, a conexão será feita com autenticação via Certificado Digital, a senha do certificado tem que ser informada
para que seja possível incluir o certificado na requisição.
5. O décimo parâmetro tem como objetivo enviar arquivos para o endpoint. Deve-se informar um objeto mapa contendo a chave(nome do parâmetro) e valor(caminho completo para o arquivo).
6. Não é possível enviar na requisão diferentes tipos de parâmetros, exemplo: definir parâmetro da requisição e parâmetro do corpo.
