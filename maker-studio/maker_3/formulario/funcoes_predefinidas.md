---
title: "Funções pré-definidas"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/funcoes_predefinidas.htm"
---

Utilizando o botão da direita do mouse sobre a coluna Valor Padrão (tela [Definições do Formulário](propriedade_do_formulario)), selecione uma das funções pré-definidas, do menu pop-up para atribuir como valor do campo em modo de inserção no formulário:

- Data(dd/mm/yyyy) - selecionando esta opção, é inserida a FUNCAO("DATA") que definirá como valor padrão a data atual (origem do S.O. do servidor da aplicação);
- Data e Hora (dd/mm/yyyy hh:mm:ss) - selecionando esta opção, é inserida a FUNCAO("DATAHORA") que definirá como valor padrão a data e hora atual (origem do S.O. do servidor da aplicação);
- Hora (hh:mm:ss) - selecionando esta opção, é inserida a FUNCAO("HORA") que definirá como valor padrão a hora atual (origem do S.O. do servidor da aplicação);
- Hora Simples (hh:mm) - selecionando esta opção, é inserida a FUNCAO("HORASIMPLES"), que difere da opção Hora por não apresentar os segundos;
- Dia (01-31) - selecionando esta opção, é inserida a FUNCAO("DIA"), que definirá como valor padrão o dia, de acordo com a data atual (seguindo a data do S.O. do servidor da aplicação);
- Mês (01-12) - selecionando esta opção, é inserida a FUNCAO("MES"), que definirá como valor padrão o mês, de acordo com a data atual (seguindo a data do S.O. do servidor da aplicação);
- Ano(0001-9999) - selecionando esta opção, é inserida a FUNCAO("ANO"), que definirá como valor padrão o ano, de acordo com a data atual (seguindo a data do S.O. do servidor da aplicação);
- GUID - selecionando esta opção, é inserida a FUNCAO("GUID"), que retornará um valor Guid aleatório;
- Login do Usuário - selecionando esta opção, é inserida a FUNCAO("MAKER_LOGIN_USUARIO"), que definirá como valor padrão o nome do usuário da sessão atual;
- Código do Usuário - selecionando esta opção, é inserida a FUNCAO("MAKER_CODIGO_USUARIO"), que definirá como valor padrão o código de cadastro do usuário na tabela FR_USUARIO (sessão atual);
- Usuário Administrador (S/N) - selecionando esta opção, é inserida a FUNCAO("MAKER_ADMINISTRADOR"), que definirá como valor padrão S ou N caso o usuário da sessão atual seja ou não classificado Administrador Geral para acesso ao sistema atual. Para recordar como configurar o usuário como Administrador Geral, acesse o tópico [Usuários do Sistema](../usuarios_do_sistema/usuarios_do_sistema);
- Código do Sistema (3 letras) - selecionando esta opção, é inserida a FUNCAO("MAKER_SISTEMA"), que definirá como valor padrão as três letras que representam o sistema;
- Nome do Sistema (letras) - selecionando esta opção, é inserida a FUNCAO("SISTEMANOME"), que definirá como valor padrão o nome do sistema;
- ID da conexão - selecionando esta opção, é inserida a FUNCAO("CONEXAOID"), que definirá como valor padrão o valor gerado pelo Webrun pela conexão ao sistema;
- GUID da conexão - selecionando esta opção, é inserida a FUNCAO("CONEXAOGUID"), que definirá como valor padrão o valor gerado pelo Webrun pela conexão ao sistema;
- IP do cliente- selecionando esta opção, é inserida a FUNCAO("IP"), que definirá como valor padrão do campo associado o IP da conexão;
- Host do cliente - selecionando esta opção, é inserida a FUNCAO("HOST"), que definirá como valor padrão do campo associado o IP do host da conexão;
- Randômico no intervalo [0-9] - selecionando esta opção, é inserida a FUNCAO("RAND1"), que definirá como valor padrão do campo associado um número aleatório entre 0 e 9;
- Randômico no intervalo [0-99] - selecionando esta opção, é inserida a FUNCAO("RAND2"), que definirá como valor padrão do campo associado um número aleatório entre 0 e 99;
- Randômico no intervalo [0-999] - selecionando esta opção, é inserida a FUNCAO("RAND3"), que definirá como valor padrão do campo associado um número aleatório entre 0 e 999;
- Randômico no intervalo [0-9999] - selecionando esta opção, é inserida a FUNCAO("RAND4"), que definirá como valor padrão do campo associado um número aleatório entre 0 e 9999;
- Randômico no intervalo [0-99999] - selecionando esta opção, é inserida a FUNCAO("RAND5"), que definirá como valor padrão do campo associado um número aleatório entre 0 e 99999;
- Randômico no intervalo [0-999999] - selecionando esta opção, é inserida a FUNCAO("RAND6"), que definirá como valor padrão do campo associado um número aleatório entre 0 e 999999;
- Fluxo Servidor - selecionando esta opção, é inserida a FUNCAO("fluxo:&lt;Nome do Fluxo&gt;"), que definirá como valor padrão do campo associado o retorno do fluxo servidor. Deve-se observar que o nome do fluxo tem que:
- 1. iniciar por letra maiúscula e as conseguintes em minúsculo. Ex.: FUNCAO("fluxo:Valor_pagamento");
  2. deve possuir um retorno que este será o valor para o campo associado.
- Variável da sessão - selecionando esta opção, é inserida a FUNCAO("sessao:&lt;Nome da Variável&gt;"), que definirá como valor padrão do campo associado o valor atribuído à variável de sessão definida pelo usuário. Como exemplo FUNCAO("sessao:Departamento");
- Campo de um formulário - selecionando esta opção, é inserida a FUNCAO("formulario:&lt;GUID do formulário&gt;:&lt;Nome do Campo&gt;"), que definirá como valor padrão do campo associado o valor do campo informado.
  Como exemplo FUNCAO("formulario:&#123;B3D98C9A-5DDC-4C67-A5E5-2DE9BC045BED&#125;:pes_cod")

Observação:

- Para a utilização das funções, o tipo do campo dependerá do SGBD que esteja utilizando. Por exemplo, para a FUNCAO("HORASIMPLES"), caso esteja utilizando Firebird o tipo será Time, no SQLServer será Varchar.
