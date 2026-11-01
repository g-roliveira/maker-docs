---
title: "Campos do SQL"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/campos_do_sql.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Função recebe como parâmetro um comando de Seleção e retorna em uma lista com os campos selecionados.

Parâmetros:

1. Comando de Seleção do Banco de Dados

![image1414.gif](../../_assets/image1414.gif)

Retorno:

Retorna os Nomes dos Campos Desejados.

Observações:

1. Essa função é usada para obter os campos de uma SELECT (Comando de Seleção do Banco de Dados), retornando uma

lista com os títulos dos campos.

2. O Retorno é uma Lista com os Nomes dos Campos

Exemplo:

1ºParâmetro:  SELECT TAB_COD, TAB_NOME FROM TABELA

Retorno: [TAB_COD,TAB_NOME]

Nome Real:

ebfSQLFieldList

Compatibilidade:

Banco de dados e Servidor
