---
title: "Gerar Relatório"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=62"
---

**Categoria:** [Relatório](../../categorias/relatorio)

**Compatibilidade:** Servidor

## Descrição

Gera o relatório solicitado sendo que o mesmo não será impresso na tela do usuário.
Após criado o relatório, a função retornará o caminho absoluto do arquivo gerado.

## Parâmetro(s)

1. Nome ou código do relatório a ser gerado. (Letras)
2. Tipo do relatório a ser gerado. (Letras)
3. Filtro a ser executado no relatório a ser gerado. Para mais de um filtro, separe com ponto e vírgula (;). (Letras)
4. Ordenação do relatório a ser gerado. (Letras)

## Retorno

Caminho absoluto do arquivo gerado. (Letras)

## Observações

1. Caso o relatório tenha sido feito no RB7, deve ser utilizado o filtro no formato tabela.campo=valor.
2. No caso de gerar um relatório RB10, os parâmetros devem ser utilizados no formato nome_do_parametro=valor.
3. Caso o relatório possua o filtro between (Entre), deve ser utilizada ao fim a expressão _copy.
Ex: Data_Pagamento_copy=14/11/1987,14/11/2009;
As datas devem ser separadas por vírgula e o copy deve ser todo minúsculo.
4. Ao utilizar Servidor de Relatórios, esta função não pode ser utilizada no Agendador de Tarefas. Neste caso, utilize a função "Gerar Relatório - Servidor Externo".
5. Caso esteja utilizando essa função após o uso da função Executar Atualização no mesmo fluxo, deve-se utilizar as funções "Transação: Abrir e Transação: Commit" juntamente com "Executar Atualização". Deste modo, a ordem de execução do fluxo ficará da seguinte forma:
Transação: Abrir -> Executar Atualização -> Transação: Commit -> Gerar Relatório.
6. No 4° Parâmetro, defina "1" para ascendente e "0" para descendente. Separe com pipe (barra vertical), vide
exemplo.

## Exemplo

Assumindo os parâmetros como:
Parâmetro 1: Relatório de Teste
Parâmetro 2: PDF, HTM, SCR (Tela), TXT, XLS, RTF
Parâmetro 3: CIDADE.NOME=Salvador;CIDADE.UF=BA (RB7) | cidade=Salvador;estado=BA (RB10)
Parâmetro 4: CIDADE.NOME|0;CIDADE.UF|1
