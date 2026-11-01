---
title: "Usando Funções predefinidas em consultas"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/assistente_sql/usando_funcoes_predefinidas_em_consultas.htm"
---

As Funções predefinidas são usadas em [Valor Padrão](../propriedade_do_formulario) e podem ser utilizadas nas colunas Expressão, Critério e Ou. Abaixo consta uma imagem que exemplifica a utilização de uma dessas funções:

![image1226.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image299.png)

Conforme configuração apresentada na primeira imagem, possivelmente será necessário o uso de funções nativas da linguagem SQL de conversão:

- A sintaxe da função é :FUNCAO_&lt;chave&gt; - sempre iniciar a função com : (dois pontos), em seguida a palavra FUNCAO_ (em letra maiúscula) e depois a chave (em letra minúscula);
- Utilização da função CAST para definição de tipo de dados da função.

Abaixo estão listadas as funções predefinidas que podem ser usadas na tela [Assistente SQL](iniciando_com_o_assistente_sql):

- :FUNCAO_data - retorna data atual (dado originário do computador no qual está sendo executado o Webrun).
- :FUNCAO_datahora - retorna data e hora atual (dado originário do computador no qual está sendo executado o Webrun).
- :FUNCAO_hora - retorna hora atual (dado originário do computador no qual está sendo executado o Webrun).
- :FUNCAO_horasimples - difere da função hora por não apresentar os segundos.
- :FUNCAO_dia - retorna o dia, de acordo com a data atual (dado originário do computador no qual está sendo executado o Webrun).
- :FUNCAO_mes - retorna o mês, de acordo com a data atual (dado originário do computador no qual está sendo executado o Webrun).
- :FUNCAO_ano - retorna o ano de acordo com a data atual (dado originário do computador no qual está sendo executado o Webrun).
- :FUNCAO_guid - retorna a informação contida no campo Identificador da tela [Definições do Formulário](../propriedade_do_formulario).
- :FUNCAO_login - retorna o nome do usuário da sessão atual.
- :FUNCAO_usuario - retorna o código de cadastro do usuário na tabela FR_USUARIO (sessão atual).
- :FUNCAO_administrador - retorna o valor padrão S, caso o usuário da sessão atual seja Administrador-Geral do sistema; caso contrário, a função retorna o valor N. Para recordar como configurar o usuário como Administrador-Geral, consulte o tópico [Usuários do Sistema](../../usuarios_do_sistema/usuarios_do_sistema).
- :FUNCAO_sistema - retorna as três letras que representam o sistema.
- :FUNCAO_sistemanome - retorna o nome do sistema.
- :FUNCAO_conexaoid - retorna o ID da conexão ao sistema, gerado pelo Webrun.
- :FUNCAO_conexaoguid - retorna o GUID (identificador único) da conexão gerado pelo Webrun.
- :FUNCAO_ip - retorna o IP da conexão (cliente ou proxy do cliente que fez a requisição)
- :FUNCAO_host - retorna o Nome do Computador (HOST) ou o IP da conexão (cliente ou proxy do cliente que fez a requisição)
- :FUNCAO_rand1 - retorna um número aleatório entre 0 e 9.
- :FUNCAO_rand2 - retorna um número aleatório entre 0 e 99.
- :FUNCAO_rand3 - retorna um número aleatório entre 0 e 999.
- :FUNCAO_rand4 - retorna um número aleatório entre 0 e 9999.
- :FUNCAO_rand5 - retorna um número aleatório entre 0 e 99999.
- :FUNCAO_rand6 - retorna um número aleatório entre 0 e 999999.
- :FUNCAO_fluxo_&lt;nome_do_fluxo&gt; - retorna o valor de retorno de um fluxo servidor.

O fluxo de ação utilizado na última função citada deve possuir um valor de retorno (Parâmetro de Retorno configurado no componente [Fim](../../fluxos_e_acoes/parametro_de_retorno)). Além disso, abaixo constam algumas observações sobre a sintaxe correta para a utilização desta função no Assistente SQL:

- usar letras em minúsculo. Ex.: :FUNCAO_fluxo_pagamento;
- não podem existir espaços;
- não pode haver caracteres especiais;

- - não deve conter "_"(underline) no nome do fluxo.
- :FUNCAO_sessao_nomedavariavel - retorna o valor atribuído à variável de sessão definida pelo usuário. Como exemplo: FUNCAO_sessao_departamento. No momento da criação do fluxo que define a variável de sessão (função Definir variável de sessão), o usuário deve atentar para a definição do escopo como do tipo não global (ou seja, declarar falso para o terceiro parâmetro da função).

Observações:

1. Não é possível utilizar a condição "IN" passando o valor de uma variável de sessão.
2. não deve conter "_"(underline) e espaços em branco no nome da variável de sessão.
3. :FUNCAO_formulario_[guid_do_formulário]_[nome_do_campo] ou :FUNCAO_formulario_ [código_do_formulário]_[nome_do_campo] - se o formulário estiver aberto, a função retornará o valor do campo do registro corrente; se o formulário estiver fechado, a função retornará o valor do campo do primeiro registro. São exemplos de uso da função a expressão :FUNCAO_formulario_B3D98C9A5DDC4C67A5E52DE9BC045BED_pes_cod e a expressão :FUNCAO_formulario_45_pes_cod.

Observações:

1. O Guid usado em: :FUNCAO_formulario_B3D98C9A5DDC4C67A5E52DE9BC045BED_pes_cod e não pode conter os caracteres "&#123;", "&#125;" e "-".
2. A sintaxe: CONSTANTE_&lt;chave&gt; que era utilizada anteriormente continua funcionando, mantendo assim compatibilidade com configurações já feitas:

![image1227.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image299.png)

![executor de script sql](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image300.png)

- As funções predefinidas deverão ser utilizadas somente nas definições do formulário.
