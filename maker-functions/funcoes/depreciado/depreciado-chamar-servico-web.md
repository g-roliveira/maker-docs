---
title: "DEPRECIADO - Chamar Serviço Web"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=29"
---

**Categoria:** [Depreciado](../../categorias/depreciado)

**Compatibilidade:** Servidor

## Descrição

Chama um WEB service (são componentes que permitem às aplicações enviar e receber dados em formato XML).

## Parâmetros

1. URL do Web Service (Sempre com http:// antes)
2. Porta
3. Nome do método que será chamado no Webservice.
4. Lista de parâmetros para o Webservice.

## Retorno

Retorna o resultado da chamada do serviço web. (Variante)

## Exemplos

1. http://suporte.softwell.com.br/maker/manual2_7/pt/dicas_e_truques/maker/exemplo_de_utilizacao_de_web_services_no_maker.htm
2. Assumindo que o 1° parâmetro = "http://www.byjg.com.br/xmlnuke-php/webservice.php/ws/cep?WSDL", 2° parâmetro = "CEPServicePort",
3° parâmetro = "obterLogradouro", e o 4° parâmetro o CEP digitado pelo usuário, o retorno será o endereço do cep digitado pelo usuário.

Observação(ões):
1. Quando o serviço web que será chamado for um fluxo de ação marcado como "Externo" no "Gerenciador de "Objetos" do Maker, os parâmetros da lista criada para o quarto parâmetro desta função deverão ser do tipo "Letras".
2. Essa função foi depreciada, o uso dessa função é recomendado para Webservices gerados com o Axis 1.4 e/ou inferior.
