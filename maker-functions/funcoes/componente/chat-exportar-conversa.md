---
title: "Chat - Exportar Conversa"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente

## Descrição

Exporta uma conversa do usuário logado com outro usuário/grupo do chat.

## Parâmetro(s)

1. Componente Chat.
2. ID do Usuário/Grupo (Inteiro).
3. ID do 2º parâmetro é um grupo? (Lógico).
4. Formato de Exportação. (Letras) (Ver observação 3)
5. Ordem de Exportação das Mensagens (0: antigas para novas, 1: novas para antigas). (Inteiro)
6. Layout da página (de 1 a 6, onde 1 é A1 e 6 é A6). (Inteiro)
7. Rotacionar Página? (Lógico)
8. Estilo da Tabela (0: simples, 1: escuro). (Inteiro)
9. Bordas na Tabela? (Lógico)
10. Data Inicial. (Data)
11. Data Final. (Data)

## Retorno

Não possui.

## Observações

1. As datas nos 10º e 11º parâmetros podem ser nulas. Se a data inicial e a data final forem nulas, todo o histórico será exportado. Se somente a data final for nula, todas as mensagens da data inicial até o final serão exportadas.
2. Após o processamento, o download da conversa exportada será iniciado automaticamente.
3. O dado passado no 4º parâmetro pode ser do tipo PDF.
