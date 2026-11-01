---
title: "Utilizando Texto formatado no Webservice"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/utilizando_texto_formatado_no_webservice.html"
---

Neste tutorial, mostraremos como retornar um **texto formatado** via Webservice e como obter este retorno no Mobile.

**Texto formatado** é um recurso utilizado para divisão de colunas/registros de acordo com o formato desejado. Por exemplo, imaginando que existe uma tabela com 02 colunas e 03 registros, poderíamos utilizar “|” (pipe) para separar os registros e “,” (vírgula) para separar as colunas:

> 1,Maker|2,Webrun|3,Mobile|

Como primeiro passo, devemos criar o fluxo que será publicado como Webservice. Este fluxo fará a leitura de uma tabela e formatará o texto para retorno.

Criando o Webservice no Maker

- Para um melhor entendimento, o fluxo ficará da seguinte forma:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_1.jpg)

- Defina as seguintes variáveis:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_2.jpg)

- Adicione um objeto **Processamento** e no **Montador de Expressão** utilize a função **Abrir consulta**. Atribua o resultado a variável **Tabela.**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_3.jpg)

> **Nota**: Utilize o assistente SQL para realizar uma consulta na tabela FR_ACAO

- Adicione um objeto **Decisão** e no **Montador de Expressão** defina a função **Existem registros**. Defina a variável **Tabela** no parâmetro.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_4.jpg)

- Para a decisão **SIM** selecione um objeto **processamento** e no **Montador de Expressão** realize as alterações conforme a imagem abaixo:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_5.jpg)

Observe que adicionamos o conteúdo da linha atual da tabela ao conteúdo existente na variável **retorno.**

- Insira um último **processamento** e informe a função **Próximo – Registro**.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_6.jpg)

- No final do fluxo clique sobre o objeto fim e determine o seguinte retorno.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_7.jpg)

- Salve o fluxo, e publique-o como [Webservice](http://suporte.softwell.com.br/maker/manual_3/pt/dicas_e_truques/maker/publicando_um_fluxo_como_webservice.htm "Como publicar um fluxo como webservice").

Criando o fluxo que consumirá o Webservice

Nosso próximo passo é criar o fluxo que consumirá o Webservice criado anteriormente.

- Para um melhor entendimento o fluxo ficará da seguinte forma:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_8.jpg)

- Defina as seguintes variáveis:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_9.jpg)

- Insira um objeto **processamento** e no **montador de expressão** determine a **função Chamar Serviço Web para dispositivos móveis.** Atribua o resultado à variável **retorno da consulta.**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_10.jpg)

- No primeiro parâmetro informe a URL do Webservice;
- No segundo parâmetro informe a porta do Webservice,
- No terceiro parâmetro informe o nome do método que será executado;
- O quarto e quinto parâmetros devem ficar vazios (O Webservice não possui parâmetros de entrada)

- Insira um objeto **processamento** e no **montador de expressão** selecione a função **Quebrar texto** e informe os parâmetros conforme imagem abaixo. Atribua seu retorno a variável **Lista de registros**.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_11.jpg)

- Insira um objeto **processamento** e no **montador de expressão** selecione a função **Tamanho da lista**. Atribua seu retorno a variável **Qtde de registros**.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_12.jpg)

- Insira um objeto **Decisão** e no **Montador de Expressão** selecione a função **Menor** **ou igual**.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_13.jpg)

- Insira um objeto **processamento** e no **montador de expressão** selecione a função **Quebrar texto** e informe os parâmetros conforme imagem abaixo. Atribua seu retorno a variável **Lista temporária**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_21.png)

- Informe um objeto **processamento** e no **montador de expressão**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_14.jpg)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_15.jpg)

- Para o campo ‘aco_codigo’ informe a função **Obter Objeto da Lista**.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_16.jpg)

- No primeiro parâmetro informe a variável Lista temporária
- No segundo parâmetro informe 1 (Obteremos o primeiro objeto da lista para inserir no campo código)

- No campo ‘aco_nome’ informe novamente a função anterior.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_17.jpg)

- No primeiro parâmetro informe a variável Lista temporária,
- No segundo parâmetro informe 2.

- Adicione um objeto processamento e no montador de expressão selecione a função Soma.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_18.jpg)

- No primeiro parâmetro informe a variável Contador;
- No segundo parâmetro informe 1.

- Para a decisão **Não**, ligue ao objeto **Fim**.
- Salve o fluxo e associe ao componente botão do formulário. Exporte o projeto para a plataforma desejada e execute-o.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_19.png)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_webservice_20.png)

> **Observação**: Adapte a tabela ‘mob_novo_codigo’ para sua tabela existente.
