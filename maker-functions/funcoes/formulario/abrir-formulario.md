---
title: "Abrir Formulário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Abre o formulário passado por parâmetro.

Parâmetro:
1. Formulário a ser aberto (GUID).

## Retorno

Não possui.

## Observações

1. Para abrir um formulário flutuante com ícone basta passar uma lista como parâmetro que contenha duas sublistas onde:
1. 1. O primeiro parâmetro da primeira lista deve ser "formGuid" e o segundo o GUID do formulário a ser aberto.
1. 2. O primeiro parâmetro da segunda lista deve ser "icon" e o segundo parâmetro a classe do ícone do formulário (ex:"fas fa-home").
2. Para definir cor ao ícone do formulário flutuante basta adicionar uma terceira sublista na lista do parâmetro onde:
2. 1O primeiro parâmetro deve ser "iconColor" e o segundo parâmetro a cor do ícone, onde este pode ser um HEX da cor (ex: #000000) ou qualquer outro tipo de valor possível para cores do CSS.
3. Os ícones só são aplicados a formulários do tipo flutuante, ou seja, formulários cuja propriedade "Abrir em Modo Pop-up" seja falsa.

## Exemplo

Assumindo como parâmetro a constante formulário "Form" ou a GUID do mesmo, a função irá abrir em outra
janela o formulário "Form".
