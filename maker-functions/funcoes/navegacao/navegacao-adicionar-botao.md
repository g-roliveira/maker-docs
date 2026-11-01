---
title: "Navegação - Adicionar Botão"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=30"
---

**Categoria:** [Navegação](../../categorias/navegacao)

**Compatibilidade:** Cliente

## Descrição

Função que permite que um novo botão seja adicionado na barra de navegação.

## Parâmetro(s)

1. Nome da imagem que deverá aparecer. (Letras)
2. Descrição (Hint) que deverá aparecer. (Letras)
3. Nome da regra (Fluxo) que será executada ao se clicar no botão (Esta regra deverá ser do tipo cliente). (Letras)
4. Lista de parâmetros para execução da função. (Variante)
5. Largura da Imagem. (Inteiro)

## Retorno

Não possui.

## Observações

1. Ao posicionar o mouse sobre a imagem, é necessário que haja outra com o mesmo nome da primeira mais '_over' para reproduzir o efeito de destaque neste evento.
Ex.: Nome da imagem : "enviar_email.gif"
Imagem necessária: "enviar_email_over.gif"
2. A imagem deverá estar localizada no diretório raiz do Skin em "Skins\NomeDoSkin" utilizado no projeto. Ex.: Skin\Default, Skin\Executive, Skin\Blue.
