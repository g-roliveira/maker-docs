---
title: "Utilizando Procedures com parâmetros IN OUT"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/funcoes/procedure/utilizando_procedures_com_parametros_in_out.htm"
---

Crie uma procedure, segue abaixo o script usado para este exemplo em banco Oracle.

create or replace

PROCEDURE   PROC_SOMA  ( A IN NUMBER, B IN NUMBER, C  OUT NUMBER) AS

BEGIN

     C := A + B;

     RETURN;

END PROC_SOMA;

Esta procedure irá obter dois números como parâmetros de entrada e retornar a soma deles.

Crie um fluxo com dois parâmetros de entrada(Inteiro) e um processamento, neste processamento utilize a função ‘Executar Procedure In Out’ assim como esta montada na imagem abaixo.

![image1795.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1795.jpg)

1. Defina no 1º parâmetro o nome da função, neste exemplo: ‘PROC_SOMA’.
2. No 2º parâmetro é onde serão definidos os parâmetros de entrada, neste exemplo passamos os Parâmetros de Entrada que foram criados no fluxo.
3. No 3º defina a conexão (Caso a conexão seja nula, será usada a conexão principal do sistema)
4. No 4º parâmetro é passada uma lista com os tipos de retorno da função, neste caso passe para lista ‘2’ referente ao tipo NUMBER
5. No 5º parâmetro é passada uma lista referente aos tipos dos parâmetros no caso temos dois parâmetros IN e um parâmetro OUT.

Observação: Ao criar sua procedure sempre defina os parâmetros OUT ao final.

Ex: ‘create procedure proc_exemplo1 (A IN NUMBER , B OUT NUMBER)’

‘create procedure proc_exemplo2 (A IN VARCHAR, B IN NUMBER, C IN VARCHAR, D IN NUMBER, E OUT NUMBER, F OUT VARCHAR)’.

Após salvar a regra crie um formulário com dois componentes ‘caixa de texto’ e um botão, vincule a regra ao evento do botão e passe como parâmetros de entrada os componentes ‘caixa de texto’.
