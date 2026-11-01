---
title: "Accordion"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/accordion.html"
---

O componente Accordion é utilizado para navegação entre elementos organizados em painéis empilhados. É muito útil para agrupamento e organização de conteúdos.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/iconaccordion.png)

Propriedades

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/AccordionProprieadades.png)

- Dica

  Campo destinado para descrição do componente.
- Posição X e Posição Y

  Definem o ponto de ancoragem do componente, com relação ao formulário.
- Altura e Tamanho

  São respectivamente a altura e a largura do componente.
- Visível

  Define a visibilidade do componente.
- Habilitado

  Habilita ou desabilita o componente.
- Nome

  Parâmetro para nomear internamente o componente.
- Código

  Código interno do componente.
- Fonte de Dados

  Parâmetro para definir em qual conexão a consulta SQL será feita (caso nulo a consulta será feita na principal).
- SQL

  Parâmetro para definir a consulta SQL para montar o componente (o mesmo terá como retorno duas colunas, a primeira irá montar os títulos das seções e a segunda será exibda na consulta).

  **Obs.:** Este componente não suporta :: para conversão de dados.
- Seções

  Interface para criação das seções.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/AccordionInterface.png)

  **Obs.:** esta propriedade não tem prioridade sobre a consulta SQL

  Nesta tela contém os seguintes campos:

  - **Tipo:** Será definido o tipo da seção.
  - **Título/URL(Formulário):** Será definido o título, a URL ou o formulário que será´carregado na seção.
- Cor do Componente

  Parâmetro para definir a cor de fundo do componente.
- Cor da Seção

  Parâmetro para definir a cor da seção.
- Cor da Fonte

  Parâmetro para definir a cor da fonte da seção.
- Orientação

  Parâmetro para definir orientação (Horizontal, Vertical) da criação das seções.
- Acessível

  Parâmetro para definir a acessibilidade do componente.

Eventos

- Ao Expandir

  Evento que será executado ao expandir alguma seção(serão passados 3 parametros automáticos: Id da seção (Letras), Título da seção (Letras), Posição da seção (Inteiro)). O fluxo associado a este evento deverá estar na camada cliente. [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_Accordion.FRZ)

____________________________________________________________________________

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
