---
title: "Executar Comandos SQL"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/executar_comandos_sql.htm"
---

Descrição:

Essa função recebe como parâmetro uma constante do tipo letras, onde dentro dessa constante pode conter um  ou vários comandos SQL. Essa função executa o(s) comando(s) SQL no banco de dados.

Parâmetros:

1. Comando SQL a ser executado

2. Conexão com outro banco de dados (opcional)

![image1597.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1597.gif)

Retorno:

Retorna NULO caso o comando SQL seja executado com sucesso. Caso haja algum erro, este será retornado.

Exemplo:

Parâmetro : INSERT INTO EMPRESA (CODIGO, DESCRICAO) VALUES (1,"Softwell")

Observação:

Não é possível o uso da instrução SELECT uma vez que o retorno NULO indica que foi executado com sucesso

Nome Real:

ebfSQLExecuteBatch

Compatibilidade:

Servidor
