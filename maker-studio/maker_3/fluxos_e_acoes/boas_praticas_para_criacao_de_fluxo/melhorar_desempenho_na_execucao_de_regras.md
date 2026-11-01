---
title: "Melhorar desempenho na execução de regras"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/fluxos_e_acoes/boas_praticas_para_criacao_de_fluxo/melhorar_desempenho_na_execucao_de_regras.htm"
---

Muitas vezes os sistemas são desenvolvidos sem a preocupação com o desempenho da aplicação, porém este é um ponto importante em se tratando de aplicações corporativas onde escalabilidade e confiabilidade são atributos imprescindíveis.

Pode-se melhorar a performance dos fluxos de diversas formas, neste tópico serão mostrados algumas das principais modificações que podem ser aplicadas ao desenvolvimento para garantir um melhor desempenho da aplicação.

Substituir função concatenação -> Append

Às vezes existe a necessidade de concatenar strings em nossos sistemas. Para concatenações simples, pequenas, não seriam notórias a diferença em usar uma ou outra função. Em uma situação onde seria necessário concatenar 100000000 caracteres por diversas vezes no mesmo fluxo, utilizando a função de Concatenação, todos os caracteres seriam carregados em memória, podendo causar uma lentidão ou travamento do sistema. Utilizando a função Append, ao invés de sempre carregar a string na memória, ele criará um apontador para aquela string, sendo somente alocado em memória o índice que foi criado para a mesma.

Abaixo, temos um exemplo de como realizar a troca das funções Concatenação para Append:

- Dentro do montador de expressões clicamos em cima da função Concatenação, e na barra de propriedades clicamos em Trocar item, conforme imagem abaixo:

![img10201.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image407.png)

- Digite o nome da função que deseja para substituir a antiga (Append) e clique em Salvar:

![img10202.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image408.png)

- A função Append, assim como Concatenação, pode ter n parâmetros, por tanto não haverá problemas de "compatibilidade" entre as funções no caso da troca:

![img10203.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image449.png)

Utilizando Try-Catch e funções de Semáforo

Uma exceção é um sinal que indica que algum tipo de condição excepcional que ocorreu durante a execução do programa. Assim, exceções estão associadas a condições de erro que não tinham como ser verificadas durante a compilação de um fluxo.

A utilização das funções Monitorar Exceções (TRY) e Capturar Exceções (CATCH) tem por objetivo evitar essa quebra, interrupção de execução de uma determinada regra e evitando travamentos e perda de desempenho no sistema.

Quando utilizamos semáforo evitamos a condição de concorrência dentro da aplicação, porém caso ocorra uma falha no meio da execução do processo que o obtém, a execução da regra será interrompida e o semáforo não será liberado, ocasionando um travamento da aplicação. Por isso uma das recomendações para melhoria de desempenho é a utilização de semáforos com try-catch, pois assim quando houver uma situação semelhante a supracitada, tais interrupções não ocorrerão. Veja o exemplo abaixo:

![img10204.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image450.png)

Desta forma se ocorrer alguma falha na execução da regra o semáforo não ficará travado, pois a exceção será capturada e logo em seguida liberando o semáforo.

Agendar execução de fluxo sem pai

A utilização desta função para agendar a execução de regras ajuda a melhorar o desempenho da aplicação, pois evita que seja formada pilha de chamadas, consumindo menos memória pelo fato de que o fluxo agendado não tem nenhum vinculo com o fluxo chamador.
