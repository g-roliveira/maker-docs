---
title: "Nova API de Mensagens"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/nova_api_message.html"
---

ATENÇÃO: Para obter os novos recursos da API de Mensagens para projetos migrados, é necessário realizar a importação manualmente do FRZ no link a seguir: Para os projetos criados a partir da última versão, este procedimento não se faz necessário

Com um layout moderno e com novas funcionalidades, a nova API de Mensagens permite ao desenvolvedor a liberdade de configurar as suas mensgens executando regras assíncronas após a interação do usuário, trazendo novas experiências.

### A nova API de mensagens conta com as seguintes funcionalidades:

- Mensagem de alerta.

Utilizada para comunicar o usuário sobre alguma ação feita no sistema, a nova mensagem de alerta conta com novas funcionalidades que melhoram a experiência com o usuário, possibilitando definir:

- O título da mensagem.

- O texto à ser exibido pela mensagem.

- O tempo que a mensagem deverá permanecer em tela. (caso não seja especificado, a mensagem só será fechada após o clique no botão de confirmação)

- A posição que a mensagem deverá ter em tela.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/mensagem_alerta.png)

- Mensagem de erro.

Utilizada para interromper alguma ação indevida feita no sistema, assim como validações das regras de negócio, a nova mensagem de erro além de contar com um design mais moderno, disponibiliza também novas funcionalidades que melhoram a experiência com o usuário, possibilitando definir:

- O título da mensagem.

- O texto à ser exibido pela mensagem.

- O tempo que a mensagem deverá permanecer em tela.

- A posição que a mensagem deverá ter em tela.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/mensagem_erro.png)

- Mensagem de interação de confirmação.

Utilizada para solicitar ao usuário alguma resposta sobre a ação efetuada no sistema, a nova mensagem de interação além de contar com um design mais moderno, disponibiliza também novas funcionalidades que melhoram a experiência nas tomadas de decisão de acordo com a resposta obtida do usuário, possibilitando definir:

- O título da mensagem.

- O texto à ser exibido pela mensagem.

- Fluxo a ser executado caso o usuário confirme. (A execução do fluxo é assícrona, ou seja, o fluxo onde esta interação é chamada não é interrompido)

- Parâmetros do fluxo a ser executado caso o usuário confirme.

- Fluxo a ser executado caso o usuário cancele. (A execução do fluxo é assícrona, ou seja, o fluxo onde esta interação é chamada não é interrompido)

- Parâmetros do fluxo a ser executado caso o usuário cancele.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/mensagem_interacao_confirmacao.png)

- Mensagem de alertar aguardando texto.

Utilizada para solicitar ao usuário alguma informação que deseja obter, a nova mensagem de alerta aguardando texto possibilita definir:

- O título da mensagem.

- O texto à ser exibido pela mensagem.

- O texto quando nulo.

- Fluxo a ser executado caso o usuário confirme. (A execução do fluxo é assícrona, ou seja, o fluxo onde esta interação é chamada não é interrompido)

- Parâmetros do fluxo a ser executado caso o usuário confirme.

- Fluxo a ser executado caso o usuário cancele. (A execução do fluxo é assícrona, ou seja, o fluxo onde esta interação é chamada não é interrompido)

- Parâmetros do fluxo a ser executado caso o usuário cancele.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/mensagem_alertar_aguardando_texto.png)

No webrun irá se apresentar da seguinte forma.

## **Utilizando a nova API de Mensagens**
