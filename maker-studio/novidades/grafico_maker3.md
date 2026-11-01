---
title: "Gráfico Maker 3.8"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/grafico_maker3.html"
---

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icongrafico.png)

O Maker 3.8 traz, de forma nativa, integração com a API do GoogleCharts contendo uma variadade de customizações.

### As propriedades do componente Gráfico Maker 3.8 são:

- **Altura :** Esta propriedade determina a altura do componente.
- **Código :** Código interno do componente.
- **Dica :** Campo destinado para descrição do componente.
- **Habilitado :** Habilita ou desabilita a usabilidade do componente.
- **Nome :** Parâmetro que serve para nomear internamente o componente.
- **PosicaoX :** Determina a posição do componente em relação à esquerda do formulário.
- **PosicaoY :** Determina a posição do componente em relação ao topo do formulário.
- **Tamanho :** Esta propriedade determina a largura do componente.
- **Visível :** Habilita ou desabilita a visibilidade do componente.
- **Título do Gráfico :** Título que será exibido no componente Gráfico.
- **Cor de Fundo :** Define uma cor de fundo para o componente Gráfico.
- **Cor do Gráfico :** Cor das barras ou linhas do componente gráfico (no gráfico de Série "Pizza" essa propriedade será ignorada).
- **Exibir Legenda :** Apenas um valor lógico que exibirá ou ocultará a legenda do gráfico.
- **Posição da Legenda :** Posição em que a legenda do componente será exibida, o defaut será sempre a direita.
  Observação: (Somente no "Gráfico do tipo Pizza" é suportada a posição a esquerda).
- **Título do Eixo Y :** Define o nome do título do eixo Y será exibido.
- **Título do Eixo X :** Define o nome do título do eixo X será exibido.
- **Série :** Define o nome, o tipo de gráfico estes disponiveis para uso são: (Barra, Barra Horizontal, Linha, Área, Área Horizontal, Pizza, Gantt e Gauge), a consulta SQL e os campos do gráfico.

## O componente gráfico pode ser criado através de 2 formas:

### Nova Propriedade - "Série"

- O Gráfico pode ser criado através da nova propriedade "Série", possibilitando a criação de múltiplas séries, relacionando-se com os dados inseridos manualmente.
   Esta propriedade, consiste o "Nome da Série" (Nome da legenda que será aprensentado em tela, ela substitui um "alias" que seria feito no SQL), e o "Tipo" (tipo do gráfico, a consulta SQL e os campos do gráfico.

  A consulta SQL deve ser feita manualmente selecionando 3 campos: etiqueta, valor e cor (opcional).

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sqlgrafico.png)

  Depois de fazer manualmente o SQL e selecionar o tipo do gráfico, ao clicar no botão "Modificar Campos" a ordem dos campos devem ser selecionadas respeitando a sua ordem respectivamente.
- **Campo Etiqueta:** Campo onde se espera os dados que seram a referência do gráfico. Ex: Setores, meses, produtos.
- **Campo Valor Y :** Campo onde se espera os dados do gráfico. Ex: Quantidade de funcionários, produtividade em determinado mês, quantidade de vendas de um determinado produto.
- **Campo Cor:** Campo onde deve ser selecionado a cor da representação gráfica do "Campo Valor Y".(Caso nulo a cor padrão será Azul Petróleo)

Observações :

Essa informações só são válidas para os tipos Barra, Barra Horizontal, Lista e Área e Área Horizontal. O tipo GANTT e GAUGE tem um comportamente diferente dos outros, [mais informações aqui.](#GANTT )

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sqlgrafico10.png)

No Webrun o Gráfico irá se apresentar da seguinte forma.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sqlgrafico11.png)

### Função "Gráfico - Novo"

- O Gráfico pode ser criado através da função "Gráfico - Novo", segue o exemplo:

  ![Foto do gráfico no webrun](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sqlgrafico5.png)

  Segue a lista de parâmetros:

  - Aba: Nome da aba em que o componente deve ser criado.
  - Posição X: Posição X onde o componente irá ficar em relação ao formulário.
  - Posição Y: Posição Y onde o componente irá ficar em relação ao formulário.
  - Altura: Altura em relação ao formulário.
  - largura: Largura em relação ao formulário.
  - Visivel : Propriedade que define se o componente deve estar vísivel ou não.
  - Habilitado : Propriedade que define se o componente deve estar habilitado ou não.
  - Nome do Componente: Nome do componente Gráfico.
  - Consulta SQL: Consulta que irá gerar o gráfico(Este parâmetro deve ser passado o select da consulta como "Letras").
  - Lista de Valores: Passar uma lista de parâmetros como já foi mensionado, esse parâmetro tem prioridade sobre a consulta SQL.
  - Título (Opcional): Título do gráfico.
  - Título do Eixo Y (Opcional): Título do Eixo Y do gráfico.
  - Título do Eixo X (Opcional): Título do Eixo X do gráfico.
  - Tipo: Tipo de série do gráfico. Tipos suportados: Barra, Área, Linha, Pizza, Gantt, Barra Horizontal, Área Horizontal.A consulta SQL e a passagem de parâmetros na "Lista de Valores" no tipo Gantt tem exceções. [(Consultar exceções aqui)](#GANTT)
  - Exibir Legenda: Propriedade em que a legenda pode ser exibida ou não.(true ou false).
  - Posição da Legenda: Posição da legenda em relação ao gráfico.Posições suportadas: Esquerda, Direita, Topo, Baixo.
  - Cor do fundo: Cor do fundo do gráfico. ( É obrigatório ).
  - Cor da Série: Cor da série do gráfico. ( É obrigatório ).

  No Webrun o Gráfico irá se apresentar da seguinte forma.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sqlgrafico14.png)

### Eventos

O Componente Gráfico 3.8 possui 2 eventos (Ao Iniciar, Ao Selecionar):

Ao Selecionar:

No evento ao selecionar um fluxo é acionado, o mesmo recebe 3 parâmetros automáticos, todos esses valores serão passados através da coluna selecionada. são eles:

- 1° Nome da coluna do valor passado pela consulta
- 2° O valor da coluna
- 3° Nome da etiqueta

A consulta do gráfico do tipo "Gannt" tem que receber os seguintes parâmetros:

Campo

Tipo

Id da Tarefa

Letras

Nome da Tarefa

Letras

Id do Grupo

Letras (Opcional)

Data Início

Data

Data Fim

Data

Porcentagem Realizada

Número

Dependências

Letras

- A consulta do gráfico do tipo "Área", "Barra", "Linha", "Pizza", "Barra Horizontal" e "Área Horizontal" tem que receber os seguintes parâmetros:

  | Campo | Tipo |
  | --- | --- |
  | Campo Etiqueta | Letras |
  | Campo Valor Y | Inteiro |
  | Campo Cor | Cor |

- A consulta do gráfico do tipo "Gauge" tem que receber os seguintes parâmetros:

  | Campo | Tipo |
  | --- | --- |
  | Campo Etiqueta | Letras |
  | Campo Valor | Inteiro |
- Obs: Na propriedade "Campos" do gráfico "Gauge" além dos parâmetros "Campo Etiqueta" e "Campo Valor " os demais parâmetros devem ser inseridos pelo usuário:

  Campo

  Tipo

  1ª Faixa - Início

  Inteiro

  1ª Faixa - Final

  Inteiro

  2ª Faixa - Início

  Inteiro

  2ª Faixa - Final

  Inteiro

  3ª Faixa - Início

  Inteiro

  3ª Faixa - Final

  Inteiro

  Valor Mínimo

  Inteiro

  Valor Máximo

  Inteiro

## **Usando Gráfico Maker 3.8**
