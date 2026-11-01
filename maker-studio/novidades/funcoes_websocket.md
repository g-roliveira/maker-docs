---
title: "Componente Integração"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/funcoes_websocket.html"
---

# Funções conexão com WebSocket

WebSocket é uma tecnologia que torna possível abrir uma sessão de comunicação interativa entre o navegador do usuário e um servidor.

As novas funcionalidades da tecnologia WebSocket traz completa liberdade para o desenvolvedor estabelecer regras de negócio ao executar cada ação do WebSokcet Servidor e Cliente. O WebSocket é utilizado sempre que for necessária uma conexão de baixa latência(quase em tempo real) entre cliente e servidor, gerando uma grande possibilidade de aplicações a serem criadas, dentre elas:

- Chat - abrir um canal de conversa com um ou mais usuários simultâneamente.
- Funcionalidades real-time - por exemplo, atualização em tempo real de redes sociais.
- Jogos on-line para conexão de vários jogadores.

## Abaixo segue um exemplo da utilização desta funcionalidade.

## Funções que serão utilizadas:

- **WebSocket - Obter Endpoint**
- **É nulo ou vazio.**
- **Definir variável de sessão.**
- **Alterar valor do componente.**
- **Obter valor do componente.**
- **WebSocket - Conectar ao Servidor**
- **WebSocket - Servidor em uso?**
- **WebSocket - Enviar mensagem cliente servidor.**
- **WebSocket - Fechar conexão.**
- **Obter Variável de Formulário**

## Estrutura dos fluxos:

### Fluxo WebSocket Chat - Botão alocar Endpoint.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxos/1_fluxo_criar_websocket.png)

1. Utilizamos a função **WebSocket - Obter Endpoint** para que um Endpoint seja alocado, armazenando o caminho deste Endpoint em uma variável. Não passamos nenhum parâmetro pois não temos regras a serem executadas na camada servidor.

   **Visualizar WebSocket - Obter Endpoint**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/funcao_obter_endpoint.png)
2. Utilizamos a função **É Nulo ou Vazio** para verificar se o valor retornado é vazio:

   - Se sim, todos os endpoints estão alocados no momento e não foi possível alocar um endpoint novo
   - Se não, o endpoint foi alocado corretamente.**Visualizar É Nulo ou Vazio**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/funcao_eh_nulo.png)
3. Declaramos este caminho como uma variável de sessão com a função **Definir variável de sessão**, para que possa ser regatada por outros fluxos.

   **Visualizar Definir variável de sessão**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/definir_endpoint_variavel_global.png)
4. Utilizamos a função **Alterar Valor do Componente** para alterar o valor do componente referente à caixa do nome no Endpoint.

   **Visualizar Alterar Valor do Componente**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/exibir_nome_endpoint.png)
5. Utilizamos a função **Alterar Valor do Componente** para alterar o valor do componente referente à caixa de mensagens, mostrando um aviso.

   **Visualizar Alterar Valor do Componente**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/alterar_caixa_de_mensagem.png)

### Fluxo WebSocket Chat - Botão conectar ao Endpoint.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxos/2_fluxo_conectar_ao_endpoint.png)

As funções já utilizadas em fluxos anteriores não serão referenciadas novamente, apenas citadas.

1. Utilizamos a função **Obter valor do componente** para obter o nome do usuário e o caminho do Endpoint a qual irá ser conectado.

   **Visualizar Obter valor do componente**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/funcao_obter_valor_do_componente.png)
2. Verificamos se o campo Nome está preenchido com a função **É Nulo ou Vazio.** Se não: mensagem de erro é impressa no campo de mensagens.
3. Chamada do fluxo servidor **WebSocket Chat - Checar se o servidor está em uso** é feita para checar se o servidor existe e/ou está alocado, pois caso contrário não pode-se conectar a ele.

   **Visualizar WebSocket Chat - Checar se o servidor está em uso**

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxos/4_fluxo_em_uso.png)

   WebSocket Chat - Checar se o servidor está em uso

   1. Passamos como parâmetro de entrada do fluxo o caminho do endpoint

      **Visualizar parâmetro de entrada:**
      ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxo_servidor_em_uso_params.png)
   2. Utilizamos a função **WebSocket - Servidor em uso?** para retornar uma variável lógica, identificando se o servidor está em uso, para ser retornado ao fluxo acima a este.

      **Visualizar WebSocket - Servidor em uso?**
      ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/funcao_servidor_em_uso.png)
   3. O fluxo retornará a variável do tipo lógico retornada pela função **WebSocket - Servidor em uso?**.

      **Visualizar retorno do fluxo:**
      ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxo_servidor_em_uso_retorno.png)
4. Enfim, utilizamos a função **WebSocket - Conectar ao Servidor**, passando o caminho do endpoint, fluxo "Ao entrar", "Ao receber mensagem", "Ao sair" e "Ao ocorrer erro" (estes fluxos estão referenciados na sessão abaixo à "Estrutura dos fluxos"), para estabelecer a conexão e armazenamos a instância na variável de formulário para que funções do cliente possam ser utilizadas.

   **Visualizar WebSocket - Conectar ao Servidor**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/funcao_conectar_ao_servidor.png)

### Fluxo WebSocket Chat - Botão desconectar.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxos/3_fluxo_botao_desconectar.png)

As funções já utilizadas em fluxos anteriores não serão referenciadas novamente, apenas citadas.

1. Utilizamos a função **Obter Variável de formulário** para resgatar a instância da conexão do cliente, possibilitando fechar a conexão.

   **Visualizar Obter Variável de formulário**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/funcao_obter_variavel_de_formulario.png)
2. Em seguida, obtemos o nome do usuário para enviar mensagem aos outros clientes avisando a desconexão utilizando a função **WebSocket - Enviar mensagem cliente servidor**. Cada cliente receberá a mensagem e acionará automaticamente o seu fluxo "Ao receber mensagem".

   **Visualizar WebSocket - Enviar mensagem cliente servidor**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/funcao_enviar_mensagem_cliente_servidor_desconexao.png)
3. Enfim, fechamos a conexão do cliente com a função **WebSocket - Fechar conexão.**.

   **Visualizar WebSocket - Fechar conexão.**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/funcao_fechar_conexao.png)

### Fluxo WebSocket Chat - Botão liberar Endpoint.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxos/5_fluxo_botao_liberar_endpoint.png)

As funções já utilizadas em fluxos anteriores não serão referenciadas novamente, apenas citadas.

1. Obtemos o nome do endpoint que será liberado, chamamos o fluxo **WebSocket Chat - Liberar endpoint** e alteramos o valor da caixa de mensagem com uma mensagem avisando que o endpoint foi liberado.
2. Chamada do Subfluxo **WebSocket Chat - Liberar Endpoint**.

   **Visualizar WebSocket Chat - Liberar Endpoint**

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxos/6_fluxo_liberar_endpoint.png)
   1. O caminho do endpoint é passado como parâmetro de entrada do fluxo.

      Visualizar parâmetro de entrada:
      ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxo_liberar_endpoint_params.png)
   2. Utilizamos a função **WebSocket - Liberar Endpoint** para que o Endpoint seja liberado e possa ser alocado novamente.

      **Visualizar WebSocket - Liberar Endpoint**
      ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/funcao_liberar_endpoint.png)

### Fluxo WebSocket Chat - Botão enviar mensagem.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxos/7_fluxo_botao_enviar.png)

As funções já utilizadas em fluxos anteriores não serão referenciadas novamente, apenas citadas.

1. Obtemos o nome do usuário que está enviando a mensagem e o conteúdo da mensagem a ser enviada para o servidor com a função **Obter valor do componenete**.
2. Utilizamos a função **Obter Variável do Formulário** para resgatar a referência da conexão do cliente.
3. Com a referência da conexão, podemos enviar a mensagem através da função **WebSocket - Enviar mensagem cliente servidor.**.
4. Enfim, limpamos a caixa de texto onde a mensagem foi inserida com a função **Alterar valor do componenete.**

## Fluxos passados na função **WebSocket - Conectar ao Servidor.**

### Fluxo WebSocket Chat - Fluxo Cliente ao entrar.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxos/8_fluxo_ao_entrar.png)

As funções já utilizadas em fluxos anteriores não serão referenciadas novamente, apenas citadas.

1. Automaticamente, todo fluxo "Ao entrar" recebe um parãmetro de entrada para a referência da conexão.

   **Visualizar Parâmetro de Entrada**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxo_de_conexao/funcoes_ao_entrar/5_params_entrada_fluxo.png)
2. Com a referência da conexão, utilizamos a função **WebSocket - Checar status da conexão** e a função **Igual** para verificar se a conexão foi estabelecida.

   **Visualizar Igual**

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxo_de_conexao/funcoes_ao_entrar/1_funcao_igual.png)

   Observação sobre o retorno da função:

   0. Conectando
   1. Conectado
   2. Fechando
   3. Fechado
3. Caso a conexão não seja estabelecida, o campo mensagens mostrará a mensagem de erro utilizando a função **Alterar Valor do Componente**.
4. Caso a conexão tenha sido estabelecida com sucesso, seguimos com o fluxo montando a mensagem que será enviada para todos os clientes com a função **Concatenação.**

   **Visualizar Concatenação.**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxo_de_conexao/funcoes_ao_entrar/2_funcao_concatenacao.png)
5. Em seguida, enviamos a mensagem para todos os clientes com a função **WebSocket - Enviar mensagem cliente servidor**, alertando de que o usuário entrou no Chat.
6. Para finalizar, componentes do formulário são habilitados e desabilitados com a função **Habilitar Componente** de acordo com as regras de negócio propostas.

   **Visualizar Habilitar Componente**
   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxo_de_conexao/funcoes_ao_entrar/4_funcao_habilitar_componente.png)

### Fluxo WebSocket Chat - Fluxo Cliente ao desconectar.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxos/11_fluxo_ao_desconectar.png)

- Este fluxo apenas utiliza funções já explicadas anteriormente, habilitando e desabilitando componentes com a função **Habilitar Componente** e limpando os campos com a função **Alterar Valor do Componente.**

### Fluxo WebSocket Chat - Fluxo Cliente ao receber mensagem e Fluxo WebSocket Chat - Fluxo de Erro Cliente.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/websocket/fluxo_de_conexao/funcoes_ao_receber_mensagem/1_funcao_exibir_mensagem.png)

- Ambos fluxos possuem apenas esta função **Alterar Valor do Componente**, alterando o conteúdo do campo de mensagens.

## Para ver o projeto em andamento, assista a demonstração no vídeo abaixo:

[Clique aqui para baixar Exemplo WebSocket](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_WebSocket.zip)
