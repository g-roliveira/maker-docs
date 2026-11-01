---
title: "Instalação e Configuração IIS - Internet Information Services"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/diversos/instalacao_e_configuracao_iis.htm"
---

O IIS é o servidor web da Microsoft necessário para rodar aplicações ASP ou ASP.NET. O Webrun.Net está configurado para rodar nas versões 5.1, 6.0 e 7.0 do IIS, respectivamente, para os Windows XP, 2000 e 2003 Server e VISTA.

## Instalando e Configurando o IIS

O IIS é um componente adicional do Windows. Para instalá-lo, basta ir em Painel de Controles, Adicionar ou Remover Programas e, em seguida, Adicionar/Remover Componentes do Windows e selecionar a opção Internet Information Services.

Para a versão 7.0 que já vem no Windows VISTA, é necessário expandir o item Serviços de Informações da Internet -> Serviços da World Wide Web -> Recursos de Desenvolvimento de Aplicativos e certificar-se de que as seguintes opções estão selecionadas:

- ASP.NET;
- Extensibilidade do .NET;
- Extensões ISAP;
- Filtros ISAP.

## Criando um Diretório Virtual no IIS

Em Site da Web Padrão ou Default Web Site, clique com o botão direito do mouse e escolha a opção Novo -> Diretório Virtual. O Wizard do próprio IIS será executado solicitando informações como:

1. Alias - que será o nome da aplicação, por exemplo, webrun;
2. Diretório - onde se encontram os arquivos da aplicação;
3. Permissões de acesso - Leitura, Executar Scripts (ASP), Executar (aplicativos ISAP ou CGI) e Gravação

Configurações Necessárias no Diretório Virtual Criado

Clique com o botão direito no diretório virtual criado e, em seguida, escolha a opção Propriedades e proceda da seguinte forma: Diretório Virtual.

1. Clique em Configurações -> Mapeamentos -> Adicionar;
2. Executável: C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\aspnet_isapi.dll;
3. Extensão: .*;
4. Verbos: Todos os verbos;
5. Marque a opção Mecanismo de Script e desmarque a opção Verificar se o arquivo existem.
