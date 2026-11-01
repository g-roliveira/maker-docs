---
title: "Tabela - Inserir Linha em uma Tabela"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=52"
---

**Categoria:** [Tabela](../../categorias/tabela)

**Compatibilidade:** Cliente, Servidor

## Descrição

Insere uma linha em uma tabela.

## Parâmetro(s)

1. Formulário.
2. Tabela. (Letras)
3. Cor de fundo. (Cor, Opcional)
4. Cor da borda. (Cor, Opcional)
5. Folha de estilo. (Variante, Opcional)

## Retorno

GUID da linha criada. (Letras)

## Observações

1. O parâmetro dois é o retorno da função "Tabela - Criar tabela em uma moldura"
2. Para a utilização da função no servidor é necessário passar o parâmetro "Tabela" em branco e ter utilizado a função "Tabela - Inserir linha em uma tabela" antes. A linha irá ser inserida na útima tabela criada na tela.
3. O 5° parâmetro pode receber, por exemplo: "background-color: #000000".
