---
title: "System Check"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/system_check.html"
---

Este recurso permite ao administrador do sistema visualizar o nível de segurança da aplicação e a utilização de boas práticas.

Detalhes abaixo:.

![image_1908.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image_1908.png)

Entre as informações temos:

- Usuário de configurações:
  - Verifica se as credenciais de acesso às configurações do sistema e do Webrun permanecem as padrões.

- Versão de segurança:
  - Verifica se o parâmetro "VersaoSeguranca" está ativo. Este parâmetro é importante para aumentar a segurança
    dos sistemas desenvolvidos em Maker.

- Modo depuração:
  - Verifica se o parâmetro "DebugMode" está ativo, o que pode ser muito útil enquanto o projeto está em modo de desenvolvimento,
    mas não é recomendado para projetos em produção, porque o projeto continua escrevendo o log constantemente, causando um grande
    tráfego de entrada e saída de dados.

- Compactação de códigos JavaScript:
  - Verifica se o parâmetro "DebugCachedFiles" está ativo, o que pode ser muito útil enquanto o projeto está em modo de desenvolvimento,
    mas não é recomendado para projetos em produção, porque os códigos JavaScript dos componentes não sofrem compactação, o que pode causar
    lentidão na renderização das telas devido a não utilização do cache.

- Usuário padrão do Tomcat:
  - Verifica se as credenciais de acesso ao Tomcat permanecem as padrões.

- Usuário automático (master):
  - Verifica se as credenciais de acesso ao projeto permanecem as padrões (usuário master).

Além das informações, as soluções também podem ser aplicadas diretamente pelo plugin, lembrando que, após aplicar as soluções
recomendamos a reinicialização do Webrun.
