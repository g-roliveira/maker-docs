---
title: "Tabela 2.0 (Nova Grade)"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/novatabela.html"
---

# Componente Tabela 2.0 (Nova Grade)

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novagrade1.png)

O componente Tabela versão 2.0 foi redesenhado, trazendo nova funcionalidades que darão mais poder para o desenvolvedor Maker.
Confira as novas funcionalidades do mesmo:

- **Cor Condicional :** Determina a cor da linha caso a condição definida seja verdadeira.
- **Mensagem Quando Vazia :** Mensagem que será exibida caso a tabela não possua registros.
- **Formulário :** Formulário que será aberto ao duplo clicar no registro. O formulário será aberto filtrado de acordo com as linhas selecionadas e o filtro será aplicado na propriedade "Coluna Chave".
- **Agrupamento :**  Habilita o agrupamento de colunas em tempo de execução.
- **Coluna Sumário :** Coluna que será utilizada para obter o valor e aplicar a operação definida na propriedade "Operação"
- **Alinhamento Sumário :** Determina a posição em que a coluna sumário será apresentada.
- **Resumo Geral Sumário :** Habilita o resumo de todos agrupamentos do sumário.
- **Exibir Quantidade de Registros Sumário :** Determina se a quantidade de registros da coluna sumário será exibida.
- **Operação :** Determina qual operação será aplicada à coluna sumário.
- **Texto do Resumo :** Texto que irá identificar o resumo no agrupamento.
- **Desabilitar Linhas :** Essa propriedade irá desabilitar a linha de acordo com a condição determinada.
- **Auto-Ajuste do Conteúdo :** A altura da linha será ajustada automáticamente de acordo com o tamanho do conteúdo contido nela.
- **Altura da Linha :** Altura das linhas do componente Nova Tabela (Essa propriedade será ignorada caso a propriedade "Auto-Ajuste do Conteúdo" esteja habilitada).
- **Coluna Chave :** Determina a coluna cujo registro irá filtrar o formulário referenciado na propriedade "Formulário".
- **Permitir Edição :**  Caso esta propriedade esteja configurado como "Sim", o formulário vinculado será chamado em modo de edição.
- **Permitir Exclusão :** Permite a exclusão dos registros selecionados diretamente no componente Nova Tabela.
- **Seleção de Múltiplas Linhas :** Propriedade que permite o usuário selecionar varias linhas.

O componente Tabela 2.0 tem algumas restrições e observações de acordo com o auto relacionamento de algumas propriedades segue abaixo uma lista com as mesmas:

- Quando a propriedade "Agrupamento" for habilitada, a propriedade "Pesquisa" será ignorada dando prioridade a propriedade "Agrupamento".
- Caso seja inserido no componente uma consulta que contenha valores nulos e agrupar pelo mesmo, o mau comportamento do componente pode ocorrer.
- A propriedade "Alinhamento Sumário" só terá funcionalidade caso uma das propriedades "Coluna Sumário" ou "Exibir Quantidade de Registros".
- A propriedade "Resumo Geral Sumário" só irá funcionar corretamente se pelo menos umas das propriedades "Coluna Sumário" ou "Exibir Quantidade de Registros" estiverem habilitadas.
- Quando a propriedade "Operação" for definida é necessário que a propriedade Coluna Sumário esteja ativa, caso contrario a mesma não terá funcionalidade.

## **Componente Tabela 2.0**
