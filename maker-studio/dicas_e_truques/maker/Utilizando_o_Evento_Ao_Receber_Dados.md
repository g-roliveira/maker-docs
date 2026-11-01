---
title: "Utilizando o Evento Ao Receber Dados"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/Utilizando_o_Evento_Ao_Receber_Dados.htm"
---

O evento Ao Receber Dados é utilizado para associar uma nova consulta ao Formulário que o dispara, este evento executado toda vez que o Formulário é carregado.

Para habilitá-lo, localize o arquivo maker3.ini que se encontra no caminho C:\Documents and Settings\Nome do Usuário\Configurações locais\Dados de aplicativos\Softwell Solutions\Maker 3 e procure pelo parâmetro AoReceberDados, este parâmetro está na sessão [BETA], altere o valor do parâmetro para 1, salve o arquivo e feche o Maker (Caso esteja aberto).

![image1534.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rec1.png)

Os itens abaixo devem ser levados em consideração:

1. A consulta retornada pelo fluxo chamado no evento deve ser Navegável e Não Gerenciada.
2. A aba Localizar não será exibida ao utilizar este evento, pois a consulta retornada pelo fluxo ficará em memória com intuito de prover os dados para o formulário e não para pesquisa. Será necessário implementar uma lógica para que a consulta nos registros seja realizada.
3. No fluxo chamado pelo evento, deve-se utilizar a funçãoTornar Consulta Não Gerenciável a fim de evitar que o Webrun feche a consulta ao encerrar a execução do fluxo.
4. A consulta será encerrada quando o Formulário que disparou o evento for fechado.
5. A consulta retornada deve ser compatível com a consulta original do Formulário, ou seja, os mesmo campos devem estar presentes em ambas as consultas (já que se trata de uma nova associação de dados ao formulário, sendo que a consulta anterior será fechada).

Exemplo:

Para este exemplo utilizaremos a tabela FR_ACAO e as funções Abrir Consulta Navegável e Torna consulta não Gerenciável.

1. Crie um formulário com uma consulta SQL vinculada à tabela FR_ACAO. Não utilize critérios na mesma.

![image1535.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rec2.png)

2. Crie um novo fluxo e adicione uma variável do tipo "Tabela", chamaremos de "Tabela Ação".

![image1536.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rec3.png)

3. Adicione um processamento e utilize a função "Abrir consulta Navegável" e atribua o retorno à variável "Tabela Ação".
   1. Observe que para essa consulta foram adicionados alguns critérios, diferente da consulta original do formulário.

![image1883.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rec4.png)

![image1884.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rec5.png)

4. Adicione um segundo processamento e utilize a função "Tornar Consulta Não Gerenciável", informe como parâmetro a variável "Tabela Ação" e atribua o retorno a esta mesma variável. Dessa forma a consulta será fechada após conclusão do processamento do fluxo.

![image1885.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rec6.png)

5. No objeto "Fim", preencha os dados conforme a imagem abaixo. Esse retorno será utilizado pela função para preencher o formulário com os dados retornados.

![image1537.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rec7.png)

6. Salve o fluxo e associe-o ao Evento "Ao Receber Dados" do Formulário criado no passo "1".

![image1538.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rec8.png)

7. Salve o formulário e acesse-o pelo Webrun. Ao carregar o formulário, o evento "Ao Receber Dados" será disparado e os novos dados da consulta retornada pelo fluxo serão carregados
