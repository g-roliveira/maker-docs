---
title: "Configuração do Banco de Dados PostgreSQL para Acesso Externo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/banco_de_dados/configuracao_banco_dados_postgresql_para_acesso_externo.htm"
---

Observe a seguinte situação:

1. O usuário instala o banco de dados PostgreSQL em uma máquina e salva o arquivo wfre na pasta systems em uma máquina diferente;
2. Tenta acessar o sistema informando o nome de usuário e a senha e é exibida uma mensagem de erro, informando que não há permissão de acesso ao banco de dados.

É demonstrada abaixo a solução para o erro:

1. Parar o serviço do banco de dados PostgreSQL;
2. Abrir o arquivo pg_hba.conf contido na pasta data (dentro da pasta PostgreSQL no diretório de instalação).

![image422.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image422.jpg)

3. Localize a linha que contém o texto:

![image669.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image669.gif)

Inclua logo abaixo o texto:

![image670.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image670.gif)

4. Em seguida, salve as alterações feitas e feche o arquivo:

![image423.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image423.jpg)

5. Abra o arquivo postgresql.conf, contido na pasta data (dentro da pasta PostgreSQL no diretório de instalação) e modifique o texto

#listen_addresses = 'localhost'

para

listen_addresses = '*'

Em seguida, salve as alterações e feche o arquivo.

![image424.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image424.jpg)

6. Reinicie o serviço do banco de dados PostgreSQL;
7. Limpe o cache do browser e acesse novamente.

Observação: Existem restrições para usuários das versões Standard Edition e Professional, pois um usuário por vez poderá acessar o banco. Para mais detalhes, acesse o tópico Recursos e Características das Versões do Maker.
