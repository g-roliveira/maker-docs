---
title: "Criar Novo Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Cria um novo arquivo no servidor.

## Parâmetro(s)

1. Caminho absoluto do arquivo. (Letras)
2. Charset. (Letras, Opcional) (Ver observação 2)

## Retorno

Verdadeiro, caso o arquivo seja criado com sucesso. Falso, caso contrário. (Lógico)

## Observações

1. Caso queira criar o arquivo no contexto do Webrun, utilize a função "Diretório de Arquivos" que retorna o
diretório de arquivos do Webrun. Após ter conhecimento do diretório, utilize a função "Concatenação" para juntá-
lo com o nome e extensão desejados para o seu novo arquivo.
2. No segundo parâmetro, deverá ser informado o charset do arquivo, exemplo: (UTF-8, ISO-8859-1). Caso não seja passado o charset, a função adotará o charset corrente do Webrun.

## Exemplos

1. Assumindo como parâmetro o caminho "C:\HelpMaker.txt", caso já exista um arquivo de mesmo caminho
absoluto, o retorno será "False".
2. Assumindo como parâmetro o caminho "C:\MakerALL.txt", caso não exista um arquivo de mesmo caminho
absoluto, o retorno será "True" caso o arquivo seja criado com sucesso.
