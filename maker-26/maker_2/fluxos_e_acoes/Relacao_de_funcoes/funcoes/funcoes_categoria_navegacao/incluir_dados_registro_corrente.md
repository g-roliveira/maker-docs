---
title: "Incluir Dados Registro Corrente"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_navegacao/incluir_dados_registro_corrente.htm"
---

Descrição:

Inclui os dados como um novo registro no banco.

Parâmetros:

Não possui

![image1093.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1093.gif)

Retorno:

Não possui.

Observações:

1. O uso dessa função tem uma melhor performance quando usada em regras clientes.

2. Caso ocorra um erro durante a inserção dos dados no banco, não é possível capturar a exceção com as funções try/catch, pois a função simula a gravação de um registro que está sendo editado e, em seguida, gravado no formulário. Caso deseje tratar as exceções, deve ser utilizada a função "Executar Atualização".

Nome Real:

ebfNavIncludeSaveRecord

Compatbilidade:

Todas as camadas
