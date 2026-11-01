---
title: "Maker Mobile - Adicionando arquivo de configurações do Firebase"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/arquivo_firebase.html"
---

# Adicionando arquivo de configurações do Firebase

Para adicionar o arquivo de configurações do Firebase, é necessário configurar uma aplicação no console do Firebase. Para acessar o console utilize o link "[console.firebase.google.com](https://console.firebase.google.com/)".

- Clique no card para Adicionar projeto.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img1.png)
- Ao clicar no card, será exibido um pop-up para você definir as suas configurações, defina-as e clique em Criar projeto

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img2.png)
- Ao terminar de ser criado o projeto, selecione a plataforma desejada para a criação do app. Neste momento será utilizado o Android.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img3.png)
- Defina as configurações do seu aplicativo:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img4.png)
  - Nome do pacote do Android: é o nome do pacote que você configurou na tela de Exportação de projetos.
  - Apelido do aplicativo(opcional): é o apelido, ou segundo nome para o seu app no Firebase.
  - Certificado de assinatura de depuração SHA-1(opcional): caso utilize autenticação via SMS, defina o certificado "**D1:62:10:CD:4D:07:4F:99:04:B9:6B:20:13:B8:EA:64:36:43:40:E5**".
  - Clique em Registrar App
- Faça o download do arquivo google-services.json

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img5.png)

  Após o download, clique no texto "Pular para o console", na lateral esquerda. [Clique aqui para pular a configuração do app IOS](#upload)
- Para configurar para iOS, selecione a plataforma para a criação do app e defina suas configurações.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img6.png)
  - Código do pacote do iOS: é o nome do pacote que você configurou na tela de Exportação de projetos.
  - Apelido do aplicativo(opcional): é o apelido, ou segundo nome para o seu app no Firebase.
  - ID da App Store(opcional): Id do aplicativo na App Store.
  - Clique em Registrar App
- Faça o download do arquivo GoogleService-Info.plist

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img7.png)

  Após o download, clique no texto "Pular para o console", na lateral esquerda.
- Para inserir os arquivos Firebase, clique em configurações adicionais.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img8.png)
- Insira o arquivo para a plataforma desejada

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img9.png)

  Para iOS: GoogleService-Info.plist, para Android: google-services.json
- Na tela que é aberta, localize o arquivo Firebase referente a plataforma e faça o upload.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/img9.1.png)
- Agora, basta exportar para a plataforma desejada!
