---
title: "Tabela"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/tabela.html"
---

## Tabela

O componente tabela permite que os dados sejam representados em formato "Grade" com linhas e colunas. Os dados são definidos através de uma consulta SQL.

![image123.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/Tabela.png)

### Propriedades do Componente

O componente Tabela possui as seguintes propriedades:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/TabelaPropriedades.png)

**- Propriedade SQL:**

Nesta propriedade será informado o SQL da Tabela que montará a grade. Ao abrir o assistente SQL, escolha a(s) tabela(s) e colunas que serão listadas no componente. A partir do Maker 3.8, caso o tipo da coluna seja "Lógico", o componente criará automaticamente um "CheckBox". O mesmo vale para o tipo "Binário" e relacionados, uma imagem será criada para renderização do conteúdo. A partir da versão 3.9, é possível definir o tipo da coluna tais como: Caixa de Texto, Lista Dinâmica, Lista, Botão ou Imagem.

**Obs.:** Este componente não suporta :: para conversão de dados.

**- Paginação:** Permite escolher a quantidade de itens que serão listados na grade do componente. Ao definir a quantidade de itens a listar, a grade criará setas de rolagem para as páginas.

**- Cabeçalho:** Essa propriedade tem como finalidade criar o cabeçalho das colunas da tabela. Cada coluna do SQL será definida nas caixas de texto (observe a imagem abaixo):

1. Nome: refere-se ao nome da coluna que será apresentada.
2. Tamanho: será o tamanho defindo em pixels para que a coluna seja apresentada.
3. Alinhado a: lista com o posicionamento da descrição da coluna.

Após definir essas opções, basta clicar em Ok para inserir a coluna na grade abaixo. **Observação:** vale lembrar que a ordem das colunas no SQL devem ser as mesmas da tabela, ou seja, se for necessário trocar o tamanho da 1ª coluna, será necessário remover as outras e inserí-las novamente na mesma ordem.

**Tabela - Tela do cabeçalho**

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/comp2.png)

**- Ativar Pesquisa:** Essa propriedade permite mostrar/ocultar a opção da pesquisa que se localiza acima da tabela. Vem setado como "Sim" por Default.

**- Acessível Todos os Modos:** Essa propriedade tem como finalidade definir se o componente ficará acessível ou não nos modos de alteração e/ou inclusão.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/TabelaWebrun.png)

As propriedades abaixo foram adicionadas a partir do Maker 3.8

- **Fonte de Dados:** Propriedade destinada a conexão ao banco de dados.
- **Permitir Inclusão:** Propriedade que permite a inclusão de registros através do componente.
- **Permitir Edição:** Propriedade que permite a edição do registro selecionados.
- **Permirtir Exclusão:** Permite a exclusão dos registros selecionados através do componente.
- **Coluna Chave:**  Na versão 3.8, Determina a coluna cujo registro irá filtrar o formulário referenciado na propriedade "Formulário". A partir da versão 3.9, determina a coluna que será utilizada para atualização ou exclusão do registro.
- **Agrupamento:** Habilita o agrupamento de colunas em tempo de execução.
- **Coluna Sumário:** Coluna que será utilizada como sumário de acordo com a propriedade "Operação". Ex.: Soma, Média, etc.
- **Alinhamento Sumário:** Determina a posição em que a coluna sumário será apresentada.
- **Resumo Geral Sumário:** Habilita o resumo de todos agrupamentos do sumário.
- **Exibir Quantidade de Registros Sumário:** Determina se a quantidade de registros da coluna sumário será exibida.
- **Operação:** Determina qual operação será aplicada à coluna sumário. Ex.: Soma, Média, etc.
- **Tabela Principal:**  Por características do driver JDBC da Oracle, não é possível identificar o nome da Tabela através do Metadados de uma consulta. Devido a esta característica, esta propriedade ser torna obrigatória em projetos Oracle (ou quando utilizado conexão adicional para bancos de dados Oracle). Esta propriedade é utilizada para compor os scripts de INSERT, UPDATE e DELETE através do componente Tabela. (Obs.: Para outros bancos essa propriedade não se torna obrigatória, pois o driver JDBC de cada banco permite obter esta informação automaticamente).
- **Texto do Resumo:** Texto que irá identificar o resumo no agrupamento.
- **Cor Condicional:** Determina a cor da linha caso a condição definida seja verdadeira. A cor é aplicada a linha como um todo.
- **Desabilitar Linhas:** Essa propriedade irá desabilitar a linha de acordo com a condição determinada.
- **Auto-Ajuste do Conteúdo:** A altura da linha será ajustada automaticamente caso o tamanho do conteúdo ultrapasse a largura definida na coluna.
- **Altura da Linha:** Determina a altura das linhas do componente (Essa propriedade será ignorada caso a propriedade "Auto-Ajuste do Conteúdo" esteja habilitada).
- **Mensagem Quando Vazia:** Mensagem que será exibida caso a tabela não possua registros.
- **Ativar Pesquisa:** Propriedade que permite habilitar a pesquisa no componente. A pesquisa é realizada seguindo o padrão CONTENDO (LIKE) e é aplicada à coluna em questão.
- **Seleção de Múltiplas Linhas:** Propriedade que permite o usuário selecionar uma ou mais linhas.
- **Formulário:** Formulário que será aberto ao duplo clicar no registro. O formulário será aberto filtrado de acordo com as linhas selecionadas e o filtro será aplicado através do valor obtido na propriedade "Coluna Chave".

  Observação:

   Com a implementação da edição direta no componente Tabela, a propriedade "Formulário" se tornou obsoleta e foi removida do componente.

### Eventos do Componente

**O componente Tabela possui os seguintes eventos:**

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/TabelaEventos.png)

**- Ao Clicar:** Este evento executará o fluxo informado quando for efetuado um clique na linha do componente.
**- Ao Duplo Clique:** O evento será executado ao realizar o duplo clique na linha do componente.
**- Ao Modificar:** O evento será executado ao modificar a seleção de linha do componente.
**- Ao Modificar Consulta:** O evento será executado a consulta do componente for modificada. Ex.: Ao realizar um filtro, mover a barra de rolagem (Será passado a consulta modificada como parâmetro automático).

O componente Tabela tem algumas restrições e observações de acordo com o auto relacionamento de algumas propriedades segue abaixo uma lista com as mesmas:

- Quando a propriedade "Agrupamento" for habilitada, a propriedade "Pesquisa" será ignorada dando prioridade a propriedade "Agrupamento".
- A propriedade "Paginação" será ignorada quando a propriedade "Agrupamento" for habilitada. O componente assumirá a paginação de "100" registros automaticamente.
- Caso seja inserido no componente uma consulta que contenha valores nulos e agrupar pelo mesmo, o mau comportamento do componente pode ocorrer.
- A propriedade "Alinhamento Sumário" só terá funcionalidade caso uma das propriedades "Coluna Sumário" ou "Exibir Quantidade de Registros".
- A propriedade "Resumo Geral Sumário" só irá funcionar corretamente se pelo menos umas das propriedades "Coluna Sumário" ou "Exibir Quantidade de Registros" estiverem habilitadas.
- Quando a propriedade "Operação" for definida é necessário que a propriedade Coluna Sumário esteja ativa, caso contrario a mesma não terá funcionalidade.

# Mudanças no componente Tabela para o Maker 3.9

O componente Tabela, na versão 3.9, foi reestruturado para suporte a edição direto no componente.
Com isso, diversas melhorias foram realizadas para melhor atendimento a usabilidade e funcionalidades do componente.

Entre as melhorias realizadas destacamos:

![](https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/imagens/TabelaEditando.png)

- As colunas podem ser do tipo: Lista, Lista Dinâmica, Botão, Imagem ou Caixa de Texto.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/imagens/TabelaCrudInterfaceTipo.png)
- Suporte a eventos nas colunas (Em modo de Inclusão ou Edição) de acordo com o tipo.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/imagens/TabelaCRUDInterfaceEventosCampos.png)
- Suporte aos eventos Antes de Alterar, Antes de Inserir, Antes de Excluir, Depois de Alterar, Depois de Inserir e Depois de Excluir.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/imagens/TabelaCRUDEventos.png)
- A edição do cabeçalho foi reestruturada:

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/imagens/TabelaCRUDInterface.png)
  - **Formatação (Máscara):** Permite aplicar uma máscara na coluna selecionada.
  - **Tipo:** Define o tipo do componente que será usado ao editar ou incluir um registro.
  - **Ordenação:** Permite selecionar a ordem de exibição das colunas.
  - **Criar Cabeçalho:**  Permite criar o cabeçalho automaticamente a partir da consulta definida na propriedade SQL (Obs.: esta opção substituirá o cabeçalho existente).
  - **Eventos:** Define o evento que será executado nas colunas (Em modo de Inclusão ou Edição) de acordo com o tipo.
  - **Fluxos:** Define o fluxo que será executado no evento selecionado anteriormente.
  - **Lista de Parâmetros:** Serão exibidos os parâmetros de entrada do fluxo selecionado anteriormente.
  - **Configuração das Listas:** Define o SQL para criação da lista Dinâmica ou valores para criação da Lista.

________________________________________________________________________________________

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
