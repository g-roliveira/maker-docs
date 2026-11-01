---
title: "Como aumentar a segurança de sua aplicação"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/webrun/como_aumentar_a_seguranca_de_sua_aplicacao.htm"
---

Visando o aumento da segurança de suas aplicações desenvolvidas em Maker, a Softwell Solutions implementou na versão 3 do Webrun uma funcionalidade, habilitada via parâmetro, que possibilitará ao desenvolvedor Maker aumentar o nível de segurança de suas aplicações.

Esta implementação poderá ser ativada utilizando o parâmetro VersaoSeguranca via propriedades avançadas da área de trabalho do Maker ou propriedades avançadas do Webrun.

A Softwell Solutions recomenda a utilização deste parâmetro no Webrun, pois desta maneira, as configurações servirão a todos os sistemas desenvolvidos.

Veja abaixo o comportamento do sistema/Webrun após ativação do parâmetro:

• Bloqueio de download de arquivos das pastas Upload, systems e subpastas;

• Bloqueio de upload * de arquivos com as extensões "exe", "com", "bat","dll", "so", "bin", "jsp", "jsf", "jws", "cs", "vbs" e "vb";

• Upload na camada cliente sempre irá para pasta "Upload" disponível no contexto do Webrun;

• Bloqueio de acesso aos arquivos que não se encontram nas pastas "tmp" e "download";

• Bloqueio de valores padrão para campos apenas leitura;

O bloqueio de arquivos com extensões pré-determinadas funciona em conjunto com o parâmetro Seguranca:Upload:ExtensoesBloqueadas. Adicione este parâmetro no Grupo Seguranca dos parâmetros de configuração do Webrun.

Impactos:

• A execução de regras que efetuem download das pastas citadas não terá êxito. Nenhum arquivo será baixado;

• A execução de regras que tentam acessar arquivos existentes nos diretórios "Upload", "systems e subpastas" poderá apresentar comportamento inesperado;

• Em formulários externos, bloqueio de execução de regras que não estejam configuradas como externa ou não estejam vinculadas a um componente do formulário externo;

• A função Imagem – Alterar URL não permitirá a utilização de imagens que não se encontram nas pastas "download" ou "tmp". Desta forma, caso exista alguma regra que altere a URL de um componente Imagem e o caminho da URL aponte para uma pasta diferente de "download" ou "tmp", o funcionamento será incorreto.

É necessário lembrar que por padrão, as implementações de segurança acima não estão ativas.

Veja como configurar o parâmetro VersaoSeguranca:

Webrun

Para adicionar este parâmetro no Webrun, o usuário deverá criar um novo parâmetro chamado PropriedadesAvancadas nos parâmetros de configuração, adicionar VersaoSeguranca e atribuir o seu valor a 1.

![image1873.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1873.jpg)

É necessário reiniciar o Webrun para que as configurações tenham efeito.

Maker

Para adicionar este parâmetro no Maker, o usuário deverá clicar com o botão direito na área de trabalho e selecionar Propriedades-> Avançado, adicionar o parâmetro VersaoSeguranca e determinar seu valor  1. Como demonstra a figura abaixo:

![image1872.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1872.jpg)

Salve o projeto e reinicie o Webrun para que as configurações tenham efeito.

Lembrete: Ao configurar este parâmetro na área de trabalho do projeto, suas funcionalidades serão exclusivas ao projeto.
