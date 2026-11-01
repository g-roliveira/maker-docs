---
title: "Upload Múltiplos Arquivos"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Cliente, Servidor

## Descrição

Realiza o upload de múltiplos arquivos. Poderá ser informado o caminho que será(ão) armazenado(s)
o(s) arquivo(s), uma regra para efetuar a validação do arquivo a ser enviado e uma possível regra chamada e os
parâmetros que essa regra poderá receber (caso exista).

## Parâmetro(s)

1. Caminho para armazenamento (Caso nulo será armazenado na "Upload" dentro do contexto do Webrun). (Letras)
2. Nome de uma regra cliente para validação (Caso nulo, não haverá validação do arquivo antes do envio). (Fluxo)
3. Nome de uma regra (Caso nulo a função realizará apenas o upload do arquivo). (N' Variante)

## Retorno

Não possui.

## Observações

1. A regra chamada no 2º parâmetro pela função Upload, receberá como parâmetro de entrada uma lista (Variante) de
arquivos a serem enviados. Esta lista possui informações como: nome do arquivo, tamanho (em bytes) e o tipo do
arquivo
(se identificado pelo browser).
2. A regra chamada no 2º parâmetro pela função "Upload", caso seja definida, deverá retornar verdadeiro ou falso
(Lógico) informando se deve ser permitido ou não o envio do arquivo.
3. A regra chamada no 2º parâmetro deve ser da camada CLIENTE.
4. A regra chamada no 3º parâmetro pela função "Upload", caso seja definida na camada servidor, não pode chamar um sub fluxo cliente.
5. A regra chamada no 3º parâmetro pela função "Upload", recebe como parâmetro de entrada o caminho para onde foi
enviado o arquivo. Para passar parâmetros adicionais, além do enviado automaticamente pelo Webrun, basta clicar no
botão (com sinal de adição) que se encontra ao lado do nome da função.
