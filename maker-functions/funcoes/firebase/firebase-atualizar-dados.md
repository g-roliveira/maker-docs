---
title: "Firebase - Atualizar Dados"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Cliente, Servidor

## Descrição

Atualiza ou insere um nó no banco de dados Firebase.

## Parâmetro(s)

1. Referência da Conexão. (Variante) (Ver observação 1)
2. Nó de Inserção/Atualização. (Variante)
3. ID do Registro. (Variante)
4. Dados (JSON). (Variante)
5. Assíncrono? (Lógico) (Ver observação 3)
6. Fluxo de sucesso. (Fluxo)
7. Parâmetros do fluxo de sucesso (Lista de Parâmetros). (Variante)
8. Fluxo de erro. (Fluxo)
9. Parâmetros do fluxo de erro (Lista de Parâmetros). (Variante)

## Retorno

ID Gerado. (No caso de inserção, ao atualizar, será retornado o mesmo ID), caso a função seja assíncrona, o fluxo de sucesso receberá o ID no primeiro parâmetro.

## Observações

1. No 1º Parâmetro caso seja Maker Mobile e na camada Cliente, será obtido automaticamente.
2. Caso o ID não seja informado, os dados serão inseridos no banco. Caso o ID seja informado, os dados serão atualizados
3. Ao passar esse parâmetro como TRUE, a função irá se comportar de forma assíncrona. Após a escrita, o fluxo de sucesso é chamado recebendo no 1º Parâmetro o ID do registro, caso contrario, o fluxo de erro será acionado recebendo a causa do erro no 1º Parâmetro.
