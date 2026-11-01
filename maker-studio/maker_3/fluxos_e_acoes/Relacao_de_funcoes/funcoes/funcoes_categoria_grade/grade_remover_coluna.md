---
title: "Grade - Remover Coluna"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_grade/grade_remover_coluna.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Essa função remove uma coluna da Grade. Passando como parâmetro a Grade e o nome da coluna que deseja remover.

Parâmetros:

1. Nome da Grade

2. Nome da Coluna

![image1575.gif](../../_assets/image1575.gif)

Exemplo:

Assumindo o 1º parâmetro sendo "Estado" e o 2º sendo "UF". Ao chamar à função a coluna "UF" será removida da Grade "Estado".

Observação:

Caso esta função seja utilizada em um formulário que possua barra de navegação, será necessário utiliza-la no evento "Ao Navegar" do formulário, pois ao navegar a coluna que foi removida, será exibida novamente.

Nome Real:

ebfGridRemoveColumn

Compatibilidade:

Cliente
