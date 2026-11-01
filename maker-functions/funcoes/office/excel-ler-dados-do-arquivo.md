---
title: "Excel - Ler Dados do Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=71"
---

**Categoria:** [Office](../../categorias/office)

**Compatibilidade:** Servidor

## Descrição

Essa função ler a folha do arquivo passado por parâmetro retornado uma lista de lista com os dados obtidos.

## Parâmetro(s)

1. Referência para o arquivo. (Variante)
2. Nome da folha. (Letras, Opcional)
3. Número da linha. (Inteiro, Opcional)
4. Número da coluna. (Inteiro, Opcional)
5. Formatação. (Letras, Opcional) (Ver observação 3)

## Retorno

Lista de lista contendo os dados. (Variante)

## Observações

1. A função sempre retornará uma Lista de Lista, incluindo também as células nulas.
2. Caso o nome da folha não seja informado a mesma assumirá automaticamente a primeira folha como parâmetro.
3. O quinto parâmetros aplica-se apenas para campos do tipo Data, caso não seja preenchido o mesmo assumirá automaticamente o valor "dd/MM/yyyy".

## Exemplos

1. Assumindo como parâmetro a referência do arquivo e o nome da folha "Folha 1", o retorno será uma lista de lista com todos os dados armazenados na "Folha 1" do arquivo.
2. Assumindo como parâmetro a referência do arquivo e o número da linha 1, o retorno será uma matriz com todos os dados armazenados na linha 1 da primeira folha do arquivo.
3. Assumindo como parâmetro a referência do arquivo, o número da linha 3 e o número da coluna 4, o retorno será uma matriz com todos o dado armazenado na linha 3 e coluna 4 na primeira folha do arquivo.
