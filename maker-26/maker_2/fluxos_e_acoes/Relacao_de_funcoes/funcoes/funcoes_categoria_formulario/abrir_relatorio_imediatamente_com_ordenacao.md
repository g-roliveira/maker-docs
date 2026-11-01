---
title: "Abrir Relatório Imediatamente com Ordenação"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/abrir_relatorio_imediatamente_com_ordenacao.htm"
---

Descrição:

Abre um relatório com ordenação no contexto chamado, sem desviar para uma tela ou perguntar por parâmetros

Parâmetros:

1. Código/Nome do Relatório

2. Parâmetros do Relatório

3. Ordenação do Relatório, no formato: tabela.campo1|[0|1][;tabela.campo2|[0|1][;tabela.campoN|[0|1]]],

                     sendo: "0" descendente e "1" ascendente. (Opcional)

                     Ex: pessoa.cod_pessoa|1;pessoa.nome|0

4. Tipo do relatório gerado (PDF, HTM, JPG, XLS, TXT, SCR)

5. Abrir em uma nova janela? (Verdadeiro para abrir em nova janela)

6. Usar o gerador local? (Verdadeiro para usar o gerador local)

![image1450.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1450.gif)

Retorno:

Não possui.

Observações:

1. Caso o relatório tenha sido criado pelo gerador de relatórios legado (RB7), o filtro funciona a partir do campo. Ex: campo=valor;

1.1 Caso o relatório tenha sido criado pelo RB10, o filtro funciona a partir do nome do parâmetro definido no critério da consulta. Ex: parâmetro1=valor;

1.2 O filtro a ser passado (no segundo parâmetro) deve existir no relatório.

2. Caso o relatório possua o filtro between (Entre), deve ser utilizada ao fim a expressão _copy.

Exemplo: Data_Pagamento_copy=14/11/1987,14/11/2009; As datas devem ser separadas por vírgula e o copy deve ser todo minúsculo.

Nome Real:

ebfOpenReportInlineOrder

Compatibilidade:

Cliente e Servidor
