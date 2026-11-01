---
title: "Postar Dados"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Esta função efetua a postagem (POST) de dados para uma determinada URL informada pelo parâmetro.

## Parâmetro(s)

1. URL. (Letras)
2. Dados. (Letras)
3. Levantar exceção? (Lógico)
4. Assíncrono? (Lógico)
5. Regra a ser executada. (Fluxo, Opcional, Somente Assíncrono)
6. Regra a ser executada caso ocorra erro. (Fluxo, Opcional, Somente Assíncrono)

## Retorno

Conteúdo (Letras para Síncrono e Variante para Assíncrono)

Observação(ões):
1. Caso seja definido a postagem como Assíncrono, deve-se informar um fluxo no 5º parâmetro. O mesmo
será chamado assim que a postagem dos dados for concluída. O fluxo definido deverá possuir um parâmetro de entrada
do tipo Letras que será a resposta (caso possua) do servidor.
2. O 3º parâmetro define se uma exceção deverá ser levantada em caso de erros na postagem dos dados.
3. Caso deseje passar os dados com caracteres especiais o mesmo deve ser codificado/escapado, conforme definido pelo w3c. Pode-se
efetuar essa codificação utilizando a função "URL - Codificar".
4. Esta função somente retorna valores se a mesma for definida como Síncrona (4º parâmetro = falso). Caso seja definida como Assíncrona, o retorno será enviado para o fluxo que será chamado (Definido no 5º parâmetro).

## Exemplo

Primeiro parâmetro definimos a URL:http://localhost:8036/webrun/FluxoWebPostarDados.rule?sys=M3B Segundo parâmetro os dados: &EMPRESA=Softwell&PRODUTO=Maker
Observação: (EMPRESA e PRODUTO) são parâmetros de entrada do fluxo e os mesmos devem ser passados separado por &.
