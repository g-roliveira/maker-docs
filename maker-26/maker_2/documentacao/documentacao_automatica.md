---
title: "Documentação Automática"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/documentacao/documentacao_automatica.htm"
---

Este recurso gera, automaticamente, uma documentação completa do projeto, seguindo as normas do modelo adotado pelo PRAXIS para Especificação de Requisitos de Software (ERSw) e seguindo as boas normas de desenvolvimento de software sugeridas pelo PMI.

A partir do menu Utilitários, acesse o menu Documentação e inicie por Dados Gerais.

Observação: Caso o submenu Documentação não esteja visível no Menu Utilitários, deve-se habilitar o parâmetro Documentação Automática, da tela de [Configurações](../configuracao_das_conexoes/configuracoes#documentacao_automatica_configuracoes_hiperlink).

## Dados Gerais

É o cadastro inicial para documentação do projeto.

![image780.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image780.jpg)

A tela Dados Gerais dos Documentos, apresenta os seguintes itens:

- Na aba Documento temos:
- - Documento n° - este campo gera uma numeração automática quando iniciamos uma documentação;
  - Sistema - campo que localiza automaticamente o projeto;
  - Cliente - espaço disponível para identificar o cliente do projeto;
  - Local - identifica o local de execução do projeto;
  - Data - informa a data inicial do projeto;
  - Modelo relacional - permite abrir um arquivo imagem com o modelo relacional das tabelas do projeto. Utilize o botão direito do mouse e selecione a opção Load do menu pop-up, para indicar o arquivo imagem;
  - Botão ![image804.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image804.gif) - gera imagens recentes tanto do fluxo de ações quanto dos formulários;
  - Botão ![image805.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image805.gif) - abre a tela de Configurações de Documentação Automática;
  - Botão ![image806.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image806.gif) - abre o relatório selecionado para edição;
  - Botão ![image807.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image807.gif) - abre uma tela de visualização do relatório para impressão.

Observação: Os botões ficarão disponíveis após a gravação do cadastro.

- Na aba Missão, temos:
- - No campo disponível, deve ser descrito o ponto focal do produto. Deve sintetizar que valor o produto acrescenta para o cliente e os usuários.

- Na aba Objetivo, temos:
- - No campo disponível, deve ser descrito o objetivo do projeto.

- Na aba Autores, temos:
- - No campo disponível, devem ser descritos os autores responsáveis pela documentação.

- Na aba Componentes, temos:
- - No campo disponível, devem ser descritos os módulos auxiliares ou outros projetos que, integrados, compõem o projeto.

- Na aba Visão Geral, temos:
- - No campo disponível, descreve-se o que o restante do documento ERSw contém, indicando a sua estrutura básica.

- Na aba Convenções adotadas, temos:
- - No campo disponível, descrevem-se todas as siglas, abreviações e termos usados na ERSw.

- Na aba Observações, temos:
- - No campo Sobre o projeto, faça comentários adicionais sobre o projeto para a equipe de desenvolvimento;
  - No campo Sobre usuários e sistemas externos, comente, detalhadamente, todas as entradas e saídas. Inclua qualquer tipo de dados partilhados com outros projetos e componentes de sistema.

## Identificação dos Aprovadores do projeto

Esta tela permite que sejam cadastrados os responsáveis pela aprovação do projeto e suas fases. A partir do menu Utilitários, acesse o menu Documentação e ative Aprovadores:

![image781.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image781.jpg)

Referente aos campos da tela:

- Campo Documento - refere-se ao código do projeto cadastrado na tela Dados Gerais;
- Campos Nome - é a identificação nominal;
- Campo Cargo - é a identificação profissional.

## Atores do projeto

Cadastre nesta tela os papéis dos usuários ou outros sistemas que interagem com o produto. Cada ator representará uma classe de usuários. A partir do menu Utilitários, acesse o menu Documentação e ative Atores:

![image782.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image782.jpg)

Referente aos campos da tela:

- Documento - refere-se ao código do projeto cadastrado na tela Dados Gerais;
- Ator - é a identificação descritiva do ator.
- Frequência de uso - é a periodicidade de uso do projeto.
- Conhecimento do negócio - informe o nível de proficiência no processo de negócio.
- Conhecimento em informática - informe o nível de proficiência em informática.
- Nível de instrução - classifique o nível de instrução.
- Hipótese - cadastre hipóteses de operações e atividades que pode executar.

## Casos de uso

Cadastre as funções completas do produto. A partir do menu Utilitários, acesse o menu Documentação e ative Casos de uso:

![image783.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image783.jpg)

Referente aos campos da tela:

- Na aba Caso de Uso, temos:
- - Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais.
  - Caso de uso - descreva o caso de uso.
  - Observação - faça um breve comentário sobre o caso de uso.
  - Requisitos - descreva as atividades necessárias para obter o enunciado.
  - Validação - descreva as validações no projeto.
  - Cenários - identifique o momento em que esse caso de uso ocorre.

- Na aba Inclusões - identificamos inclusões de outros casos de uso.
- Na aba Extensões - identificamos casos de usos aos quais este se extende.
- Na aba Generalizações - identificamos o relacionamento do caso de uso (visto como filho) com um outro caso de uso (visto como pai), especificando como este pode adotar todo o comportamento e as características descritas para o outro caso (pai).

## Casos de Uso X Atores

Os relacionamentos indicam a existência de comunicação entre atores e casos de uso. Um caso de uso pode estar associado a mais de um ator, quando a sua execução requer a participação de diferentes atores. A partir do menu Utilitários, acesse o menu Documentação e ative Casos de uso X Atores:

![image784.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image784.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais.
- Ator Principal - identifique o ator principal.
- Caso de Uso - identifique o caso de uso.
- Ator Secundário - identifique o ator secundário.

## Benefícios do Projeto

Devem-se identificar os benefícios que se esperam obter com o produto e o valor desses para o cliente. O valor pode ser descrito simplesmente pela importância atribuída pelo cliente ou pode ser expresso de outras formas, inclusive quantitativas. A partir do menu Utilitários, acesse o menu Documentação e ative Benefícios:

![image785.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image785.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais.
- Valor para o Cliente - identifique o benefício.
- Descrição - detalhe a importância do benefício para justificar o valor investido.

## Interfaces

A interface do usuário é o que permite que as informações sejam transmitidas entre um usuário humano e os componentes de hardware ou software de um sistema de computador [IEEE, Std 610.12-1990]. A partir do menu Utilitários, acesse o menu Documentação e ative Interfaces:

![image786.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image786.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais.
- Tipo - entre as opções do campo, selecione: Comunicação, Hardware ou Software.
- Descrição - detalhe a importância do benefício para justificar o valor investido.

## Interpretação dos campos

Como interpretar alguns campos de uma interface de usuário: a partir do menu Utilitários, acesse o menu Documentação e ative Interpretação dos Campos:

![image787.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image787.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais.
- Tipo - entre as opções do campo, selecione: Comunicação, Hardware ou Software.
- Padrão - detalhe a interpretação.

Exemplo:

| Nº | Tipo de restrição | Padrão |
| --- | --- | --- |
| 1 | Obrigatoriedade | Para descrever a obrigatoriedade ou não de campos, devem ser utilizados os termos Obrigatório e Não obrigatório. Quando um campo for especificado como obrigatório, isto quer dizer que o usuário deverá especificar um valor não vazio para ele. Para os campos não obrigatórios, o usuário terá a opção de deixá-los vazios. A obrigatoriedade ou não obrigatoriedade deverá ser indicada explicitamente para todos os campos das interfaces |
| 2 | Possibilidade de alteração | Os termos Editável e Não editável não serão mais utilizados. A possibilidade de alteração dos valores dos campos pelos usuários deverá ser registrada por meio dos termos Alterável e Não alterável. |
| 3 | Campos multivalorados | Quando um campo puder conter mais de um valor dentre os seus valores válidos, será utilizado o termo Multivalorado. Quando nada for mencionado a esse respeito, será considerado que o campo poderá conter apenas um valor. |

## Limites

Devem-se determinar os limites do produto, ou seja, o que o sistema não fará. A partir do menu Utilitários, acesse o menu Documentação e ative Limites:

![image788.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image788.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais.
- Observações - Descreva neste campo as limitações.

## Materiais de Referência

Devem-se cadastrar os materiais de consulta sobre o projeto. A partir do menu Utilitários, acesse o menu Documentação e ative Materiais de Referência:

![image789.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image789.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais.
- Tipo - descreva o tipo do material, podendo ser Material Instrucional ou mesmo Material Referencial.
- Referência - descreva o nome do objeto.

## Modos de Operação

Devem-se cadastrar as atividades operacionais do projeto. A partir do menu Utilitários, acesse o menu Documentação e ative Modos de Operação:

![image790.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image790.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais;
- Descrição - descreva a atividade operacional.

## Observações sobre Relatórios

Descreva observações sobre os relatórios do sistema. A partir do menu Utilitários, acesse o menu Documentação e ative Observações sobre Relatórios:

![image791.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image791.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais;
- Nome do Relatório - identifique o relatório;
- Descrição - descreva sobre a utilização do relatório no projeto;
- Objetivo - descreva o objetivo do relatório;
- Imagem - permite inserir a imagem do relatório. Deve gerar o relatório, capturar a imagem e inserir neste campo.

## Requisitos Gerais

Descreva os requisitos adiados ou características do ambiente. A partir do menu Utilitários, acesse o menu Documentação e ative Requisitos Gerais:

![image792.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image792.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais;
- Tipo - identifique o tipo do requisito entre as opções Adiados ou Adaptação do ambiente;
- Descrição - descreva sobre o requisito.

## Restrições

Descreva as restrições do sistema. A partir do menu Utilitários, acesse o menu Documentação e ative Restrições:

![image793.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image793.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais;
- Tipo - identifique o tipo de restrições;
- Descrição - descreva sobre a restrição.

## Versões

Cadastre as versões do projeto. A partir do menu Utilitários, acesse o menu Documentação e ative Versões:

![image794.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image794.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais;
- N° da Versão - identifique a versão;
- Data - informe a data desta versão;
- Comentário - campo para uma observação referente à versão.

## Observações sobre formulários

Cadastre comentários sobre o formulário. A partir do menu Utilitários, acesse o menu Documentação e ative Observações sobre formulários:

![image795.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image795.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais;
- Formulário - identifique o formulário;
- Observações - campo para uma observação referente ao formulário citado.

## Diagrama de Contexto

Documentação composta por fluxos de dados que mostram as interfaces entre o sistema e as entidades externas. A partir do menu Utilitários, acesse o menu Documentação e ative Diagrama de Contexto:

![image796.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image796.jpg)

Referente aos campos da tela:

- Documento - informe neste campo a numeração que identifica o projeto cadastrado em Dados Gerais;
- Descrição - identifique nominalmente os diagramas;
- Imagem do Diagrama - campo para carregar imagens do diagrama;
- Ator X Caso de Uso - identifique na tabela os casos relacionados com o diagrama (casos cadastrados no item Casos de Uso X Atores).

Observações:

1. Antes de realizar a impressão da documentação automática, as dependências devem ser atualizadas.
2. Este recurso está disponível apenas para a versão Enterprise.
3. As imagens dos fluxos só irão aparecer na documentação se eles estiverem vinculados a um evento.

Documentação automática - Este vídeo demonstra a utilização do recurso de documentação automática.
