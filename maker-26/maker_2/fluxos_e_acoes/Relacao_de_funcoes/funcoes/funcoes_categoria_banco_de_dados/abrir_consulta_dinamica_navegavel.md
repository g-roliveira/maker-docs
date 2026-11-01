---
title: "Abrir Consulta Dinâmica Navegável"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/abrir_consulta_dinamica_navegavel.htm"
---

Descrição:

Executa uma consulta SQL dinâmica e retorna uma tabela com os dados. Caso seja necessário passar parâmetros, este deve estar na consulta com uma interrogação (?) na ordem da passagem dos mesmos.

Parâmetros:

1. Comando de Seleção

2. Conexão (Opcional)

3. Quantidade de Parâmetros

4. Lista contendo parâmetros ou parâmetro

![image1409.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1409.gif)

Retorno:

Retorna uma Consulta  Dinâmica que pode ser atribuída a uma Variável Tabela.

Exemplo:

1° Parâmetro: SELECT TAB_COD FROM TABELA WHERE TAB_COD = ?

2° Parâmetro: (Null) - *Conexão Principal

3° Parâmetro: 1

4° Parâmetro: 10

Observação:

Essa função é usada para fazer um SELECT (seleção) no banco de dados desejado.

Nome Real:

ebfSQLDynamicScrollQuery

Compatibilidade:

Banco de dados e Servidor
