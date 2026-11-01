---
title: "Exportação de Dados"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/exportacao_de_dados.htm"
---

Esta dica apresentará, passo a passo, um exemplo de exportação de dados para um arquivo.

Primeiro passo: Criação do Fluxo:

1. Serão utilizados dois Identificadores (variáveis):

- Tabela_usuario - do tipo Tabela;
- Arquivo - do tipo Variante.

![image601.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados1.png)

2. Coloque um ![image602.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para selecionar os dados da entidade de origem. Use a função Abrir Consulta e associe o resultado à variável Tabela_ususario:

![image731.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados2.png)

Após clicar no parâmetro SQL Consulta, clique no botão ![image732.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql.png) e defina a consulta no Assistente SQL:

![image1246.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados3.png)

3. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para definir o arquivo que será utilizado (neste exemplo o arquivo será criado). Use a função Abrir Arquivo Para Escrita:

![image733.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados4.png)

No primeiro parâmetro, definimos o local físico e o nome do arquivo:

![image1396.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados5.png)

No segundo parâmetro, definimos Falso para que a geração ocorra em um novo arquivo:

![image1397.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados6.png)

4. Insira uma ![image606.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dec.png) para iniciar a coleta de dados, enquanto existir registros na consulta. Use a função Existem Registros apontando para a variável Tabela_funcionário:

![image734.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados6.png)

5. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para adicionar os dados coletados no arquivo. Use as funções: Adicionar a Arquivo para inserir os dados no arquivo; use Concatenação para montar a linha de dados, use Remover Espaços para pegar exatamente o conteúdo digitado; use Para Letras para converter os dados obtidos do campo da consulta em caracteres (exigência da função Concatenação); utilize a função Campo para selecionar cada campo da entidade usada na consulta; e use a função Quebra de Linha para ir a outra, inserindo um funcionário . Apresentará da seguinte forma:

![image607.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados8.png)

6. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) e utilize a função Próximo registro para que o ponteiro avance para o próximo registro da consulta:

![image735.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados9.png)

Após conectar ao componente ![image606.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dec.png), observe que formará um laço de repetição:

![image608.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados10.png)

7. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para Fechar o arquivo. Atribua à variável Arquivo:

![image736.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados11.png)

8. Insira um ![image602.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/proce.png) para Fechar a Consulta. Atribua à variável Tabela_funcionário:

![image737.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados12.png)

O fluxo ficará assim

![image609.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados13.png)

9. Salve o fluxo para Destino Servidor;
10. Feche o Editor de Fluxo de Ações;
11. Crie um formulário sem fonte de dados e adicione o componente Botão:

![image610.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dados15.png)

12. Utilizando a Propriedade Descrição para o componente Botão, determine o rótulo Exportar Usuários e por meio do Evento Ao clicar, associe ao fluxo criado para exportação;
13. Salve o formulário e execute no ambiente Webrun.
