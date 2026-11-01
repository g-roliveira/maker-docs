---
title: "Criar Objeto Lista"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_lista/criar_objeto_lista.htm"
---

Descrição:

Essa função cria uma lista com todos os valores que foram passados pelos parâmetros.

Parâmetros:

Não possui

![image1253.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1253.gif)

Retorno:

Lista vazia. O retorno dessa função deve ser armazenado numa variável do tipo variante.

Observações:

1. Para inserir elemento na lista é necessária a utilização de outras funções da categoria lista.

2. Não há suporte para passagem de parâmetro de uma lista criada na camada "Cliente" para a camada "Servidor"; a ação contrária é suportada.

Exemplo:

Caso queira inserir uma lista de números, primeiramente chama a função criar objeto lista e atribui a uma variável do tipo variante e depois chama outra função da categoria Lista para inserir essa lista de números no Objeto Lista.

Nome Real:

ebfListCreate

Compatibilidade:

Cliente e Servidor
