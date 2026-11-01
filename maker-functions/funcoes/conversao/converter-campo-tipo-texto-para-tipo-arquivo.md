---
title: "Converter campo tipo Texto para tipo Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=8"
---

**Categoria:** [Conversão](../../categorias/conversao)

**Compatibilidade:** Cliente

## Descrição

Essa função converte um Componente Caixa de Texto para um componente Caixa de Texto do tipo Arquivo.
Através dela você poderá selecionar um arquivo do sistema.

## Parâmetro(s)

1. Componente Caixa de Texto.
2. Quantidade de caracteres (aproximados) que aparecerão. (Inteiro) (Ver observação 1)

## Retorno

Não possui.

## Observações

1. No 2º Parâmetro o Firefox 3 necessita dessa propriedade para alterar a largura.
2. O componente não pode estar relacionado a um campo do banco de dados.
3. Por questões de segurança, a exibição do caminho correto do arquivo ficará a critério do navegador utilizado.
4. Necessário o uso da função no evento "Ao Entrar" do formulário.

## Exemplo

Assumindo que um Componente do tipo Texto no formulário. O uso desta converterá o Componente em um do tipo arquivo.
