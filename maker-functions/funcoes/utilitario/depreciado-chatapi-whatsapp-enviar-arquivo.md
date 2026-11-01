---
title: "[DEPRECIADO] ChatAPI WhatsApp - Enviar Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

ATENÇÃO: O ChatAPI ENCERROU SUAS ATIVIDADES E POR ISSO A INTEGRAÇÃO COM O SERVIÇO NÃO ESTÁ MAIS DISPONÍVEL.

Essa função envia um arquivo para um número de WhatsApp informado.

## Parâmetro(s)

1. URL do Chat (Fornecido no console do ChatAPI). (Variante)
2. Token (Fornecido no console do ChatAPI). (Variante)
3. Número de WhatsApp. (Variante) (Ver Observação 1)
4. Mensagem que aparece como descrição do arquivo enviado. (Variante)
5. Nome do Arquivo. (Variante) (Ver Observação 2)
6. URL do Arquivo. (Variante)

## Retorno

Texto JSON. (Letras)

## Observações

1. O número para o qual a mensagem será enviada deve conter o código do país e o DDD.
Ex: 5571999999999, onde 55 é o código do Brasil e 71 é o DDD.
2. O nome do arquivo deve conter também a extensão do arquivo que será enviado.
Ex.: Se o arquivo for um PDF, esse parâmetro deve ser enviado da seguinte forma - &lt;nome qualquer&gt;.pdf
O mesmo serve para qualquer tipo de arquivo aceitável pelo WhatsApp (.pdf, .mp4, .png, .jpg, etc).
3. O link do 6° parâmetro deverá ser público.
4. Para mais informações sobre o ChatAPI acesse: https://chat-api.com/pt-br/
