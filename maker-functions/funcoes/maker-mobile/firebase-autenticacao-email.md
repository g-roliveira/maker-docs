---
title: "Firebase - Autenticação Email"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Essa função realiza o login do usuário na aplicação através do e-mail e senha do usuário passados por parâmetro, caso o e-mail não estiver cadastrado será criada uma nova conta para esse usuário com o e-mail e senha passados e o login será realizado.

## Parâmetro(s)

1. E-mail do usuário. (Letras)
2. Senha do usuário. (Letras)
3. Fluxo de sucesso. (Fluxo)
4. Parâmetros de sucesso. (Variante)
5. Fluxo de Erro. (Fluxo)
6. Parâmetros de Erro. (Variante)

## Observações

1. É necessário realizar as configurações no Firebase.
2. Endereço do console do Firebase: "https://console.firebase.google.com/".
3. O arquivo de configuração deverá ser upado no servidor do Maker Mobile através da opção "Configurações Adicionais" disponível na tela de exportação do projeto.
4. A leitura do arquivo "google-services.json" (Android) ou "google-services.plist" (iOS) será realizada de forma automática.
