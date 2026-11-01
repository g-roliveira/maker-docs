---
title: "Exportando o aplicativo para dispositivos móveis"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/como_exportar.html"
---

Nesta seção veremos como exportar as aplicações desenvolvidas no Maker Mobile para qualquer uma das plataformas suportadas.
As plataformas disponíveis são: **Android** e **iOS**.

Para exportar uma aplicação realize os seguintes passos:

- Acesse o menu Maker -> *Mobile* -> *Exportar para Plataforma*.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tela_exportacao_1.jpg)

  **Atenção:** esta opção só estará habilitada após o Login, [veja aqui](como_acessar) como fazer login no ambiente mobile do Maker.
- Posteriormente, será necessário configurar a exportação. Primeiro, na seção **Projeto** acesse a lista com os Skins para escolher um template para aplicação desenvolvida, em seguida o modo de apresentação (posição e rotação de tela) e por fim, o modelo de exibição.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exportacao1_1.png)
- Em seguida escolha uma ou mais plataformas para exportar a aplicação, na seção **Plataformas**.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exportacao1_2.png)
- Na seção **Exportar Tabelas**, você pode determinar quais estruturas e dados de determinadas tabelas serão exportados na aplicação.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exportacao1_3.png)
  - ***URL Servidor** = Parâmetro utilizado para sincronização de dados. Informe o endereço do Servidor de sincronização. [Saiba mais aqui.](como_sincronizar)
  - É possível alterar a versão da aplicação exportada na seção **Versão**, assim como colocar anotações.
  - As opções **Obfuscar Projeto** e **Otimizar Compilação** influenciam apenas no código-fonte do seu projeto.
- Em seguida, realize as configurações adicionais do seu projeto. Para cada plataforma, existe uma configuração diferente. [Acesse aqui](arquivo_firebase) e veja como o procedimento deve ser realizado.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exportacao1_5.png)
- O próximo passo é configurar as **Permissões** da aplicação. Para isso, na tela principal de Exportação, clique na opção **Permissões** e veja que tela abaixo será exibida.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exportacao1_4.png)

  Selecione as permissões que serão utilizadas no seu aplicativo.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exportacao3.PNG)
- Depois de realizar todas as configurações anteriores, a sua aplicação está pronta para ser exportada. Clique no botão **Exportar**. Uma tela será exibida com todos os projetos exportados pelo usuário.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exportacao2.PNG)

  Nesta tela temos uma grade com as seguintes colunas:

  **Nome do Projeto** – nome da aplicação exportada
  **Plataforma** – plataforma escolhida para executar a aplicação
  **Progresso** – mostra o status da exportação em percentual
  **Mensagem** – mensagem com informações sobre status da exportação
  **Tempo** – tempo gasto para realizar a exportação do projeto

  E ainda os botões:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/button_atualizar.png) - Esta opção permite atualizar a grade de exportação dos projetos
  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/button_fonte.png) - Esta opção permite fazer o download do código fonte da aplicação (.zip)
  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/button_binario.png) - Esta opção permite fazer o download do arquivo executável da aplicação .apk **(apenas projetos android)**
  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/button_sicronizador.png) - Este opção permite baixar o arquivo .sql com a estrutura das tabelas do projeto
  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/button_excluir.png) - Esta opção permite excluir o projeto selecionado. Após exclusão, não será mais possível retornar o registro excluído
  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/button_notificao.png) - Esta opção permite acompanhar as mensagens de compilação durante o processo de exportação do sistema

### Observações:

1. **Atenção:** Ao compilar os fontes de um sistema no [Xcode](como_compilar_projetos_gerados_para_ios_no_mac) no Mac, é recomendado que o projeto esteja em um diretório com o nome sem espaços, pois senão no momento da compilação o Xcode apontará alguns erros. Tais erros não afetam a compilação do projeto.
2. O projeto compilado/código fonte estará disponível para download por 30 dias a partir da data de compilação.
3. Após o término da exportação, será enviado um e-mail para o endereço cadastrado no Maker Mobile com dois links, uma para download do código fonte e outro para download do binário de acordo a plataforma previamente escolhida.
