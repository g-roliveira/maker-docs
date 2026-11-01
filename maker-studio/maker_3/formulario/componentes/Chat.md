---
title: "Chat"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/Chat.html"
---

## Chat

O componente Chat foi criado para ser utilizado na interação entre usuários organizados por status: online onde pode ser visualizado um círculo com a área de cor verde e offline na cor cinza.
Para exemplificar a utilização do Chat – Maker, faremos uma simulação de interação entre os integrantes alocados no grupo de um determinado projeto em desenvolvimento.

**Utilizando o componente chat atribuído em um formulário**

Em um projeto Maker, no formulário principal, navegue até paleta de componentes, escolhendo o ícone do componente chat e insira-o no mesmo.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/componenteChat.png)
Imagem 1 - Componente chat

No próximo passo, navegue até as Propriedades do componente.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/PropriedadesChat.png)Imagem 2 - Propriedades referentes ao componente Chat.

As principais propriedades para um bom funcionamento do componente são:

1- **Título**: Atribua um título ao componente. Esta opção só poderá ser visualizada se a opção Deslizante estiver como "Sim";

2- **Usuários do Sistema:** select na tabela padrão FR_USUÁRIOS que permitirá a visualização do ID e NOME dos usuários cadastrados no sistema;

3- **Exibir Título:** lista simples com os valores **Sim** e **Não** para exibição do título na barra do componente.  Esta opção só poderá ser visualizada se a opção Deslizante estiver como "Sim";

4- **Exibir Pesquisa:** lista simples com os valores **Sim** e **Não** para exibição da opção de pesquisar por usuários cadastrados no sistema;

5- **Texto da Pesquisa:** atribua um texto quando o campo estiver nulo, que ficará visível no campo pesquisar. *Exemplo:* "Procurar por usuários";

6- **Criar Log :** lista simples: com os valores **Sim** e **Não**, ao ativar esta opção será criada automaticamente uma pasta no diretório:
**C:\...\Softwell Solutions\Webrun 3\tomcat\webapps\webrun\tmp\Chat**, onde será possível ver todos os registros dos usuários cadastrados no sistema;

7- **Tempo de Atualização:** atribua um valor para ser atualizado a lista de usuários *online* ;

8- **Exibir Enviar para Todos:** lista simples com os valores **Sim** e **Não** para exibição da opção Enviar Mensagens para todos os usuários;

9- **Altura do Chat:** atribua um valor para altura do Chat;

10-**Largura do Chat**: atribua um valor para a largura do Chat;

11**-Deslizante:** lista simples com os valores **Sim** e **Não**, onde caso "Sim" o Chat poderá ser inserido em qualquer formulário do sistema;

12-**Posição Deslizante:** lista simples com os valores **Direita** e **Esquerda**, onde o usuário só poderá visualizá-la se a opção Deslizante estiver marcada como "Sim". No Webrun, o componente será exibidos nos cantos direito ou esquerdo da tela;

Ao terminar, salve o formulário e acesse o Webrun para visualizá-lo.

### Webrun - Componente Chat

Nesta propriedade serão informados todos os formulários que serão representados por abas no formulário de trabalho. Para tal tarefa, existe uma tela de escolha que permite selecioná-los.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ChatNoFormulario.png)

Imagem 3 - Componente Chat no Webrun

Nesta janela, o usuário poderá enviar uma mensagem para todos os usuários ou escolher através do do *check Box*, apenas os usuários que encontram-se *online.*

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/EnviarMsg4aLL.png)

Imagem 4 - Enviar Mensagem para todos

###

Utilizando o componente Chat com a opção Deslizante "Sim"

A opção Deslizante Sim, permite ao usuário uma maior liberdade quanto ao local onde irá inserido o componente Chat. Para utilizá-lo, primeiramente escolha o local onde deseja inseri-lo. Logo após, será necessário observar as seguintes propriedades do componente:

1-Título;
2-Exibir Título: Sim ou Não;
3- Deslizante: Sim;
4- Posição Deslizante: Direita ou Esquerda;

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ChatFormPrincipal.png)
Imagem 5 - Formulário Principal com o componente Chat

Salve o formulário principal e acesse o Webrun para visuálizá-lo.

**Webrun- Componente Chat com a opção Deslizante "Sim"**

Neste exemplo, o chat foi inserido no formulário Principal do template Red. Observe a imagem abaixo:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/WebrunDeslizante.png)
Imagem 6 - Componente Chat com a opção Deslizante = Sim

### Funções do componente Chat

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/funcao2.png)
Imagem 7 - Chat - Obter lista de usuários *Online*

Obtém uma lista com todos usuários online.

**Parâmetros:**
Não Possui.

**Retorno:**
Lista de usuários (Variante)

**Observação:**
1. A lista de usuários possui uma lista para cada usuário com 3 campos que são compostos por Nome Completo, ID e a última vez que o contatou o servidor em milissegundos desde 1970.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/funcao1.png)
Imagem 8 - Chat - Recarregar Componente Chat

Recarrega todo o componente Chat, atualizando a lista de usuários do sistema.

**Parâmetros:**
1. Componente

**Retorno:**
Não possui.

Ambas compatíveis com todas as camadas.

____________________________________________________________________________

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
