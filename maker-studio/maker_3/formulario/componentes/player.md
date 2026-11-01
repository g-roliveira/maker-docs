---
title: "Player"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/player.html"
---

## Player

O Componente Player tem como funcionalidade reproduzir áudio e vídeo de diferentes resoluções e formatos a partir de uma lista de reprodução usando HTML5. É possível atribuir parâmetros iniciais para o componente que são próprios do HTML5, como: mudo, modo repetição, reproduzir automaticamente e mostrar/ocultar controles. Além destes parâmetros padrões existe também o Modo Repetição de Lista e o parâmetro Deslizante. Os formatos de áudio suportados são *.mp3, *.ogg e *.wav. E os formatos de vídeo suportados são *.mp4, *.ogv e *.webm.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/iconeplayer.png)

As propriedades do componente Player são:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/propriedades_player.png)

**Dica** – Campo destinado para descrição do componente.
**PosicaoX e PosicaoY** – Definem o ponto de ancoragem do componente, se a opção deslizante não estiver habilitada.
**Altura e Tamanho** – São respectivamente a altura e a largura do componente. Se o formato do vídeo não seguir este padrão, a barra de controle não acompanhará o vídeo, mas sim a altura definida no formulário. Se o tipo de mídia for áudio, a altura não irá interferir.
**Visível** – Habilita ou desabilita a visibilidade do componente.
**Habilitado** – Propriedade não suportada.
**Nome** – Parâmetro que serve para nomear internamente o componente.
**Código** – Código interno do componente.
**Tipo de Mídia** – Tipo de mídia que será reproduzida. (Áudio ou Vídeo).
**Reprodução Automática** – Inicia a reprodução assim que formulário é carregado.
**Mostrar Controle** – Exibe/Oculta Controles do player
**Modo Repetição** – Entra em modo de repetição do primeiro item da lista de reprodução.
**Mudo** – Inicia a reprodução sem áudio.
**Deslizante** – Habilita ou desabilita o modo deslizante do componente. Desta forma, você deverá escolher a posição parâmetro seguinte.
**Posição Deslizante** – Define a posição em que o componente ficará se o parâmetro deslizante estiver habilitado.
**URL Mídia** – Lista de mídias que serão reproduzidas.
**Repetir Lista** – Diferente do modo de repetição anterior, esta opção repete todas as URLs presentes na lista.

Utilizando o Player

No Maker, crie um formulário e insira o componentes Player no tamanho desejado.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/player.png)

Nas propriedades, vá em URL Mídia e insira o link externo do vídeo ou do link do servidor (&lt;http://download.softwell.com.br/suporte/videos/espetaculonatureza.mp4&gt; ou webrun/nome_da_musica.mp3) e clique em Adicionar.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/player1.png)

Após criar a lista de reprodução, insira o formulário no Menu Principal e acesse o sistema no Webrun.

Observe como ficará o formulário com o Componente.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/player2.png)
**Observação(ões):**

- É importante verificar se o navegar suporta o formato desejado, pois nem todos os navegadores reproduzem todos os formatos. O usuário necessitará especificar o formato.
- Existem algumas limitações em relação a vídeo e áudio no Player (para mais informações acesse o site &lt;http://www.w3schools.com/html/html5_audio.asp&gt; para áudio e/ou &lt;http://www.w3schools.com/html/html5_video.asp&gt; para vídeo).

____________________________________________________________________________

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
