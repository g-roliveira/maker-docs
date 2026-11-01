---
title: "Componente Integração"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/Rest_Callback_Error.html"
---

# Chamada de um fluxo Callback de erro na função 'Rest - Consumir WebService'

A chamada de um fluxo Callback de erro ajuda a tratar possíveis erros no processo de requisição e resposta do servidor.

A utilização dessa função é recomendada para quando se quer ter um caminho(fluxo) alternativo caso no processo de request/response(Requisição e Resposta) tenha ocorrido algum erro. Veja abaixo um exemplo de como utilizar essa funcionalidade:

### Utilizando a função Rest - Consumir WebService

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/RestConsumirFluxo.png)

No processamento acima utilizamos a função passando além do fluxo de sucesso(4º parâmetro) que por padrão recebe a resposta da requisição como parâmetro automático, passamos também um fluxo(9º parâmetro) para ser executado caso tenha ocorrido algum erro no processo da requisição ou resposta, esse fluxo recebe automaticamente um parâmetro que é o código do erro e a lista de parâmetros(opicional) passada no 10º parâmetro. EX: 404 = Endereço não encontrado.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/RestConsumir.png)

### Fluxo de Callback (Este fluxo só será executado caso tenha ocorrigo algum erro no processo anterior)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/TratarErroFluxo.png)

No processamento acima fizemos o processo de tratamento de erros baseado no código do erro passado automaticamente para o fluxo.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/TratarErroDecisao.png)

Exibindo o erro tratado ao usuário.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/TratarErroNaoEncontrado.png)
