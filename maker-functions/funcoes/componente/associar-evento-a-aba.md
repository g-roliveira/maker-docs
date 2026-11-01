---
title: "Associar Evento à Aba"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente

## Descrição

Esta função associa o evento a aba "Quando clicar na aba" definida por parâmetro.

## Parâmetro(s)

1. Nome da aba. (Letras)
2. Nome da regra. (Letras ou Fluxo) (Ver observação 2)
3. Lista contendo os parâmetros da regra. (Variante) (Ver observação 3)

## Retorno

Não possui.

## Observações

1. Esta função deve ser utilizada no evento "Ao Entrar" do formulário.
2. No segundo parâmetro a regra deve estar na camada cliente.
3. Mesmo que a regra executada não possua parâmetros, é necessário criar uma lista vazia.
4. O não preenchimento do 3° parâmetro inutilizará a função.
5. Ao associar o evento à aba localizar, esta não carregará os dados padrão, pois o mesmo será sobrescrito pelo evento associado.
