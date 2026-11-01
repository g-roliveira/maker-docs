---
title: "Utilizando o componente Árvore"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/componente/utilizando_o_componente_arvore.htm"
---

A dica a seguir exemplificará a utilização do componente Árvore para visualização de registros de uma entidade autorrelacional.

O formulário final terá o seguinte layout:

![image756.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image756.jpg)

Este exemplo terá como base um formulário referente ao cadastro de Departamentos, um Componente Árvore que liste os funcionários Gerentes e seus respectivos funcionários. Implementando os recursos do componente, será associado ao Evento Ao clicar (clique sobre o nome do funcionário) a listagem dos projetos deles, selecionado em um Componente Texto Longo.

1º Passo : criar o formulário principal baseado na tabela sig_departamento:

![image758.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image758.jpg)

2º Passo : inserir um componente Árvore no formulário e configurar:

![image759.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image759.jpg)

Configure a Árvore da seguinte forma:

1. Para a Propriedade SQL, monte uma consulta que liste todos os nomes dos funcionários:

Select

  sig_funcionario.fun_cod,

  sig_funcionario.fun_nome,

  sig_funcionario.fun_cod_gerente,

  sig_funcionario.dep_cod

From

  sig_funcionario

![image1111.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1111.jpg)

2. Para a Propriedade Campo Chave, aponte para o campo sig_funcionario.fun_cod  da consulta;
3. Para a Propriedade Campo Lista, aponte para o campo sig_funcionario.fun_nome  da consulta;
4. Para a Propriedade Campo pai, aponte para o campo sig_funcionario.fun_cod_gerente da consulta;
5. Para a Propriedade Parâmetros, relacione o formulário principal com a consulta definida em Propriedade SQL:

![image1113.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1113.jpg)

Com esses passos, configuramos a seleção de todos os registros da entidade de funcionários que se relacionam com o departamento atual.

3º Passo : inserir um componente Texto Longo no formulário

![image761.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image761.jpg)

1. Na Propriedade Descrição, determine um rótulo para o componente. Como exemplo: Projetos determinados.
2. Na Propriedade Nome, indique Projetos (por exemplo).

4º Passo : criação dos fluxos

1. Fluxo para preencher o componente Texto Longo ao clicar no nome do funcionário. Inicialmente, definir dois Parâmetros de Entrada:

![image762.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image762.jpg)

2. Criar Identificadores (variáveis) para o fluxo

![image763.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image763.jpg)

Observação: O tamanho definido para a variável relação é uma estimativa de caracteres que irá receber.

3. Definir a relação de funcionários por projeto:

![image764.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image764.jpg)

Gerar a seguinte consulta:

Select

  sig_projeto.pro_nome

From

  sig_trabalha_em Inner Join

  sig_projeto On sig_trabalha_em.pro_cod = sig_projeto.pro_cod

Where

  sig_trabalha_em.fun_cod = :func

![image1115.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1115.jpg)

4. Utilizar uma Decisão que persista na existência de registros na consulta:

![image765.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image765.jpg)

5. Acumular os valores obtidos na consulta em uma variável do tipo Tabela:

![image766.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image766.jpg)

6. Verificar o conteúdo do próximo registro da consulta para acúmulo na variável:

![image767.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image767.jpg)

7. Caso não existam mais registros, atribuir ao componente Texto Longo o valor armazenado na variável:

![image768.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image768.jpg)

8. Salve o fluxo para a camada Servidor (já que manipulamos dados da base).
9. Retornando ao formulário, atribua ao Evento Ao clicar do Componente Árvore, o fluxo criado.

10. Fluxo complementar para limpar o conteúdo do componente Texto Longo ao navegar. Criar um fluxo para a camada Servidor, que limpe o conteúdo do Componente Texto Longo: atribuir ao Evento Ao Navegar do formulário:

![image769.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image769.jpg)

Salve o formulário e execute o projeto.

Utilizando o componente Árvore - este vídeo exemplifica a utilização do componente Árvore.
