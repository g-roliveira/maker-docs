---
title: "Organograma"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/organograma.html"
---

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orgicon.png)

O componente Organograma tem a funcionalidade de criar um gráfico de estrutura hierárquica e não somente isso, também pode ser usado como um representante gráfico para agrupamento e que representa simultaneamente os diferentes elementos do grupo e as suas ligações.

### As propriedades do componente Organograma são:

- **Dica :** Campo onde deve ser atribuida informações sobre a dica do componente .
- **PosicaoX e PosicaoY :** Definem o ponto de ancoragem do componente, se a opção deslizante não estiver habilitada.
- **Altura e Tamanho :** São respectivamente a altura e a largura do componente.
- **Visível :** Habilita ou desabilita a visibilidade do componente.
- **Habilitado :**  Habilita ou desabilita a usabilidade do componente.
- **Nome :** Parâmetro que serve para nomear internamente o componente.
- **Código :** Código interno do componente.
- **SQL :** Consulta que irá gerar a estrutura do componente organograma.
- **Raiz :** Nome da raiz do organograma.
- **Estrutura :** Propriedade que irá gerar a estrutura do componente organograma, caso um SQL sejá definido essa propriedade é ignorada.
- **Permitir Contrair :** Define se os nós do componentes podem ser contraidos.
- **Renderizar HTML :** Define se os campos do componente organograma irão renderizar tags HTML.
- **Tamanho do Item :** Define o tamanho da fonte dos itens do componente organograma.

#### O Organograma pode ser criado de diversas formas, tanto pela sua propriedade "Estrutura", por consulta SQL e pela função "Organograma - Novo".

- Estrutura

  Na propriedade estrutura uma tela de edição do organograma é aberta, onde na mesma é possivel a criação de nós e agrupamentos, a raiz dessa estrutura é definida através da propriedade "Raiz".

  Observação: Ao selecionar o nome da raiz pela primeira vez o mesmo irá permanecer sempre, mesmo que seja alterado futuramente, esse comportamente é normal do componente e caso o desenvolvedor queira modificar o nome da raiz o componente deve ser excluido.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orgicon10.png)

  No webrun o Organograma irá se apresentar da seguinte forma.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orgicon11.png)
- Consulta SQL

  A consulta SQL do Organograma deve ser feita baseada na lógica da sua estrutura, selecionando primeiro o campo pai e depois o campo filho.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orgicon12.png)

  Lembrando que ao criar o formulário de dados que irá popular o Organograma os campos Pai e Filho não podem ser obrigatorios pois
  o primeiro nó do Organograma deve ter o Pai nulo.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orgicon13.png)

  Ao registrar os dados do organograma o nome do Pai de cada nó deve ter exatamente o mesmo nome de como foi registrado de acordo com a forma hierarquica.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orgicon14.png)

  No webrun o Organograma irá se apresentar da seguinte forma.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orgicon15.png)
- Função "Organograma - Novo"

  Com essa função é possivel criar um organograma dinâmico de acordo com a lógica do desenvolvedor.

  ![imagem organograma pela estrutura](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orgicon16.png)

  Os parâmetros esperados são:

  - Aba: Nome da aba em que o componente deverá ser criado.
  - Posição X: Posição X em relação ao formulário.
  - Posição Y: Posição Y em relação ao formulário.
  - Largura: Largura do componente Organograma.
  - Altura: Altura do componente Organograma.
  - Dica: Dica exibida no componente Organograma.
  - Nome do Componente: Nome do componente Organograma
  - Consulta SQL: Consulta que irá gerar a estrutura do componente Organograma.
  - Contrair: Determina se a funcionalidade de contrair do organograma vai estar habilitada ou não.
  - Habilitado: Habilita ou desabilitaa usabilidade do componente Organograma.
  - Visível: Habilita ou desabilita a visibilidade do componente Organograma.
  - Renderizar HTML: Determina se tags HTML poderão ser renderizadas na estrutura do componente Organograma ou não.
  - Tamanho do Item: Tamanho da fonte do componente Organograma, sendo elas: Pequeno, Médio ou Grande.

No webrun o Organograma irá se apresentar da seguinte forma.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/orgicon17.png)

### Eventos do Componente Organograma

O Componente Organograma possui 2 eventos (Ao Expandir, Ao Clicar):

Ao Expandir:

Fluxo será executado ao expandir um filho no Organograma, nenhum parâmetro automatico é passado nesse evento.

Ao Clicar:

Nesse evento um fluxo é executado passando como parâmetro automático o conteúdo da célula que foi clicada.

## **Utilizando Componente Organograma**
