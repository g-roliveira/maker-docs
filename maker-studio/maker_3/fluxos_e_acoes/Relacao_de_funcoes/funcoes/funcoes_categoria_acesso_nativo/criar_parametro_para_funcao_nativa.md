---
title: "Criar Parâmetro para Função Nativa"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_acesso_nativo/criar_parametro_para_funcao_nativa.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Cria um parâmetro para chamar uma função nativa. É utilizada para facilitar as chamadas às funções de bibliotecas dinâmicas.

Parâmetros:

1. Valor do parâmetro

2. Tipo do Parâmetro

![image1059.gif](../../_assets/image1059.gif)

Retorno:

Variante.

Exemplos:

Parâmetro para chamar uma função nativa. É utilizada para facilitar as chamadas às funções de bibliotecas dinâmicas. Parâmetros: 1. Valor do parâmetro 2. Tipo do Parâmetro Retorno Variante

Nome Real:

ebfCreateNativeFunctionParam

Compatibilidade:

Servidor

# Utilizando Funções Nativas no Maker

Objetivo

Demonstrar a utilização de funções nativas (bibliotecas de vínculo dinâmico no Maker)

Funções Utilizadas

- Criar Parâmetro para Função Nativa
- Chamar Método de Biblioteca Dinâmica
- Criar lista a partir dos Elementos
- Igual

Metodologia

Será utilizada a biblioteca de validação de Inscrições Estaduais para validar uma inscrição estadual.

1. Crie o formulário para inserir os dados de teste.

![image659.jpg](../../_assets/image659.jpg)

2. Crie o fluxo de validação:

![image660.jpg](../../_assets/image660.jpg)

![image661.jpg](../../_assets/image661.jpg)

O processamento Verificar Inscrição Estadual usa a função Chamar Método de Biblioteca Dinâmica. Observe que os parâmetros para a função nativa são criados como uma lista na qual cada elemento corresponde a um parâmetro para a função nativa. O parâmetro é criado usando a função Criar Parâmetro para Função Nativa, especificando-se o tipo nativo do parâmetro.

![image662.jpg](../../_assets/image662.jpg)

- Variável do Fluxo de Validação

![image663.jpg](../../_assets/image663.jpg)

- Retorno do Fluxo de validação

![image664.jpg](../../_assets/image664.jpg)

- Ação do botão validar

![image1288.jpg](../../_assets/image1288.jpg)

- Fluxo do botão validar

![image666.jpg](../../_assets/image666.jpg)

- Decisão: A inscrição estadual é válida?

![image667.jpg](../../_assets/image667.jpg)

Conclusão

O tutorial demonstra a facilidade do uso de bibliotecas dinâmicas no Maker, sem a necessidade de elementos adicionais, tornando possível qualquer implementação que dependa dessas bibliotecas.

Observação: Ao ser utilizada uma dll que não contenha parâmetro é necessário utilizar uma lista passando o valor "nulo".
