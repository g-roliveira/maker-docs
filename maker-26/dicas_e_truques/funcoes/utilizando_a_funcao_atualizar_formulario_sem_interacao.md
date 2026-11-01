---
title: "Utilizando a função Atualizar formulário sem interação"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/funcoes/utilizando_a_funcao_atualizar_formulario_sem_interacao.htm"
---

Este exemplo mostra como utilizar a função Atualizar formulário sem interação para fazer uma atualização rápida de um formulário pai.

O primeiro passo é criar os formulários, para este exemplo, deverão existir dois formulários:

1. Um formulário Produto que conterá uma lista dupla com os itens que compõem o produto principal.
2. Um formulário Manutenção de Itens que será utilizado para inclusão de novos itens.

Basicamente, quando o usuário estiver cadastrando um produto e um item necessário para sua composição não existir, o usuário clicará no botão Incluir Item e ao fechar o formulário Manutenção de Itens a lista estará atualizada, não sendo necessário um Refresh do formulário Produto.

O formulário Produto terá o seguinte aspecto:

![image1727.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1727.jpg)

O segundo passo será a criação dos fluxos envolvidos.

Crie a regra para atualizar o formulário Produto, ela deverá conter apenas 1 processamento o qual executará a função Atualizar formulário sem interação, nomeie a regra como ATUALIZAÇÃO DE FORMULÁRIO.

![image1731.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1731.jpg)

![image1736.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1736.jpg)

A segunda regra é a qual definimos a execução da regra para atualizar o formulário.

Essa regra deverá conter 1 processamento e utilize a função Executar Fluxo no Formulário.

![image1730.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1730.jpg)

Passe os seguintes parâmetros para a função Executar Fluxo no Formulário:

1. A função Obter Formulário Chamador o qual terá o parâmetro Obter Formulário Atual.
2. O nome da regra que atualizará o formulário o qual o nome é ATUALIZAÇÃO DE FORMULÁRIO.
3. Como a regra não possui parâmetros de entrada deixe esse parâmetro nulo.

O processamento deverá ficar dessa forma:

![image1732.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1732.jpg)

Após salvar associe a regra no evento ao sair do formulário Manutenção de Itens.

![image1733.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1733.jpg)

Verificando o exemplo cadastre um novo Item no formulário Manutenção de Itens.

![image1734.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1734.jpg)

Ao sair do formulário Manutenção de Itens, o formulário Produto terá a lista de itens atualizada.

![image1735.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1735.jpg)
