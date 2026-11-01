---
title: "Expressão Regular - Trocar Subsequências"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função troca todas as subsequências de um texto por outro valor através de uma expressão regular.

## Parâmetro(s)

1. Expressão Regular. (Letras) (Ver Observação 1)
2. Texto. (Letras)
3. Novo Valor. (Letras)

## Retorno

Texto atualizado. (Letras)

## Observações

1. O primeiro parâmetro deve conter a expressão regular, as expressões tem formatos divergentes na camada cliente e servidor.
Como exemplo, temos a seguinte expressão que retorna todos caracteres diferente de número:
- Camada Cliente:
## Exemplo

/EXPRESSÃO_REGULAR/MODIFICADORES
/[^0-9]/gm (Expressão exemplo)

- Camada Servidor:
## Exemplo

EXPRESSÃO_REGULAR
[^0-9] (Expressão exemplo)
2. Para validar as expressões tanto na camada cliente (JavaScript) quanto na camada servidor (Java), sugerimos a utilização da ferramenta Regex101 que, ao inserir a expressão regular é possível verificar a formatação da expressão de acordo com a camada clicando na opção 'Code Generator'.
Regex101:
https://regex101.com
3. Mais informações para a camada cliente (JavaScript):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
