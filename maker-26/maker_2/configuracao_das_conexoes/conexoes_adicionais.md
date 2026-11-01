---
title: "Conexões Adicionais"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/configuracao_das_conexoes/conexoes_adicionais.htm"
---

Em conexões adicionais, é possível estabelecer cinco opções de conexões extras. Há a possibilidade de criação de conexões e de importar conexões existentes.

Pelo do menu Projeto, selecionando a opção Conexões Adicionais, torna-se possível o acesso a outras fontes de dados. Essas fontes podem ser utilizadas de modo semelhante à Conexão Principal.

![image37.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image37.jpg)

As caixas de texto apresentam o nome das configurações que serão definidas pelo usuário, que apontam para outras conexões.

Para cancelar a conexão, exclua pelo botão ![image83.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image83.gif) Excluir.

O botão ![selecionar](https://suporte.softwell.com.br/Manual/Maker2_6/image84.gif) aciona a tela para a criação ou importação de informações para a nova conexão. As opções de configuração descritas estão abaixo:

- Nome da Conexão - informe um nome para a nova conexão;
- Tipo de Banco de Dados - selecione um tipo entre as opções disponíveis no campo;
- Parâmetros - apresenta as demais informações como o nome da base de dados, o nome de usuário, a senha e o nome do servidor;
- Na tela de [Configuração da conexão](configuracoes) é permitido que o usuário ![image74.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image74.gif) (adicione) ou ![image75.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image75.gif) (exclua) parâmetros (é necessário conhecimento sobre parametrização do driver do banco de dados em uso).

A segunda opção para a criação de uma conexão adicional é pela utilização do botão ![importar de um wrfe](https://suporte.softwell.com.br/Manual/Maker2_6/image86.gif). Na tela que é aberta após a efetuação de um clique sobre esse botão, selecionado o apontador de um projeto (*.wfre), aparecerá uma mensagem informando ao usuário que ele deve digitar uma senha de conexão para ter acesso ao banco de dados (campo Password).

Após entrar com as informações necessárias, clique no botão Ok.

Retornando à tela Conexões Adicionais, utilize o botão ![testar](https://suporte.softwell.com.br/Manual/Maker2_6/image85.gif) para verificar a conexão.

Caso a conexão não esteja correta ou não disponível, será exibida uma tela com mensagem de erro.

Observações:

1. Não devem conter espaços nem no final nem no início de um nome dado a uma conexão adicional.
2. Na versão Standard Edition, o recurso de configuração de conexões adicionais está restrito a uma conexão adicional. Para mais detalhes, pode ser consultado o tópico [Recursos e Características das Versões do Maker](../../recursos_e_caracteristicas_das_versoes_do_maker);
3. Na função Executar Atualização, quando utilizada com conexão adicional, é preciso usar as funções de transição.
4. Para acessar um formulário com a base de dados na conexão adicional, é necessário que o projeto seja salvo e o sistema reiniciado.
5. Quando dois usuários estiverem utilizando o mesmo projeto, simultaneamente, no Maker, e um deles configurar uma "conexão adicional", para que a mesma esteja disponível nas demais, deve-se fechar o projeto e acessa-lo novamente.
6. Removendo uma conexão adicional, ao sicronizar o Dicionários de dados, será apresentado uma mensagem perguntando se o usuário deseja excluir as tabelas referentes a conexão adicional. Esta funcionalidade foi implementada a partir da versão 2.6.1.6 do Maker

Criando Conexões Adicionais - este vídeo demonstra a criação de conexões adicionais do projeto com outros bancos de dados.
