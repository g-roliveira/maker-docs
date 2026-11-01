---
title: "O que há de novo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/webrun_2/webrun_net/o_que_ha_de_novo.htm"
---

O Webrun.NET é um framework que complementa a execução de aplicações criadas pelo Maker no ambiente web.

Para utilizá-lo, é necessário ter instalado o IIS 5.1, 6.0 ou 7.5 e framework 2.0.50727. O processo de instalação é muito simples e pode ser conferido [aqui](instalacao_do_webrun_dotnet).

A versão 2.7 está cheia de novidades que facilitarão o dia a dia do desenvolvedor, sendo que o principal recurso é a exportação de sistema. Abaixo, segue lista de novidades:

- Exportação de Sistema - Agora é possível utilizar o Webrun.NET para exportar os sistemas e encaminhá-los para o cliente da forma mais simples possível. Por ser compatível com a maioria dos compactadores de arquivo existentes no mercado, a extensão do arquivo publicado é .ZIP.
- Proteção do código fonte - Nesta nova versão, o código fonte do sistema estará mais protegido, visto que todo o projeto será compilado sendo necessárias apenas as tabelas FR's* para o modo de produção.

- Melhor desempenho na geração do código - Durante o processo de compilação, mais de uma regra será compilada paralelamente. Por padrão, o número máximo de threads é 10, podendo ser configurado no parâmetro CodeExport  PoolSize.
- Novo parâmetro para compilação de objetos durante o desenvolvimento - O parâmetro CompileAll, do grupo CodeExport, pode ser utilizado para que o sistema seja totalmente compilado na carga inicial do sistema.
- Diversas outras melhorias e correções que podem ser verificadas no changelog das versões.
