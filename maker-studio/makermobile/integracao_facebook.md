---
title: "Integração com o Facebook"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/integracao_facebook.html"
---

- Para realizar a Integração com o Login do Facebook, é necessário definir permissão de acesso à Internet na tela de exportação.
- Ao criar o projeto, clique em **Adicionar produto**, no menu lateral, ou em Comece com o **SDK do Facebook**.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fb/img02.png)
- Clique em *configurar* da opção Login do Facebook, logo após escolha sua plataforma.

  - No nome do pacote, defina  [o nome do pacote do seu projeto.](nome_do_pacote)
  - O nome de classe da atividade padrão deverá ser: **```
    com.runner.app
    ```**![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fb/img03.png)
- Agora será necessário definir um Hash de chave, para utilizar o Hash do Maker, utilize a seguinte chave: **```
  0WIQzU0HT5kEuWsgE7jqZDZDQOU=
  ```**

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fb/img4.png)
- Habilite o *Login Único*

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fb/img5.png)
- No Maker, utilize a função *MakerMobile - Logar com o Facebook*.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fb/img6.png)

  Nesta função, o fluxo de sucesso receberá automaticamente os dados solicitados na lista de parâmetros de permissões (5º parâmetro da função) no primeiro parâmetro como um JSON.
- É necessário definir o ID da aplicação do Facebook para utilizar suas funcionalidades no MakerMobile. Você deve inseri-la pela propriedade [*Avançado* da área de trabalho](http://suporte.softwell.com.br/maker/manual_3/pt/maker_3/propriedades_e_eventos_da_area_de_trabalho.htm) do Maker.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fb/img01.png)

  O formulário deve ter as propriedades **Navegação** e **Aba Localizar** marcadas como **Não**.
