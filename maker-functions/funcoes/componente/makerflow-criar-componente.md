---
title: "MakerFlow - Criar Componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Servidor

## Descrição

Cria um novo componente Maker Flow (Componente desenvolvido com o Maker) no servidor guardando suas propriedades.

## Parâmetro(s)

1. Nome do componente. (Letras)
2. Mapa de parâmetros. (Variante)

## Retorno

Código do componente. (Inteiro)

## Observações

1. É recomendado o uso desta função para o armazenamento de propriedades sensíveis do componente, evitando que estas sejam expostas na camada cliente.
2. Caso seja necessário obter as propriedades armazenadas, utilizar a função "Obter Propriedade do Componente", ou definir uma nova propriedade posteriormente, utilizar a função "Definir Propriedade do Componente".
