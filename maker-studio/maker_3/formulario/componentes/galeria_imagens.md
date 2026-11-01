---
title: "Galeria de Imagens"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/galeria_imagens.html"
---

# Galeria de Imagem

O componente Galeria de Imagem foi criado para possibilitar a visualização de um conjunto de imagens a partir de uma fonte de dados (tabela) definida pelo usuário.

**Criando a interface principal**

O componente em questão, pode ser encontrado na nova paleta de objetos do MAKER 3 (Imagem 1), ao abrir de um formulário já criado, a paleta aparecerá canto direito do Maker e adicione-o.
Observe as imagens 1 e 2, abaixo:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/GalerieDimage.png)

Imagem 1 – Encontrando o Componente Galeria de Imagem na Paleta de objetos do Maker 3.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/GalerieDimageIcon.png)

Imagem 2 – Imagem correspondente ao Componente Galeria de Imagem.

Após seguir os passos mencionados anteriormente, clique com o botão direito do *mouse* no componente, defina na propriedade SQL uma tabela e selecione os campos apresentados que serão atribuídos aos campos: ID, Miniatura e Imagem.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/comp5.png)

Imagem 3 – Tabela criada para armazenar as imagens inseridas na fonte de dados.

**Configurando os elementos associados ao componente**

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/PropriedadesGaleriaDeImagem.png)

Imagem 4 – Propriedades do Componente Galeria de Imagem.

As propriedades do componente Galeria de Imagem serão detalhadas a seguir e são encontradas, ao clicar com botão direito do *mouse* sobre a figura do componente Galeria de Imagem, exibida na Imagem 2:

• SQL: propriedade que permitirá ao usuário apontar para tabela, onde estará os campos requeridos pelo componente;

**Obs.:** Este componente não suporta :: para conversão de dados.

• Campo ID: propriedade que identificará as imagens inseridas na tabela;

• Campo Miniatura: propriedade que armazena uma miniatura da imagem;

• Campo Imagem: propriedade que armazena a imagem em tamanho original;

• Orientação: propriedade que permite ao usuário determinar como o componente poderá ser visualizado no Webrun, podendo escolher entre os valores vertical e horizontal;

• Permitir Upload: propriedade que permite ao usuário fazer o Upload ou não das imagens. Valores deste campo: sim e não;

• Permitir Exclusão: esta propriedade dará o direito ao usuário excluir ou não as imagens já inseridas, os valores deste campo são: sim e não.

**Nota**

Ao efetuar o *upload* de uma imagem, o componente Galeria de Imagens fará a conversão para miniatura e salvará no campo referente a mesma e a imagem original será salva no Campo Imagem.

**Veja a galeria criada a partir da tabela selecionada anteriormente**

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/webrun.png)

Imagem 5 – Componente Galeria de Imagem, executado no Webrun

• A janela de Upload só poderá ser exibida, após clicar com o botão direito do mouse dentro do espaço delimitado no Maker 3.

• Nesta mesma janela (Imagem 5), o usuário também poderá excluir as imagens inseridas ao passar o mouse sobre a mesma, onde será exibido o ícone ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/x.png).

## Evento Ao Selecionar no Galeria de Imagens

No Maker 3.9 é possível executar um fluxo ao Selecionar uma imagem no componente Galeria de imagens.

**- Ao selecionar**

Parâmetros automáticos passados para o fluxo vinculado ao evento:
Todo fluxo de ação associado em qualquer um dos eventos deste componente recebe um parâmetro automático. E para que esse parâmetro seja obtido corretamente pelo fluxo de ação, quando este for executado no Webrun, é necessária a criação de um parâmetros de entrada (no fluxo de ações): ele pode ser chamado de Campo-Chave (nome opcional - correspondendo ao valor da coluna associada à propriedade campo ID do componente.

**Observações:**

• Os formatos de imagem compatíveis com o componente Galeria de Imagem são: .jpeg, .jpg, .png e .bitmap;

• Permitir Exclusão: caso esteja setada como "Sim", o usuário poderá excluí-la. Caso "Não", o ícone não mais será exibido.

____________________________________________________________________________

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
