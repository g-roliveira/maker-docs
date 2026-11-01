---
title: "Fiscal - Abrir porta serial"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_impressorar_bematech/fiscal_abrir_porta_serial.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Abre a porta serial para comunicação entre a impressora e o micro.

Parâmetros:

Não possui

![image1643.gif](../../_assets/image1643.gif)

Retorno:

1: OK.

4: O arquivo de inicialização não foi encontrado no diretório de sistema do Windows.

5: Erro ao abrir a porta de comunicação.

Observações:

A função lê o nome da porta a ser aberta no arquivo de configurações. Se o parâmetro "porta" estiver configurado com a palavra "Default" a função localiza onde a impressora está conectada e configura o arquivo INI.

Nome Real:

ebfBematechFiscalOpenSerialPort

Compatibilidade:

Cliente
