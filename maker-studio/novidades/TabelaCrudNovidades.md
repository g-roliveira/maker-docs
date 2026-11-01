---
title: "Melhorias no componente Tabela"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/TabelaCrudNovidades.html"
---

# Novidades no componente Tabela

O componente Tabela, na versão 3.9, foi reestruturado para suporte a edição direto no componente.

Com isso, diversas melhorias foram realizadas para melhor atendimento a usabilidade e funcionalidades do componente.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/TabelaEditando.png)

Entre as melhorias realizadas destacamos:

- As colunas podem ser do tipo: Lista, Lista Dinâmica, Botão, Imagem ou Caixa de Texto.
  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/TabelaCrudInterfaceTipo.png)
- Suporte a eventos nas colunas (Em modo de Inclusão ou Edição) de acordo com o tipo.
  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/TabelaCRUDInterfaceEventosCampos.png)
- Suporte aos eventos Antes de Alterar, Antes de Inserir, Antes de Excluir, Depois de Alterar, Depois de Inserir e Depois de Excluir.
  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/TabelaCRUDEventos.png)
- A edição do cabeçalho foi reestruturada:
  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/TabelaCRUDInterface.png)
  - **Formatação (Máscara):** Permite aplicar uma máscara na coluna selecionada.
  - **Tipo:** Define o tipo do componente que será usado ao editar ou incluir um registro.
  - **Ordenação:** Permite selecionar a ordem de exibição das colunas.
  - **Criar Cabeçalho:**  Permite criar o cabeçalho automaticamente a partir da consulta definida na propriedade SQL (Obs.: esta opção substituirá o cabeçalho existente).
  - **Eventos:** Define o evento que será executado nas colunas (Em modo de Inclusão ou Edição) de acordo com o tipo.
  - **Fluxos:** Define o fluxo que será executado no evento selecionado anteriormente.
  - **Lista de Parâmetros:** Serão exibidos os parâmetros de entrada do fluxo selecionado anteriormente.
  - **Configuração das Listas:** Define o SQL para criação da lista Dinâmica ou valores para criação da Lista.

Importante: Para manutenção no cabeçalho do componente (para os componentes criados com a versão 3.8 e anteriores), recomendamos a utilização da opção "Criar Cabeçalho" para que o cabeçalho seja atualizado para nova estrutura.
