---
title: "Exportação de Dados"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/maker/exportacao_de_dados.htm"
---

Esta dica apresentará, passo a passo, um exemplo de exportação de dados para um arquivo.

Primeiro passo: Criação do Fluxo:

1. Serão utilizados dois Identificadores (variáveis):

- Tabela_funcionário - do tipo Tabela;
- Arquivo - do tipo Variante.

![image601.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image601.jpg)

2. Coloque um ![image602.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image602.jpg) para selecionar os dados da entidade de origem. Use a função Abrir Consulta e associe o resultado à variável Tabela_funcionário:

![image731.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image731.gif)

Após clicar no parâmetro SQL Consulta, clique no botão ![image732.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image732.gif) e defina a consulta no Assistente SQL:

![image1246.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1246.jpg)

3. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image602.jpg) para definir o arquivo que será utilizado (neste exemplo o arquivo será criado). Use a função Abrir Arquivo Para Escrita:

![image733.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image733.gif)

No primeiro parâmetro, definimos o local físico e o nome do arquivo:

![image1396.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1396.jpg)

No segundo parâmetro, definimos Falso para que a geração ocorra em um novo arquivo:

![image1397.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1397.jpg)

4. Insira uma ![image606.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image606.jpg) para iniciar a coleta de dados, enquanto existir registros na consulta. Use a função Existem Registros apontando para a variável Tabela_funcionário:

![image734.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image734.gif)

5. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image602.jpg) para adicionar os dados coletados no arquivo. Use as funções: Adicionar a Arquivo para inserir os dados no arquivo; use Concatenação para montar a linha de dados, use Remover Espaços para pegar exatamente o conteúdo digitado; use Para Letras para converter os dados obtidos do campo da consulta em caracteres (exigência da função Concatenação); utilize a função Campo para selecionar cada campo da entidade usada na consulta; e use a função Quebra de Linha para ir a outra, inserindo um funcionário . Apresentará da seguinte forma:

![image607.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image607.jpg)

6. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image602.jpg) e utilize a função Próximo registro para que o ponteiro avance para o próximo registro da consulta:

![image735.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image735.gif)

Após conectar ao componente ![image606.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image606.jpg), observe que formará um laço de repetição:

![image608.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image608.jpg)

7. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image602.jpg) para Fechar o arquivo. Atribua à variável Arquivo:

![image736.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image736.gif)

8. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image602.jpg) para Fechar a Consulta. Atribua à variável Tabela_funcionário:

![image737.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image737.gif)

O fluxo ficará assim

![image609.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image609.jpg)

9. Salve o fluxo para Destino Servidor;
10. Feche o Editor de Fluxo de Ações;
11. Crie um formulário sem fonte de dados e adicione o componente Botão:

![image610.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image610.jpg)

12. Utilizando a Propriedade Descrição para o componente Botão, determine o rótulo Exportar Funcionários e por meio do Evento Ao clicar, associe ao fluxo criado para exportação;
13. Salve o formulário e execute no ambiente Webrun.
