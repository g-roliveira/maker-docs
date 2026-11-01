---
title: "Impressão Direta - Imprimir Texto ou Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Esta função realiza a impressão do texto ou do arquivo de acordo as informações passada por parâmetro.

Para mais informações, acesse: https://manual.softwell.com.br/#/configuracao_impressao

## Parâmetro(s)

1. Texto ou Link do Arquivo (Letras).
2. É arquivo? (Lógico) (Ver Observação 3).
3. Impressora (Letras) (Opcional) (Obtida através da função 'Impressão Direta - Obter Lista de Impressoras').

## Retorno

Não possui.

## Observações

1. Para que esta função funcione corretamente é necessário utilizar o Webrun Agent na máquina que está executando a ação.
2. A impressão será realizada na impressora definida como padrão ou na impressora informada no parâmetro 3.
3. Ao informar o valor como Verdadeiro (true), será impresso o arquivo informado no primeiro parâmetro, caso contrário
será impresso o texto.
4. Tipos de arquivo suportados: .pdf .png .jpeg.
5. No caso da impressão de arquivo, o mesmo deve estar disponível via HTTP, Ex.: http://localhost:8049/webrunstudio/tmp/&lt;nome do arquivo&gt;.pdf
6. O link deve ser acessível externamente ou dentro da rede onde está o serviço.
