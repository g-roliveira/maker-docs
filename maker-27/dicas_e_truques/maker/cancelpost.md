---
title: "cancelpost"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/maker/cancelpost.htm"
---

# CANCELPOST

É uma expressão em que a ação/execução é cancelada, ou seja, não é executada a operação. A expressão deve ser usada com letras maiúsculas CANCELPOST e associada ao Formulário, em Eventos: Antes de Inserir, Antes de Atualizar e/ou Antes de Remover. Após ter definido o evento, ao executar no Webrun, a exceção não emite mensagem de erro, porém fica no modo de espera. Mas, se for criado uma trigger associada à tabela, é possível levantar uma "exceção" ao executar um evento.

## Criando CANCELPOST

1. Crie uma variável para ser utilizada no fluxo CANCELPOST:

![image388.jpg](../../image388.jpg)

2. Desenvolva o fluxo abaixo:

![image389.jpg](../../image389.jpg)

1. Utilize um componente [Decisão](../../maker_2/fluxos_e_acoes/objeto_decisao) (com a função Está em Modo de Inserção?) e um Processamento (com a função Modo Alteração). No [Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes), selecione a função Está em modo de Inserção?.
2. Adicione um [Processamento](../../maker_2/fluxos_e_acoes/objeto_processamento) e quando estiver no [Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes), localize a função Modo Alteração.
3. Adicione um outro [Processamento](../../maker_2/fluxos_e_acoes/objeto_processamento) e quando estiver no [Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes), ao abrir a tela [Propriedade](../../maker_2/fluxos_e_acoes/tela_propriedades_do_montador_de_expressoes), na aba Identificadores coloque CANCELPOST em Letras:

![image1374.jpg](../../image1374.jpg)

4. O [Montador de Expressão](../../maker_2/fluxos_e_acoes/montador_de_expressoes) ficará assim:

![image645.gif](../../image645.gif)

5. [Associe o fluxo](../../maker_2/formulario/associando_fluxos_aos_eventos) CANCELPOST aos Eventos do formulário.

![image392.jpg](../../image392.jpg)

Observações:

1. O CANCELPOST somente terá efeito para formulário ao qual evento está associado, não aplicando-se para subformulários, por exemplo. Para cancelar o evento do subformulário, deve-se associar o fluxo a um dos eventos do formulário vinculado ao subformulário.
2. O fluxo só funciona na camada Servidor.

Exemplificando a função CANCELPOST - é uma expressão em que a ação/execução é cancelada, ou seja, não é executada a operação.
