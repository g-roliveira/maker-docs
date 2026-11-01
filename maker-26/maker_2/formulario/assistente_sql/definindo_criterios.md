---
title: "Definindo critérios"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/assistente_sql/definindo_criterios.htm"
---

Os critérios de pesquisa para a consulta são definidos na coluna Critério. Normalmente são usados sinais e expressões (igual (=), maior (&gt;), menor (&lt;), maior ou igual (&gt;=), menor ou igual (&lt;=), diferente (&lt;&gt;), não é igual (!=), não é maior (!&gt;), e não é menor (!&lt;), like (como), not like (não é como), between (entre), not between (não está entre), in (na lista), not in (não está na lista), is null (nulo) e not is null (não é nulo), acompanhados de números, texto ou subseleções (sub-select). Sobre a criação de subseleções, consulte o item [Adicionando uma subconsulta](adicionando_uma_sub-consulta), do tópico Assistente SQL.

Você pode especificar múltiplos critérios para uma expressão simplesmente usando as colunas Ou...(Or). Estes critérios serão concatenados usando o operador Ou...(Or).

A expressão In (na lista) não funciona quando o retorno é de um fluxo, mas, nas demais expressões, funciona normalmente.

Observações:

1. Ao pressionar a tecla [Tab] na última coluna "Ou", uma nova coluna "Ou" será criada. (Deve-se existir um critério antes de chamar a tabulação).
2. Para construção de filtros com Or, deve-se utilizar a coluna Ou.

![image1220.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1220.jpg)

Usando funções predefinidas em consultas (Or) - Este vídeo exemplifica a utilização de operadores lógicos, neste caso, Or.
