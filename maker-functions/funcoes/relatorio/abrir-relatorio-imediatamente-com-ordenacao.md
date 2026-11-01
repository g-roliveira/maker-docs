---
title: "Abrir Relatório Imediatamente com Ordenação"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=62"
---

**Categoria:** [Relatório](../../categorias/relatorio)

**Compatibilidade:** Cliente, Servidor

## Descrição

Abre um relatório passado no 1º parâmetro com ordenação, sem desviar para uma tela ou perguntar por
parâmetros.

## Parâmetro(s)

1. Código/Nome do Relatório. (Letras)
2. Parâmetros do Relatório. (Letras)
3. Ordenação do Relatório. (Letras)
4. Tipo do relatório a ser gerado (PDF, HTM, JPG, XLS, TXT, SCR). (Letras)
5. Abrir em uma nova janela? (Lógico)
6. Usar o gerador local? (Lógico)

## Retorno

Não possui.

## Observações

1. A ordenação deve estar no formato: tabela.campo1|[0|1][;tabela.campo2|[0|1][;tabela.campoN|[0|1]]], sendo:
"0" descendente e "1" ascendente. (Opcional) Exemplo: pessoa.cod_pessoa|1;pessoa.nome|0
2. Caso o relatório tenha sido criado pelo gerador de relatórios legado (Report Builder 7), o filtro funciona a
partir do campo. Exemplo: CAMPO=valor;
3. Caso o relatório tenha sido criado pelo Report Builder 10, o filtro funciona a partir do nome do parâmetro
definido no critério da consulta do relatório. Exemplo: PARAMETRO=valor;
4. O filtro a ser passado no 2° parâmetro deve existir no relatório.
5. Caso o relatório no Report Builder 7 possua o filtro between (Entre), deve ser utilizada ao fim a expressão
_copy. Exemplo: Data_Pagamento_copy=14/11/1987,14/11/2009. As datas devem ser separadas por vírgula
e o copy deve ser todo minúsculo.
