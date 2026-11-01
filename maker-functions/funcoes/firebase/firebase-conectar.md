---
title: "Firebase - Conectar"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Cliente, Servidor

## Descrição

Efetua a conexão com o banco de dados Firebase. Nos casos de utilização no Mobile, o banco a ser conectado será o configurado no projeto cadastrado no Firebase.

## Parâmetro(s)

1. Caminho do arquivo de conexão '.json' (No Maker Mobile, será obtido automaticamente. Informar o JSON de conexão quando utilizada na camada Cliente). (Ver observação 5)
2. URL do banco (No Maker Mobile e na camada Cliente, será obtido automaticamente).
3. Fluxo de Callback (Aplicado apenas para camada Cliente, este parâmetro recebe o nome do fluxo que será executado quando a conexão com o banco for estabelecida).
4. Lista de Parâmetros para o fluxo indicado no 3º parâmetros.

## Retorno

Retorna a referência da conexão quando utilizado na camada servidor ou mobile (quando utilizada na camada Cliente, o retorno será nulo).

## Observações

1. Os dados para conexão com o banco de dados são obtidos no cadastro do projeto no Console do Firebase.
2. Endereço do console do Firebase: https://console.firebase.google.com/
3. No Mobile o arquivo de configuração deverá ser upado no servidor do Maker Mobile através da opção "Configurações Adicionais" disponível na tela de exportação do projeto.
4. A leitura do arquivo "google-services.json" (Android) ou "google-services.plist" (iOS) será realizada de forma automática.
5. Para a camada cliente deverá ser o retorno da função JSON - Criar Objeto, copiar o JSON (texto) disponibilizado após configurar o projeto para Web no Firebase ( No link https://firebase.google.com/docs/web/setup?hl=pt-br e seção "Objeto de configuração do Firebase") . Para utilizar na camada servidor, deverá ser habilitado o Firebase Admin SDK conforme documentação: https://firebase.google.com/docs/admin/setup
