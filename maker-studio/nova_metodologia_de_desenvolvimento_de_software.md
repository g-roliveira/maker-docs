---
title: "Nova Metodologia de Desenvolvimento de Software"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/nova_metodologia_de_desenvolvimento_de_software.htm"
---

## Proposta

O Maker é uma ferramenta de desenvolvimento de sistemas aplicativos para Web e Mobile que utiliza técnicas que proporcionam o aumento da produtividade com qualidade e adiciona poderosos recursos ao produto final. Tudo isso sem que o desenvolvedor tenha que escrever linhas de código.

Possui uma interface que interage facilmente com o usuário por meio de recursos intuitivos proporcionados pelos assistentes, pelas ajudas e pelos componentes de desenvolvimento.

O Maker permite que a abstração de todo o projeto possa ser planejada por qualquer pessoa.

Os sistemas gerados por essa nova metodologia podem ser traduzidos para qualquer linguagem de programação. Atualmente, há um interpretador dos sistemas gerados pelo Maker para internet: Webrun.

## Editores de Interface WYSIWYG

A IDE de criação da interface dos sistemas criados pelo Maker segue a técnica WYSIWYG. O desenvolvedor constrói, por exemplo, formulários e relatórios de forma visual.

Os formulários são criados a partir de uma origem de dados e o Maker oferece assistentes que são capazes de inferir a partir de um formato próprio, presente no modelo de dados do sistema.

Inicialmente, o Maker disponibiliza um conjunto de componentes visuais básicos para a construção de formulários. A partir desses elementos, os desenvolvedores podem criar novos e mais complexos componentes dependendo de sua necessidade. A criação de um novo componente, assim como todo tipo de evolução na ferramenta, é feita utilizando a própria ferramenta. Ademais, a ferramenta disponibiliza domínio específico para a evolução de uma IDE de desenvolvimento. Isso garante que a ferramenta possa evoluir independentemente do fornecedor, garantindo a ideia de objetos reutilizáveis.

A interface de edição de relatórios do Maker também segue a técnica WYSIWYG. Tal interface é bastante poderosa e contempla elementos importantes para a elaboração de ricos relatórios (ex.: gráficos, imagens, referências cruzadas, agrupamentos, sub-relatórios, código de barras, dentre outros). Deve-se destacar também a existência de assistentes para a criação de relatórios à partir de formulários, obedecendo a característica de aumento de produtividade.

![image198.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/criacaoprojetos.png)

A interface do Maker foi projetada de forma que todas as suas funcionalidades estejam ao alcance imediato, ou seja, sempre visíveis, sensíveis ao contexto e de fácil entendimento. Um exemplo disso é a [Paleta de Objetos](maker_3/paleta_objetos). Ela sempre possibilita acesso fácil aos objetos do seu sistema com um simples clique de mouse.

No Gerenciador de Objetos é possível localizar os formulários, relatórios e fluxos, por filtragem do nome do objeto desejado (ao iniciar a digitação do nome de algum formulário, é executada uma filtragem mostrando aqueles que coincidem com o que está sendo digitado).

Exemplo: Ao digitar a letra "a" no editor Localizar, serão filtrados e exibidos todos os nomes que iniciam com a letra digitada.

## Perfil do Usuário do Maker

O Maker não é para leigos em TI. Para a correta utilização da ferramenta, é necessário o conhecimento mínimo de:

- modelagem de banco de dados relacional;
- alguma linguagem de programação.

Participe do Treinamento de Capacitação Maker e exija o seu certificado oficial, promovido pela Softwell Solutions ou por representantes autorizados.

![image2.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image2.jpg)

## Programação Visual

Utilizamos fluxogramas para tornar mais intuitiva a elaboração de rotinas de software: recurso de fácil entendimento da lógica de programação.

A interface permite ao desenvolvedor aplicar camadas de abstração em sua lógica por meio de rótulos em seus elementos. Tais rótulos podem ilustrar expressões ou outras rotinas complexas e tornar ainda mais intuitivo o entendimento. Por exemplo, pense em uma expressão matemática que faça um cálculo complexo de juros. Imagine que o especialista de domínio não entenda os mínimos detalhes da tal fórmula, porém ele poderá entender se, no rótulo da expressão, contiver um texto claro que diga o que aquela expressão deve calcular.

## Abstração de Camadas

Com o Maker podemos abstrair camadas. Saímos da complexidade das linguagens codificadas para o desenvolvimento em alto nível.

![image1.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1.gif)

Como mostra a imagem acima, inicialmente, as linguagens de programação desenvolviam sistemas em linguagem de máquina, em baixíssimo nível. Posteriormente, foram desenvolvidos níveis mais altos. Agora, com a nova metodologia do Maker, ocorre a abstração do negócio numa camada mental.

## Arquitetura em Multicamadas

Os sistemas criados com o Maker são arquitetados em multicamadas: Servidor, Banco de Dados e Aplicações, permitindo que cada parte do sistema seja executada em uma máquina diferente, otimizando os recursos da rede e oferecendo integração total entre as funcionalidades do sistema. Dessa forma, o balanceamento da carga da rede pode ser feito no melhor nível possível, maximizando o desempenho.

![image3.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image3.jpg)

## Escalabilidade

Escalabilidade indica uma habilidade de manipular uma porção crescente de trabalho de modo uniforme, ou estar preparado para o crescimento desse trabalho. Essa habilidade é desejável na maioria dos sistemas. Os sistemas criados com o Maker são executados em um servidor de aplicações que fornece tal característica.

![image4.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image4.jpg)

## Balanceamento de Carga

A fim de garantir maior escalabilidade, as rotinas de software dos sistemas criados pelo Maker podem ser aplicadas nas três camadas de sua arquitetura.

O Maker propõe um formato comum para tornar constantes as rotinas dos sistemas e essas rotinas podem ser traduzidas para qualquer linguagem de programação, aproveitando-se de características facilitadoras e fornecendo ao desenvolvedor no Maker a possibilidade de criar rotinas que possam ser aplicadas a qualquer uma das camadas da arquitetura. Assim há:

- Camada de Modelo de Negócios: faz a tradução para a linguagem em que o interpretador foi escrito - JAVA.
- Camada de Interface com o Usuário: faz a tradução para a linguagem que a maioria dos navegadores Web tem suporte - Javascript.
- Camada de Acesso aos Dados: faz a tradução para a linguagem SQL do banco de dados relacional utilizado.

![image2.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image2.gif)

## Multiplataforma

Os sistemas criados pelo Maker podem ser executados em qualquer sistema operacional, já que a camada de negócios é escrita em JAVA.

## Segurança

Os sistemas criados pelo Maker têm, implícitos em suas construções, componentes que garantem a sua segurança. As características que tornam os sistemas criados pelo Maker seguros são:

- criptografia: utilizamos criptografia forte para persistência de dados cruciais do ambiente;
- HyperText Transfer Protocol Secure (HTTPS): é uma implementação do protocolo HTTP sobre a camada SSL ou do TLS, que permite que os dados sejam transmitidos através de uma conexão criptografada e que se verifique a autenticidade do servidor e do cliente pelos certificados digitais;
- auditoria em log: o sistema armazena em um ambiente seguro informações detalhadas de todas as ações de um usuário nos sistemas gerados;
- permissões de acesso: o ambiente permite definições de políticas de acesso detalhadas em todos os elementos do sistema (formulários, componentes, relatórios, entre outros).

## Acessibilidade

Os sistemas Maker estão em constante evolução no que diz respeito à acessibilidade, as aplicações geradas com nossa ferramenta seguem as recomendações de acessibilidade na web, com o objetivo de fazer com que o conteúdo dos sistemas sejam acessíveis para usuários portadores de deficiência. Adotamos o padrão mais difundido na linha de implementação de softwares com foco em acessibilidade chamado WCAG (WCAG, Web Content Accessibility Guidelines)

## Interoperabilidade

Interoperabilidade é a capacidade de um sistema se comunicar com outros sistemas (semelhantes ou não). Para um sistema ser considerado interoperável é muito importante que ele trabalhe com padrões abertos.

O Maker dá suporte à interoperabilidade ao permitir que outros sistemas possam acessar seus recursos, além de fornecer métodos de alto nível para que sistemas gerados a partir dele possam acessar outros sistemas - a tecnologia Web Service.

Web Service é uma solução utilizada na integração de sistemas e na comunicação entre aplicações diferentes. Com essa tecnologia, é possível que novas aplicações possam interagir com aquelas que já existem e que sistemas desenvolvidos em plataformas diferentes sejam compatíveis. Os Web Services são componentes que permitem às aplicações enviar e receber dados em formato XML. Cada aplicação pode ter a sua própria "linguagem", que é traduzida para uma linguagem universal, o formato XML.

## Baixo Nível de Especialização da Equipe

O propósito do Maker é tornar o desenvolvimento de softwares uma tarefa menos árdua e, por que não, menos especializada? À medida que elevamos o nível de abstração do desenvolvimento de sistemas, estamos aproximando-o do ser humano comum, sem expertise em software. Assim, é possível, com o Maker, reduzir o nível de especialização da equipe de desenvolvimento de softwares.

## Manutenibilidade

Já que os softwares criados pelo Maker são flexíveis e voltados para o especialista do domínio, o próprio especialista do domínio será capaz de mantê-lo. Isso pode reduzir a dependência entre o profissional de domínio e o especialista de software.

## Confiabilidade

As seguintes características tornam um sistema confiável:

- segurança
- corretismo
- escalabilidade
- flexibilidade
- poder

Conforme mostrado nos tópicos anteriores, o propósito do Maker engloba todas essas características, o que nos leva a inferir que um sistema gerado pelo Maker é naturalmente confiável.

![image5.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image5.jpg)

## Algumas Soluções

![image6.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image6.jpg)

#### Compatibilidade com versões homologadas veja em: ["Versões Homologadas"](Versoes%20Homologadas)
