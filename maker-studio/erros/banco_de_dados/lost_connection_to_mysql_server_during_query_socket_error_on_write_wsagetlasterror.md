---
title: "Lost connection to MYSQL server during query socket error on write. WSAGetLastError"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/erros/banco_de_dados/lost_connection_to_mysql_server_during_query_socket_error_on_write_wsagetlasterror.htm"
---

![image1769.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/banco1.png)

Solução: defina um novo tamanho máximo para pacotes de dados no servidor através das seguintes opções:

Primeira opção - por meio da linha de comando de inicialização do servidor:

shell&gt;mysql--max_allowed_packed=16M

Segunda opção - por meio da adição de um parâmetro no INI de configuração do servidor:

[mysqld]

max_allowed_packet=16M

ou

[mysqld]

set-variable = max_allowed_packet=10240000
