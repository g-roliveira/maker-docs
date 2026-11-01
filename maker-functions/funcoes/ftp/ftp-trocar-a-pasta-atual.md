---
title: "FTP - Trocar a pasta atual"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=35"
---

**Categoria:** [FTP](../../categorias/ftp)

**Compatibilidade:** Servidor

## Descrição

O diretório de trabalho remoto inicialmente será o diretório home do usuário.
Para mudá-lo basta usar essa função, passando o nome do novo diretório como argumento.

## Parâmetro(s)

1. Objeto FTP que represente uma conexão FTP aberta. (Variante)
2. Novo diretório de trabalho. (Letras)

## Retorno

Não possui.

## Observação

Só é possível mudar o diretório a partir da home do usuário, não sendo possível,
trocar a pasta a partir de um diretório diferente da home.
