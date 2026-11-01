---
title: "Tabela - Inserir Célula em uma Linha"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=52"
---

**Categoria:** [Tabela](../../categorias/tabela)

**Compatibilidade:** Cliente, Servidor

## Descrição

Insere uma célula em uma linha.

## Parâmetro(s)

1. Formulário.
2. Linha. (Letras)
3. Largura da célula. (Inteiro, Opcional)
4. Alinhamento. (Letras, Opcional)
5. Cor do fundo. (Cor, Opcional)
6. Cor da borda. (Cor, Opcional)
7. Quantidade de linhas ocupadas. (Inteiro, Opcional)
8. Quantidade de colunas ocupadas. (Inteiro, Opcional)
9. Conteúdo. (Letras, Opcional)
10. Folha de estilo. (Variante, Opcional)

## Retorno

GUID da célula. (Letras)

## Observações

1. O 2° parâmetro é obtido com a função "Tabela - Inserir linha em uma tabela".
2. Para a utilização da função no servidor é necessário passar o parâmetro "Linha" em branco e ter utilizado a função "Tabela - Inserir linha em uma tabela" antes. A célula irá ser inserida na útima linha criada na tela.
3. Valores aceitos no 5° parâmetros:
+ left (Esquerda)
+ center (Centro)
+ right (Direita)
4. O 10° parâmetro pode receber, por exemplo: "background-color: #000000".
