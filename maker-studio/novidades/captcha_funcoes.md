---
title: "Captcha"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/captcha_funcoes.html"
---

#

A função "Captcha - Criar" gera uma sequência de números e letras com cores para maior segurança da sua aplicação, o captcha do Maker é case-sensitive (difere de minúsculas e maiúsculas), vejamos como utilizar a função em um exemplo abaixo:

Crie um novo formulário com o nome de Captcha.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/captcha1.png)

Insira um componente imagem onde o captcha irá aparecer, um componente botão onde será atualizado o captcha e uma caixa de texto para receber o valor retornado pela função "Captcha - Criar" que será utilizada no próximo exemplo da função [Captcha - Validar](#Captcha - Validar) .

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha8.png)

Abra um novo Fluxo.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha3.png)

O fluxo irá ficar da seguinte forma.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha4.png)

Defina a variável GUIDCaptcha.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha5.png)

No primeiro processamento deve ser montada a seguinte expressão. Utilize a função "Captcha - Criar" passando no primeiro parâmetro o componente imagem onde o captcha será renderizado, no segundo parâmetro deve ser informada a quantidade de caracteres que o desenvolvedor decidir que o captcha ira exibir, iremos utilizar a variável GUIDCaptcha como retorno dessa expressão.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha6.png)

No segundo processamento deve ser montada a seguinte expressão. Utilize a função "ALterar Valor do Componente" passando no primeiro parâmetro o formulário em que o componente que irá receber o valor do GUIDCaptcha está, no segundo parâmetro deve selecionar o componente que irá receber o valor do GUIDCaptcha e no terceiro parâmetro utilize a função "Para Letras" e selecione a variável GUIDCaptcha.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha7.png)

Salve o fluxo na camada servidor e coloque o nome de "Captcha - Criar Captcha" .

Associe o fluxo ao evento "ao clicar" do botão e ao evento "ao entrar" do formulário.

O formulário irá ficar da seguinte forma.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha9.png)

#

A função "Captcha - Validar" serve para a validação do captcha gerado no exemplo anterior sobre a função onde o mesmo deve ser implementado da seguinte forma.

Usando o formulário do exemplo anterior adicione um componente caixa de texto onde o usuário irá digitar a validação do Captcha, um botão para a validação do Captcha e um componente texto longo.
![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha10.png)

Abra um novo Fluxo.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha3.png)

O fluxo irá ficar da seguinte forma.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha11.png)

Defina os seguites parâmetros de entrada.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha12.png)

Defina a variável RetornoCaptcha.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha13.png)

No primeiro processamento deve ser ultilizada a função "Captcha - Validar",informando no primeiro parâmetro a variável Resposta , no segundo parâmetro a variável GUIDCaptcha e como retorno a variável RetornoCaptcha onde a mesma armazenará o valor lógico.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha14.png)

Na Decisão deve ser adicionada a função "Para Lógico" onde será definido para que lado o fluxo irá seguir de acordo com a resposta da variável RetornoCaptcha.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha15.png)

- Caso a resposta seja true o fluxo irá para o lado do Sim, onde o fluxo irá ocultar o componente texto longo.
- Adicione um processamento e utilize a função "Mostrar Componente" , onde no primeiro parâmetro deve ser passado o componente que será oculto e no segundo parâmetro a função "Não" selecionando o parâmetro RetornoCaptcha.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha16.png)

- Adicionar uma interação com um alerta informando a validação do Captcha.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha17.png)

Case a decisão siga para o lado do Não, deve ser adicionado um processamento com a função "Alterar Valor do Componente" onde a mensagem de erro na validação será montada. No primeiro parâmetro deve ser informado o formulario onde o componente está, no segundo parâmetro informe o componente texto longo onde o mesmo receberá o valor da mensagem passada no terceiro parâmetro que será a seguinte "A Resposta do Captcha não é válida, tente novamente".

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha18.png)

Um outro processamento será adicionado, o mesmo irá mostrar o componente caixa de texto que receberá a alteração do processamento anterior, no primeiro parâmetro deve ser informado o nome do componente e no segundo parâmetro a função "Não" selecionando o parâmetro "RetornoCaptcha".

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha19.png)

Por último adicione um subfluxo selecionando o fluxo de "Captcha - Criar Captcha"

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha20.png)

O formulário irá aprensentar o seguinte comportamento no webrun caso o fluxo passe para o lado do Sim.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha21.png)

O formulário irá aprensentar o seguinte comportamento no webrun caso o fluxo passe para o lado do Não.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/captcha22.png)

## **Validando informações com captcha sem conexão com a internet**
