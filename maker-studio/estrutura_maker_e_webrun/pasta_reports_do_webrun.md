---
title: "Pasta REPORTS do Webrun"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/estrutura_maker_e_webrun/pasta_reports_do_webrun.htm"
---

A pasta REPORTS é o diretório que contém os arquivos necessários para a geração do relatório, tendo como principal arquivo o WFRReports.exe.

## Conhecendo os executáveis da pasta Reports

- WFRReports2.exe - Este executável foi mantido por questões de compatibilidade com o Webrun.

## Pasta Settings

Esta pasta contém um arquivo chamado Default.ini, este arquivo define um padrão para todos os relatórios gerados dos sistemas existentes. Caso seja necessário customizar os relatórios por cada sistema existente, é necessário criar um arquivo no padrão "sigla do sistema.ini" (Ex.: SGP.ini). No momento da geração do relatório, o Webrun buscará pelo arquivo .INI correspondente à sigla do sistema, caso não encontre, as configurações padrão do arquivo Default.ini são carregadas.

![image1439.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1439.jpg)

Figura: Pasta Settings

![image1440.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1440.jpg)

Figura: Parâmetros "Default.ini"

- Observação: As configurações representadas acima são os padrões utilizado pelo gerador de relatórios e podem ser modificados pelo usuário de acordo a documentação contida no cabeçalho do arquivo.

1. UseImagesAsResources – Se uma imagem se repetir no relatório a ser gerado, o Gerador de Relatórios aproveitará a imagem gerada anteriormente e replicará nos demais locais utilizados. Valor padrão: True;
2. EmbedTrueTypeFonts – Fonte padrão do relatório. Valor padrão: None.

3. - Full: Todas as fontes do Servidor serão carregadas no arquivo gerado;
   - Subset: Somente as fontes utilizadas no relatório serão carregadas no arquivo gerado.
4. ImageOutputFormat – Formato de saída das imagens utilizadas no relatório. Valor padrão: JPEG.
5. ImagePixelFormat – Densidade de Pixels da imagem utilizada no relatório. Valor padrão: 24bits.
6. JPEGQuality - Qualidade da imagem utilizada. Obs: Este parâmetro é formado pela extensão utilizada no parâmetro ImageOutputFormat + Quality (Ex.: PNGQuality). Valor padrão: 100. (Unidade utilizada: Percentual).
7. CompressionLevel – Nível de compressão utilizado para geração do relatório. Valor padrão: MaxCompress.
8. - Os valores destacados em verde são os valores válidos para cada respectivo parâmetro.
