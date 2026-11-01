---
title: "Filtrando um campo do tipo data por uma variável de sessão"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/Filtrando_um_campo_do_tipo_data_por_uma_variavel_de_sessao.htm"
---

Esse exemplo demonstra de maneira prática como filtrar um campo do tipo data por uma variável de sessão.

1. Crie um formulário com as seguintes características:

![image1169.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var1.png)

2. Criação do fluxo:

Para facilitar o raciocínio o fluxo ficará da seguinte forma:

![image1170.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var2.png)

1. Defina o seguinte parâmetro de entrada

![image1172.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var3.png)

2. Adicione um processamento e utilize a seguinte função: Definir variável de sessão.

![image1175.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var4.png)

3. Adicione um processamento e utilize a função: Atualizar Componente.

![image1176.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var5.png)

4. Associe o fluxo ao botão Filtrar do formulário e em Parâmetros de entrada do fluxo, selecione o componente MakerEdit1.

![image1179.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var6.png)

3. Definindo a consulta SQL.

1. Clique sobre o componente Grade do formulário e selecione Definições e em seguida Assistente de Consulta.

![image1180.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var7.png)

A consulta ficará da seguinte forma:

![image1184.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var8.png)

2. (Lpad(Extract(Day From fr_ususario.usr_dias_expiracao), 2, '0') || '/' || Lpad(Extract(Month From fr_ususario.usr_dias_expiracao), 2, '0') || '/' || Extract(Year From fr_ususario.usr_dias_expiracao)). Conteúdo do campo selecionado em vermelho.

Observação: O select irá variar para cada tipo de banco utilizado. No exemplo o banco utilizado é o Postgres.

4. Salve o formulário e execute-o no Webrun.

![image1185.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/var9.png)
