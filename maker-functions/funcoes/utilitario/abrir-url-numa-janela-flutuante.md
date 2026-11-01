---
title: "Abrir URL Numa Janela Flutuante"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Abre uma URL em uma janela flutuante.

## Parâmetro(s)

1. URL que será aberta. (Letras)
2. Nome da janela (Não deve conter espaço nem caracteres especiais). (Letras)
3. Descrição da janela (Título do formulário flutuante). (Letras, Opcional)
4. Largura. (Inteiro)
5. Altura. (Inteiro)
6. Classe HTML adicional. (Letras, Opcional)
7. Modal. (Lógico)
8. Redimensionável. (Lógico)

## Retorno

Não possui.

## Observações

1. Para colocar um caractere "&" que esteja entre os dados do valor de um parâmetro de uma URL utilize a combinação: %26 + &.
2. A URL deve possuir o protocolo "http://" antes do endereço, caso contrário, será tratato como uma URL relativa.
3. O nome da janela não deve conter espaço.
4. A função deve ser utilizara sempre a partir de um formulário flutuante.
