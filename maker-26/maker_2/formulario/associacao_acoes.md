---
title: "Associação de Ações"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/associacao_acoes.htm"
---

Inicialmente, deve-se informar que este recurso se apresenta disponível para projetos sobre todos os bancos de dados homologados para o Maker, com exceção do MYSQL.

Este procedimento baseia-se num fluxo para banco de dados (saiba mais acessando o tópico [Propriedades do Fluxo](../fluxos_e_acoes/propriedades_das_regras)), que é associado a uma tabela. Quando Compilado, é gerada uma Procedure no bando que será disparada por uma Trigger.

Siga os passos abaixo, que demonstrarão como funciona o procedimento:

1. Desenvolva um fluxo para banco de dados.
2. Abra um formulário no modo de edição no Maker.
3. Clique em ![image485.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image485.gif) (botão da [Paleta de Objetos](../paleta_objetos)).
4. Clique no botão ![image486.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image486.gif). Será exibida a tela Associação de ações:

![image223.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image223.jpg)

Tela esta composta pelas seguintes opções:

- o campo Tabela apresenta a fonte de dados padrão do formulário em uso;
- o campo Banco apresenta o nome do SGDB em uso;
- a aba Fluxo apresenta os fluxos destinados para banco de dados existentes no banco do projeto. Na parte inferior da tela, é exibida a legenda com o status de cada fluxo:
- - ![image487.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image487.gif) - representa que o fluxo foi compilado;
  - ![image488.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image488.gif) - representa que o fluxo ainda não foi compilado ou foi descompilado;
  - ![image489.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image489.gif) - representa que o fluxo foi alterado após a ultima compilação.

Os botões ![compilar](https://suporte.softwell.com.br/Manual/Maker2_6/image490.gif) / ![recompilar](https://suporte.softwell.com.br/Manual/Maker2_6/image227.jpg) / ![descompilar](https://suporte.softwell.com.br/Manual/Maker2_6/image226.jpg) / ![reverter](https://suporte.softwell.com.br/Manual/Maker2_6/image492.gif)  alternam-se a depender do status de cada fluxo:

- ![image490.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image490.gif) - compila o fluxo gerando a procedure no banco;
- ![image227.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image227.jpg) - utilizado quando o fluxo sofre alteração (drop e depois create);
- ![image226.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image226.jpg) - elimina a procedure do banco (drop);
- ![image492.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image492.gif) - esta opção restaura a última compilação. Está disponível até para os fluxos que foram descompilados e apresentam o status ![image488.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image488.gif).

5. Selecione o fluxo que deseja compilar e clique no botão ![image490.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image490.gif).

Observações:

1. O Maker avisará se o fluxo apresenta alguma irregularidade e não executará a operação.
2. Não ocorrerá a compilação caso as [Configurações da aba Rede e Conectividade](../configuracao_das_conexoes/configuracoes) não estejam configuradas corretamente. A configuração Proxy não será necessária caso o Webrun seja executado LOCALHOST.

6. Agora ative a aba Eventos.

![image229.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image229.jpg)

A tela está composta pelas seguintes opções:

1. o campo Evento apresenta as opções: Depois de inserir, Depois de alterar e Depois de excluir;
2. o campo Ação apresenta os fluxos com status ![image487.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image487.gif) e ![image489.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image489.gif);
3. o botão ![adicionar](https://suporte.softwell.com.br/Manual/Maker2_6/image493.gif) insere na grade abaixo o Evento associado à Ação;
4. o botão ![image494.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image494.gif) retira o item da grade;
5. o botão ![image490.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image490.gif) gera a trigger para a procedure;
6. o botão ![image226.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image226.jpg) exclui (drop) a trigger.

7. Selecione o Evento e a Ação e clique no botão ![image493.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image493.gif). Caso o fluxo solicite parâmetros de entrada (saiba mais sobre Parâmetros de Entrada acessando o tópico exemplo Criando um Fluxo), é exibida a tela:

![image230.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image230.jpg)

A tela está composta pelas seguintes opções:

1. o campo Parâmetros apresenta os itens obrigatórios que devem ser declarados;
2. em Campo associe o campo da tabela ao Parâmetro de Entrada;
3. o botão ![image493.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image493.gif) insere na grade a associação do Parâmetro de Entrada ao campo da tabela (fonte de dados do formulário);
4. o botão ![image494.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image494.gif) retira o registro da grade;
5. o botão ![image231.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image231.jpg) confirma a(s) declaração(ões);
6. o botão ![image232.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image232.jpg) cancela a(s) declaração(ões).

- Defina os Parâmetros de Entrada (se necessário) e clique no botão ![image231.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image231.jpg);
- Adicione todos os Eventos que forem necessários e ![image497.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image497.gif) a tela.

Observações:

1. Este recurso não está disponível para usuários da versão Standard Edition. Para mais detalhes sobre as características de cada versão do Maker, acesse o tópico [Recursos e Características das Versões do Maker](../../recursos_e_caracteristicas_das_versoes_do_maker);
2. Este recurso não está disponível para o banco de dados [Mysql](../../recursos_avancados/suporte_banco_de_dados/mysql_server_5).
