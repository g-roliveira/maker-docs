---
title: "Email - Verificar marcador da mensagem"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Retorna "Verdadeiro" se o valor do marcador (flag) da mensagem for igual ao passado no 2º parâmetro. Caso
contrário, retorna "Falso".

## Parâmetro(s)

1. Mensagem. (Variante) (Ver observação 1)
2. Marcador da mensagem. (Inteiro)

## Retorno

Valor do marcador da mensagem. (Lógico)

## Observações

1. O 1º Parâmetro é o retorno da função "Email - Mensagens em uma pasta".
2. Para verificar se o valor do marcador da mensagem foi obtido com sucesso, é possível utilizar a função "É
nulo".
3. Valores para os marcadores da mensagem:
1 - Respondida
2 - Deletada
3 - Rascunho
4 - Assinalar
5 - Recente
6 - Lida
7 - Requerida

## Exemplo

Assumindo como 1º parâmetro a mensagem(id)
"27117501.441199967041995.JavaMail.SYSTEM@APOLO&gt;" que contém o marcador "Respondida" e como 2º
parâmetro o inteiro "1", o retorno será o valor lógico "Verdadeiro".
