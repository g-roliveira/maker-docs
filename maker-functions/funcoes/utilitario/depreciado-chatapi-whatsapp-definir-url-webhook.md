---
title: "[DEPRECIADO] ChatAPI WhatsApp-Definir URL Webhook"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

ATENÇÃO: O ChatAPI ENCERROU SUAS ATIVIDADES E POR ISSO A INTEGRAÇÃO COM O SERVIÇO NÃO ESTÁ MAIS DISPONÍVEL.

Essa função define uma URL como Webhook para receber todas as chamadas de retorno da API.

## Parâmetro(s)

1. URL do Chat (Fornecido no console do ChatAPI). (Variante)
2. Token (Fornecido no console do ChatAPI). (Variante)
3. URL Webhook. (Variante) (Ver Observação 1)

## Retorno

Texto JSON. (Letras)

## Observações

1. Caso a URL Webhook seja um fluxo do projeto, o mesmo deverá ser definido como fluxo WEB e deve ser permitido o acesso externo no mesmo. Abaixo um exemplo de como ficaria essa URL se a mesma for representar um fluxo do projeto.
EX: &lt;URL do contexto&gt;/&lt;nome do fluxo&gt;.rule?sys=&lt;sigla do sistema&gt;
2. Para obter o conteúdo recebido no fluxo Web definido, utilize a função "REST - Obter contéudo do corpo".
3. Para mais informações sobre o ChatAPI acesse: https://chat-api.com/pt-br/
