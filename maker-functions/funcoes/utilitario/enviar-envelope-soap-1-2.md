---
title: "Enviar Envelope Soap 1.2"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Envia um envelope SOAP 1.2 via post para um determinado endereço de serviço.

## Parâmetro(s)

1. URL do serviço. (Letras)
2. XML (Conteúdo para POST). (Letras)
3. Charset. (Letras)
4. Usuário. (Letras, Opcional)
5. Senha. (Letras, Opcional)

## Retorno

XML. (Letras)

## Observações

1. A autenticação é realizada através do método Basic (Encode Base64).
2. O conteúdo do Post pode ser visualizado através do SoapUI.
3. O 2° parâmetro encontra-se no "soap:address location" no WSDL do WebService.
