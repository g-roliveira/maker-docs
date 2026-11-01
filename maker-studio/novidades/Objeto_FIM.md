---
title: "Componente Integração"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/Objeto_FIM.html"
---

# Edição direta no objeto FIM

A edição do valor de retorno do objeto 'FIM' agora pode ser feita diretamente no campo 'Valor de retorno' do próprio objeto, havendo validação de tipo.

Caso o tipo do retorno seja inteiro, o campo 'Valor de retorno' só aceitará números, o mesmo vale para os outros tipos de dados. Veja abaixo a utilização dessa funcionalidade na prática.

### Utilizando a edição diretamente no objeto FIM

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/ObjetoFimFluxo.png)

Neste exemplo, com o tipo de retorno definido como 'Inteiro' o campo 'Valor' só irá aceitar numeros inteiros ou a utilização de funções que o retorno seja do tipo especificado.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/ObjetoFimInteiro.png)

### Veja outro exemplo:

Como citado acima, pode-se utilizar funções que tenha retorno igual ao especificado no tipo de retorno. Para exemplificar, utilizamos uma função que retorna um valor lógico no objeto que tem o tipo do retorno definido como 'Lógico'.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/ObjetoFimLogico.png)

## Observação(ões):

1. Caso seja utilizado uma função que tenha o tipo do retorno diferente do especificado no objeto, a mesma será removida.
