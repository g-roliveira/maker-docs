---
title: "Cadastro de Funções"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/fluxos_e_acoes/cadastro_de_funcoes.htm"
---

O Editor de Fluxo de Ações possui uma série de Funções (ações predefinidas) que são instaladas juntamente com o Maker. A forma de utilização dessas funções pode ser vista no tópico Criando um Fluxo.

O usuário mais avançado poderá criar as suas próprias funções e utilizá-las.

Para acessar o recurso, execute:

1. Ative o menu Projeto;
2. Clique em Funções. Será exibida a seguinte tela:

![image341.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image386.png)

Observe as opções da tela:

Aba Geral - permite cadastrar dados sobre a função com os seguintes campos:

- Código - numeração automática que identifica internamente a função criada. O próprio Maker gera este número;
- Nome/Apelido - nome sugerido pelo usuário à nova função;
- Descrição - detalhamento que será apresentado na tela das funções quando estiver desenvolvendo os fluxos de ação. Para facilitar a utilização desta nova funcionalidade, tente ser bem detalhado;
- Nome real - nome da função que será usado na implementação, também é definida pelo usuário seguindo uma regra própria de nomenclatura;
- Parâmetros - define o(s) parâmetro(s) da função. Quando mais de um, devem ser separados por ponto e vírgula ";". Quando a função permitir a definição de nésimos parâmetros do mesmo tipo, deve-se selecionar uma opção de tipo precedendo N'. Ao clicar botão ![image769.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image391.png) (Construtor) ao lado do campo, é exibida a tela Seleciona os tipos de parâmetros, a partir da qual podem ser selecionados os parâmetros de entrada da função.

![seleciona os tipos de parâmetros](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image387.png)

A tela contém:

- a coluna nomeada Tipos disponíveis lista todos os tipos de parâmetros que podem ser selecionados.
- a coluna nomeada Seleção de parâmetros lista na ordem de escolha, todos os tipos de parâmetros selecionados.
- o botão ![image770.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image388.png) (Adicionar item) ao clicar neste botão, o item selecionado é adicionado.
- o botão ![image771.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image389.png) (Remover item) ao clicar neste botão, o item selecionado é removido.

Observações:

1. Para reorganizar os parâmetros, basta selecionar o parâmetro desejado e arrastá-lo para cima ou para baixo.
2. Qualquer tipo que não esteja definido na hierarquia será considerado Variante.
3. O tipo Tabela é usado para consultas.
4. O tipo Formulário lista todos os formulários do sistema. Quando usado em conjunto com o tipo Componente, este tem um comportamento diferente. O tipo componente, por padrão lista os componentes do formulário definido como Formulário de Trabalho. Entretanto, quando à esquerda do nó Componente existe um Formulário, o Componente passa a ser filtrado pelo nó à sua esquerda, e não pelo Formulário de Trabalho;
5. A diferença de Campo para Componente é que o primeiro lista os campos do SELECT do formulário (definido em Formulário de Trabalho). Já o segundo lista os Componentes da tela, independentemente de estarem ligados a algum campo do SELECT.

- Tipo da Função - categoria em que deve estar definida a função. O botão ![image234.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image234.gif) ao lado do campo permite acionar a tela de cadastro de tipos.

![image130.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image390.png)

- Retorno - tipo da informação de retorno da função. Oferece as opções: Variante, Letras, Número, Fracionado, Data, Hora, Lógico, SQL, Tabela, Inteiro, SQL Consulta ou SQL Atualização. Toda função deve ter retorno definido.
- Resumo - Resumo da função com o seguinte formato:
- - &lt;Nome da Função&gt;&lt;parâmetros&gt;): Retorno

Exemplos: Ano (Data): Inteiro

- Quando o parâmetro for do tipo N', devem ser utilizadas reticências (...).

Exemplos: Soma (Número...): Número

- Compatibilidade - defina para que camada se aplica a função. Ao clicar no botão ![image769.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image391.png) (Construtor) ao lado do campo, é possível selecionar uma ou várias camadas apresentadas pela tela Compatibilidade, marcando:
- - Banco de Dados;
  - Cliente;
  - Servidor;
  - Todas as camadas.

Na aba Cliente escreva o código da função em Javascript e na aba Servidor escreva o código da função em Java (esses devem ser: protected final e lançar Exception). Os parâmetros e o retorno devem ser do tipo Variant.

Caso o usuário execute um clique direito sobre a área da tela de cadastro de funções (não pode estar em modo de Alteração ou Inclusão de uma Função), temos a opção ![duplicar](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image235.gif) que gera uma cópia da função atual.

Observações:

1. Existe uma restrição quanto a nomes dados as funções: Caso contenha a palavra "Reports" no nome da função e esta não possua parâmetros, um erro é gerado durante a exportação / publicação. Esta é uma restrição do Webrun.
2. Após a criação de uma função, é necessário reiniciar o Webrun.
3. Caso queira alterar o tipo de retorno já populado para um valor nulo (ou seja, que não possua retorno), deve-se apagar o conteúdo da lista com a tecla backspace.
