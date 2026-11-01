---
title: "O assistente não conseguiu criar o novo banco de dados"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/erros/banco_de_dados/o_assistente_nao_conseguiu_criar_o_novo_banco_de_dados.htm"
---

![image1811.jpg](../../image1811.jpg)

Causa: Ocorre porque o Charset Latin1 não está disponível nesta versão do Postgres.

Solução: Ir até Configurações Avançadas e modificar o parâmetro CharSet de Latin1 para Win1252.
