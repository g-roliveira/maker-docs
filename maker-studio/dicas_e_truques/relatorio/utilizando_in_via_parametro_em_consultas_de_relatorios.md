---
title: "Utilizando IN, via parâmetro, em consultas de Relatórios."
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/relatorio/utilizando_in_via_parametro_em_consultas_de_relatorios.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Relatório &gt;&gt; Utilizando IN, via parâmetro, em consultas de Relatórios

# Utilizando IN, via parâmetro, em consultas de Relatórios

O critério IN é utilizado quando desejamos passar uma lista de parâmetros para a consulta SQL.

Neste exemplo veremos como utilizar o critério IN em uma consulta SQL de Relatórios.

Crie um novo relatório, vá até a aba de dados e adicione uma nova fonte de dados, neste exemplo utilizaremos a tabela smc_cadastro_pacientes.

![image1846.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1846.jpg)

![image1847.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1847.jpg)

Observe que, ao clicar em Resultados, todos os registros serão retornados porque nenhum filtro (critério) foi informado.

Agora, adicionaremos o critério IN na coluna Critério da linha referente ao cad_id_codigo, no exemplo estamos utilizando como banco de dados o PostgreSQL. Observe a imagem abaixo

![image1848.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1848.jpg)

Após adicionar o "In (:filtro)" é necessário configurar o parâmetro de entrada do relatório.

Clique em ![image1849.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para.png)e configure o filtro como indefinido, Observe figura abaixo:

![image1850.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para1.png)

Dê um OK e volte para tela principal de seu relatório. Monte o layout de dados do relatório e salve-o. Clique aqui para mais informações de como criar um relatório.

Feche o relatório.

Na tela principal do Maker, crie um novo formulário com dois componentes, sendo uma Caixa de Texto e um Botão. Configure as propriedades Navegação, Aba Localizar e Abas do formulário para Não.

![image1851.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para2.png)

Agora, o próximo passo é criar um fluxo para abrir o relatório, clique com o botão direito em cima do botão e em Eventos Ao clicar e crie fluxo

No objeto inicio do fluxo crie uma variável de entrada do tipo Letras, no exemplo chamaremos essa variável de conteúdo.

![image1852.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para3.png)

Em uma consulta SQL o filtro IN ficaria IN(1,2,3,4). Como estamos falando de campos do tipo inteiro "Inteiro", ao informarmos "1,2,3,4" pelo Webrun, este valor será tratado como texto. Logo, para que os valores sejam passados como "Inteiro", faz-se necessário passar os valores entre colchetes.

Para isso crie uma variável do tipo letras que irá receber a cadeia de valores no formato exigido. Nesse exemplo chamaremos a variável de "Lista Formatada".

![image1853.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para4.png)

Adicione um novo processamento e descreva- o como "Formatar Lista", utilize a função Troca Todas as Subseqüências, passando os parâmetros como mostra a figura abaixo. O retorno dessa função será a variável declarada no passo anterior. Veja a descrição da função para mais detalhes.

![image1854.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para5.png)

Esse processamento é responsável em adicionar os colchetes entre os valores. O mesmo recebe um valor "1,2,3" e substitui todas as vírgulas para o caractere "],[" no final do processo temos " 1],[2],[3 ".

Próximo passo é abrir o relatório, para isso adicione um novo processamento chamado de "Abrir Relatório" e utilize a função Abrir relatório imediatamente informando os parâmetros necessários. Veja a descrição da função para mais detalhes.

Observe que o segundo parâmetro deve ser a concatenação do nome do parâmetro, "[", da lista formatada e "]" para fechar a lista de valores. Veja na imagem abaixo:

![image1855.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para6.png)

Ao final, o processamento devera ficar como a imagem abaixo:

![image1856.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para7.png)

O fluxo deverá ficar como a imagem abaixo, salve-o na camada Servidor definindo o nome desejado.

![image1857.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para8.png)

No parâmetro de entrada do fluxo, escolha o tipo Componente e selecione o componente Caixa de Texto (Lista de valores).

![image1858.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/para9.png)

Clique em OK.

Salve o formulário e ignore o assistente de banco de dados. Não esquecendo também de associá-lo ao menu do sistema.

Execute o formulário pelo Webrun.

![image1864.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1864.jpg)

![image1865.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1865.jpg)
