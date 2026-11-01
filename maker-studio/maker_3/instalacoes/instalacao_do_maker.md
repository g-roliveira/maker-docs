---
title: "Instalação do Maker"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/instalacoes/instalacao_do_maker.htm"
---

Para a instalação do Maker e do banco de dados PostgreSQL, será necessário um computador que tenha, no mínimo, a seguinte configuração:

- Computador 2 Ghz ou superior;
- 4Gb de Memória RAM;
- HD com 5Gb ou mais de espaço livre;
- Resolução 1024 × 768 ou superior;
- Sistema Operacional Microsoft 7/8.1/10 ou superior

Para a execução do Webrun (serviço do produto), considerando que ele interpretará um sistema de pequeno porte, são requisitos mínimos:

- Computador 2 Ghz ou superior;
- 1Gb de Memória RAM;
- HD com 5Gb Mb ou mais de espaço livre;
- Resolução 1024 × 768 ou superior;
- Sistemas Operacionais Homologados (Windows ou Linux)

A Softwell Solutions garante que o produto Webrun é compatível com o sistema operacional Linux. Vários clientes utilizam Linux, mas devido à existência de variadas distribuições e por se tratar de um ambiente não muito intuitivo e que exige profundo conhecimento do desenvolvedor, informamos que não fornecemos suporte a Linux.

Observe os passos da instalação:

1. O Assistente de instalação prepara a instalação
2. É exibido no painel o conteúdo da instalação. O botão ![image3.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image000.png)  permitirá visualizar a capacidade das unidades de disco do seu micro. O botão ![image4.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image001.png) permitirá mudar o diretório de instalação. Clique no botão ![image5.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image002.png).

São itens da instalação:

1. Maker 3 - instala os arquivos da ferramenta na pasta padrão (C:\Arquivos de programas\Softwell Solutions\Maker 3) ou em uma pasta especificada pelo usuário:

   1. Licença individual - Versão individual do Maker;
   2. Licença corporativa - Versão corporativa do Maker;
   3. Ajuda do Maker 3 - Adiciona na pasta de instalação o arquivo de Ajuda;
   4. Tutoriais - videoaulas.

2. Banco de dados PostgreSQL - Instala o serviço e o gerenciador padrão do banco de dados (o nome do usuário master é postgres e a senha é Maker@1). São disponibilizados dois sistemas. Exemplo: Sistema de Controle de Estoque e Sistema de Chat ([também disponível no site da Softwell](http://www.softwell.com.br)), será possível visualizar pelo nome de usuário master e a senha 1 (um). A mesma identificação e senha são usadas para os novos projetos desenvolvidos no Maker.

3. Webrun - Instala o servidor de aplicações do Maker 3. Todos os sistemas são interpretados pelo Webrun por meio de um navegador WEB.

Observações:

1. Caso o usuário possua o PostgreSQL instalado, deve ser desabilitado o item Banco de dados PostgreSQL.
2. A instalação é 100% LOCAL
3. É necessário que o sistema de arquivos da partição no qual será instalado PostgresSQL seja NTFS.
4. Para usuários de rede cuja identificação contenha espaços ou acentos, ocorrerá erro de acesso ao Gerenciador de Banco de Dados PostgreSQL.
5. Para obter informações sobre todas as senhas utilizadas, acesse o tópico [Senhas Padrão](senhas_padrao).
6. [Para usuários que utilizem o SQLServer 2005/2008, deve habilitar o protocolo TCP / IP e definir o valor 1433 para a porta TCP](../../dicas_e_truques/banco_de_dados/como_configurar_conexao_remota_sqlserver2005);

3. Na próxima tela, o usuário inicia a instalação.

4. Por fim, clique no botão ![image8.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image003.png).

## Observações importantes sobre a instalação

Ao instalar o Maker 3, um novo diretório será criado. O Diretório padrão será "C:\Arquivos de programas\Softwell Solutions\Maker 3", dessa forma, caso o usuário tenha o Maker 3 instalado, o diretório da versão anterior não será afetado.

O Webrun por, padrão, utiliza as seguintes portas:

&lt;Connector port="8037" protocol="HTTP/1.1"&gt;
&lt;connectionTimeout="20000"&gt;
&lt;redirectPort="8443"&gt;

Considere os procedimentos que indicamos abaixo:

![image1871.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image101.gif)

**Figura 1**

Cenário 1: Você já tem instalada na sua máquina a versão 3 e o PostgreSQL (todos os SO's):

Caso no procedimento de instalação da versão anterior (3) do Maker/Webrun também tiver sido instalado o serviço do banco de dados PostgreSQL, ou o computador no qual será instalada a nova versão já tiver instalado o serviço do banco de dados PostgreSQL, é necessário efetuar uma instalação personalizada, desconsiderando a instalação de um novo serviço para o banco de dados PostgresSQL (Figura 1). Neste caso, os sistemas de exemplo disponibilizados na pasta "support\Sistemas de Exemplo" do DVD de Instalação do Maker/Webrun deverão ser desempacotados manualmente.

Se já existir a versão (3) do Maker/Webrun no computador em que será instalada a nova versão (3) do Maker/Webrun, ao tentar desinstalar a versão anterior, pode ocorrer de alguns arquivos necessários para o funcionamento da nova versão do Maker/Webrun também serem desinstalados. Sendo assim, o recomendado é que a versão anterior do Maker/Webrun seja desinstalada antes da instalação da nova versão.

Cenário 2: Você já tem instalada na sua máquina a versão 3 e o PostgreSQL (Windows vista):

Se a nova versão do Maker/Webrun for instalada no sistema operacional Windows Vista, durante o procedimento de instalação pode ocorrer de o sistema operacional enviar uma mensagem informativa (Figura 2), a qual informa que será aberta uma tela para escolha da pasta que contém os apontadores dos projetos (*.wfre) já salvos no computador (Figura 3), para trás da tela que mostra o andamento da instalação do Webrun. Neste caso, efetue um clique na borda da mensagem informativa (Figura 2) para que ela venha para a frente da tela de instalação do Webrun e, em seguida, efetue um clique sobre o botão OK.

Cenário 3: Usando o instalador da nova versão do Maker/Webrun, você quer instalar apenas o Maker e o PostgreSQL e, em um segundo momento, instalar o Webrun (todos os SO's):

Para a instalação manual de cada um dos produtos, exceto o Maker, devem ser utilizados os instaladores disponíveis na pasta support\Instaladores Individuais do DVD de Instalação do Maker/Webrun. Para a instalação do Maker e do PostgreSQL em conjunto, deve-se utilizar o instalador normalmente, desconsiderando a instalação do Webrun. Durante esse processo, aparecerá por três vezes a mensagem "Não foi possível encontrar a pasta de sistemas do Webrun. O WFRE será colocado na pasta pública de todos os usuários, normalmente C:\Documents and Settings\All Users\Documentos\Systems" (Figura 4); efetue clique no botão OK em todas elas.

Erro: Não foi possível encontrar a pasta de sistemas do webrun. O WRFE será colocado na pasta C:\Documents and Settings\All Users\Documentos\Systems

Após a conclusão do processo de instalação do Webrun, é necessário copiar a pasta Systems referenciada na mensagem apresentada no parágrafo anterior para a pasta "C:\Arquivos de Programas\Softwell Solutions\Webrun3" (pasta sugerida para a instalação do Webrun, quando instalado pelo instalador individual).

Ao tentar desinstalar todos os produtos instalados pela nova versão do Maker/Webrun, o instalador só identificará a instalação do Maker, os demais produtos (PostgreSQL e Webrun Enterprise) devem ser desinstalados manualmente pelos instaladores disponíveis na pasta "support\Instaladores Individuais" do DVD de Instalação do Maker/Webrun, ou através do utilitário do "Adicionar ou Remover Programas" (Windows XP/Seven) ou "Programas e Recursos" (Windows Vista/8/8.1), ambos disponíveis em "Painel de Controle".

Observação: Todas as novas funcionalidades foram testadas à exaustão, porém, podem ocorrer combinações de alta complexidade, as quais a equipe de testes não tenha identificado. Estaremos sempre à disposição para resolvê-las. Para isso você deve manter contato com nosso suporte pelos meios: e-mail, telefone, chat.

## Chave de acesso ao Maker

No kit de Instalação do Maker consta uma chave de acesso que possui o registro de uso da ferramenta .

A forma de liberação do Maker é definida no ato da aquisição do produto.

IMPORTANTE:

Essa chave deverá estar conectada em uma porta USB para que o Maker possa funcionar. Esse componente que acompanha o Kit de Instalação do Maker é de total responsabilidade do proprietário adquirente. Em caso de perda, ele mesmo deverá adquirir uma nova licença de uso do Maker.

## Atualizações e Suporte do Maker

Ocorrerá sempre uma checagem pelo Atualizador Automático, localizado na Bandeja de Sistemas do Windows, nos casos de computadores conectados na Internet e com o comando ativo na tela [Configurações](../configuracao_das_conexoes/configuracoes).

Para executar a atualização do Maker manualmente, consulte o item [Atualizações do Maker](../atualizacoes_maker/atualizacoes_maker).
