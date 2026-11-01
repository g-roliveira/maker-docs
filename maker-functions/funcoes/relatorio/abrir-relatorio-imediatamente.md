---
title: "Abrir Relatório Imediatamente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=62"
---

**Categoria:** [Relatório](../../categorias/relatorio)

**Compatibilidade:** Cliente, Servidor

## Descrição

Abre um relatório, passado no 1º parâmetro, sem desviar para uma tela ou perguntar por parâmetros.

## Parâmetro(s)

1. Código/Nome do Relatório. (Letras)
2. Parâmetros do Relatório. (Letras)
3. Tipo do relatório gerado (PDF, HTM, JPG, XLS, TXT, SCR). (Letras)
4. Abrir em uma nova janela? (Lógico)
5. Usar o gerador local? (Lógico)

## Retorno

Não possui.

## Observações

1. O tipo SCR que pode ser informado no 3º parâmetro desta função está relacionado a abertura do relatório
em tela.
2. Caso o relatório tenha sido criado no Report Builder 7 (Gerador de Relatórios legado), o filtro funciona da
seguinte forma: CAMPO=valor
3. Caso o relatório tenha sido criado no Report Builder 10, o filtro deve ser o nome do parâmetro definido no
critério da consulta: PARAMETRO=valor.
4. Caso queira definir vários parâmetros, basta separá-los por ponto e vírgula(;). Exemplo:
PARAMETRO1=valor;PARAMETRO2=valor2.
5. Caso o relatório tenha sido criado no Report Builder 7, o filtro between (Entre), deve ser utilizada ao fim a
expressão _copy. Exemplo: CAMPO=valor ; CAMPO_copy = valor. As datas devem ser separadas por ponto
e vírgula e o copy deve ser todo minúsculo.
6. Caso o relatório tenha sido criado no Report Builder 10, basta passar os parâmetros inicial e final
separados por ponto e vírgula.
