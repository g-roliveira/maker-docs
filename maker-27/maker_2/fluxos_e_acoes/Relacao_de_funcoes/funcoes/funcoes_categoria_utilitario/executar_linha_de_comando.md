---
title: "Executar linha de comando"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/executar_linha_de_comando.htm"
---

Descrição:

Executa uma linha de comando no "SHELL" do SERVIDOR, retornando o resultado.

Parâmetros:

1. Linha de comando a ser executada.

2. Caso deseje que o fluxo só continue apenas após acabar o comando defina como verdadeiro, caso contrário, defina como falso.

![image1599.gif](../../../../../image1599.gif)

Retorno:

Resultado do comando executado (Letras)

Exemplo:

Uma função assumindo como parâmetros  "cmd /c mkdir c:/softwell" (Letras) e Falso (Lógico). Esse exemplo cria uma pasta com o nome softwell.

Observações:

1. Se o 2° parâmetro estiver verdadeiro, o fluxo só vai continuar após terminar de executar o comando.

2. O comando é executado somente no servidor.

3. Caso o comando executado não possua retorno, será retornado nulo.

Nome Real:

ebfShellExecute

Compatibilidade:

Servidor
