---
title: "Instalação do Report Services"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/instalacoes/instalacao_do_report_services.htm"
---

# Instalação do servidor de relatório 2.7

Este recurso é aplicado para usuários que necessitam gerar relatórios Maker e contêm servidores aplicados para gerenciar relatórios. Para o ambiente Linux, será necessário um servidor Windows.

Para instalação do Servidor de Relatórios, utilize o arquivo Servidor de Relatórios.exe (DVD de Instalação do Maker 2.7\Support\Servidor de Relatórios.exe) e siga os passos do assistente de instalação.

![image1844.jpg](../../image1844.jpg)

Após a instalação, o serviço chamado Servidor de Relatórios 2.7 (Softwell Solutions) será criado e iniciado automaticamente no Windows.

## Conhecendo os executáveis da pasta Reports

- ReportServer.exe - Executável responsável pelo gerenciamento das requisições e controle de geração dos relatórios, este executável "chama" várias instâncias do ReportEngine.exe.
- ReportServer.exe - Executável responsável pelo gerenciamento das requisições e controle de geração dos relatórios, este executável "chama" várias instâncias do ReportEngine.exe.

## Parâmetros de configuração

A partir desta versão, o arquivo MakerReports.ini deixou de existir, dando lugar ao arquivo Reporting.conf. Neste arquivo constam os seguintes parâmetros:

![image1886.gif](../../image1886.gif)

- MinWorkers - Quantidade mínima de ReportEngine.exe que serão alocados em memória RAM. Valor padrão: 2.

- MaxWorkers – Quantidade máxima de ReportEngine.exe que serão alocados em memória RAM. Toda vez que uma requisição vier ao ReportServer.exe e não houver ReportEngine.exe disponível, um novo processo será criado para atender à requisição. Valor padrão: 5.
- IdleTimeOut – Tempo máximo de inatividade de um ReportEngine.exe, sempre que houver mais ReportEngine.exe alocados em memória RAM do que o definido no parâmetro MinWorkers e estes atingirem o tempo de inatividade definido, o ReportServer.exe irá retirá-los da memória RAM. Valor Padrão: 300 (Unidade utilizada: segundos).
- RecycleCount - Quantidade máxima de relatórios que podem ser gerados em cada ReportEngine.exe, quando o número de relatórios chegar ao valor definido neste parâmetro, o processo do executável ReportEngine.exe será encerrado e um novo processo será criado. Este parâmetro tem a finalidade de evitar Locks no processo ou Lixos de Memória. Valor padrão: 100.
- ResponseTimeout - Tempo máximo para que o relatório seja gerado, caso atinja o tempo máximo definido, uma exceção é gerada. Valor padrão: 60. (Unidade utilizada: segundos).
- ServiceName – Nome real do serviço. Se este parâmetro não existir, o valor padrão é: SoftwellReportServer.
- ServiceDisplayName – Nome de exibição do serviço. Se este parâmetro não existir, o valor padrão é: Servidor de Relatórios (Softwell Solutions).
- **ServicePort** – Porta onde o serviço do ***ReportServer*** estará escutando. Se este parâmetro não existir, ***o valor padrão é: 9193.***

## Pasta Settings

Esta pasta contém um arquivo chamado Default.ini, este arquivo define um padrão para todos os relatórios gerados dos sistemas existentes. Caso seja necessário customizar os relatórios por cada sistema existente, é necessário criar um arquivo no padrão "sigla do sistema.ini" (Ex.: SGP.ini). No momento da geração do relatório, o Webrun buscará pelo arquivo .INI correspondente à sigla do sistema, caso não encontre, as configurações padrão do arquivo Default.ini são carregadas.

![image1448.jpg](../../image1448.jpg)

![image1447.jpg](../../image1447.jpg)

- UseImagesAsResources – Se uma imagem se repetir no relatório a ser gerado, o Gerador de Relatórios aproveitará a imagem gerada anteriormente e replicará nos demais locais utilizados. Valor padrão: True.
- EmbedTrueTypeFonts – Fonte padrão do relatório. Valor padrão: None.
- - Full: Todas as fontes do Servidor serão carregadas no arquivo gerado;
  - Subset: Somente as fontes utilizadas no relatório serão carregadas no arquivo gerado.
- ImageOutputFormat – Formato de saída das imagens utilizadas no relatório. Valor padrão: JPEG.
- ImagePixelFormat – Densidade de Pixels da imagem utilizada no relatório. Valor padrão: 24bits.
- JPEGQuality - Qualidade da imagem utilizada.
- - Observação: Este parâmetro é formado pela extensão utilizada no parâmetro ImageOutputFormat + Quality (Ex.: PNGQuality). Valor padrão: 100. (Unidade utilizada: Percentual)
- ImageSourceDPI – Pontos por polegada utilizado na composição da imagem. Quanto maior for o valor definido neste parâmetro, mais detalhada e definida será a imagem gerada. Valor padrão: 300. (DPI – dots per inch).
- Monochrome – Este parâmetro permite gerar imagens em preto e branco. Quando for "True" a(s)  imagem(ens) utilizada(s) será(ão) gerada(s) em preto e branco. Valor padrão: False.
- CompressionLevel – Nível de compressão utilizado para geração do relatório. Valor padrão: MaxCompress.
- - Os valores destacados em verde são os valores válidos para cada respectivo parâmetro.

Observações:

1. Para que funcione corretamente é necessário que nenhum arquivo seja excluído.
2. Suporte somente a Relatórios gerados no RB10.

Instalando o Servidor de Relatórios -Este video demonsta a Instalação do Servidor de Relatórios
