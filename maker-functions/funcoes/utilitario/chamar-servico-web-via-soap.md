---
title: "Chamar Serviço Web via SOAP"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Chama um Web Service (são componentes que permitem às aplicações enviar e receber dados em formato XML).

## Parâmetro(s)

1. URL do Web Service (Sempre com http:// antes). (Letras)
2. Porta. (Letras)
3. Nome do método que será chamado no Web Service. (Letras)
4. Lista de parâmetros para o Webservice (Caso o Web Service espere um arquivo (MTOM), passar o caminho do arquivo). (Variante)
5. Tempo (segundos) para estabelecer conexão (Connection Timeout). (Inteiro)
6. Tempo (segundos) do limite de conexão (Túnel aberto). (Inteiro)

## Retorno

Retorna o resultado da chamada do serviço web. (Variante)

## Observação

Quando o serviço web que será chamado for um fluxo de ação marcado como "Externo" no "Gerenciador de "Objetos" do Maker,
os parâmetros da lista criada para o quarto parâmetro desta função deverão ser do tipo "Letras".

## Exemplos

1. https://manual.softwell.com.br/#/exemplo_de_utilizacao_de_web_services_no_maker
2. Assumindo que o 1° parâmetro = "http://www.byjg.com.br/xmlnuke-php/webservice.php/ws/cep?WSDL", 2° parâmetro = "CEPServicePort",
3° parâmetro = "obterLogradouro", e o 4° parâmetro o CEP digitado pelo usuário, o retorno será o endereço do cep digitado pelo usuário.
