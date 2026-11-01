---
title: "Componente Integração"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/novo_componente_integracao.html"
---

![integracao_icone_maker.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/integracao_icone_maker.png)

Componente Maker 3 que integra bibliotecas de frameworks terceiros (como jQuery, Bootstrap, etc) à formulários Maker, sendo possível transportar códigos prontos ou desenvolver do zero.
Confira as funcionalidades do mesmo:

### O componente Integração conta com as seguintes funcionalidades:

- **Suporte à HTML e CSS nativos;**
- **Suporte à responsividade;**
- **Importação de bibliotecas através de endereço CDN;**
- **Reconhecimento automático de botões e âncoras com associação de Id;**
- **Associação de fluxos Maker à elementos HTML através de eventos DOM;**
- **Pré-visualização em tela;**

### As propriedades do componente Integração são:

- **Dica :** Campo onde deve ser atribuida informações sobre a dica do componente .
- **Container :** Define ou não, a qual container o componente irá pertencer.
- **PosicaoX e PosicaoY :** Definem o ponto de ancoragem do componente, se a opção deslizante não estiver habilitada.
- **Altura e Tamanho :** São respectivamente a altura e a largura do componente.
- **Visível :** Habilita ou desabilita a visibilidade do componente.
- **Habilitado :**  Habilita ou desabilita a usabilidade do componente.
- **Nome :** Parâmetro que serve para nomear internamente o componente.
- **Propriedades Ocultas :** Define quais propriedades não serão exibidas na resposta da requisição.
- **Código :** Código interno do componente.
- **Posicionamento :** Define se o componente aparecerá em sua posição natural, em uma posição relativa ou ocupará toda a área de exibição.
- **Alinhamento Vertical :** Define se o componente deverá se alinhar ao topo, centro ou rodapé da área de exibição.
- **Alinhamento Horizontal :** Define se o componente deverá se alinhar à esquerda, ao centro ou à direita da área de exibição.

### Para configurar o componente, utilize a propriedade "Estrutura" do mesmo:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/integracao_prop.png)

- Na propriedade estrutura, uma tela de edição do componente Integração é aberta, onde na mesma é possivel a configuração de toda estrutura.

Segue imagens de um componente já configurado.

- HTML

Aba onde será inserido o conteúdo HTML do componente desejado, é recomendável que se insira apenas o conteúdo dentro do "body do documento, pois o cabeçalho é tratado automaticamente pelo Integração

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/integracao_HTML.png)

- CSS.

Aba onde será inserido o conteúdo CSS do componente.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/integracao_CSS.png)

- Java Script.

Aba onde se insere o código JavaScript do componente, ao utilizar códigos de frameworks de terceiros, deve-se importar a biblioteca na tela seguinte para o devido funcionamento.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/integracao_JS.png)

- Bibliotecas.

Aqui serão inseridas as bibliotecas para framework JavaScript e CSS, deve ser passado o endereço CDN da biblioteca, o mesmo deve ser passado com o prefixo completo do endereço (http://).

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/integracao_Library.png)

- Eventos.

Nesta aba é possível vincular eventos Maker à elementos específicos do HTML inserido. Para ser possível vincular os eventos, estes elementos (tags) devem possuir um ID, no caso de tags "button" e "a", caso não possuam ID, serão adicionados automaticamente pelo Integração. Os fluxos serão executados por eventos DOM pre-definidos no componente, deve-se ficar atento às restrições de eventos para certos tipos de elemento. Poderá também ser passado parâmetros (em forma de Constante) para os fluxos, desde que esses sejam feitos para recebê-los.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/integracao_Events.png)

- Visualização.

A aba de pré-visualização estará sempre exibindo o seu componente já estruturado e com eventos vinculados. OBS.: Alguns eventos javascript podem não ocorrer na tela de pré-visualização, porém funcionar normalmente no Webrun.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/integracao_Visual.png)

### Exemplo de Frameworks suportados pelo componente.

- **jQuery**
- **Bootstrap 3**
- **Angular JS**
- **React JS, entre outros.**

## **Utilizando Componente Integração**
