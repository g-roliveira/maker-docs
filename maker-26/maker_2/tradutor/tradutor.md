---
title: "Tabela de Tradução"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/tradutor/tradutor.htm"
---

Este recurso é usado para a internacionalização (tradução) de todas as expressões que foram utilizadas para nomenclar formulários (propriedade Nome do Formulário das telas dos Assistentes de criação de Formulários ou Definição de Formulário), componentes contidos em formulários (propriedade Descrição), menus do projeto e os itens (propriedade Lista/Valores) do componente Lista Fixa.

A tela Tabela de Tradução é acionada pelo botão Tradutor da Barra de Ferramentas do Maker.

![image690.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image690.jpg)

A tela possui as seguintes opções:

- ![localizar](https://suporte.softwell.com.br/Manual/Maker2_6/image772.gif) - ao clicar neste botão, aparece a tela Localizar Texto, a partir da qual é possível informar o valor que será localizado na coluna que estiver com o foco do cursor. Quando o texto é localizado, a coluna fica na cor azul-escuro;
- ![atualizar](https://suporte.softwell.com.br/Manual/Maker2_6/image773.gif) - ao clicar neste botão, a grade da tela é atualizada com todas as novas nomenclaturas de formulários e descrições de componentes de formulários que foram configuradas no projeto. Durante o processo de atualização, fica habilitada a barra de progresso Atualizando a tabela de tradução... na parte inferior central da tela;
- ![sugerir](https://suporte.softwell.com.br/Manual/Maker2_6/image774.gif) - este botão possui duas opções para a execução da tradução: clicando sobre a área principal ou selecionando o Tipo de Tradução (após escolher o tipo, é executa a tradução imediatamente). Ao clicar neste botão, o Maker questionará ao usuário se ele está de acordo com a exclusão de todas as mensagens que foram traduzidas anteriormente para a linguagem selecionada na caixa de seleção Traduzir para. Caso o usuário:
- - Esteja de acordo, o processo de tradução se baseará na escolha feita no Tipo de Tradução para sugerir, na coluna Texto Traduzido, a tradução do texto de cada registro da coluna Texto Original, ambas são colunas da grade. Há ainda a possibilidade da escolha de um outro idioma para servir de base para a tradução, ativando Idioma Referência e, em seguida, selecionando um idioma na caixa de seleção Traduzir de. Sendo utilizada esta última opção, então o Maker considerará a coluna Texto Referência como base para a execução da tradução;
  - Caso não esteja de acordo, não será executada nenhuma ação.

O botão permite selecionar o Tipo de Tradução quando clicamos no botão conjugado. Este abrirá um menu com duas opções: Tradução Off-line e Tradução On-line. Se for escolhida a opção:

- Tradução Off-line -  o Maker se baseará nos arquivos locais (contidos na estrutura de pastas do Maker) para sugerir traduções;
- Tradução On-line - esta funcionalidade está indisponível no momento.

- Traduzir para - este componente mostra todos os idiomas que foram selecionados na propriedade Idiomas do menu suspenso [Propriedades e Eventos da Área de Trabalho](../propriedades_e_eventos_da_area_de_trabalho) do Maker.
- Idioma Referência - ativando esta opção, é habilitada a caixa de seleção Traduzir de (abaixo da caixa de seleção Traduzir para) e é criada uma nova coluna na grade da tela com a opção escolhida na caixa de seleção (considerar neste item a explicação para o botão Sugerir).
- Grade da tela - contém as colunas que estão sendo consideradas pelo processo de tradução.
- - Coluna Texto Original - caso não esteja ativa a opção Idioma Referência, os dados contidos nesta coluna serão considerados como idioma de referência no processo de tradução.
  - Coluna Texto Referência - caso esteja ativa a opção Idioma Referência, os dados contidos nesta coluna serão considerados como idioma de referência no processo de tradução, trabalhando juntamente com a opção Traduzir de, ativando a coluna Texto Traduzido (esta coluna apresentará os registros em branco para receber as sugestões da tradução).
  - Coluna Texto Traduzido - esta coluna sempre receberá as sugestões da tradução. Caso esteja marcada a opção Idioma Referência, os dados contidos nesta coluna serão considerados como Texto Referência no processo de tradução.
  - Coluna Status - contém opções para determinação do estado em que o registro se encontra. São elas:
  - - Não Traduzido - informa que o registro ainda não foi traduzido. Só é possível marcar essa opção se a tupla que representa o idioma para qual se quer traduzir a expressão estiver em branco;
    - Traduzido Manualmente - informa que o registro foi traduzido manualmente;
    - Traduzido Automaticamente - informa que o registro foi traduzido pela ação executada pelo botão Sugerir;
    - Precisa Revisar - informa que é necessária a revisão da tradução do registro;
    - Concluído - informa que o processo de tradução foi concluído para o registro, não sendo necessária mais nenhuma modificação.
  - Botão Editar Registro - localizado no canto esquerdo inferior da tela. Ao clicar neste botão, será modificado o estado do registro que estiver selecionado na grade da tela para o estado de edição.
  - Botão Confirmar - localizado no canto esquerdo inferior da tela. Ao clicar neste botão, será confirmada e gravada a alteração feita em um registro contido na grade da tela.
  - Botão Cancelar - localizado no canto esquerdo inferior da tela. Ao clicar neste botão, será cancelada a inclusão ou alteração feita em um registro contido na grade da tela.
  - Botão Novo - ao clicar neste botão, é inserido um novo registro na grade da tela permitindo a entrada manual de dados para a tradução.
  - Botão Remover - ao clicar neste botão, será removido o registro com foco na grade da tela.
  - Botão Bloquear - ao clicar neste botão, será bloqueada a possibilidade de alteração do registro contido na grade da tela que estiver com o foco do cursor. Uma vez bloqueado o registro, este não será considerado em posteriores traduções, sendo necessário, neste caso, o desbloqueio. Deve-se observar a tonalidade cinza por todo o registro;
  - Botão Fechar - ao clicar neste botão, a tela Tabela de Tradução será fechada.

Observações:

1. Para que as novas traduções e alterações sejam visualizadas no Webrun, é necessário reiniciar o servidor de aplicações.
2. Este recurso está disponível para a versão Enterprise.

Utilizando Tradutor - Esse exemplo demonstra a utilização do Tradutor para internacionalizar o projeto.
