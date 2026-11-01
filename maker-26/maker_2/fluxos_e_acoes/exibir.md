---
title: "Criando Identificadores (variáveis)"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/exibir.htm"
---

Esta janela disponibiliza o recurso de declaração dos Identificadores (variáveis) que serão utilizados nos objetos do fluxo que está sendo criado/editado. Para a criação dos identificadores, devem-se fornecer os dados ilustrados na imagem abaixo:

![image117.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image117.jpg)

Observe abaixo as opções da tela de identificadores:

- Nome - campo para determinação do nome da variável. Recomenda-se a utilização apenas de letras como padrão para a nomeação da variável, limitadas à quantidade de 50 caracteres. Além disso, também é recomendado para o nome de variável um nome que tenha relação com a representação do valor que ela armazenará;
- Tipo - campo para determinação do tipo de dado que armazenará a variável. Entre as opções, é possível selecionar o tipo:
- - Letras - armazena estruturas textuais. Quando selecionado este tipo, obrigatoriamente, é necessária a definição de um valor no campo Tamanho, o qual determinará a quantidade-limite de caracteres que a variável armazenará;
  - Fracionado - armazena valores numéricos com várias casas decimais;
  - Número - armazena valores numéricos com duas casas decimais;
  - Inteiro - armazena valores numéricos sem casas decimais;
  - Data - armazena datas;
  - Hora - armazena horas;
  - Lógico - armazena os valores verdadeiro (*true) e falso (*false);**
  - Tabela - armazena a estrutura retornada por uma consulta. Normalmente é utilizada para armazenar valores retornados da função Abrir Consulta;
  - Variante - armazena dados complexos. Pode ser utilizada para armazenar a referência de uma árvore criada dinamicamente (função Árvore - Criar Árvore), por exemplo.
- Tamanho - determina o tamanho de caracteres ou números, ou a precisão numérica da variável. Alguns tipos de variáveis não disponibilizarão a opção de tamanho já que possuem valores predefinidos;
- Valor Inicial - campo para determinação do valor inicial que a variável receberá logo no início da execução do fluxo de ação.

Observações:

1. Não é possível atribuir valores a variáveis dos tipos SQL, SQL Consulta, SQL Atualização e SQL Texto isoladamente, para esses tipos é necessário utilizar as funções da categoria Banco de Dados.
2. Palavras reservadas da linguagem Java não funcionam como nome de variável. [Conheça a relação das 52 palavras....](palavras_reservadas_do_java)
3. Ao trocar o tipo de dado de uma variável anteriormente criada, caso exista um valor inicial, o mesmo será eliminado, para evitar informações desnecessárias.
