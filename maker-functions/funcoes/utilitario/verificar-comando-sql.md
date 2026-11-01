---
title: "Verificar Comando SQL"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Função usada para verificar se um comando em SQL está correto ou não.

## Parâmetro(s)

1. Comando SQL. (Letras)
2. Conexão (Variante) (Opcional)

## Retorno

Caso exista erro, retorna o erro encontrado no comando SQL, caso contrário, retornará o valor nulo. (Letras)

## Exemplo

1. Passe como 1º parâmetro uma constante do tipo letras com a consulta. (ex: select * from fr_acao)
2. Atribua o valor de retorno a uma variável do tipo letras.
