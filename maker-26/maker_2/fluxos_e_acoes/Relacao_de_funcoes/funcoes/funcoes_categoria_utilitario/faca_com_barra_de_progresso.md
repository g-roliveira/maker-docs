---
title: "Faça com Barra de Progresso"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/faca_com_barra_de_progresso.htm"
---

Descrição:

Mostra uma barra de progresso com a porcentagem percorrida, enquanto percorre os registros de uma tabela. A função não incrementa o registro da tabela, para isso é necessária a utilização da função "Tabela - Próximo Registro" da categoria "Banco de dados".

Parâmetros:

1. É um valor lógico que representa a condição de parada da barra de progresso, geralmente verifica se ainda existem registros na tabela (Função "Existem Registros" da categoria banco de dados).

2. É a mensagem que aparecerá na barra de progresso.

3. É a quantidade de registros da tabela.

![image1601.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1601.gif)

Retorno:

Mostra a Barra de progresso baseado na quantidade de registros da tabela.

Observações:

1. Para percorrer todos os registros da tabela é necessário que haja um processamento com a função "Tabela - Próximo registro"

da categoria "Banco de Dados".

2. Essa função é muito utilizada dentro de um componente de decisão usado como estrutura de repetição.

3. Não é possível utilizar a função "Faça com Barra de Progresso" após o uso da função "Upload".

4. Não é possível executá-la dentro de subfluxo servidor chamado por um fluxo cliente.

Exemplo:

Em uma decisão, assumindo como parâmetros:

    1º Uma função "Existem registros" da categoria Banco de Dados.

    2º Parâmetro: "Carregando..." (Letras).

    3º Parâmetro: Quantidade de registros existentes na tabela passada no primeiro parâmetro. ,

    O resultado é uma barra de progresso que é executada enquanto tabela  registros é percorrida. A mensagem mostrada na barra de progresso é "Carregando".

Nome Real:

ebfWithProgressBar

Compatibilidade:

Servidor
