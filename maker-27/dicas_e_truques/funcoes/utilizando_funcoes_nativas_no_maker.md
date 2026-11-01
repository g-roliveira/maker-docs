---
title: "Utilizando Funções Nativas no Maker"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/funcoes/utilizando_funcoes_nativas_no_maker.htm"
---

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

![image659.jpg](../../image659.jpg)

2. Crie o fluxo de validação:

![image660.jpg](../../image660.jpg)

![image661.jpg](../../image661.jpg)

O processamento Verificar Inscrição Estadual usa a função Chamar Método de Biblioteca Dinâmica. Observe que os parâmetros para a função nativa são criados como uma lista na qual cada elemento corresponde a um parâmetro para a função nativa. O parâmetro é criado usando a função Criar Parâmetro para Função Nativa, especificando-se o tipo nativo do parâmetro.

![image662.jpg](../../image662.jpg)

- Variável do Fluxo de Validação

![image663.jpg](../../image663.jpg)

- Retorno do Fluxo de validação

![image664.jpg](../../image664.jpg)

- Ação do botão validar

![image1288.jpg](../../image1288.jpg)

- Fluxo do botão validar

![image666.jpg](../../image666.jpg)

- Decisão: A inscrição estadual é válida?

![image667.jpg](../../image667.jpg)

Conclusão

O tutorial demonstra a facilidade do uso de bibliotecas dinâmicas no Maker, sem a necessidade de elementos adicionais, tornando possível qualquer implementação que dependa dessas bibliotecas.

Observação: Ao ser utilizada uma dll que não contenha parâmetro é necessário utilizar uma lista passando o valor "nulo".
