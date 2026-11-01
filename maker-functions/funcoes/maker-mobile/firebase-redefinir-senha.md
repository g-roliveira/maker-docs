---
title: "Firebase - Redefinir senha"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Essa função redefine a senha correspondente ao e-mail informado via parâmetro. Lembrando que esse e-mail deve constar na lista de usuários cadastrados no projeto do Firebase.

## Parâmetro(s)

1. E-mail. (Letras)
2. Fluxo de Sucesso. (Fluxo)
3. Parâmetros adicionais para o fluxo de sucesso. (Lista)
4. Fluxo de Erro. (Fluxo)
5. Parâmetros adicionais para o fluxo de erro. (Lista)

## Retorno

Não Possui.

## Observações

1. Caso o e-mail conste na lista de usuários cadastrados, o fluxo de sucesso será chamado recebendo no primeiro parâmetro um objeto JSON com as seguintes informações:
&#123;
"status": "OK",
"mensagem":"Um link foi enviado ao seu e-mail para redefinir a sua senha."
&#125;
2. Caso alguma inconsistência seja encontrada, o fluxo de erro será chamado recebendo no primeiro parâmetro um objeto JSON com as seguintes informações:
&#123;
"status": "ERROR",
"mensagem": "&lt;erro que ocorreu&gt;"
&#125;
