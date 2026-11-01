---
title: "Rss"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/rss.html"
---

## Leitor de RSS

O componente RSS tem como finalidade permitir o carregamento de Feeds de sites que atualizam o seu conteúdo regularmente, desta forma o usuário pode permanecer informado de diversas atualizações sem a necessidade de visitar os sites.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icones10.jpg)
Imagem 1 - Imagem do componente RSS

**Propriedades do componentes**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/propriedades_rss.png)
**Descrição das principais propriedade:**

- **URL** - Essa propriedade receberá a URL que contém o**RSS** do site informado. Ex: http://globoesporte.globo.com/servico/semantica/editorias/plantao/futebol/times/bahia/feed.rss
- **Tempo de Espera** - Determina o tempo que cada **Feed** será apresentada, por padrão o tempo de espera são de 3 segundos.
- **Quantidade de Itens** - Determina a quantidade de itens que serão apresentados.
- **Abrir em outra aba** - Determina se o item selecionado no RSS será aberto dentro do formulário em que ele se encontra ou em outra aba.

**OBSERVAÇÕES:**

- Na propriedade **URL**o link informado é um **XML**com o Feed que será carregado pelo componente RSS, o conteúdo XML não pode está na codificação UTF-8.
- O formato do **XML** que o componente **RSS** irá fazer a leitura tem que possuir a tag &lt;channel&gt;, senão o mesmo não será carregado pelo Webrun

**Apresentação do Componente no Webrun:**

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/rss.png)

____________________________________________________________________________

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
