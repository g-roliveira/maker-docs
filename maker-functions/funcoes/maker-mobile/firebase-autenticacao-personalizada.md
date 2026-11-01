---
title: "Firebase - Autenticação Personalizada"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Essa função realiza o login do usuário no Firebase através de um Token personalizado enviado pela retaguarda.

## Parâmetro(s)

1. Token personalizado (gerado através do SDK Admin/Retaguarda). (Letras)
2. Fluxo de sucesso. (Fluxo)
3. Parâmetros de sucesso. (Variante)
4. Fluxo de Erro. (Fluxo)
5. Parâmetros de Erro. (Variante)

## Observações

1. É necessário ativar esse recurso nas configurações de autenticação no Painel do Firebase.
2. Endereço do console do Firebase: "https://console.firebase.google.com/".
3. O arquivo de configuração deverá ser upado no servidor do Maker Mobile através da opção "Configurações Adicionais" disponível na tela de exportação do projeto.
4. A leitura do arquivo "google-services.json" (Android) ou "google-services.plist" (iOS) será realizada de forma automática.
