---
title: "Conexões Adicionais"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/configuracao_das_conexoes/conexoes_adicionais.htm"
---

Em conexões adicionais, é possível estabelecer cinco opções de conexões extras. Há a possibilidade de criação de conexões e de importar conexões existentes.

Pelo do menu Configurações, selecionando a opção Conexões Adicionais, torna-se possível o acesso a outras fontes de dados. Essas fontes podem ser utilizadas de modo semelhante à Conexão Principal.

![image37.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image123.png)

As caixas de texto apresentam o nome das configurações que serão definidas pelo usuário, que apontam para outras conexões.

Para cancelar a conexão, exclua pelo botão ![image83.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image124.png) Excluir.

O botão ![selecionar](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image125.png) aciona a tela para a criação ou importação de informações para a nova conexão. As opções de configuração descritas estão abaixo:

- Nome da Conexão - informe um nome para a nova conexão;
- Tipo de Banco de Dados - selecione um tipo entre as opções disponíveis no campo;
- Parâmetros - apresenta as demais informações como o nome da base de dados, o nome de usuário, a senha e o nome do servidor;
- Na tela de [Configuração da conexão](configuracoes) é permitido que o usuário ![image74.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image74.png) (adicione) ou (exclua) parâmetros (é necessário conhecimento sobre parametrização do driver do banco de dados em uso).

A segunda opção para a criação de uma conexão adicional é pela utilização do botão ![importar de um wrfe](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image127.png). Na tela que é aberta após a efetuação de um clique sobre esse botão, selecionado o apontador de um projeto (*.wfre), aparecerá uma mensagem informando ao usuário que ele deve digitar uma senha de conexão para ter acesso ao banco de dados (campo Password).

Após entrar com as informações necessárias, clique no botão Ok.

Retornando à tela Conexões Adicionais, utilize o botão ![testar](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image126.png) para verificar a conexão.

Caso a conexão não esteja correta ou não disponível, será exibida uma tela com mensagem de erro.

Observações:

1. Não devem conter espaços nem no final nem no início de um nome dado a uma conexão adicional.
2. Na função Executar Atualização, quando utilizada com conexão adicional, é preciso usar as funções de transição.
3. Para acessar um formulário com a base de dados na conexão adicional, é necessário que o projeto seja salvo e o sistema reiniciado.
4. Quando dois usuários estiverem utilizando o mesmo projeto, simultaneamente, no Maker, e um deles configurar uma "conexão adicional", para que a mesma esteja disponível nas demais, deve-se fechar o projeto e acessa-lo novamente.
5. Removendo uma conexão adicional, ao sicronizar o Dicionários de dados, será apresentado uma mensagem perguntando se o usuário deseja excluir as tabelas referentes a conexão adicional. Esta funcionalidade foi implementada a partir da versão 3 do Maker
