---
title: "Ler código de barras ou QRCode"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Função para realizar a leitura de código de barras, QRCode e outros padrões.

## Parâmetro(s)

1. Fluxo a ser executado em caso de sucesso.
2. Fluxo a ser executado em caso de erro.
3. Formato a escanear. (Letras, Opcional)

## Retorno

Retorna o conteúdo do código de barras. (Letras)

## Observações

1. Por padrão, o Scan buscará por qualquer tipo de código de barras suportado pela biblioteca, que são:
- QR_CODE
- CODE_128
- CODE_39
- EAN_13
- EAN_8
- ITF
- UPC_A
2. O terceiro parâmetro deve ser informado os tipos a serem buscado. Caso não seja informado nenhum tipo, o scanner
buscará por qualquer tipo.
3. Os formatos devem ser passados como texto e separados por vírgula.
