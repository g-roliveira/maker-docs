---
title: "Copiar Arquivo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_arquivo/copiar_arquivo.htm"
---

Descrição:

Cria uma cópia de um arquivo do servidor.

Parâmetros:

1. Caminho absoluto do arquivo a ser copiado

2. Caminho absoluto do arquivo a ser criado

![image1182.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1182.gif)

Retorno:

Não possui.

Observações:

1. É possível copiar arquivos de uma maquina da rede para outra.

Exemplo: Definindo o primeiro parâmetro como \\192.168.1.50\Arquivos\Documento.doc e o segundo parâmetro como \\192.168.1.69\Arquivos\teste.doc o arquivo será copiado de um computador da rede para outro.

2. É possível copiar arquivos do servidor onde está rodando o serviço para outra maquina.

Nome Real:

ebfFileCopy

Compatibilidade:

Banco de dados e Servidor

# Utilizando a Função Copiar Arquivo

Objetivo

Demonstrar a utilização da função Copiar Arquivo.

Características da Função

- Categoria: Arquivo
- Nome da função: Copiar Arquivo
- Descrição da Função:
- Compatível com a camada Servidor;

1º Parâmetro - Caminho de origem e identificação do arquivo;

2º Parâmetro - Caminho de destino e identificação do arquivo.

![image643.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image643.jpg)

Ambiente

- Versão Maker: 2.3.4.494;
- Versão Webrun:20080410;
- SGDB: homologados.

Exemplo prático

1. Preparação do Ambiente:

![image644.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image644.jpg)

Crie um formulário para a execução do fluxo. No exemplo, implementaremos um botão para executar o fluxo.

2. O fluxo:

![image645.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image645.jpg)

Desenvolva um fluxo composto por um objeto Processamento, com a expressão composta pela função Copiar Arquivo.

Estruturando a função:

1º Parâmetro - local de origem e nome do arquivo: neste exemplo d:/Vidros.ppt;

2º Parâmetro - local de destino e nome do arquivo: neste exemplo d:/dvd/Vidros.ppt.

Salve o fluxo e atribua ao evento Ao Clicar do botão que adicionou no formulário.
