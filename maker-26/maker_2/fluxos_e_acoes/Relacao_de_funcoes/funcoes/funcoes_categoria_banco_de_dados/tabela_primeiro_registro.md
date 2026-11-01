---
title: "Tabela - Primeiro Registro"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/tabela_primeiro_registro.htm"
---

Descrição:

Função usada para mover a posição corrente da tabela passada como parâmetro para a primeira posição (primeiro registro). Vide descrição das funções (Abrir Consulta) e (Existem Registros).

Parâmetros:

1. Consulta (variável tabela).

![image1433.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1433.gif)

Retorno:

Não possui retorno

Exemplo:

1. Define uma consulta usando a função (Abrir Consulta) e o Wizard SQL.

2. Atribui a consulta a uma variável do tipo tabela.

3. Usa a função Primeiro Registro para ir ao primeiro registro.

Observação:

A tabela que esta função recebe como parâmetro pode ser apenas aquela obtida com a função Obter Tabela do Formulário da categoria Formulário. Função muito usada quando deseja voltar ao primeiro registro depois de percorrer uma tabela.

Nome Real:

ebfResultSetFirst

Compatibilidade:

Banco de dados e Servidor
