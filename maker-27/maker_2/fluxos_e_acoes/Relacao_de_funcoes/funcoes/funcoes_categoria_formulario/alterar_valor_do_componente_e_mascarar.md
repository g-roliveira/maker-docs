---
title: "Alterar Valor do Componente e Mascarar"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/alterar_valor_do_componente_e_mascarar.htm"
---

Descrição:

A função altera o conteúdo do componente que está no formulário passado como parâmetro pelo conteúdo passado no 3º parâmetro. Após o valor ser definido a máscara que está no componente é aplicada.

Parâmetros:

1. Formulário onde está o componente.
2. Componente que será alterado.
3. Novo valor do componente.

![image1933.gif](../../../../../image1933.gif)

Retorno:

Valor já aplicado com a máscara. O retorno só se aplica para a camada cliente.

Exemplo:

1. Assumindo como parâmetros "Cadastro" (Constante do tipo Formulário), MakerEdit1(Constante do tipo Componente) e "Salvador" (Letras), ao fluxo ser executado, o componente "MakerEdit1" passaria a ter o conteúdo "Salvador".

Observação: Esta função altera valores somente de componentes do formulário da qual ela foi chamada. Para alterar valor do componente em outro formulário, deve-se utilizar a função "Alterar Valor do Componente em Outro Formulário".
