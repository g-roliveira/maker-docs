---
title: "Autenticação de Usuário"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/autenticacao_usuario.htm"
---

Esta dica apresentará, passo a passo, um exemplo de autenticação de usuário usando o Active Directory. Com esse exemplo, é possível aproveitar o login e a senha de acesso à rede do usuário para acessar o sistema no Webrun.

Primeiro passo: Criação do Fluxo:

1. Serão utilizados dois Parâmetros de Entrada:

![image380.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image705.png)

Observação: É necessário criar, na ordem, o Login e a Senha, pois, quando o projeto é acessado no Webrun, envia parâmetros ao fluxo associado ao projeto.

2. Será criada uma variável na tela Identificadores (variáveis):

![image381.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image706.png)

3. Coloque um ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image707.png) para autenticar o usuário. Use a função AD - Autenticar Usuário e associe o resultado à variável Retorno:

![image383.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image708.png)

Observações:

1. Primeiro parâmetro - colocar o nome do Servidor;
2. Segundo parâmetro - colocar o número da porta que o Active Directory utiliza. O padrão é 389;
3. Terceiro parâmetro - colocar o nome do Domínio;
4. Quarto parâmetro - associe ao parâmetro de entrada criado (Login);
5. Quinto parâmetro - associe ao parâmetro de entrada criado (Senha).

4. Insira uma ![image384.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image709.png) para verificar se o usuário foi autenticado. Use a função Igual:

![image644.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image710.png)

5. Se o usuário foi autenticado, clique em ![image643.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image711.png) para informar o Parâmetro de Retorno. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), em [Propriedade](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), selecione Inteiro e digite 2:

![image385.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image712.png)

Observação: No valor de retorno, é possível escrever master, pois, quando o usuário acessar o sistema, terá o perfil de administrador. No exemplo acima, foi criado um Grupo no Webrun com o nome Visitante, assim, quando o usuário acessar o projeto, não possuirá perfil de administrador. O número 2 refere-se ao código do grupo criado (Visitante). Caso queira visualizar o código do grupo, acesse a tabela FR_GRUPO.

6. Se o usuário não foi autenticado, clique em ![image643.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image711.png) para informar o Parâmetro de Retorno. No [Montador de Expressão](../../maker_3/fluxos_e_acoes/montador_de_expressoes), em [Propriedade](../../maker_3/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), selecione Inteiro e digite -1:

![image386.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image713.png)

Observação: Existem outros valores que podem ser retornados no componente. Para saber mais, acesse [Propriedade e Eventos da Área de Trabalho](../../maker_3/propriedades_e_eventos_da_area_de_trabalho).

O Fluxo ficará assim:

![image387.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image714.png)

7. Salve o fluxo para Destino Servidor.
8. Feche o Editor de Fluxo de Ações.
9. [Associe ao Evento](../../maker_3/formulario/associando_fluxos_aos_eventos) "Ao Autenticar" na área de trabalho do Maker o fluxo criado. Não é necessário colocar os parâmetros de entrada na tela [Ações](../../maker_3/formulario/associando_fluxos_aos_eventos).
10. Salve o Projeto e acesse no ambiente Webrun.
