---
title: "Configurando Idioma"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/webrun_3/parametro_configuracao/configurando_idioma.html"
---

# Alterando Idioma

Para alterar o idioma do sistema você deve seguir os seguintes passos.

- Vá até o contexto do webrun, localiza a pasta "i18n", nessa pasta existem alguns arquivos para a tradução de algumas linguagens.
- Para adicionar uma linguagem qualquer você deve duplicar um dos arquivos escolhidos e em seguida, renomear para o idioma desejado.

![image1794.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/run1.png)

- Abra o arquivo criado, em seguida, atualize o conteúdo de uma variável "var resources_locale" para o idioma escolhido seguindo o padrão do nome do arquivo e alterar o conteúdo das constantes para tradução. Como demonstrado nas imagens abaixo:

![image1794.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/run2.png)

- Feito isso, você também deverá fazer o mesmo com um arquivo que fica localizado no contexto do webrun "webrun\WEB-INF\classes\i18n".
- Nesse arquivo você também deverá abri-lo e alterar o conteúdo das constantes para o idioma desejado, veja o exemplo:

![image1794.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/idio.png)

- Para as imagens da barra de navegação aparecerem, você deve duplicar os respectivos arquivos de imagens na pasta do Skin utilizado no projeto, localizado no contexto do webrun "webrun\Skins\ Skin utilizado \HTMLNavigationForm".

![image1794.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/idio2.png)

- Vá até o caminho: webrun\Skins\ Skin utilizado \classes.css
- Localize nesse arquivo "classes.css", todas as classes que contém a sigla de determinada linguagem e duplique-a com a sigla do idioma desejado para que não ocorra nenhuma quebra de "css" no projeto ao ser acessado pelo Webrun.
- Então, para que não ocorra esse tipo de problema, é indispensável à duplicação de todas as classes correspondentes ao idioma para a sigla do idioma desejado.

![image1794.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/idio3.png)

- Em seguida você deverá acessar o Webrun e ir em configurações. Será necessária a criação de um parâmetro de configuração que contém como conteúdo o idioma desejado, veja exemplo na imagem abaixo:

![image1794.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/run5.png)

- Feito os passos anteriores, basta utilizar a função "Alterar idioma" e passar o idioma desejado. OBS: Para cada idioma desejado deverá seguir os passos acima.

![image1794.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/idio4.png)

Para que a bandeira apareça na tela que do acesso ao sistema, é necessário que seja colocado uma imagem da bandeira na pasta "Resource" que se encontra no contexto do webrun.

Observações:

> - Essa imagem deve ter o tamanho (15x15) para que seja exibida de forma correta na página.

> - Ao cadastrar um idioma, os idiomas padrão serão removidos. Sendo necessário incluí-los manualmente. Ex: fr_FR, en_EN, es_ES, pt_BR.

> - O nome da imagem deverá seguir o padrão do idioma criado. Ex.: fr_FR.gif.
