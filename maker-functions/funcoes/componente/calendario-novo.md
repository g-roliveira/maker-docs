---
title: "Calendário - Novo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Servidor

## Descrição

Essa função cria um componente Calendário dinamicamente.

## Parâmetro(s)

1. Nome da Aba. (Letras)
2. Posição X. (Inteiro)
3. Posição Y. (Inteiro)
4. Tamanho. (Inteiro)
5. Altura. (Inteiro)
6. Nome do Componente. (Letras)
7. Consulta SQL Feriado. (Tabela) (Ver observação 1)
8. Campo Data Feriado. (Letras)
9. Campo Descrição Feriado. (Letras)
10. Consulta SQL Atividade. (Tabela) (Ver observação 1)
11. Campo ID. (Letras)
12. Campo Data Inicio Atividade. (Letras)
13. Campo Data Final Atividade. (Letras)
14. Campo Descrição Atividade. (Letras)
15. JSON de Propriedades. (Variante) (Ver observação 2)

## Retorno

Não possui.

## Observações

1. Os parâmetros 7° e 10º esperam o retorno da função "Obter SQL do Editor".
2. O objeto JSON informado no 15º parâmetro deve seguir o padrão abaixo:
&#123;

"Navegação": "true",

"Dica": "Dica para o componente",

"Habilitado": "true",

"Visível": "true",

"Container": "Nome do Componente",

"Editável": "true",

"Formulário de Edição": "formulário",

"Exibir Números dos Dias": "true",

"Destacar Hórario Comercial": "true",

"Destacar Dia Atual": "true",

"Modo de Visualização": "1"

&#125;
