---
title: "Maker Mobile Manager"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/como_sincronizar.html"
---

# Sincronizando dados no Maker Mobile

O objetivo deste documento é mostrar como sincronizar os dados gravados no celular com um banco de dados externo e o processo inverso.

Configurando um sistema para sincronização.

Após a instalação do **Maker Mobile Manager**, acesse o Webrun e na lista de sistemas selecione *Maker Mobile Manager.*

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager1.jpg)

Dentro do sistema acesse o menu *Sincronizador* e selecione *Cadastro de Sistemas*:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager2jpg.jpg)

Nesta tela serão cadastradas algumas informações sobre o sistema que terá os dados sincronizados, são elas:

- **Nome:** Nome do sistema que esta sendo cadastrado;
- **Sigla:** Sigla do sistema. Este tem que ser igual à sigla do sistema no Maker;
- **Descrição:** Descrição do sistema;
- **Usuário(s) do sistema:** Usuário do Maker Mobile Manager que terá acesso ao sistema que será sincronizado.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager3.jpg)

Primeiro será cadastrado o nome, a sigla e a descrição do sistema. Para isso clique no botão **Incluir** na barra de navegação do formulário e preencha os campos necessários.

Ao terminar de preencher os campos clique no botão **Salvar** na barra de navegação.
Feito este procedimento, o próximo passo é cadastrar os dados necessários para conectar com banco do sistema web. Na grade **Usuários** deverá ser informado o usuário do *Maker Mobile Manager* que poderá ter acesso à aplicação. Clique em novo para adicionar um ou mais usuários para poder sincronizar o sistema. Caso o usuário ainda não exista clique no botão **Cadastro de Usuários** e o formulário de cadastro de usuários será exibido.
Depois de cadastrado sistema e usuário, será necessário carregar os scripts para a base de sincronização.

Gerando scripts para sincronismo

Depois de cadastrado o sistema no *Maker Mobile Manager* volte para o Maker. Abra o menu *Exportar para plataforma*. Antes de clicar no botão Exportar, o campo **URL Servidor (Servidor de Sincronização)** deve ser preenchido com o endereço de onde está a base do manager.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager4.jpg)

Preenchido o campo URL exporte a aplicação. Ao terminar a exportação selecione o projeto na grade da tela Lista de Compilação e clique no botão **Sincronizador**.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager5.jpg)

> Ao clicar neste botão será exibido uma tela de download de um arquivo *.sql com o script de criação das tabelas. Este deverá ser salvo para ser carregado posteriormente no manager.

**Como selecionar tabelas para sincronismo**

Após ter efetuado por completo o cadastro do sistema no Manager e ter efetuado o download do arquivo de sincronização, acesse o menu *Sincronizador* e selecione *Painel de configuração*:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager6.jpg)

Nessa tela selecione na lista *Sistema* o sistema que terá as tabelas sincronizadas. Depois clique no botão abaixo da lista *Carregar arquivo de configuração das tabelas*. Note que após carregar o arquivo de sincronização aparecerá na grade abaixo as tabelas da aplicação exportada.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager7.jpg)

Existem dois campos check nesta grade, *Remover e Criar*. Os mesmos servem para remover ou criar as tabelas na base do Manager. Selecione as tabelas que deseja sincronizar com a aplicação móvel e clique no botão **Executar tarefas das tabelas selecionadas** para criar as tabelas desejadas.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager8.jpg)

Após executar a tarefa a coluna *Existe* ficará marcada, informando que as tabelas foram criadas na base do Manager.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager9.jpg)

**Lógica do Sincronizador**

Após escolhidas e geradas as tabelas para sincronização, no banco será criado duas tabelas para cada tabela da aplicação, uma tabela de entrada (IN) e outra de saída (OUT), exemplo: Foi escolhida uma tabela “sig_cadastro_estado” para sincronismo, quando executado os passos supracitados, na base serão criadas duas tabelas para essa tabela “sig_estado”:“sync_in_sig_sig _estado” e “sync_out_sig_sig _estado”.
A tabela de entrada (IN) é a tabela que irá receber os dados do dispositivo após realizar a sincronização.
A tabela de saída (OUT) é a tabela que irá disponibilizar os dados que o dispositivo irá obter ao sincronizar.
OBS.:
A atualização e manipulação dessas tabelas ficam a cargo do desenvolvedor, onde o mesmo deverá desenvolver uma lógica obter os dados de entrada e atualizar os dados de saída.
Como o Maker Mobile Manager possui gatilhos para registrar a última sincroniização e assim não efetuar transferência de dados desnecessários, é recomendado que exista um usuário para cada dispositivo que fará sincronização.
Uma opção para atualização dessas tabelas (IN e OUT) é a utilização do próprio Manager, pois o mesmo já oferece uma maneira de manipular essas tabelas.
Na tela Painel de configuração ao lado direito existe um subgrupo *Importação / Exportação*.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/manager10.jpg)

Dentro deste subgrupo existem quatro botões:

- Upload de arquivos: esta opção serve para carregar um arquivo texto com os dados a serem inseridos na tabela de saída (OUT);
- Importar arquivos do sistema: esta opção é utilizada para atualizaras tabelas de saída com arquivo que foi carregado no passo anterior;
- Exportar tabelas do sistema: esta opção pode ser usada para exportar os dados da tabela de entrada (IN) para um arquivo texto com as informações que vieram do dispositivo
- Download de arquivos: a partir dessa opção será possível fazer o download do arquivo gerado no passo anterior;

**Observação**: O Maker Mobile Manager possui um padrão de tabelas que tem que ser respeitado. sync_in_ + Sigla. ou sync_out_ + Sigla A mensagem de tabela criada com sucesso ocorre devido a tabela ser criada no mobile, no entanto se o sistema não encontrar a mesma no banco do cliente, a sincronização não ocorrerá.
