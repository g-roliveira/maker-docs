---
title: "Instalação e Configuração IIS - Internet Information Services"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/diversos/instalacao_e_configuracao_iis.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Diversos &gt;&gt; Instalação e Configuração IIS - Internet Information Services

O IIS é o servidor web da Microsoft necessário para rodar aplicações ASP ou ASP.NET. O Webrun.Net está configurado para rodar a partir da versão 6.0 do IIS.

## Instalando e Configurando o IIS

O IIS é um componente adicional do Windows. Para instalá-lo, basta ir em Painel de Controles, Adicionar ou Remover Programas e, em seguida, Adicionar/Remover Componentes do Windows e selecionar a opção Internet Information Services.

- ASP.NET;
- Extensibilidade do .NET;
- Extensões ISAP;
- Filtros ISAP.

## Criando um Diretório Virtual no IIS

Em Site da Web Padrão ou Default Web Site, clique com o botão direito do mouse e escolha a opção Novo -> Diretório Virtual. O Wizard do próprio IIS será executado solicitando informações como:

1. Alias - que será o nome da aplicação, por exemplo, webrun;
2. Diretório - onde se encontram os arquivos da aplicação;
3. Permissões de acesso - Leitura, Executar Scripts (ASP), Executar (aplicativos ISAP ou CGI) e Gravação

Configurações Necessárias no Diretório Virtual Criado. (Apenas para a Versão 6.0 do IIS)

Clique com o botão direito no diretório virtual criado e, em seguida, escolha a opção Propriedades e proceda da seguinte forma: Diretório Virtual.

1. Clique em Configurações -> Mapeamentos -> Adicionar;
2. Executável: C:\WINDOWS\Microsoft.NET\Framework\v4\aspnet_isapi.dll;
3. Extensão: .*;
4. Verbos: Todos os verbos;
5. Marque a opção Mecanismo de Script e desmarque a opção Verificar se o arquivo existem.

Veja: [Versões Homologadas](../../Versoes%20Homologadas)
