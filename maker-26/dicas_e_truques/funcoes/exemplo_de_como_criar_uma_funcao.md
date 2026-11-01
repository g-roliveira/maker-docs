---
title: "Exemplo de Como Criar uma Função"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/funcoes/exemplo_de_como_criar_uma_funcao.htm"
---

Este passo a passo mostra a criação de uma função para ser utilizada no Maker.

A finalidade da função é abrir o formulário numa moldura no modo edição, navegação ou inserção.

Siga os passos abaixo para a criação da função:

1. Acesse o menu Arquivo e localize o submenu Funções....Será apresentada a tela Funções do fluxo de ações:

![image341.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image341.jpg)

2. Insira um novo registro. Clique em ![image71.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image71.gif) para apresentar a tela em branco:

![image953.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image953.jpg)

1. Na aba Geral, preencha os campos:

   1. Nome/Apelido - neste campo, deve-se colocar o nome da nova função a ser criada. Neste exemplo: Abrir Formulário numa Moldura - Modo;
   2. Descrição - neste campo, deve-se colocar a descrição do funcionamento e o que faz a função, pois esta documentação estará disponível na nova lista de funções primitivas do Maker. Para o exemplo:
      Esta função permite abrir um formulário dentro de um objeto do tipo moldura, passando como parâmetro o modo como o formulário será aberto. (-1 - Navegação, 1 - Modo de inserção): 1º parâmetro - Nome do formulário que possui o objeto moldura; 2º parâmetro - Nome do Objeto, moldura no qual o formulário será carregado; 3º Parâmetro - Nome do formulário que será carregado dentro da moldura; 4º Parâmetro - Valor lógico para controle da barra de rolagem; 5º Parâmetro - Modo em que será aberto o formulário.
   3. Nome real - neste campo, deve-se colocar o nome da função que deve obedecer às convenções da linguagem java. Nome utilizado no exemplo: openFrmModo;
   4. Parâmetros - neste campo, devem-se colocar os parâmetros que serão passados para função caso ela seja utilizada internamente. Parâmetros estes usados nesse exemplo: Formulário;Componente;Formulário;Lógico;Inteiro;
   5. Tipo de função - neste campo, deve-se informar a categoria da qual a função fará parte. Neste exemplo, a função foi posta na categoria Formulários;
   6. Retorno - neste campo, deve-se informar o valor a ser retornado, caso a função retorne algum valor. Neste exemplo, a função não está retornando nenhum valor, apenas executa uma operação;
   7. Resumo - neste campo, deve-se informar a descrição breve do uso desta função. Neste exemplo: Abrir Formulário numa moldura - Modo(Formulário;Componente;Formulário;Lógico;Modo);
   8. Compatibilidade - neste campo deve-se informar a camada nas quais a função é compatível, neste exemplo foi informada, a camada Cliente.

A aba Geral, ficará da seguinte forma:

![image957.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image957.jpg)

Observação: Uma função que for utilizada na camada Cliente deve ser escrita em javascript. Caso ela seja executada na camada Servidor, deve ser escrita utilizando Java.

2. Na aba Cliente, preencha os campos:

![image954.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image954.jpg)

1. Nome/Apelido - neste campo, deve-se colocar o nome da nova função a ser criada. Neste exemplo: Abrir Formulário numa Moldura - Modo;
2. JavaScript: neste campo, informe o código-fonte abaixo: /*Componentes e valores passados como parâmetro para função*/

function openFrmModo (formName, componentName, formTarget,scrollbar, mode)

&#123;

var component = controller.getElementById(componentName, formName);

if ((component) && (component instanceof HTMLGroupBox))

&#123;

var oldIframe = component.div.getElementsByTagName("iframe");

/*Verificação e definição da exibição ou não da barra de rolagem*/

var scrolling;

if (scrollbar)

&#123;

scrolling = 'yes';

&#125;

else

&#123;

scrolling = 'no';

&#125;

if (oldIframe.length &gt; 0)

&#123;

if (oldIframe.formOnUnLoadAction)

oldIframe.formOnUnLoadAction();

/*Criação uma variável para guardar o caminho do formulário a ser exibido dentro da moldura, passando também os parâmetros necessários*/

var url = 'form.jsp?sys='+sysCode+'&action=openform&formID='+formTarget

+'&align=0&mode='+mode+'&goto=-1&filter='+(filter?filter:'')+'&scrolling='+scrolling;

if (oldIframe[0].src.substr(oldIframe[0].src.length-url.length) != url)

&#123;

oldIframe[0].src = url

oldIframe[0].style.scrollbars = scrollbar;

alert(mode);

&#125;

&#125;

else

&#123;

ebfFrameOpenURL(formName, componentName,'form.jsp?sys='+sysCode+

'&action=openform&formID='+formTarget+'&align=0&mode='+mode

+'&goto=-1&filter='+(filter?filter:'')+'&scrolling='+scrolling, scrollbar);

alert(mode);

&#125;

&#125;

else

&#123;

throw "O Componente não é do tipo moldura";

&#125;

&#125;

A aba Cliente deverá ficar da seguinte forma:

![image959.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image959.jpg)

3. Ao final do processo de criação da função, clique em ![image105.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image105.gif) para Salvar a função.

Observação: É necessário que, após a criação de novas funções no Maker, o Webrun seja reiniciado.

Após a criação da função, será criado um exemplo prático utilizando a função "Abrir Formulário numa Moldura - Modo".

Siga os passos abaixo:

1. Criar um formulário sem fontes de dados, utilizando os componentes Moldura e Botão:

![image955.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image955.jpg)

2. Criar o fluxo para associar ao formulário. Abra o Editor de Fluxos de Ações, adicione um ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) e, no Montador de Expressão, localize a função Abrir Formulário numa moldura - Modo:

![image909.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image909.gif)

No componente Processamento, ficou da seguinte forma:

![image956.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image956.jpg)

Observação: Salve o fluxo na camada Cliente.

3. Associe o componente Botão do formulário ao Evento "Ao clicar" e teste no Webrun. Após ter clicado no botão, foi aberto o formulário na moldura:

![image961.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image961.jpg)

![image960.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image960.jpg)

Criando Funções - Este vídeo demonstra os passos para a criação de uma nova função para o Editor de fluxos de Ações
