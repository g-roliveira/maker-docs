---
title: "Criando formulário para criação de usuário"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/criando_formulario_para_criacao_de_usuario.htm"
---

Este tópico irá descrever os passos para a criação de uma interface para cadastro de usuários.

Será desenvolvido um formulário denominado **Criar Usuário**. Será necessário utilizar as tabelas: **FR_USUARIO**, **FR_USUARIO_SISTEMA** e **FR_USUARIO_GRUPO**. Para a exibição das tabelas **FR_*** do Maker, ative o campo **Exibir tabelas do Maker (FR_*)**:

![image1383.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria1.PNG)

Utilizando o **Assistente de criação de formulários**, defina o nome para o formulário e selecione a tabela **FR_USUARIO**. Dentro da tela **Assistente SQL**, selecione o campo **USR_CODIGO**:

![image432.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria2.PNG)

O formulário abrirá. Adicione os componentes adequados:

![image433.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria3.PNG)

Para o componente **Lista**, utilizado no formulário acima, é necessário atribuir valores e descrição.

**Tipo de Expiração**:

![image1237.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria29.PNG)

Administrador:

![image1238.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria30.PNG)

O formulário possuirá três fluxos: o primeiro para mostrar o nome do sistema no componente editor de texto Sistema no formulário; o segundo para mostrar os grupos que existem no projeto no componente Lista Grupo; e o terceiro para criar o usuário.

**Primeiro Fluxo**:

![image436.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria4.PNG)

1. Criando um **Novo Fluxo**, salve com o **Destino Servidor**. Defina os **Identificadores**:

![image437.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria5.PNG)

2. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para capturar o nome do sistema. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize a função Código do Sistema:

![image672.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria6.PNG)

3. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para mostrar o nome do sistema. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize as funções Para Letras, Campo e Abrir Consulta:

![image673.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria7.PNG)

Na **Consulta SQL**, em [Assistente SQL](../../maker_3/formulario/assistente_sql/iniciando_com_o_assistente_sql):

![image1239.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria8.PNG)

1. Observe que foi criado um **Critério no Assistente SQL**. Ao clicar em **Parâmetro**, associe ao **Identificador SIGLA_SIST**:

![image444.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria9.PNG)

2. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para alterar o valor do componente. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize a função **Alterar Valor do Componente**:

![image674.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria10.PNG)

3. Associe este fluxo ao formulário criado, aplicando ao Evento "Ao Entrar".

Segundo Fluxo:

![image445.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria11.PNG)

1. Criando um **Novo Fluxo**, salve com o Destino **Servidor**. Defina o **Parâmetro de Entrada**:

![image446.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria12.PNG)

2. Defina o **Identificador**:

![image447.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria13.PNG)

3. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para guardar os grupos do sistema. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize a função **Abrir Consulta**:

![image675.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria14.PNG)

Na **Consulta SQL**, em [Assistente SQL](../../maker_3/formulario/assistente_sql/iniciando_com_o_assistente_sql):

![image1240.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria15.PNG)

1. Observe que foi criado um **Critério no Assistente SQL**. Ao clicar em **Parâmetro** associe ao **Identificador COD_SISTEMA**:

![image449.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria16.PNG)

2. Coloque uma ![image451.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dec.png) para verificar se existem registros. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize a função **Existem Registros**:

![image676.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria17.PNG)

3. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para mostrar os grupos do sistema no componente Lista (Grupo). No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize as funções **Lista - Adicionar Elemento**, **Para Letras** e **Campo**:

![image677.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria18.PNG)

4. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para ir ao próximo registro. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize a função **Próximo Registro**:

![image678.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria19.PNG)

5. Associe esse fluxo ao componente editor de texto Sistema, aplicando ao **Evento "Ao Modificar"**.

Terceiro Fluxo:

![image452.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria20.PNG)

1. Criando um **Novo Fluxo**, defina o **Parâmetro de Entrada**:

![image453.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria21.PNG)

2. Defina os **Identificadores**:

![image454.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria22.png)

3. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para capturar o nome do sistema. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize a função **Sigla do Sistema**:

![image679.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria23.PNG)

4. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para guardar o próximo registro vazio para cadastrar o novo usuário. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize as funções **Abrir Consulta** e **Campo**:

![image680.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria24.PNG)

Na **Consulta SQL**, em [Assistente SQL](../../maker_3/formulario/assistente_sql/iniciando_com_o_assistente_sql):

![image455.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria25.PNG)

1. Observe que foi colocado uma Apelido para expressão.

2. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para atualização dos campos da tabela **FR_USUARIO**. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize a função **Executar Atualização**:

![image681.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria26.PNG)

Na **SQL ATUALIZAÇÃO**, clique em ![image682.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql.png) . Abrirá a tela **Construtor SQL**: **Inserção**. Localize a tabela **FR_USUARIO**:

![image456.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria27.PNG)

1. Na tela acima, observe que é necessário no **Montador de Expressão** associar aos **Parâmetros de Entrada** criados no início do **terceiro fluxo**.
2. Observe **Parâmetro de Entrada Senha**. Utilizará as funções **MD5**, **Concatenação** e **Para Letras**:

![image683.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria28.PNG)

3. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para atualização dos campos da tabela FR_USUARIO_SISTEMA. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize a função Executar Atualização:

![image681.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria26.PNG)

Na **SQL ATUALIZAÇÃO**, clique em ![image682.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql.png). Abrirá a tela **Construtor SQL**: **Inserção**. Localize a tabela **FR_USUARIO_SISTEMA**:

![image457.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria31.PNG)

1. Na tela acima, observe que é necessário no **Montador de Expressão** associar aos **Parâmetros de Entrada** criados no início do terceiro fluxo.
2. Coloque um ![image438.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para atualização dos campos da tabela **FR_USUARIO_GRUPO**. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), na aba [Fluxos e Funções](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), localize a função **Executar Atualização**:

![image681.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria26.PNG)

Na **SQL ATUALIZAÇÃO**, clique em ![image682.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql.png). Abrirá a tela **Construtor SQL**: **Inserção**. Localize a tabela **FR_USUARIO_GRUPO**:

![image458.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria32.PNG)

1. Na tela acima, observe que é necessário no **Montador de Expressão** associar aos **Parâmetros de Entrada** criados no início do **terceiro fluxo**.
2. Associe este fluxo ao componente botão **Criar**, aplicando ao **Evento "Ao Clicar"**. A tela **Definir Ações** abrirá. Em seguida, acesse a aba **Ações Prédefinidas** e clique no botão ![image508.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria34.png):

![image459.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria33.PNG)

No parâmetro:

- **Nome** - localize o nome do fluxo criado;
- **Entrada** - informe os dados que servirão de entrada para o fluxo. Abrirá a tela **Parâmetros do Fluxo de Ações**:

![image460.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cria35.PNG)

**Salve** o Projeto e acesse no ambiente **Webrun**.

**Observações**:

1. Na tela Parâmetros do Fluxo de Ações, é possível passar um parâmetro fixo, ou seja, fixar um valor para um determinado campo. Para fixar o valor, é necessário colocá-lo entre Aspas Simples (Ex.: '1' );
2. Na coluna Campo do Formulário, o conteúdo que estiver entre chaves &#123; &#125; é o nome do componente definido pela opção "Nome" do item "Propriedade" no menu suspenso (clicando com o botão direito do mouse) no componente desejado e se estiver apenas o nome é o campo existente na consulta do formulário.
