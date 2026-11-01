---
title: "Utilizando LIKE, via parâmetro, em consultas de Relatórios"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/relatorio/utilizando_like_via_parametro_em_consultas_de_relatorios.htm"
---

Este exemplo tem como objetivo demonstrar a utilização do critério LIKE em consultas SQL de Relatórios.

Crie um novo relatório, vá até a aba Dados e adicione uma nova fonte de dados. Para este exemplo, utilizaremos a tabela fr_acao. Marque os dois campos disponíveis.

![image1597.jpg](../../image1597.jpg)

![image1598.jpg](../../image1598.jpg)

Observe que, ao clicar em Resultados, todos os registros serão retornados porque nenhum filtro foi informado.

Agora, adicionaremos o critério LIKE na coluna Critério da linha referente à coluna aco_nome ficando assim LIKE '%' || :contendo || '%' observe a utilização de || (pipes) para concatenação SQL pois, o exemplo utiliza o banco de dados PostgreSQL.

Veja na imagem abaixo, como ficou após a configuração.

![image1599.jpg](../../image1599.jpg)

![image1601.jpg](../../image1601.jpg)

Clique em OK do assistente SQL para fechá-lo e salvar as configurações. Vá até a aba Desenho e adicione dois componentes Texto na banda Cabeçalho.

![image1602.jpg](../../image1602.jpg)

Logo em seguida, adicione dois componentes Campo Texto à banda Detalhe.

![image1603.jpg](../../image1603.jpg)

Configure os componentes Campo Texto  para obter os dados de cada coluna da Fonte de dados.

![image1606.jpg](../../image1606.jpg)

Veja abaixo como ficou a disposição dos componentes.

![image1607.jpg](../../image1607.jpg)

Salve o relatório, defina um nome desejado.

O próximo passo é criar um fluxo para abrir o relatório. Crie um novo fluxo e o objeto Início adicione uma variável de entrada do tipo Letras, chamaremos de conteúdo.

![image1608.jpg](../../image1608.jpg)

Adicione um novo processamento e utilize a função Abrir relatório imediatamente e informe os parâmetros necessários. Veja a descrição da função para mais detalhes.

Observe que o segundo parâmetro deve ser a concatenação do parâmetro de entrada com o nome do parâmetro do relatório. Logo, deverá ser feito da seguinte forma:

![image1891.gif](../../image1891.gif)

Ao final, o processamento deverá ficar como na imagem abaixo:

![image1892.gif](../../image1892.gif)

Salve o fluxo na camada Servidor definindo o nome desejado.

O próximo passo é criar um formulário simples para chamar o fluxo recém criado. Crie um formulário sem fonte de dados e adicione um componente Botão e outro componente Caixa de Texto. Configure as propriedades Navegação, Aba Localizar e Abas do formulário para Não.

![image1609.jpg](../../image1609.jpg)

Associe o fluxo criado ao evento Ao clicar do componente Botão ao formulário. No parâmetro de entrada do fluxo, escolha o tipo Componente e selecione o componente Caixa de Texto.

![image1610.jpg](../../image1610.jpg)

Clique em OK e salve o formulário. Ignore o assistente de banco de dados. Associe o Formulário ao menu do sistema e abra-o pelo Webrun.

Com o formulário aberto, basta informar o conteúdo para filtro e clicar no botão Visualizar.

![image1611.jpg](../../image1611.jpg)

![image1612.jpg](../../image1612.jpg)

Para o exemplo feito, o relatório listará todas as ações que contenham o valor informado no parâmetro
