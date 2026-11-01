---
title: "Biometria Facial"
source_url: "https://manual.softwell.com.br/docs/webrun/autenticacao_biometria_facial"
---

A **Biometria Facial** permite confirmar a identidade do usuário usando a câmera (webcam), com **prova de vida** (piscar os olhos ou virar o rosto) para evitar tentativas de fraude por meio de fotos.

Essa funcionalidade pode ser usada para:

- **Validar se o rosto confere com o usuário informado**
- **Autenticar o usuário no login por biometria facial**
- **Aumentar a segurança do acesso ao sistema**

---

**1) O que você precisa antes de usar**

- Computador com **câmera funcionando**
- Navegador atualizado (recomendado: **Google Chrome** ou **Microsoft Edge**)
- Permitir acesso à câmera quando solicitado
- Boa iluminação no rosto

---

**2) Como funciona o fluxo de autenticação**

![Template de Login](https://manual.softwell.com.br/assets/images/destaque_biometria_facial-ae623709b1156691ecc5843e38712f92.png)

1. O usuário clica no botão de biometria facial no formulário de login.
2. Um modal é aberto com a câmera ativada.
3. O sistema detecta o rosto automaticamente e solicita uma **prova de vida** (piscar os olhos ou virar o rosto).
4. Após a prova de vida, a foto é capturada e enviada para verificação.
5. Uma barra de progresso indica as etapas: **Enviando &gt; Processando &gt; Verificando**.
6. Se identificado, o login é realizado automaticamente.
7. Se não identificado, uma mensagem de erro é exibida e o usuário pode tentar novamente.

---

**3) Como ativar a funcionalidade no formulário de login**

Por padrão, o **formulário de login** não vem com o botão de biometria facial configurado.

Para que os usuários consigam utilizar a Biometria Facial, é necessário:

1. **Inserir e posicionar um botão no formulário de login**
2. **Vincular esse botão a um Fluxo (evento)** já existente no projeto

> Os fluxos já estarão disponíveis no seu projeto e **não precisam ser criados**.
> Você apenas deverá selecioná-los e vinculá-los ao botão.

**Fluxos disponíveis no projeto**

- Template - Login - Validar face do usuário
- Template - Login - Autenticar com Biometria Facial

---

**4) Passo a passo: Inserir o botão no formulário de login**

**4.1) Abra o formulário de Login**

1. Acesse o **módulo de edição** do sistema.
2. Localize o **formulário/tela de Login**.
3. Abra-o em modo de edição.

**4.2) Insira o botão de biometria facial**

1. Dentro do formulário de Login, insira um componente **Botão**.
2. Posicione o botão onde preferir.

Sugestões de texto para o botão:

- **Entrar com Face**
- **Biometria Facial**
- **Reconhecimento Facial**

Sugestões de ícones (opcional):

- Câmera
- Usuário
- Biometria

**4.3 Vincule o fluxo ao botão**

1. Selecione o botão inserido.
2. Vá para a aba de **Eventos**.
3. Vincule o evento de clique ao fluxo desejado:

   - **Template - Login - Validar face do usuário** (valida a identidade sem realizar o login)
4. Salve as alterações.

---

**5) Dicas para evitar falhas**

- Utilize boa iluminação no rosto (evite contraluz).
- Mantenha o rosto voltado para a câmera.
- Evite acessórios que dificultem a identificação facial (óculos escuros, máscaras, bonés etc.).
- Certifique-se de que a câmera esteja limpa e bem posicionada.
- Utilize uma foto de cadastro recente e com boa qualidade.

---

**6) Mensagens e seus significados**

| Mensagem | O que significa | O que fazer |
| --- | --- | --- |
| "Carregando..." | Modelos de detecção facial sendo carregados | Aguarde |
| "Aguardando câmera..." | A câmera está sendo inicializada | Aguarde e verifique as permissões |
| "Centralize o rosto" | O rosto não foi detectado na área correta | Ajuste sua posição |
| "Pisque os olhos" | Prova de vida solicitada | Pisque naturalmente |
| "Enviando..." / "Processando..." / "Verificando..." | Imagem em análise | Aguarde |
| "Identidade confirmada." | Autenticação realizada com sucesso | Login efetuado automaticamente |
| "Não identificado." | O rosto não foi reconhecido | Tente novamente com melhor posicionamento e iluminação |
| "Rosto não reconhecido. Confira a iluminação..." | Baixa similaridade entre a imagem capturada e a foto cadastrada | Melhore a iluminação e tente novamente |
| "Qualidade insuficiente. Aproxime-se da câmera." | A imagem capturada possui baixa qualidade | Aproxime-se e centralize o rosto |
| "Serviço indisponível. Contate o suporte." | O serviço de reconhecimento facial está indisponível | Contate o administrador do sistema |
| "Servidor demorando. Tente novamente." | O tempo limite de resposta foi excedido (timeout de 30 segundos) | Tente novamente ou verifique sua conexão |
