---
title: "Gráfico (Google Charts)"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/graficomaker3.html"
---

-

## Gráfico (GoogleCharts)

O componente Gráfico (GoogleCharts) tem como funcionalidade a construção de um gráfico baseado em uma consulta SQL ou através de fluxo.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icongrafico.png)

Propriedades

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/GraficoProprieadades.png)

- Dica

Campo destinado para descrição do componente.

- Posição X e Posição Y

Definem o ponto de ancoragem do componente, com relação ao formulário.

- Altura e Tamanho

São respectivamente a altura e a largura do componente.

- Visível

Define a visibilidade do componente.

- Habilitado

Habilita ou desabilita o componente.

- Nome

Parâmetro para nomear internamente o componente.

- Código

Código interno do componente.

- Título do Gráfico

Título que será exibido no componente Gráfico.

- Cor de Fundo

Cor do fundo do componente gráfico.

- Cor do Gráfico

Cor das barras ou linhas do componente gráfico (Caso o componente contenha várias séries ou o seja do tipo Pizza, esta propriedade será ignorada).

- Exibir Legenda

Define se o componente exibirá uma legenda.

- Posição da Legenda

Posição em que a legenda do componente será exibida (A Legenda na posição esquerda só é exibida caso o gráfico seja do tipo Pizza).

- Série

Interface com suporte a múltiplas séries.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/GraficoInterface.png)

Nesta tela contém os seguintes campos:

- **Nome:** Será definido um nome para a série.
- **Tipo:** Será definido o tipo da série.
- **Fonte de Dados (Conexão):**  Será definida a conexão para o SQL da série (caso não seja definida a mesma utilizará a atual)
- **Tabelas:** selecionar uma tabela para que o sql seja criado.
- **SQL:** Será definida a consulta para a série.

**Obs.:** Este componente não suporta :: para conversão de dados.

- **Campos da consulta :** Seleção de campos para criação do gráfico (para as alterações entrarem em vigor é necessário clicar em "Salvar/Visualizar").

**Obs.:** É obrigatório o preenchimento de todos os campos (Campo Etiqueta, Campo Valor Y,...), porém ao utilizar múltiplas séries o campo etiqueta será o da primeira série;O campo cor funciona apenas para os tipos Barra, linha e área e apenas para uma série. Caso não seja definida a coluna cor o mesmo irá utilizar a cor da propriedade "Cor do gráfico". A cor do banco deverá ser retornada em hexadecimal(ex.:#AB129C).

- **Visualização :** Será exibido o o componente para melhor entendimento de como o mesmo ficará no navegador.

- Título do Eixo Y

Define um titulo para o eixo Y.

- Título do Eixo X

Define um titulo para o eixo X.

- Exibir Animação

Habilita ou Desabilita a animação do gráfico.

- Duração (Animação)

Define o tempo de duração (em milissegundos) da animação do gráfico.

- Área Útil (%)

Define qual a porcentagem de exibição do grafico em relação ao tamanho do mesmo.

Eventos

- Ao Selecionar

Evento que será executado ao selecionar algum dado no gráfico (serão passados 3 parâmetros automáticos: Nome da série, Valor do Eixo Y, Valor do Eixo X). [![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/Grafico_Exemplo_Ao_Selecionar.FRZ)

Caso o gráfico seja do tipo "Gantt" (serão passados 3 parâmetros automáticos: Vazio (Reservado), ID da Tarefa (Letras), Descrição da Tarefa)

- Ao Iniciar Gráfico

Evento para definir os dados para do gráfico (o mesmo terá prioridade sobre a consulta). O fluxo associado a este evento deverá retornar uma lista com dois parâmetros, o primeiro parâmetro uma lista com os cabeçalhos e os segundo parâmetro uma lista contendo uma lista com os respetivos dados (eixo X e Y).[![Download do Exemplo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/icon_download.png)](http://download.softwell.com.br/suporte/exemplos/frz/Grafico_Exemplo_Ao_Iniciar.FRZ)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/GraficoAoIniciar.png)

____________________________________________________________________________

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
