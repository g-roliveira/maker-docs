---
title: "FTP - Obter arquivo do servidor FTP"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=35"
---

**Categoria:** [FTP](../../categorias/ftp)

**Compatibilidade:** Servidor

## Descrição

Obtém o arquivo do servidor FTP.

## Parâmetro(s)

1. Conexão. (Variante)
2. Arquivo de origem. (Letras)
3. Destino do arquivo. (Letras)
4. Transferência binária? (Lógico)

## Retorno

Não possui.

## Exemplo

Assumindo os parâmetros como:
1º parâmetro: conexao FTP ( retorno da função "Abrir conexão FTP" )
2º parâmetro: (arquivo que se encontra no servidor, na qual deseja obte-lo.)/pastaorigem/ArquivoOrigem.txt
3º parâmetro: (local do arquivo que deseja salvar o arquivo na maquina local)c:/tpArquivoDestino.txt
4º parâmetro: Verdadeiro (Valor Lógico) (Transferência em binário ou não.)
