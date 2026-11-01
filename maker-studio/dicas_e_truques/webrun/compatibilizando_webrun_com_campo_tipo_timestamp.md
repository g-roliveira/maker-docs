---
title: "Compatibilizando o Webrun com o campo do tipo TimeStamp"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/webrun/compatibilizando_webrun_com_campo_tipo_timestamp.htm"
---

Segundo a documentação do Oracle, até antes da versão 9, não existia o tipo TIMESTAMP. Depois da versão 9, surgiu o tipo TIMESTAMP. Assim, antigamente, o driver jdbc mapeava DATE para o tipo java.sql.timestamp, porém, com o surgimento do TIMESTAMP no oracle, eles modificaram e maperam DATE para java.sql.date e TIMESTAMP para java.sql.timestamp. Java.sql.date não tem hora. Assim, no Webrun, campos DATE não apresentam a hora.

Para manter a compatibilidade e o Webrun interpretar DATE como TIMESTAMP, crie a seguinte configuração em Parâmetros de Configuração:

Grupo: Inicializacao

Parâmetro: oracle.jdbc.V8Compatible

Chave: true

![image421.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image421.jpg)

Observações:

1. Essa configuração só funciona a partir versão 3 do Webrun para os clientes.
2. Após adicionar tal parâmetro, é necessário reiniciar o servidor de aplicações.
