---
title: "Gerador de Código"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/gerador_de_codigo/gerador_de_codigo.htm"
---

Este recurso deve ser executado por usuários que conheçam a fundo a linguagem de programação que desejam cadastrar e estes devem ser treinados pela Softwell, especificamente para a utilização deste recurso.

O Gerador de Código é um conjunto de fluxos que compõe uma máquina, que transforma um arquivo XML, gerado pelo [Editor de Fluxo de Ações](../editor_de_fluxo_de_acoes), em um código fonte de uma linguagem pré-cadastrada, com suas respectivas sintaxes. Ou seja, transforma um fluxo em um programa de linguagem escrita.

Para a utilização deste recurso, é imprescindível a configuração do caminho do Webrun na aba [Rede e Conectividade](../../configuracao_das_conexoes/configuracoes) da tela [Configurações](../../configuracao_das_conexoes/configuracoes), para a conexão do Maker com o serviço de Web Service do Webrun, que irá executar a função de geração de código dos fluxos. Caso o servidor seja localhost, não será necessário configurar o proxy, pois será ignorado.

![image847.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image847.jpg)

A tela é composta por:

- Código-Alvo - contém as opções que servirão de base para a compilação do fluxo de ação. Constam as opções: C Ansi, Firebird 2.0, Microsoft SQL Server 2000/2005 e 2008, Oracle Database 9i e 10g XE e Postgresql 8.2.3;
- botão Executar - ao receber um clique, invoca o Serviço Web de compilação de fluxo de ação disponibilizado pelo Webrun (em [Configurações](../../configuracao_das_conexoes/configuracoes), na aba Rede e Conectividade no grupo denominado Webrun);
- area Código Fonte - local no qual será mostrado o código gerado após a compilação do fluxo de ação;
- botão Criar no banco de dados - cria um procedimento no banco de dados com o código gerado a partir da compilação do fluxo de ação;
- botão Remover do banco de dados - caso exista no banco de dados um procedimento com o mesmo nome do procedimento que foi sugerido pelo Maker, após a compilação do fluxo de ação, este botão ficará habilitado e, se for efetuado um clique sobre ele, o procedimento já existente será removido;
- botão Fechar - fecha a tela.

## Implantação da linguagem escrita

O processo de implantação será descrito passo a passo fazendo referência a outros tópicos quando necessário:

### Cadastramento dos Descritores

Para cadastrar qualquer linguagem escrita, primeiramente, devemos cadastrar todos os [Descritores](descritores) necessários ao Gerador de Código. São eles que armazenam as sintaxes da linguagem escrita, fazendo referência a uma estrutura ou função existente no fluxo.

Para acessar este recurso, siga os passos:

1. Ative o [Editor de Fluxos de Ações](../editor_de_fluxo_de_acoes);
2. Ative o menu Arquivo, Gerador de Código e clique na opção ![descritores](https://suporte.softwell.com.br/Manual/Maker2_6/image239.gif)

![image133.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image133.jpg)

A tela possui uma [Barra de Ferramentas](../../formulario/barra_de_ferramentas_da_tela) para a navegação e edição dos registros e os seguintes campos:

- [Descritor](descritores) - palavras-chave que o gerador utiliza no processo de escrita da linguagem;
- Especificação - utilize este campo para comentar (documentação) sobre o [Descritor](descritores): função e usabilidade.

### Cadastramento da Linguagem e Sintaxe

Para cadastrar a linguagem escrita, é necessário apenas um Identificador de referência e uma Descrição da Linguagem que a especifique.

![image134.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image134.jpg)

A tela possui uma Barra de Ferramentas para a navegação e edição dos registros e os seguintes campos e controles:

- Identificador - código de referência e uma descrição visual que identifique qual a linguagem utilizada;
- Descrição da Linguagem - nome completo que identifique a linguagem de programação;
- Lista de Sintaxes - para cadastrar a sintaxe de uma linguagem escrita, basta associar cada [Descritor](descritores) à respectiva Sintaxe da linguagem correspondente. Cada [Descritor](descritores) tem uma regra de cadastramento, ou seja, uma forma específica de ser montado; uma relação de campos que identifica.

Exemplo:

- Identificador - oracle10g;
- Descrição da Linguagem - Oracle Database 10g Enterprise.

Para cadastrar a sintaxe de uma linguagem escrita, basta associar cada [Descritor](descritores) à respectiva sintaxe da linguagem correspondente. Cada [Descritor](descritores) tem uma regra de cadastramento, ou seja, uma forma específica de ser montado.

Exemplo:

![image240.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image240.gif)

Observações:

1. %1, %2 são parâmetros que estão descritos na documentação de cada [Descritor](descritores);
2. Não poderá ser excluída uma linguagem de imediato. É necessário, anteriormente, excluir todos os registros da lista de sintaxes;
3. Para garantir a funcionalidade do Gerador de Código, é necessário observar as [Configurações](../../configuracao_das_conexoes/configuracoes) do projeto na aba Rede e Conectividade, no campo Endereço. Caso queira utilizar Proxy, deve ser definido o IP da máquina na rede e ,se houver dois sistemas com a mesma sigla, é preciso definir uma instância para o projeto (aba Arquivo de Projeto, campo Nome da Instância).
4. Para exportar o Gerador de Código, basta acessar o menu Arquivo do Editor de Fluxos de Ações, em seguida, Exportar e escolher a opção Gerador de Código. Para Importar, basta utilizar o recurso-padrão do Maker (botão [Importar](../../importacao_e_exportacao/importacao) ou pelo menu [Objetos - Importar](../../importacao_e_exportacao/importacao)).
5. Nem todas as funções, mesmo que sejam da camada banco de dados são suportadas por todos os bancos de dados.
