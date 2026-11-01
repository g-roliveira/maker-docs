---
title: "Áudio/Vídeo Conferência - Enviar Stream de Webcam"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_audio_videoconferencia/audio_video_conferencia_enviar_stream_de_webcam.htm"
---

Descrição:

Faz stream de uma webcam ou outro qualquer dispositivo de captura instalado no computador cliente para um servidor de Áudio/Vídeo Conferência que siga o padrão Flash Media Server.

Parâmetros:

1. Host ou IP Servidor Flash Media Server;

2. Identificador do Stream. Exemplo: video;

3. Moldura em que o vídeo da webcam será previsto: Exemplo: MakerBevel1;

4. Opções de envio no formato:

 chave1=valor1[;chave2=valor2][;chaveN=valorN]. Exemplo: quality=50;bandwidth=8000.

 As opções disponíveis são listadas abaixo:

- width: Número - largura da área de captura da câmera, em pixels. O valor padrão é 160.
- height: Número - altura da área de captura da câmera, em pixels. O valor padrão é 120.
- fps: Número - taxa em que a câmera deve capturar dados, em quadros por segundo. O valor padrão é 15.
- bandwidth: Número - um inteiro que especifica o consumo máximo da banda que o vídeo atual deve usar, em bytes

         por segundo. O valor padrão é 16384.

- quality: Número (0-100) - um inteiro que especifica a qualidade do vídeo enviado. Especifica a taxa de compressão do vídeo. Pode ser de 1 (baixa qualidade) a 100 (máxima qualidade). O valor 0 significa automático. O valor padrão é 0.
- sendVideo: Lógico [true|false] - especifica se o componente deve ou não enviar o vídeo. Valor padrão é true.
- sendAudio: Lógico [true|false] - especifica se o componente deve ou não enviar o aúdio. Valor padrão é true.
- showMyVideo: Lógico [true|false] - especifica se o componente deve ou não prever o vídeo. Valor padrão é true.
- destination: Letras - especifica o contexto do stream no servidor. Exemplo rtmp://&lt;servidor&gt;/&lt;destino&gt;. Valor padrão é live.
- publishType: Letras - especifica o tipo de publicação do vídeo. Opções live (ao vivo) ou record (gravar no servidor Valor padrão é live.

![image1851.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1851.gif)

Retorno:

Não Possui.

Nome Real:

ebfLoadFMSServer

Compatibilidade:

Cliente e Servidor
