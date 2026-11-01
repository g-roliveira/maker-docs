---
title: "API Maker - Facebook"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/facebook.html"
---

# Redes Sociais - Facebook

Com intuito de aperfeiçoar a integração do Maker com redes sociais, desenvolvemos 8 (oito) funções essenciais para usuários que desejam adicionar mais esta novidade às suas aplicações. São elas:

- [Comentários](#Comentários)
- [Compartilhar](#Compartilhar)
- [Exibir Caixa de Fãs](#Exibir Caixa de Fãs)
- [Exibir Postagem](#Exibir Postagem)
- [Habilitar Curtir/Recomendar](#Habilitar Curtir/Recomendar)
- [Login/Logout](#Login/Logout)
- [Obter Status do Aplicativo](#Obter Status do Aplicativo)
- [Sugerir Recomendação](#Sugerir Recomendação)

**Nível**: Básico

#### **Atenção!**

Para utilizar qualquer função associada a API do Facebook, cada usuário deverá obter uma chave de identificação, chamada APP ID que pode ser encontrada [aqui](add) .
**Tutorial**:

**Como posso utilizar as funções Facebook no meu projeto?**

**Criando a interface principal**

Em um projeto pré-existente, crie um novo formulário.

- Com o Maker aberto, expanda o gerenciador de objetos e clique com o botão direito no grupo ‘Formulários’ e clique em **Novo,** conforme imagem abaixo**:**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_a.png)

1. No assistente de criação, defina o nome do seu formulário e clique em OK. Em seguida, configure as propriedades do formulário, clicando com o botão direito do  *mouse* de acordo com as imagens abaixo:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_0.png)

Criando e nomeando um novo formulário.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_23.png)

Configurando as propriedades do formulário.

2. Em seguida, adicione um campo texto para entrada do APP ID e associe uma moldura para cada função que requeira este componente.

3. Clique com o botão direito do *mouse* sobre o botão **exibir** e escolha o evento **Ao Clicar**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_c.png)

4. Neste exemplo, criamos 6 processos até aqui. Observe abaixo:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_d.png)

##

Esta função abre uma caixa de comentários no componente moldura.

1. Moldura (Componente);

2. AppID do Facebook (Letras);

3. Tema: "light" ou "dark" (Letras);

4. Link da página que será associada aos comentários (Letras);

5. Número de postagens exibidas (Inteiro, opcional);

6. Ordem: "social", "reverse_time" ou "time" (Letras, Opcional);

**Retorno:**

Não possui.

 **Observações:**

1. O número de postagens mínimo é de "1" e o máximo "10";

2. Caso o 6º parâmetro não seja informado, o valor padrão adotado é "social";

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_6.png)

-Facebook Comentários

##

Esta função habilita a opção de compartilhar um determinado link/página.

Moldura (Componente);

Layout: "box_count", "button_count", "button", "icon_link", "icon" ou "link" (Letras, Opcional);

Link da página a ser compartilhada (Letras);
 **Retorno:**
Não Possui.

 **Observações:**

A altura do botão "compartilhar" é determinada pelo layout escolhido no 2º parâmetro. A largura do botão será determinada pela largura do componente moldura.
![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_5.png)

##

Esta função exibe uma postagem do Facebook no componente moldura passado como parâmetro.

 **Os parâmetros requeridos são:**

Parâmetros:

1. Moldura (Componente);

2. Link da postagem do Facebook (Letras);

**Retorno:**

Não possui.

 **Observações:**

Não possui.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_7.png)

Facebook - Exibir Postagem

##

Esta função habilita a opção de curtir/recomendar para uma determinada página/link.
**Parâmetros**:

1. Moldura (Componente);

2. Layout: "standard", "box_count", "button_count" ou "button" (Letras, Opcional);

3. Ação: "like" ou "reccomend" (Letras, Opcional);

4. Mostrar foto do perfil? (Lógico, Opcional);

5. Link da página a ser curtida/recomendada (Letras, Opcional);

6. Incluir compartilhar? (Lógico, Opcional);

**Retorno:**

Não possui.

 **Observações:**

1. O 4º só é aplicado para o layout "standard";

2. Caso o 5º parâmetro não seja informado, a página atual será adotada.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_8.png)

##

Esta função habilita a opção de login/logout no Facebook.

1. Moldura (Componente);

2. AppID do Facebook (Letras);

3. Habilitar Sair? (Lógico);

4. Quantidade de linhas de perfis a serem exibidos (Inteiro, Opcional);

5. Fluxo a ser executado no login/logout (Fluxo, Opcional);

6. Parâmetros adicionais para o fluxo;

7. Lista de permissões requisitadas (Variante, Opcional);

8. Tamanho do botão de login;

9. Mostrar Foto do Perfil

**Retorno:**

Não possui.

 **Observações:**

1. Por padrão, somente o perfil público do usuário é requisitado (7º Parâmetro). A lista completa de permissões poderá ser obtida em  [Permissões Facebook v2.0](https://developers.facebook.com/docs/facebook-login/permissions/v2.0#reference)

2. As seguintes opções são válidas para o 8º parâmetro: "small", "medium", "large" ou "xlarge";

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_9.png)

##

Esta função verifica o estado do aplicativo e se a sessão do usuário está definida como logado ou não no Facebook.

1. Fluxo que receberá o Status do Aplicativo (Fluxo);

2. Lista de Parâmetros do fluxo (Variante, Opcional);

**Retorno:**

Não possui.

 **Observações:**

1. O fluxo chamado no primeiro parâmetro receberá o Status do aplicativo. O status pode ser "connected" quando o usuário autenticou a permissão do aplicativo no Facebook, "not_authorized" quando está logado no Facebook mas não autenticado no Aplicativo ou "unknown" quando não está logado no Facebook, então não se sabe se está autenticado no Aplicativo.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_10.png)

##

Substitui um componente Moldura por uma quadro de recomendações padrão do Facebook, onde o usuário poderá sugerir postagens de sites externos através de links.  **Os parâmetros requeridos são:**

1. App ID do Facebook (Letras)

2. Ação: "like" ou "recommend", padrão é "like" (Letras, Opcional)

3. Link da página a ser curtida, pode ser uma página do Facebook, o padrão é a página atual do botão (Letras, Opcional)

4. Lista de domínios de sites que aparecerão como recomendação, o padrão é o domínio do site especificado no parâmetro anterior (Variante, Opcional)

5. Número de recomendações que serão mostradas, o padrão são 2 e o máximo são 5 (Inteiro, Opcional)

6. Lado que ficará a Barra de Recomendações, podendo ser "left" ou "right", o padrão é "right" (Letras, Opcional)

**Retorno:**

Não possui.

 **Observações:**

1. App ID é obtido no link do  [Facebook Developers](https://developers.facebook.com/apps), após criar um novo App.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_11.png)

##

Esta função permite a visualização das últimas publicações da página e/ou os usuários do Facebook que curtem a página.

1. Componente Moldura (Componente)

2. Link da página do Facebook a ser curtida (Letras)

3. Tema: "light" ou "dark", padrão é "light" (Letras, Opcional)

4. Mostrar cabeçalho? (Lógico, Opcional)

5. Mostrar borda da caixa? (Lógico, Opcional)

6. Mostrar fotos dos perfis? (Lógico, Opcional)

7. Mostrar últimas postagens da página? (Lógico, Opcional)

**Retorno:**

Não possui.

 **Observações:**

1. O 4º e o 5º possuem o valor padrão "verdadeiro";

2. Por padrão, as fotos dos perfis não são exibidas (6º parâmetro);

3. Por padrão, as últimas postagens da página não são exibidas (7º parâmetro);

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_12.png)

Ao inserir em seu projeto as funções necessárias, salve todo o projeto e execute-o no Webrun

## Webrun

Ao executar o projeto no Webrun, o mesmo ficará assim:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_16.png)

Neste exemplo o parâmetro APP ID foi passado manualmente e para que as outras funções que precise do mesmo funcione, foi preciso digitá-lo no campo APP ID.

Mesmo com o Facebook logado, será necessário que o usuário dê permissão ao aplicativo criado.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/redessociais/facebook/apiFb/form_17.png)

[Voltar](../../novidades/releasecompleto)

---
