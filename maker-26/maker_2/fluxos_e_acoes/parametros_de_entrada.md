---
title: "Objeto Início - Parâmetros de Entrada"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/parametros_de_entrada.htm"
---

# Parâmetros de Entrada

Os Parâmetros de Entrada são valores que enviamos a um procedimento armazenado Eles podem receber quaisquer das opções da lista: Variante, Letras, Número, Fracionado, Inteiro, Data, Hora, Lógico ou Tabela.

![image1331.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1331.jpg)

A tela Parâmetros de Entrada surge quando é executado clique duplo sobre o objeto ![inicio](https://suporte.softwell.com.br/Manual/Maker2_6/image218.gif) na tela do fluxo:

- A parte superior da tela (nas colunas Nome, Tipo e Tamanho) é o local disponível para a criação dos parâmetros.
- O campo Formulário de Trabalho permite selecionar um formulário disponível ao sistema atual, facilitando a utilização dos seus componentes.
- ![image1819.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1819.gif) - após ter selecionado o parâmetro, ao clicar neste botão, o parâmetro se move para a posição do que está anteriormente a ele;
- ![image1818.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1818.gif) - .após ter selecionado o parâmetro, ao clicar neste botão, o parâmetro se move para a posição do que está posteriormente a ele.

Tipos de dados usados em Parâmetros de Entrada:

- Letras - armazena estruturas textuais. Quando selecionado este tipo, obrigatoriamente, é necessária a definição de um valor no campo Tamanho, o qual determinará a quantidade-limite de caracteres que a variável armazenará;
- Fracionado - armazena valores numéricos com várias casas decimais;
- Número - armazena valores numéricos com duas casas decimais;
- Inteiro - armazena valores numéricos sem casas decimais;
- Data - armazena datas;
- Hora - armazena horas;
- Lógico - armazena os valores verdadeiro (true) e falso (false);
- Tabela - armazena a estrutura retornada por uma consulta. Normalmente é utilizada para armazenar valores retornados da função Abrir Consulta;
- Variante - utilizada para armazenar tipos complexos (map, imagens, arquivos);

Observações:

1. Os parâmetros de entrada são armazenados em uma lista com suas respectivas posições. Portanto, ao excluir um parâmetro de entrada, os parâmetros seguintes ao que foi excluído deverão ser re-definidos em eventos de formulários e/ou componentes. Isso evita conflitos na passagem de parâmetros e possíveis erros de compilação.
2. O objeto Início não pode ser sobrescrito. Para reutilizá-lo em outro fluxo é necessário selecioná-lo e clicar com o botão direito na tela do MakerFlow e em seguida selecionar refatorar. Para que os parâmetros de entrada sejam mantidos no novo fluxo, os mesmos devem estar vinculados a algum processamento.
3. Se o dado atribuído ao parâmetro de entrada por qualquer evento de um componente ou de um formulário não for adequado ao tipo de dado do parâmetro, poderá ocorrer erro no momento da atribuição.

4. Os parâmetros de entrada são limitados ao tamanho do campo reg_params contido na tabela fr_regras. A soma dos caracteres de todos os parâmetros não pode ultrapassar 500 caracteres, valor estipulado nesse campo. Quando utilizados os bancos Mysql e SqlServer, a soma dos mesmos não podem ultrapassar 255 caracteres.
