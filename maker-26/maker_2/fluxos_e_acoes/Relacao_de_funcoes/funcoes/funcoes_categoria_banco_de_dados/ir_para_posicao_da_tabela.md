---
title: "Ir para posição da Tabela"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/ir_para_posicao_da_tabela.htm"
---

Descrição:

Função usada para navegar entre os registros da tabela passada como parâmetro. Deve-se informar qual posição deseja obter pelo 2º parâmetro de entrada. A tabela passada como parâmetro deve ser obtida pela função do grupo Formulário (Obter Tabela do Formulário). Vide descrição da função (Obter Tabela do Formulário).

Parâmetros:

1. Consulta (variável tabela).

2. Posição do registro na tabela (índice).

![image1425.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1425.gif)

Retorno:

Tabela (Com o cursor apontando para o registro informado).

Exemplo:

1. Seleciona a função Ir para posição da Tabela.

2. Atribui ao primeiro parâmetro a consulta da tabela de um formulário com a função (Obter Tabela do Formulário).

3. Escolhe de qual formulário deseja obter a tabela (consulta)

4. Atribui ao segundo parâmetro o índice do registro que deseja obter

5. Insere a cima a função (Campo) para obter um campo deste registro e clica em salvar.

6. Seleciona o campo que deseja obter da função (Campo).

7. Atribui o resultado a uma variável

Observação:

A tabela passada como parâmetro deve ser obtida com a função (Obter Tabela do Formulário).

Nome real:

ebfResultSetAbsolute

Compatibilidade:

Banco de dados e Servidor
