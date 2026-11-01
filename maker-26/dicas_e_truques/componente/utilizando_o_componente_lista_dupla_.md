---
title: "Utilizando o componente Lista Dupla"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/componente/utilizando_o_componente_lista_dupla_.htm"
---

A dica a seguir exemplificará a utilização do componente Lista Dupla para a inserção de dados em uma tabela.

O formulário final terá o seguinte *layout*:

![image751.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image751.jpg)

Observe a modelagem das entidades envolvidas:

![image752.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image752.jpg)

Este formulário deve permitir a seleção de funcionários (lista da esquerda) para o projeto acima indicado.

1º Passo: Criar o formulário principal baseado na tabela scp_projeto.

![image753.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image753.jpg)

2º Passo: Inserir um componente Lista Dupla no formulário e configurar.

![image754.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image754.jpg)

Configure a Lista Dupla da seguinte forma:

1. para a Propriedade Descrição principal, defina o rótulo que aparece acima da primeira lista. Como exemplo: Selecione os funcionários para o projeto;
2. para a Propriedade SQL Principal, monte uma consulta que liste todos os nomes dos funcionários:

Select

  scp_funcionario.fun_nome,

  scp_funcionario.fun_cod

From

  scp_funcionario

1. Para a Propriedade Campo Chave Principal aponte para o campo scp_funcionario.fun_cod  da consulta;
2. Para a Propriedade Campo Lista Principal aponte para o campo scp_funcionario.fun_nome  da consulta;
3. Controle a exibição dos botões de inserção e remoção através das propriedades Adicionar item, Adicionar todos, Remover item e Remover todos;

Com esses passos, configuramos a exibição de todos os registros da entidade de funcionários, sem relacionar com o formulário principal.

1. Para a Propriedade Descrição selecionada, defina o rótulo que aparece acima da segunda lista. Como exemplo: Itens selecionados;
2. Para a Propriedade SQL Selecionados, monte uma consulta que selecione a tabela que será atualizada com o a chave da consulta definida na Propriedade SQL Principal. Neste exemplo, esta consulta foi implementada com a tabela scp_funcionário para que o nome dos funcionários sejam exibidos:

Select

  scp_trabalha_em.pro_cod,

  scp_trabalha_em.fun_cod,

  scp_funcionario.fun_nome

From

  scp_trabalha_em Inner Join

  scp_funcionario On scp_trabalha_em.fun_cod = scp_funcionario.fun_cod

1. Para a Propriedade Parâmetros Selecionados, relacione o formulário principal com a consulta definida em Propriedade SQL Selecionados:

![image755.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image755.jpg)

1. Para a Propriedade Campo Chave Selecionado aponte para o campo scp_funcionario.fun_cod  da consulta;
2. Para a Propriedade Campo Lista Selecionado aponte para o campo scp_funcionario.fun_nome  da consulta;
3. Controle a exibição dos botões de inserção e remoção através das propriedades Adicionar item, Adicionar todos, Remover item e Remover todos.

Com esses passos, configuramos a seleção de todos os registros da entidade de funcionários que serão inseridos na tabela scp_trabalha_em: receberá o valor do campo scp_funcionario.fun_cod e receberá o valor do campo scp_projeto.prod_cod que será passado como parâmetro, no modo inserção ou alteração do formulário. Para o componente Lista Dupla, pode-se implementar a sua funcionalidade ativando a Propriedade Duplo Clique para selecionar os itens para a primeira lista.

Utilizando Lista dupla - este vídeo exemplifica a utilização do componente Lista Dupla.
