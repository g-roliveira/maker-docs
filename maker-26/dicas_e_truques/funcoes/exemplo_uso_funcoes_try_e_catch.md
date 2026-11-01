---
title: "Exemplo de Uso das Funções Try e Catch"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/funcoes/exemplo_uso_funcoes_try_e_catch.htm"
---

O objetivo das funções ”Try” e ”Catch” é tratar exceções (mensagens de erro, por exemplo) geradas pela execução de fluxos de ações.

Estrutura básica do uso do Try Catch:

![image677.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image677.jpg)

Criando um Novo Fluxo (Tratamento Exceção), salve com o Destino Servidor. Defina o Identificador (variáveis):

![image678.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image678.jpg)

1. Insira um ![image679.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image679.jpg) para monitoramento de todas as exceções (TRY). A partir desse ponto, qualquer exceção gerada não irá interromper o andamento da execução do fluxo de ação. Esse erro será tratado de acordo com o que for definido posteriormente. No Montador de Expressão, na aba Fluxos e Funções, localize a função Monitorar Exceção:

![image682.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image682.jpg)

2. Insira um ![image680.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image680.jpg) para constar a ação que deverá ser executada e que pode causar erro. Neste exemplo, será usada uma consulta em uma tabela (tab_Cidade) inexistente na base de dados na qual está contido o projeto. No Montador de Expressão, na aba Fluxos e Funções, localize a função Abrir Consulta:

![image683.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image683.jpg)

3. Insira um ![image681.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image681.jpg) para tratamento da exceção (Catch), caso o erro ocorra. A função Capturar Exceções recebe como parâmetro um fluxo (Exceção), que será selecionado como parâmetro e deverá conter todo o tratamento necessário para contornar o problema. No Montador de Expressão, na aba Fluxos e Funções, localize a função Capturar Exceções:

![image684.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image684.jpg)

Esse fluxo está pronto.

É necessário criar o fluxo Exceção que foi selecionado como parâmetro da função ”Capturar Exceções”:

![image685.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image685.jpg)

1. Criando um Novo Fluxo (Exceção), salve com o Destino Servidor. Defina os Parâmetros de Entrada:

![image686.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image686.jpg)

Observação: Esses parâmetros de entrada serão preenchidos automaticamente pelo Webrun no momento da execução do fluxo de ação principal.

2. Insira um ![image681.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image681.jpg) para mostrar, por meio de uma mensagem de alerta, o conteúdo dos parâmetros de entrada recebidos automaticamente. No Montador de Expressão, na aba Fluxos e Funções, localize a função Alertar Aguardando Ok:

![image687.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image687.jpg)

Esse fluxo está pronto.

Com o formulário criado e associado ao fluxo Tratamento Exceção no componente botão Executar, acesse no ambiente *Webrun* a tela:

![image688.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image688.jpg)
