---
title: "Como Utilizar a Função Importar Conteúdo da Folha Estilo com Tabela Criada Via Fluxo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/funcoes/Como_Utilizar_a_Funcao_Importar_conteudo_da_folha_estilo_com_tabela_criada_via_fluxo.htm"
---

Função de importação de conteúdos referentes a Folha Estilo por meio de Fluxo.

1. Crie um novo fluxo;
2. Crie três variáveis do tipo letras: Tabela, Linha e Coluna para armazenar as informações referente a tabela que será criada;

![img22115.JPG](https://suporte.softwell.com.br/Manual/Maker2_6/img22115.JPG)

3. Adicione um objeto [Processamento](http://ares/manual2.6/maker_2/fluxos_e_acoes/objeto_processamento.htm), ative o [Montador de Expressões](http://ares/manual2.6/maker_2/fluxos_e_acoes/montador_de_expressoes.htm) e selecione a Função Importar conteudo da folha estilo;

![img22116.JPG](https://suporte.softwell.com.br/Manual/Maker2_6/img22116.JPG)

4. Adicione outro objeto Processamento , ative o Montador de Expressões e selecione a Função Tabela – Criar tabela em uma moldura;

![img22117.JPG](https://suporte.softwell.com.br/Manual/Maker2_6/img22117.JPG)

5. Adicione outro objeto Processamento, ative o Montador de Expressões e selecione a Função Tabela – Inserir linha em uma tabela e associar a variável Linha e no parâmetro tabela associar a variável Tabela criada inicialmente;

![img22118.JPG](https://suporte.softwell.com.br/Manual/Maker2_6/img22118.JPG)

6. Adicione outro objeto Processamento, ative o Montador de Expressões e selecione a Função Tabela – Inserir célula em uma linha, associar a variável Coluna e no parâmetro linha associar a variável Linha criada inicialmente;

![img22119.JPG](https://suporte.softwell.com.br/Manual/Maker2_6/img22119.JPG)

7. Adicione outro objeto Processamento, ative o Montador de Expressões e selecione a Função Tabela – Alterar estilo do elemento. No primeiro parâmetro associar a o elemento da tabela a ser alterado (Coluna) e no segundo parâmetro passar o nome da nova folha de estilo chamado no primeiro processamento (exemplo1), e Associar o resultado tambem a variavel coluna para que esta seja atualizada.

![img22120.JPG](https://suporte.softwell.com.br/Manual/Maker2_6/img22120.JPG)

8. Ao final da inserção dos processamentos o fluxo fica da seguinte forma:

![img22121.JPG](https://suporte.softwell.com.br/Manual/Maker2_6/img22121.JPG)

9. Este fluxo deverá ser salvo na camada de cliente e ser associado no evento “ao entrar” do formulário desejado.
