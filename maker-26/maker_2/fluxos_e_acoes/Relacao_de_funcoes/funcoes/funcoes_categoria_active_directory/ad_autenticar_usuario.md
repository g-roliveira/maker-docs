---
title: "AD - Autenticar Usuário"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_active_directory/ad_autenticar_usuario.htm"
---

Descrição:

Autentica um usuário no Active Directory.

Parâmetros:

1. Servidor

2. Porta

3. Domínio

4. Usuário

5. Senha

![image1044.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1044.gif)

Retorno:

Retorna Verdadeiro se a autenticação foi efetuada com sucesso. Caso contrário, retorna Falso. Caso o Servidor ou a Porta estejam incorretos, um erro será lançado.

Exemplo:

Servidor: authserv

Porta: 389

Domínio: SOFTWELL

Usuário: maker

Senha: 1

Nome Real:

ebfADAuthentication

Compatibilidade:

Servidor

Autenticação de Usuário

Esta dica apresentará, passo a passo, um exemplo de autenticação de usuário usando o Active Directory. Com esse exemplo, é possível aproveitar o login e a senha de acesso à rede do usuário para acessar o sistema no Webrun.

Primeiro passo: Criação do Fluxo:

1. Serão utilizados dois Parâmetros de Entrada:

![image380.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image380.jpg)

Observação: É necessário criar, na ordem, o Login e a Senha, pois, quando o projeto é acessado no Webrun, envia parâmetros ao fluxo associado ao projeto.

2. Será criada uma variável na tela Identificadores (variáveis):

![image381.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image381.jpg)

3. Coloque um ![image382.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image382.jpg) para autenticar o usuário. Use a função AD - Autenticar Usuário e associe o resultado à variável Retorno:

![image383.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image383.jpg)

Observações:

1. Primeiro parâmetro - colocar o nome do Servidor;
2. Segundo parâmetro - colocar o número da porta que o Active Directory utiliza. O padrão é 389;
3. Terceiro parâmetro - colocar o nome do Domínio;
4. Quarto parâmetro - associe ao parâmetro de entrada criado (Login);
5. Quinto parâmetro - associe ao parâmetro de entrada criado (Senha).

4. Insira uma ![image384.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image384.jpg) para verificar se o usuário foi autenticado. Use a função Igual:

![image644.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image644.gif)

5. Se o usuário foi autenticado, clique em ![image643.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image643.gif) para informar o Parâmetro de Retorno. No [Montador de Expressão](../../../montador_de_expressoes), em [Propriedade](../../../tela_propriedades_do_montador_de_expressoes), selecione Inteiro e digite 2:

![image385.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image385.jpg)

Observação: No valor de retorno, é possível escrever master, pois, quando o usuário acessar o sistema, terá o perfil de administrador. No exemplo acima, foi criado um Grupo no Webrun com o nome Visitante, assim, quando o usuário acessar o projeto, não possuirá perfil de administrador. O número 2 refere-se ao código do grupo criado (Visitante). Caso queira visualizar o código do grupo, acesse a tabela FR_GRUPO.

6. Se o usuário não foi autenticado, clique em ![image643.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image643.gif) para informar o Parâmetro de Retorno. No [Montador de Expressão](../../../montador_de_expressoes), em [Propriedade](../../../tela_propriedades_do_montador_de_expressoes), selecione Inteiro e digite -1:

![image386.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image386.jpg)

Observação: Existem outros valores que podem ser retornados no componente. Para saber mais, acesse [Propriedade e Eventos da Área de Trabalho](../../../../propriedades_e_eventos_da_area_de_trabalho).

O Fluxo ficará assim:

![image387.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image387.jpg)

7. Salve o fluxo para Destino Servidor.
8. Feche o Editor de Fluxo de Ações.
9. [Associe ao Evento](../../../../formulario/associando_fluxos_aos_eventos) "Ao Autenticar" na área de trabalho do Maker o fluxo criado. Não é necessário colocar os parâmetros de entrada na tela [Ações](../../../../formulario/associando_fluxos_aos_eventos).
10. Salve o Projeto e acesse no ambiente Webrun.
