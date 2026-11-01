---
title: "Remover Pasta de Arquivos"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=20"
---

**Categoria:** [Arquivo](../../categorias/arquivo)

**Compatibilidade:** Servidor

## Descrição

Apaga no servidor a pasta e todo o conteúdo existente na mesma.

Parâmetro:
1. Caminho absoluto da pasta. (Letras)

## Retorno

Caso o caminho exista e seja removido com sucesso, o retorno será "True", caso contrário será "False". (Lógico)

## Observação

Caso seja informado o caminho de um arquivo, a função removerá o arquivo informado no parâmetro.

## Exemplos

1. Assumindo que o parâmetro seja "C:\MakerFlow", caso a pasta exista, ela será apagada juntamente com os
arquivos existentes em seu contexto e a função retornará "True".
2. Assumindo que o parâmetro seja "C:\MakerFlows", caso a pasta não exista, o retorno será "False".
