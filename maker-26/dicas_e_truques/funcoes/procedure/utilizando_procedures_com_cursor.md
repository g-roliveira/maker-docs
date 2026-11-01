---
title: "Utilizando Procedures com CURSOR"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/funcoes/procedure/utilizando_procedures_com_cursor.htm"
---

# Utilizando procedures com CURSOR

Segue abaixo o script utilizado para este exemplo

Criando o pacote:

create or replace

PACKAGE PACOTE_SOFTWELL AS TYPE Smart_Cursor IS REF CURSOR;

  PROCEDURE SP_ACAO_SOFTWELL  (

        XCursor  OUT Smart_Cursor

  );

END PACOTE_SOFTWELL;

Criando a procedure:

create or replace

PACKAGE BODY PACOTE_SOFTWELL AS

PROCEDURE SP_ACAO_SOFTWELL  (

        XCursor  OUT Smart_Cursor

  ) AS

  BEGIN

     OPEN XCursor  FOR

     select aco_codigo as CODIGO, aco_nome as NOME from fr_acao ;

  END SP_ACAO_SOFTWELL;

END PACOTE_SOFTWELL;

Esta procedure irá realizar uma consulta na tabela fr_acao e retornar seu conteúdo.

Crie o fluxo para executar a procedure.

O seu fluxo deverá ficar da seguinte forma:

![image1796.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1796.jpg)

Crie três variáveis para esta regra, uma do tipo Variante, uma Tabela e uma do tipo letras.

![image1797.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1797.jpg)

No 1º processamento utilize a função executar procedure, esta função irá retornar o cursor o qual será armazenado na variável do tipo Variante

![image1921.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1921.gif)

1. No 1º parâmetro defina o nome do pacote junto com o nome da procedure neste exemplo, ‘PACOTE_SOFTWELL.SP_ACAO_SOFTWELL’.
2. No 2º parâmetro será passada uma lista contendo os parâmetros de entrada neste exemplo, não foi definido nenhum parâmetro de entrada para a procedure.
3. No 3º defina a conexão (Caso a conexão seja nula, será usada a conexão principal do sistema).
4. No 4º parâmetro são passados através de uma lista os tipos de retorno da procedure, neste caso crie uma lista e passe o valor ‘-10’ referente ao tipo Cursor.

No 2º processamento será obtida toda a seleção e transformada e uma tabela para sua utilização.

![image1922.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1922.gif)

Utilize a função Obter Objeto da lista passando como parâmetros a variável que foi armazenada o cursor e a posição.

Guarde o retorno desta função em uma variável do tipo Tabela.

Como o ponteiro desta Tabela esta apontando para o registro 0, crie um processamento e utilize a função Tabela – Próximo registro.

Crie um loop para concatenar os valores obtidos.

![image1798.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1798.jpg)

Ao utilizar a função Campo passe como parâmetros a variável Tabela e o nome da coluna (utilizando letras) é recomendável que ao criar a procedure utilize alias para as colunas.

Ao final utilize a função Alertar aguardando Ok e como parâmetro passe a variável do tipo Letras a qual foi utilizada para concatenar todo o resultado da tabela.
