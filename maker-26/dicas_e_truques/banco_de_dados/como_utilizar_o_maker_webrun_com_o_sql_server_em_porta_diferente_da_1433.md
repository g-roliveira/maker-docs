---
title: "Como utilizar o Maker/Webrun com o SQL Server em porta diferente da 1433"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/banco_de_dados/como_utilizar_o_maker_webrun_com_o_sql_server_em_porta_diferente_da_1433.htm"
---

Para utilizar o Maker/Webrun com uma porta diferente da convencional no banco SQL server, os seguintes passos devem ser tomados:

1. No arquivo databases.xml, que se encontra na pasta c:\Arquivos de Programa\Softwell Solutions\Maker 2.5\WebRun 2\config, encontre o grupo "MSSQL":

&lt;group-name&gt;MSSQL&lt;/group-name&gt;

2. No item URL, trocar o parâmetro $HostName$ por $HostName2$

Ou seja:

&lt;item&gt;

&lt;item-name&gt;URL&lt;/item-name&gt;

&lt;item-param&gt;jdbc:jtds:sqlserver://$HostName2$:$Port:1433$/$DataBase$;charset=$SQLServerCharSet:iso-8859-1$;useLOBs=false;sendStringParametersAsUnicode=false;useCursors=true&lt;/item-param&gt;

&lt;/item&gt;

3. No item ServerField, trocar o parâmetro "HostName" por "HostName2", ficando:

&lt;item&gt;

&lt;item-name&gt;ServerField&lt;/item-name&gt;

&lt;item-param&gt;HostName2&lt;/item-param&gt;

&lt;/item&gt;

1. Salve o arquivo database.xml.

1. Altere o parâmetro "HostName" no WFRE (Apontador) para: IP,PORTA (Ex: 192.168.1.112,1723).

6. Adicione o parâmetro "HostName2" no WFRE (Apontador) com o valor: IP (Ex: 192.168.1.112).

7. Adicione o parâmetro "Port" no WFRE (Apontador) com o valor: PORTA (Ex: 1723).

8. Salve o WFRE, e em seguida, reinicie o servidor de aplicações.

Observação: Ao utilizar conexões adicionais,deve-se acrescentar o parâmetro "HostName2" ao WFRE e informar o mesmo valor do parâmetro "HostName".
