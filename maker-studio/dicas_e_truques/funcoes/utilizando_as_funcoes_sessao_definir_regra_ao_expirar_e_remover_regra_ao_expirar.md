---
title: "Utilizando as Funções Sessão – Definir Regra ao Expirar e Remover Regra ao Expirar"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/funcoes/utilizando_as_funcoes_sessao_definir_regra_ao_expirar_e_remover_regra_ao_expirar.htm"
---

Primeiramente antes de seguir com o exemplo você deverá conferir a utilização do Parâmetro de Sessão Tempo do Webrun.

Imagine a seguinte situação: Em um formulário de inscrição, é preciso avaliar quantas pessoas acessam a página de inscrição e quantas chegam a efetivá-la. Caso a inscrição não seja efetivada, o sistema deve gerar um log com as inscrições que não foram concretizadas.

Dado o problema acima, utilizaremos as funções Definir regra ao Expirar e Remover Regra ao Expirar como exemplo de utilização.

Ao acessar o formulário, a função Definir Regra ao Expirar será utilizada para casos em que a inscrição não seja efetivada, caso o usuário confirme a inscrição, a função Remover Regra ao Expirar será executada para não gerar o log.

Veja o exemplo abaixo.

Para começar, crie um formulário com campos para a coleta de informações do usuário, como demonstra a tela abaixo:

![image1799.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe132.png)

Em seguida crie o fluxo que será executado quando a sessão expirar. O fluxo ficará assim.

![image1800.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe133.png)

O fluxo realiza uma consulta no banco e obtém a última quantidade registrada. Depois, a hora atual é obtida, a quantidade é atualizada e os novos valores são inseridos no banco. Como pode ser visto na descrição dos processamentos

Agora crie um fluxo que irá definir qual regra será executada caso a sessão expire. Neste fluxo, adicione um processamento e utilize a função Sessão – Definir Regra ao Expirar aplicando no primeiro parâmetro o fluxo criado no passo acima, para este exemplo, o nome do fluxo é Gerar Log. Salve o fluxo.

Veja a imagem abaixo:

![image1801.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe134.png)

![image1802.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe135.png)

Agora associe fluxo, Gerar Log, criado no passo acima ao evento "Ao Entrar" do formulário. O intuito é fazer com que, caso o formulário seja aberto e o usuário não se inscreva, a sessão irá expirar e a regra definida na sessão será executada.

Observe a imagem abaixo:

![image1803.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe136.png)

Por fim, crie mais um fluxo que irá obter os campos da tela de inscrição e inseri-los no banco. Utilize também a função Sessão – Remover Regra ao Expirar, levando em consideração que a inscrição seja efetuada, não é necessário gerar log.

Esse fluxo obtém os valores dos componentes por meio de variáveis de entrada no componente Inicio do fluxo, em seguida executa a atualização devida no banco de dados, remove a regra que deveria ser executada quando a sessão expirar e exibe a mensagem Inscrição realizada com sucesso! informando o fim da inscrição e do fluxo. Veja como ficou na imagem abaixo.

![image1804.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe137.png)

Salve-o.

Associe ao evento do botão Inscrever. Veja como na imagem abaixo.

![image1805.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe138.png)

Terminado isso, salve o projeto e insira-o no Menu. Conforme a imagem abaixo.

![image1806.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe139.png)

Execute-o no Webrun.

Abaixo a tela com um cadastro que foi concluído.

![image1807.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe140.png)

Quando o usuário fechar o formulário ou qualquer outra ação que implique na perda de conexão, o fluxo será executado. Lembrando que a execução do fluxo se dará após o tempo determinado no parâmetro TEMPO.

![image1808.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1808.jpg)

Agora basta comparar com a quantidade de registros que foram feitos no banco e fazer a coleta das informações.
