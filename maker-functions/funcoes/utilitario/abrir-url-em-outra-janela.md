---
title: "Abrir URL em Outra Janela"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Abre uma URL em outra janela.

## Parâmetro(s)

1. URL que será aberta. (Letras)
2. Nome da janela (Caso nulo ou não exista a janela, será criada uma nova janela). (Letras)
3. Propriedade para a abertura da janela. (Letras, Opcional)

## Retorno

Não possui.

## Observações

1. As propriedades devem ser definidas em pares separados por vírgula. Ex.: scrollbars=yes,resizable=yes
2. As propriedades válidas e seus possíveis valores são:
- toolbar = yes | no
- location = yes | no
- status = yes | no
- menubar = yes | no
- scrollbars = yes | no
- resizable = yes | no
- width = yes | no
- height = Número inteiro
- left = Número inteiro
- top = Número inteiro
3. Para colocar um caractere "&" que esteja entre os dados do valor de um parâmetro de uma URL utilize a combinação: %26 + &.
4. A URL deve possuir o protocolo "http://" antes do endereço, caso contrário, será tratado como uma URL relativa.
5. O nome da janela não deve conter espaço.
6. Para o mobile não é necessário informar o nome da janela, caso seja informada a página será aberta sobre a própria aplicação.
