---
title: "Lista Dupla"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/componentes/lista_dupla.htm"
---

# image476.gif   Lista Dupla

O componente Lista Dupla é utilizado para suporte à relação de cardinalidade "um para muitos" entre tabelas. Devem ser envolvidas no processo de configuração do componente três tabelas: duas contendo identificadores únicos (chaves primárias) e uma terceira armazenando a relação das duas anteriores por meio de seus identificadores (chaves estrangeiras).

Neste componente é possível selecionar um ou mais registros ao mesmo tempo para serem inseridos na tabela que relaciona as tabelas que contêm os identificadores únicos.

O componente só é manipulável se o formulário estiver em modo de inserção ou alteração:

![image321.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image321.jpg)

Todos os componentes possuem Propriedades e Eventos. Para conhecê-los [clique aqui](../propriedades_e_eventos).

Observações:

1. Não é possível selecionar uma conexão adicional a este componente.
2. Este componente não registra Log, ou seja, não aparecerá nos Logs do webrun as ações de inserções, alterações ou deletações deste componente (Lista Dupla).
3. O número de vezes que o evento será executado está relacionado em quantos registros foram selecionados para inserção ou remoção ao mesmo tempo;
4. Todo fluxo de ação, uma vez vinculado a qualquer um dos eventos do componente Lista Dupla, recebe dois parâmetros automáticos. Para que esses parâmetros sejam obtidos corretamente pelo fluxo de ação, quando executados no Webrun, é necessária a criação de dois Parâmetros de Entrada: o primeiro parâmetro pode ser chamado de Campo Chave (nome opcional - correspondendo ao código do registro (ou registros) que participará do evento); e o segundo parâmetro pode ser chamado de Campo Lista (nome opcional - correspondendo à descrição do registro (ou registros) que participará do evento).
5. Caso um registro (nome do registro) contido na área direita ou esquerda do componente exceda a largura de uma das áreas, basta posicionar o ponteiro do mouse sobre o registro para que apareça um hint (dica) demonstrado o nome completo do registro.
6. Este recurso está disponível apenas para a versão Enterprise.
7. O hint (Dica) só será exibido ao passar o mouse sobre a moldura que envolve o componente.

Acesse o exemplo [Utilizando o componente Lista Dupla](../../../dicas_e_truques/componente/utilizando_o_componente_lista_dupla_).

Utilizando Lista dupla - Esse vídeo exemplifica a utilização do componente Lista Dupla.

Utilizando as funções: Lista Dupla - Obter seleções lista selecionados e Lista Dupla - Obter seleções lista principal. - Esta videoaula demonstra a utilização das funções Lista dupla - Obter seleções lista selecionados e Lista Dupla Obter seleções lista Principal.
