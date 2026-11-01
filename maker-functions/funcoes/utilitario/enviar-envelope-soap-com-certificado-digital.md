---
title: "Enviar Envelope SOAP com Certificado Digital"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Envia um envelope SOAP 1.2 via post para um determinado endereço de serviço.

## Parâmetro(s)

1. URL do serviço. (Letras)
2. Ação da operação. (Letras)
3. XML (Conteúdo para POST). (Letras)
4. Charset. (Letras)
5. Arquivo com as informações sobre os certificados do serviço (KeyStore). (Letras)
6. Senha para o arquivo com as informações sobre os certificados do serviço (Senha da KeyStore). (Letras)
7. Arquivo com o certificado de quem chama o serviço (Geralmente, PFX/.p12). (Letras)
8. Senha para o arquivo com o certificado de quem chama o serviço. (Letras)

## Retorno

XML. (Letras)

## Observações

1. O conteúdo do POST pode ser visualizado através do SoapUI.
2. O 2° parâmetro encontra-se no "soap:address location" no WSDL do WebService.
3. O 3° parâmetro encontra-se no "soap:operation soapAction" no WSDL do WebService.
