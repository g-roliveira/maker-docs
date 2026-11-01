---
title: "Expressão Regular - Obter Subsequências"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função retorna as subsequências correspondentes à expressão regular passada como parâmetro.

## Parâmetro(s)

1. Expressão Regular. (Letras) (Ver Observação 1)
2. Texto. (Letras)

## Retorno

Lista de subsequências. (Variante)

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
2. Para validar as expressões tando na camada cliente(JavaScript) quanto na camada servidor(Java), sugerimos a utilização da ferramenta Regex101 que, ao inserir a expressão regular é possível verificar a formatação da expressão de acordo com a camada clicando na opção 'Code Generator'.
Regex101:
https://regex101.com/
3. O retorno desta função é uma lista de listas contendo todas as subsequências encontradas. As listas possuem em seu primeiro índice a subsequência geral da expressão seguida das subsequências obtidas pelos grupos de captura.
