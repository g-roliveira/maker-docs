---
title: "Abrir Formulário no Container"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Função que abre um formulário no Container. O Container pode ser uma Moldura, uma DIV existente na tela ou o componente Container.

## Parâmetro(s)

1. Formulário.
2. Referência do Container. (Componente)
3. Formulário que será aberto no Container.
4. Texto indicando o filtro. (Letras, Opcional)
5. Modo de Abertura. (Inteiro)
6. Barra de Rolagem? (Lógico)

## Observações

1. Esta função não deve ser utilizada para abrir no container o mesmo formulário que o contém.
2. Modos de Abertura: 1 - Inclusão, 2 - Edição.
No Mobile: 1: Inclusão, 2: Edição, -1: Navegação, 3: - Exclusão.
3. As modificações feitas no formulário que está em um Container, apenas serão visualizadas quando o sistema for reiniciado, ou quando o formulário for atualizado manualmente.

## Exemplo

Assumindo como 1º parâmetro o formulário "Form", 2º parâmetro o container (presente em "Form") "Moldura", 3º parâmetro o formulário "Form Moldura" e como 6º parâmetro "True", será aberto no Container "Moldura" o formulário "Form Moldura" com barra de rolagem.
