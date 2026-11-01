---
title: "Imprimir Texto"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressao/imprimir_texto.htm"
---

Descrição:

Recebe um texto ou Variável no 1º parâmetro para ser impresso e no 2º parâmetro recebe a porta que será usada para impressão, Se não for passada a porta de impressão para o 2º parâmetro, ele adotará a porta padrão (LPT1).

Parâmetros:

1. Texto a ser Impresso ou Variável do tipo Letra (é necessário incluir ao fim do texto um caracter quebra

de linha. Para tal, o texto pode ser concatenado com o retorno da função "Quebra de linha").

2. Porta a ser Usada.

![image1172.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1172.gif)

Retorno:

Retorna o texto impresso caso nada tenha dado de errado na impressão

Exemplo:

1. Tendo a necessidade de imprimir um texto.

2. Selecione o texto ou uma Variável a ser impresso

3. Selecione a porta da impressora

Nome Real:

ebfTextPrinter

Compatibilidade:

Cliente e Servidor
