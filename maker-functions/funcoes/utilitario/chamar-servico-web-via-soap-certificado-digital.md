---
title: "Chamar Serviço Web via SOAP - Certificado Digital"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Chama um Web Service (são componentes que permitem às aplicações enviar e receber dados em formato XML).

## Parâmetro(s)

1. Arquivo com as informações sobre os certificados do serviço. (Letras)
2. Senha para o arquivo com as informações sobre os certificados do serviço. (Letras)
3. Arquivo com o certificado de quem chama o serviço. (Letras)
4. Senha para o arquivo com o certificado de quem chama o serviço. (Letras)
5. URL do Web Service (Sempre com http:// antes). (Letras)
6. Porta. (Letras)
7. Nome do método que será chamado no Web Service. (Letras)
8. Lista de parâmetros para o Web Service (Caso o Web Service espere um arquivo (MTOM), passar o caminho do arquivo). (Variante)
9. Tempo (segundos) para estabelecer conexão (Connection Timeout). (Inteiro)
10. Tempo (segundos) do limite de conexão (Túnel aberto). (Inteiro)

## Retorno

Retorna o resultado da chamada do serviço web. (Variante)

## Observação

Quando o serviço web que será chamado for um fluxo de ação marcado como "Externo" no "Gerenciador de "Objetos" do Maker,
os parâmetros da lista criada para o quarto parâmetro desta função deverão ser do tipo "Letras".

## Exemplos

1. https://manual.softwell.com.br/#/exemplo_de_utilizacao_de_web_services_no_maker
2. Assumindo que o 1° parâmetro = "http://www.byjg.com.br/xmlnuke-php/webservice.php/ws/cep?WSDL", 2° parâmetro = "CEPServicePort",
3° parâmetro = "obterLogradouro", e o 4° parâmetro o CEP digitado pelo usuário, o retorno será o endereço do cep digitado pelo usuário.
