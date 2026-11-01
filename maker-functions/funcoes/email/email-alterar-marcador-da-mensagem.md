---
title: "Email - Alterar marcador da mensagem"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Altera o valor do marcador (flag) passado por parâmetro da mensagem.

## Parâmetro(s)

1. Mensagem. (Variante) (Ver observação 1)
2. Marcador da mensagem. (Inteiro)
3. Valor lógico para o marcador. (Lógico)

## Retorno

Não possui.

## Observações

1. O 1º Parâmetro é o retorno da função "Email - Mensagens em uma pasta".
2. Para o marcador de deleção das mensagens com protocolo POP3, é necessário usar a função "Email -
Fechar pasta do repositório de emails" com o 2º parâmetro verdadeiro.
3. Valores para os marcadores da mensagem:
1 - Respondida
2 - Deletada
3 - Rascunho
4 - Assinalar
5 - Recente
6 - Lida
7 - Requerida

## Exemplo

Assumindo como 1º parâmetro uma mensagem qualquer, como o 2º parâmetro "2"(Deletada) e 3º
parâmetro "True", será aplicado o marcador "Deletada" a mensagem.
