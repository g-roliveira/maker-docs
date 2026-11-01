---
title: "MultiSelect"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/multiselect.html"
---

## MultiSelect

O componente MultiSelect permite selecionar múltiplas opções dentro de um ComboBox e a partir das suas seleções é informado o seu respectivos valores.

![image123.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/32multiselect.PNG)

### Propriedades do Componente

O componente MultiSelect possui as seguintes propriedades:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/MultiSelectPropriedades.PNG)

- **- Propriedade Lista:**

  ![image1142.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image164.png)

  Uma grade com as colunas:
- - Valor - o valor contido nesta coluna é o valor que será gravado no campo apontado pelo usuário (propriedade Campo do menu suspenso; propriedade Campo, nesse contexto), assim que o usuário selecionar uma das opções no componente;
  - Descrição - o valor contido nessa coluna é o valor que aparece no componente para facilitar a escolha do usuário;
  - O botão OK - clicando sobre ele, a tela fecha e todas as configurações executadas são gravadas;
  - O botão Cancelar - ao clicar sobre ele, todas as configurações feitas, desde o momento em que a tela foi aberta, serão desconsideradas e a tela é fechada.

  **- Propriedade Valores:**

  Aplicados aos componentes [Lista](lista) e [Opções](opcoes) - esta propriedade possui a mesma função da propriedade descrita pela propriedade Lista.

### Eventos do Componente

O componente MultiSelect possui os seguintes eventos:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/MultiSelectEventos.PNG)

**- Ao Selecionar:** Este evento executará o fluxo informado quando uma opção for selecionada.
**- Ao Remover:** Este evento executará o fluxo informado quando uma opção for removida.

Ambos eventos possuem parâmetro automático. A função associada ao fluxo receberá como primeiro parâmetro a opção selecionada/removida.

________________________________________________________________________________________

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
