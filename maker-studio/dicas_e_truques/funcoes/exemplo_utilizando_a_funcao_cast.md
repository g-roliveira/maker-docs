---
title: "Exemplo Utilizando a Função CAST"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/funcoes/exemplo_utilizando_a_funcao_cast.htm"
---

# Exemplo Utilizando a função CAST

Segue, abaixo, um exemplo da utilização da função CAST (utilizada para conversão) em todos os locais que aplicamos as funções fluxo_funcao_nome:

1. Crie um formulário e insira um componente Botão.
2. Vincule ao botão do formulário criado um fluxo que defina uma variável na sessão.
3. Na coluna Critério de um campo selecionado no Assistente de Consulta de um outro formulário, defina uma função (ex.:"=:FUNCAO_sessao_teste") que retorne o valor de uma variável de sessão definida por um fluxo.
4. Utilize a função CAST envolvendo a função definida no passo anterior (Ex.: =cast(:FUNCAO_sessao_teste" as integer)).
5. Com o uso da função CAST, é possível ratificar o tipo do valor que a função que obtém a variável de sessão retorna.

![image1243.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe4.png)
