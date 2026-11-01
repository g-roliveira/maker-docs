---
title: "Alterar Valor do Componente"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/alterar_valor_do_componente.htm"
source_version: "2.7"
legacy: true
---

Descrição:

A função altera o conteúdo do componente que está no formulário passado como parâmetro pelo conteúdo passado no 3º parâmetro.

Parâmetros:

1. Formulário onde está o componente.

2. Componente que será alterado.

3. Novo valor do componente.

![image1453.gif](../../_assets/image1453.gif)

Retorno:

Não Possui.

Exemplo:

Assumindo como parâmetros "Cadastro" (Constante do tipo Formulário), MakerEdit1(Constante do tipo Componente) e "Salvador" (Letras), ao fluxo ser executado, o componente "MakerEdit1" passaria a ter o conteúdo "Salvador".

Observações:

1. Esta função altera valores somente de componentes do formulário da qual ela foi chamada. Para alterar valor do componente em outro formulário, deve-se utilizar a função "Alterar Valor do Componente em Outro Formulário".
2. Não é possível alterar valor de um componente vinculado a campo nos eventos 'Depois de inserir' ou 'Depois de Alterar' quando esta função for chamada em fluxos Servidor. Caso seja necessário realizar tal ação, utilizar a função na camada cliente.

Nome Real:

ebfFormChangeComponentValue

Compatibilidade:

Cliente e Servidor
