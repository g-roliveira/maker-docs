---
title: "Gerar Relatório - Servidor Externo (ReportServer)"
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
5. URL do servidor. (Letras)

## Retorno

Caminho absoluto do arquivo gerado. (Letras)

## Observações

1. No caso de gerar um relatório RB10, os parâmetros devem ser utilizados no formato nome_do_parametro=valor.
2. No 5º Parâmetro, deverá ser informado a URL do servidor da aplicação que receberá o retorno do relatório (PDF, XLS,
JPG e etc) enviado pelo ReportServer (Servidor de relatório). É necessário definir a barra final. Exemplo: http://192.168.0.1:8080/webrun/.
3. Caso esteja utilizando essa função após o uso da função "Executar Atualização" no mesmo fluxo, deve-se utilizar as funções "Transação: Abrir e Transação: Commit" juntamente com "Executar Atualização". Deste modo, a ordem de execução do fluxo ficará da seguinte forma:
Transação: Abrir -> Executar Atualização -> Transação: Commit -> Gerar Relatório.
4. No 4° Parâmetro, defina 1 para ascendente e 0 para descendente. Separe com pipe (barra vertical), vide exemplo.

## Exemplo

Assumindo os parâmetros como:
Parâmetro 1: Relatório de Teste
Parâmetro 2: PDF, HTM, SCR (Tela), TXT, XLS, RTF
Parâmetro 3: CIDADE.NOME=Salvador;CIDADE.UF=BA (RB7) | cidade=Salvador;estado=BA
Parâmetro 4: CIDADE.NOME|0;CIDADE.UF|1
