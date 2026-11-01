---
title: "Capturar Exceções"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_fluxo/capturar_excecoes.htm"
source_version: "2.7"
legacy: true
---

Descrição:

A partir do ponto em que se define a função "Monitorar Exceções", os erros serão monitorados e poderão ser capturados nesta função. Uma função depende da outra, portanto ao usar "Capturar" é obrigado o uso da "Monitorar".

Parâmetros:

1. Fluxo que deve ser executado em caso de ocorrência de exceções. Este fluxo automaticamente receberá por parâmetro de entrada as seguintes informações, em ordem:

    1. Mensagem da exceção

    2. Causa da exceção

    3. Exceção (Objeto)  -> Apenas Servidor

    4. Servidor (java.lang.Exception)

![image1207.gif](../../_assets/image1207.gif)

Observação:

Pelo fato de o controle do erro ser do desenvolvedor, o fluxo não será interrompido. Este continuará com sua normal execução.

Nome Real:

ebfCatch

Compatibilidade:

Cliente e Servidor

# Exemplo de Uso das Funções Try e Catch

O objetivo das funções "Try" e "Catch" é tratar exceções (mensagens de erro, por exemplo) geradas pela execução de fluxos de ações.

Estrutura básica do uso do Try Catch:

![image677.jpg](../../_assets/image677.jpg)

Criando um Novo Fluxo (Tratamento Exceção), salve com o Destino Servidor. Defina o Identificador (variáveis):

![image678.jpg](../../_assets/image678.jpg)

1. Insira um ![image679.jpg](../../_assets/image679.jpg) para monitoramento de todas as exceções (TRY). A partir desse ponto, qualquer exceção gerada não irá interromper o andamento da execução do fluxo de ação. Esse erro será tratado de acordo com o que for definido posteriormente. No Montador de Expressão, na aba Fluxos e Funções, localize a função Monitorar Exceção:

![image682.jpg](../../_assets/image682.jpg)

2. Insira um ![image680.jpg](../../_assets/image680.jpg) para constar a ação que deverá ser executada e que pode causar erro. Neste exemplo, será usada uma consulta em uma tabela (tab_Cidade) inexistente na base de dados na qual está contido o projeto. No Montador de Expressão, na aba Fluxos e Funções, localize a função Abrir Consulta:

![image683.jpg](../../_assets/image683.jpg)

3. Insira um ![image681.jpg](../../_assets/image681.jpg) para tratamento da exceção (Catch), caso o erro ocorra. A função Capturar Exceções recebe como parâmetro um fluxo (Exceção), que será selecionado como parâmetro e deverá conter todo o tratamento necessário para contornar o problema. No Montador de Expressão, na aba Fluxos e Funções, localize a função Capturar Exceções:

![image684.jpg](../../_assets/image684.jpg)

Esse fluxo está pronto.

É necessário criar o fluxo Exceção que foi selecionado como parâmetro da função "Capturar Exceções":

![image685.jpg](../../_assets/image685.jpg)

1. Criando um Novo Fluxo (Exceção), salve com o Destino Servidor. Defina os Parâmetros de Entrada:

![image686.jpg](../../_assets/image686.jpg)

Observação: Esses parâmetros de entrada serão preenchidos automaticamente pelo Webrun no momento da execução do fluxo de ação principal.

2. Insira um ![image681.jpg](../../_assets/image681.jpg) para mostrar, por meio de uma mensagem de alerta, o conteúdo dos parâmetros de entrada recebidos automaticamente. No Montador de Expressão, na aba Fluxos e Funções, localize a função Alertar Aguardando Ok:

![image687.jpg](../../_assets/image687.jpg)

Esse fluxo está pronto.

Com o formulário criado e associado ao fluxo Tratamento Exceção no componente botão Executar, acesse no ambiente *Webrun* a tela:

![image688.jpg](../../_assets/image688.jpg)
