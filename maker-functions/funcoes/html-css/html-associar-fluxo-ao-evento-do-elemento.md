---
title: "HTML - Associar Fluxo ao Evento do Elemento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=61"
---

**Categoria:** [HTML/CSS](../../categorias/html-css)

**Compatibilidade:** Cliente

## Descrição

Esta função associa um fluxo a um evento no objeto HTML recebido por parâmetro.

## Parâmetro(s)

1. Referência do Elemento HTML. (Variante)
2. Nome do Evento. (Letras)
3. Nome do Fluxo. (Fluxo)
4. Lista de parâmetros do fluxo (Variante, Opcional)
5. O objeto do evento será passado como primeiro parâmetro para o Fluxo? (Lógico, Opcional)

## Retorno

Não possui.

## Observações

1. O 4º parâmetro pode ser o retorno da função "Criar Lista a partir dos Elementos".
2. Se o 5º parâmetro for Verdadeiro (por padrão é Falso) será passado como primeiro parâmetro do Fluxo o objeto do tipo de evento especificado (Mouse, Teclado, etc), que usando a função "HTML - Obter Atributo do Elemento (DOM)" é possível, por exemplo, obter as coordenadas do cursor na tela, última tecla pressionada ou o elemento HTML que disparou o evento.
3. O objeto do evento se tornará o primeiro parâmetro do Fluxo a ser chamado, logo os outros parâmetros começarão a partir da segunda posição.
4. O fluxo chamado no 3º parâmetro pode retornar o valor Lógico Falso para interromper o comportamento padrão do evento do navegador, como por exemplo o clique (onclick) ou o caractere digitado (onkeypress).
5. Somente serão executados fluxos na camada cliente. Para executar fluxos na camada servidor, utilize subfluxo.
