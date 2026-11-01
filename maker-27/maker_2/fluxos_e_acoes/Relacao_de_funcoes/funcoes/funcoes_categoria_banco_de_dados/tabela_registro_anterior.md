---
title: "Tabela - Registro Anterior"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/tabela_registro_anterior.htm"
---

Descrição:

Função usada para mover a posição corrente da tabela passada como parâmetro para a posição anterior (Registro Anterior). Vide descrição das funções (Abrir Consulta) e (Existem Registros).

Parâmetros:

1. Consulta (variável tabela).

![image1435.gif](../../../../../image1435.gif)

Retorno:

Não possui retorno

Exemplo:

1. Define uma consulta usando a função (Abrir Consulta) e o Wizard SQL.

2. Atribui a consulta a uma variável do tipo tabela.

3. Usa a função Registro Anterior para passar para o registro anterior.

Observação:

A tabela que esta função recebe como parâmetro pode ser apenas aquela obtida com a função Obter Tabela do Formulário da categoria Formulário. Função usada depois de percorrer uma tabela e deseja voltar ao registro anterior do atual.

Nome real:

ebfResultSetPrevious

Compatibilidade:

Banco de dados e Servidor
