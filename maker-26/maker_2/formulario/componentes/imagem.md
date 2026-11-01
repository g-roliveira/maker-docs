---
title: "Imagem"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/componentes/imagem.htm"
---

# image55.jpg   Imagem

Com este componente torna-se possível exibir imagens no formulário. Este componente possui quatro Propriedades que controlam a forma de exibição da imagem:

- associe a um campo da origem do formulário para armazenar uma imagem (podendo ser uma foto) por meio da propriedade Campo;
- associe a um campo da origem do formulário para armazenar uma imagem (da digital, utilizando um leitor biométrico) por meio da propriedade Impressão digital;
- associe a uma imagem fixa, por meio da propriedade Imagem;
- Associe a uma imagem fixa, informado o endereço e nome na Web, por meio da propriedade URL.

Estando o Formulário em modo de inclusão ou alteração:

- Ao posicionar o mouse sobre o componente, aparecem dois botões na parte inferior direita dele. Com relação ao:
- - primeiro botão - ao receber um clique, aparece a tela Webrun Digital Capture. Nela consta a área da imagem capturada por uma webcam (instalada no computador em que está sendo usado o Webrun) e o botão Capturar Imagem. Ao clicar nele, será capturada a imagem que estava sendo transmitida pela webcam. Por fim, é necessário fechar a tela para que a imagem capturada apareça no componente Imagem;
  - segundo botão - ao receber um clique, aparece a tela Ampliar imagem (na janela que envolve esta tela pode-se utilizar o botão Maximizar da barra de título, a fim de que a imagem seja visualizada em tamanho maior).
  - tendo sido preenchida a propriedade [Campo](../propriedades_e_eventos#campo) deste componente no Maker, ao ser efetuado um clique sobre ele, aparecerá a tela Escolha a imagem, na qual consta:
  - - campo Caminho da Imagem - local no qual deve ser informado manualmente o caminho da imagem que será armazenada no campo;
    - botão Procurar - ao receber um clique, aparece a tela Escolher Arquivo, a partir da qual se pode escolher a imagem (caminho do arquivo) que será armazenada no campo;
    - botão Modificar - tendo sido definido o local em que se encontra a imagem (campo Caminho da Imagem), ao receber um clique, a imagem é carregada no componente, mas a sua gravação no campo só se efetiva após a gravação da inserção ou da alteração do registro no formulário;
    - botão Webcam - ao receber um clique, aparece a tela Webrun Digital Capture. Nela consta a área da imagem capturada por uma webcam (instalada no computador em que está sendo usado o Webrun) e o botão Capturar Imagem. Ao clicar nele, será capturada a imagem que estava sendo transmitida pela webcam. Por fim, é necessário fechar a tela para que a imagem capturada apareça no componente Imagem;
    - botão Nenhuma - remove a imagem que estava carregada no componente.

Caso exista algum fluxo de ação associado ao evento [Ao Clicar](../propriedades_e_eventos#ao_clicar) do componente, a tela citada no período anterior não será exibida.

### Associando o caminho da imagem na consulta SQL

A partir da versão 2.6.2.7, é possível acrescentar o caminho relativo de uma imagem em uma consulta SQL e associá-la ao componente Imagem, desta forma, o Webrun buscará a imagem no caminho descrito. Ex.:

Para o SQL abaixo:

Select

   fr_acao.aco_codigo,

   fr_acao.aco_nome,

   'Skins/Default/advanced_query.gif' As "Imagem"

From

   fr_acao

Se associarmos o componente Imagem ao campo "Imagem" do SQL acima, o Webrun exibirá a imagem 'advanced_query.gif' relativa ao seu contexto.

Observações:

1. As imagens capturadas através da Webcam são armazenadas na pasta Upload no contexto do Webrun.
2. A propriedade Descrição não tem efeito para o componente Imagem.
3. Para que a imagem fique atrás de outro componente clique com o botão direito do mouse sobre o componente Imagem e em Propriedade selecione a opção Tipo de Exibição como Nenhum e, em seguida, selecione a opção Controles e clique em Trazer para frente.
4. Quando um componente imagem está vinculado a um campo não é possível definir seu modo de exibição, sendo que por padrão o modo de exibição será "Estendido”.
5. Não é possível obter o valor de um campo Imagem e atribuir diretamente a um componente imagem, pois o valor gravado no banco é do tipo binário, assim sendo necessário que o valor seja guardado em um arquivo, como mostra o [exemplo](../../../dicas_e_truques/componente/alterando_o_valor_do_componente_imagem_sem_vinculo_ao_banco).
6. O componente imagem é um componente que não recebe foco.

Todos os componentes possuem Propriedades e Eventos. Para conhecê-los [clique aqui](../propriedades_e_eventos).
