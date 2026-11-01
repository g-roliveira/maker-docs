---
title: "REST - Consumir Serviço Stream"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função envia uma requisição HTTP, utilizando os parâmetros fornecidos para configurar a conexão, corpo da requisição, cabeçalhos e regras de processamento da resposta. A resposta é lida como um stream de dados e processada de acordo com uma regra específica.

## Parâmetros

1. Método da requisição HTTP (Letras)
2. URL para onde a requisição HTTP será enviada (Letras)
3. Mapa de parâmetros do cabeçalho (Variante)
4. Parâmetro do corpo, normalmente para métodos como POST ou PUT (Letras)
5. Nome da regra de sucesso. Regra a ser chamada para processar cada linha da resposta recebida do servidor (Letras)
6. Lista de parâmetros da regra de sucesso(Variante) (Opcional)
7. Nome da regra de erro. Regra a ser chamada para processar o erro ocorrido (Letras)
8. Lista de parâmetros da regra de erro(Variante) (Opcional)
9. Tempo máximo de espera (em milissegundos) para a conexão (Inteiro) (Opcional)
10. Charset. Conjunto de caracteres usado para ler a resposta. (Letras) (Opcional)

## Retorno

Não possui.

## Observações

1. A regra associada no parâmetro 4 receberá automaticamente como parâmetro o valor de retorno de cada linha da resposta recebida.
2. O parâmetro 7 deve ser usado apenas na camada servidor. Quando definido a regra deve reservar dois parâmetros de entrada que serão preenchidos automaticamente com o código de status e a resposta.
3. O parâmetro 8 deve ser usado apenas na camada servidor.
4. O parâmetro 9 deve ser usado apenas na camada servidor. Quando não definido, por padrão temo como valor 0 (zero).
5. O parâmetro 10 deve ser usado apenas na camada servidor. Quando não definido, por padrão tem como valor o charset do Webrun.
