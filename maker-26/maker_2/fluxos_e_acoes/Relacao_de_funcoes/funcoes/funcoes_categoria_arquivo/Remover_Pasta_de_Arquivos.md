---
title: "Remover Pasta de Arquivos"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_arquivo/Remover_Pasta_de_Arquivos.htm"
---

Descrição:

Apaga no servidor o arquivo ou pasta passada no parâmetro.

Caso seja informado uma pasta para o parâmetro, todo o conteúdo da pasta será removido também.

Parâmetros:

1. Caminho absoluto da pasta.

![Remover_Pasta_de_Arquivos.png](https://suporte.softwell.com.br/Manual/Maker2_6/Remover_Pasta_de_Arquivos.png)

Retorno:

Não Possui.

Exemplo:

1. Assumindo que o parâmetro seja "C:\MakerFlow", caso a pasta exista, ela será apagada juntamente

    com os arquivos que ela conter.

2. Assumindo que o parâmetro seja "C:\MakerFlow\maker.txt", caso o arquivo exista, ele será apagado.

Nome Real:

ebfFileRemoveFolderAndChildren

Compatibilidade:

Servidor
