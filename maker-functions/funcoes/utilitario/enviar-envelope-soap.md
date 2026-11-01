---
title: "Enviar Envelope Soap"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Envia um envelope SOAP via post para um determinado endereço de serviço.

## Parâmetro(s)

1. URL do serviço. (Letras)
2. Ação da operação. (Letras)
3. XML (Conteúdo para POST). (Letras)
4. Charset. (Letras, Opcional)

## Retorno

XML. (Letras)

## Observações

1. O 2° parâmetro encontra-se no "soap:address location" no WSDL do WebService.
2. O 3° parâmetro encontra-se no "soap:operation soapAction" no WSDL do WebService.
3. Caso o 4° parâmetro não seja informado, será adotado o charset padrão do Webrun.
