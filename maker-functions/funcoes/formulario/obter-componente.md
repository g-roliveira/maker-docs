---
title: "Obter Componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente

## Descrição

Retorna a referência do componente passado por parâmetro.

Parâmetro:
1. Nome do componente. (Letras)

## Retorno

Retorna a referência do componente. (Variante)

## Observações

1. Se o formulário não for o principal (o que chama o fluxo), essa função não vai funcionar em regras do tipo
cliente;
2. Se não for o formulário principal (que chama o fluxo) e o mesmo estiver aberto, o retorno será o conteúdo do
campo passado naquele registro. Caso o formulário passado não esteja sendo utilizado, o retorno será o primeiro
registro no banco.

## Exemplo

Assumindo como componente "MakerEdit2", o retorno será o objeto deste componente.
