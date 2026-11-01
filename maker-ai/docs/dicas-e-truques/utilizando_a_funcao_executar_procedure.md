---
title: "Utilizando a Função Executar Procedure"
source_url: "https://manual.softwell.com.br/docs/dicas-e-truques/utilizando_a_funcao_executar_procedure"
---

Para utilizar funções e procedures o Maker possui a função Executar Procedure.

Crie uma função ou uma procedure no banco Postgres, para este exemplo utilize o seguinte script para criá-la.

create function func_exemplo (bigint)

returns varchar as

'select aco_nome from fr_acao where aco_codigo = $1'

language 'SQL'

Crie um fluxo com um parâmetro de entrada(Inteiro) e um processamento, neste processamento utilize a função Executar Procedure assim como está montada na imagem abaixo.

![image1920.gif](https://manual.softwell.com.br/assets/images/list1-15cbd10c882e77842ad0bf3f980090c7.png)

1. Defina no 1º parâmetro o nome da função, neste exemplo: FUNC_EXEMPLO.
2. No 2º parâmetro é onde se define o parâmetro de entrada, neste exemplo passamos o Parâmetro de Entrada que foi criado no fluxo.
3. No 3º defina a conexão (Caso a conexão seja nula, será usada a conexão principal do sistema)
4. No 4º parâmetro é passada uma lista com os tipos de retorno da função, neste caso passe para a lista o valor '12' referente ao tipo VARCHAR

Após salvar a regra crie um formulário com um componente  ‘caixa de texto’ e um botão, vincule a regra ao evento do botão e passe como parâmetro de entrada o componente ‘caixa de texto’.

Ao executar no Webrun está função irá realizar uma consulta na tabela fr_acao retornando o campo ‘aco_nome’ filtrada pelo campo ‘aco_codigo’.
