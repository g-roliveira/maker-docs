---
title: "Excel - Preencher Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=71"
---

**Categoria:** [Office](../../categorias/office)

**Compatibilidade:** Servidor

## Descrição

Esta função preenche o arquivo com os dados passados por parâmetro.

## Parâmetro(s)

1. Referência para o arquivo. (Variante)
2. Lista de Lista contendo os dados. (Variante)
3. Nome da folha. (Letras, Opcional)
4. Número da linha. (Inteiro, Opcional)
5. Formatação. (Letras, Opcional) (Ver observação 3)

## Retorno

Não possui.

## Observações

1. O 3º Parâmetro quando não informado assumirá automaticamente a primeira folha como parâmetro.
2. Para que as alterações no arquivo persistam é necessário utilizar a função "Excel - Salvar Arquivo".
3. O 5º Prâmetro aplica-se apenas para campos do tipo Data, caso não seja preenchido o mesmo assumirá automaticamente o valor "dd/MM/yyyy".

## Exemplos

1. Assumindo como parâmetro a referência do arquivo, uma lista de lista com os dados a serem inseridos e o nome da folha "Folha 1", a função preencherá o arquivo com estes dados a partir da primeira linha.
2. Assumindo como parâmetro a referência do arquivo, uma matriz com os dados a serem inseridos e o número da linha 3, a função preencherá o arquivo com estes dados a partir da terceira linha.
