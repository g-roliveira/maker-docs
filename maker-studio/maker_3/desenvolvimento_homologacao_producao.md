---
title: "Desenvolvimento, Homologacão e Producão"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/desenvolvimento_homologacao_producao.htm"
---

Recomendações para uma abordagem de testes usando o Maker.

## Objetivo

Esse texto visa propor uma abordagem para o fluxo de desenvolvimento e homologação das aplicações desenvolvidas em Maker.

## Introdução

O desenvolvimento de software é um processo que demanda depuração, na plataforma maker há algumas abordagens possíveis, dentre essas, existem algumas não muito eficazes. Com o intuito de esclarecer alguns conceitos elaboramos uma proposta que julgamos ser a mais adequada no trabalho com o Maker. Não se trata de uma imposição, mas sinaliza a direção que estamos seguindo, o que ajudará nossos usuários a se manterem próximos de nossa visão, podendo aproveitar de forma satisfatória os recursos atuais e futuros oferecidos na ferramenta

## Proposta de trabalho

Para garantir que o aplicativo distribuído pelo setor de desenvolvimento seja devida, e corretamente testado recomenda-se a adoção de exportação do JAR (ou WAR), isso evita que a aplicação seja modificada fora do ambiente de desenvolvimento, já que o processo de homologação serão encontradas imperfeições nos softwares e, o desenvolvedor, ou mesmo o responsável pela homologação, ficará tentado a aplicar pequenos "patchs" para acelerar o processo de homologação. Apesar de a primeira vista parecer um benefício, muitas dessas alterações podem não ser replicadas no ambiente de desenvolvimento perpetuando o bug.

## Artefatos

No modelo proposto pela softwell o responsável pelo desenvolvimento deve entregar ao setor de homologação somente os fontes da aplicação compilada e, além disso, os scripts necessários para atualização do banco de dados

Nesta proposta cada vez que se deseja "Fechar uma versão" do software devemos prosseguir com os seguintes passos:

1. Efetuar um backup dos fontes (Tabela FR*);

2. Exportar o código do sistema em JAR ou WAR

1. 1. Opcionalmente deletar a pasta "src" de dentro do JAR para evitar que o código fonte em Java seja visto por outras pessoas;

3. Montar um script de atualização com todos os comandos SQL de DDL e/ou DML necessários para reconstruir ou atualizar o banco de dados do ambiente de produção, na ordem correta de execução.

4. Adicionar qualquer artefato que seja necessária a execução de software (arquivos de configuração, DLL's, etc.).

5. Efetuar o teste automatizado (Compatível com ferramenta de teste automatizado Selenium), economizando tempo, reuso e incrementando qualidade, alta precisão e confiabilidade em diversos cenários.

## Ciclo

O setor de homologação deve validar o software. Se for detectado algum problema ele irá apontar os erros graves que deverão ser corrigidos. O setor de desenvolvimento fará as correções necessárias e apresentará a nova versão. Este ciclo se repete até uma versão ser aprovada. Sendo aprovada a versão, o responsável pela homologação usará os mesmos arquivos recebidos do desenvolvimento para aplicar as alterações no ambiente de produção

Desvantagens do uso das FR's no ciclo de validação

As tabela FR* contém o código fonte dos sistemas desenvolvidos em Maker, propagar seus dados seria como pedir que o setor de testes use o Delphi e o código fonte em Object Pascal para testar o sistema, ou o Eclipse e o fonte em Java para testar uma aplicação Web. Por isso a cópia dos dados das Fr's não é recomendada pela Softwell quando o objetivo a assegurar a execução correta ciclo de testes

Além disso, a simples exportação/importação dos fontes em Maker apesar de prático, apresenta alguns inconvenientes para o cliclo de testes, por exemplo:

1. Atualização de artefatos compartilhados - Formulários e fluxos compartilhados entre sistemas, se exportamos um sistema X na versão 1.0 (resumidamente X 1.0), que compartilha alguns fluxos e formulários com o sistema Y pode acontecer problemas se o desenvolvimento liberar a versão 1.0 de ambos( X 1.0 e Y 1.0) e depois necessitar re-liberar o sistema Y na versão 1.1 se Y 1.1 atualizar itens compartilhados com o X 1.0 este terá que obrigatoriamente ser re-testado no todo ou em partes, para assegurar que as modificações nos objetos compartilhados não afetarão o sistema já homologado.

2. Ausência de recursos para tal abordagem - No Maker (2.5.1.54 e anteriores) não há distinção visual se um objeto importado será criado ou vinculador de outros sistema,

3. Não remoção de objetos excluídos - A importação é somente aditiva, ou seja, se um formulário, fluxo ou relatório for excluído do ambiente de desenvolvimento a importação do ambiente de testes não fará tal remoção, assim a aplicação que será homologada não terá o mesmo comportamento da que está no ambiente de testes,

4. Possibilidade de edição das FR* no ambiente de teste - Como mencionado antes, o testador, ou algum desenvolvedor pode alterar a aplicação no ambiente de testes;

5. Exposição do código fonte do sistema - Em muito casos, os testadores só devem conhecer as entradas e saídas do processo, não suas rotinas internas, cálculos e constantes utilizadas. A exposição desnecessária das FR's pode apresentar uma ameaça a propriedade intelectual da empresa.

## Alternativa para o uso das FR's

Existem algumas alternativas para minimizar o impacto do uso das FR's no ambiente de homologação, apesar de não recomendadas, segue abaixo alguns direcionamentos:

**Segmentação em Schemas**

Para assegurar que cada aplicação tenha seu próprio código fonte, mesmo se utilizando das FR's no ambiente de testes, a abordagem sugerida é a segmentação das FR's em "schemas". No ambiente de produção a aplicação X tem seu próprio schema "appx", e a aplicação Y está em "appy" todos com uma cópia completa das FR's, isso garante que não haja "contaminação" através de atualização das aplicações. No entanto, muito dos problemas citados acima, continuam existindo.

Em tempo, verifique o suporte do Maker/Webrun, a schema no banco de dados que deseja utilizar.

**Restrição de acesso via sistema de permissão**

Durante a importação das FRZ's o Maker valida as permissões de usuário, ou seja, se o usuário que estiver efetuando a importação não tiver permissões de alteração de objeto ele não será sobescrito durante a importação. Sendo assim, é possível restringir o acesso a objetos compartilhados através do sistema de permissão impedindo que eles sejam acidentalmente atualizados limitando e controlando quem e quando tais objetos poderão ser atualizados.

## Conclusão

Os recursos do Maker/Webrun são preparados para o trabalho com WAR/JAR. Semelhante a outras ferramentas, há um entendimento que no ambiente de homologação/testes e produção deve permanecer somente o "código compilado" que impeça o posterior edição, ação que poderá introduzir bugs, ou mesmo comportamento fraudulento do sistema, prejudicando o trabalho de desenvolvedores.

Cilclo de testes e publicação de aplicações Maker

![image1189.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1189.jpg)
