---
title: "Alterar Campo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/alterar_campo.htm"
---

Descrição:

Altera o campo do formulário com o conteúdo passado no 2° parâmetro.

Parâmetros:

1. Campo para ser alterado.

2. Novo valor do campo.

![image1452.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1452.gif)

Retorno:

Não Possui.

Observações:

1. Para selecionar o campo é necessário indicar o nome do formulário no "Inicio" do fluxo .

2. Caso não queira indicar o formulário no início, pode escrever o nome (Letras) do campo como parâmetro.

3. O campo precisa estar associado a um campo da Tabela. Caso o isso não ocorra, usa-se a função "Alterar valor do

componente" da categoria "Formulário".

4. A função não determina qual o formulário onde deve ser alterado, No entanto caso queira alterar um valor da grade

será necessário usar a função "Alterar valor do componente"

Exemplo:

Assumindo como parâmetros os campos "Telefone" (Letras) de uma tabela qualquer e o valor "3354-9554"(Letras), após o fluxo ser executado o campo "Telefone" conterá o conteúdo "3354-9554".

Nome Real:

ebfSQLSetFormField

Compatibilidade:

Cliente e Servidor
