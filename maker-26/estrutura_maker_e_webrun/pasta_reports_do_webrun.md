---
title: "Pasta REPORTS do Webrun"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/estrutura_maker_e_webrun/pasta_reports_do_webrun.htm"
---

A pasta REPORTS é o diretório que contém os arquivos necessários para a geração do relatório, tendo como principal arquivo o WFRReports.exe.

## Conhecendo os executáveis da pasta Reports

- WFRReports2.exe - Este executável foi mantido por questões de compatibilidade com o Webrun, a aplicação fará uma chamada a este executável e o mesmo chamará o ReportController.exe;
- ReportController.exe - Executável responsável pelo gerenciamento das requisições e controle de geração dos relatórios, este executável “chama” várias instâncias do ReportEngine.exe;
- ReportEngine.exe – Executável responsável por gerar relatórios, cada executável vem configurado para gerar até 100 relatórios (valor definido no parâmetro RecycleCount). Na primeira requisição do ReportController.exe, inicialmente serão carregados 2(valor definido no parâmetro MinWorkers)  ReportEngine.exe nos processos do Windows.

## Parâmetros de configuração

A partir desta versão, o arquivo MakerReports.ini deixou de existir, dando lugar ao arquivo Reporting.conf. Neste arquivo constam os seguintes parâmetros:

![image1438.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1438.jpg)

- MinWorkers - Quantidade mínima de ReportEngine.exe que serão alocados em memória RAM. Valor padrão: 2;
- MaxWorkers – Quantidade máxima de ReportEngine.exe que serão alocados em memória RAM. Toda vez que uma requisição vier ao ReportControlle.exe e não houver ReportEngine.exe disponível, um novo processo será criado para atender à requisição. Valor padrão: 5;
- IdleTimeOut – Tempo máximo de inatividade de um ReportEngine.exe, sempre que houver mais ReportEngine.exe alocados em memória RAM do que o definido no parâmetro MinWorkers e estes atingirem o tempo de inatividade definido, o ReportController.exe irá retirá-los da memória RAM. Valor Padrão: 300 (Unidade utilizada: segundos);
- RecycleCount - Quantidade máxima de relatórios que podem ser gerados em cada ReportEngine.exe, quando o número de relatórios chegar ao valor definido neste parâmetro, o processo do executável ReportEngine.exe será encerrado e um novo processo será criado. Este parâmetro tem a finalidade de evitar Locks no processo ou Lixos de Memória. Valor padrão: 100;
- ResponseTimeout - Tempo máximo para que o relatório seja gerado, caso atinja o tempo máximo definido, uma exceção é gerada. Valor padrão: 60. (Unidade utilizada: segundos) ;
- Port - Porta utilizada pelo ReportController.Exe. Valor padrão: 4444;
- Address - Endereço de onde o ReportController.exe está sendo executado. Valor padrão: 127.0.0.1;
- Instance – Este parâmetro define se uma nova Instância do ReportControler.exe será alocada em memória. Valor Padrão: Default.
- - Caso exista mais de um sistema (publicado) numa determinada máquina e estes sistemas utilizem os valores padrões dos parâmetros Port, Address e Instance, apenas uma instância do ReportController.exe será alocada em memória.
  - Port, Address e Instance: A combinação destes 3 parâmetros é utilizada para definição de qual ReportController.exe o sistema(publicado) utilizará para geração dos relatórios. Caso seja necessário que um sistema utilize um gerador de relatórios independente, basta configurar os parâmetros Port e Instance colocando-os com valores diferentes dos já existentes.

## Pasta Settings

Esta pasta contém um arquivo chamado Default.ini, este arquivo define um padrão para todos os relatórios gerados dos sistemas existentes. Caso seja necessário customizar os relatórios por cada sistema existente, é necessário criar um arquivo no padrão “sigla do sistema.ini” (Ex.: SGP.ini). No momento da geração do relatório, o Webrun buscará pelo arquivo .INI correspondente à sigla do sistema, caso não encontre, as configurações padrão do arquivo Default.ini são carregadas.

![image1439.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1439.jpg)

Figura: Pasta Settings

![image1440.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1440.jpg)

Figura: Parâmetros “Default.ini”

- UseImagesAsResources – Se uma imagem se repetir no relatório a ser gerado, o Gerador de Relatórios aproveitará a imagem gerada anteriormente e replicará nos demais locais utilizados. Valor padrão: True;
- EmbedTrueTypeFonts – Fonte padrão do relatório. Valor padrão: None.

- - Full: Todas as fontes do Servidor serão carregadas no arquivo gerado;
  - Subset: Somente as fontes utilizadas no relatório serão carregadas no arquivo gerado.
- ImageOutputFormat – Formato de saída das imagens utilizadas no relatório. Valor padrão: JPEG.
- ImagePixelFormat – Densidade de Pixels da imagem utilizada no relatório. Valor padrão: 24bits.
- JPEGQuality - Qualidade da imagem utilizada. Obs: Este parâmetro é formado pela extensão utilizada no parâmetro ImageOutputFormat + Quality (Ex.: PNGQuality). Valor padrão: 100. (Unidade utilizada: Percentual).
- CompressionLevel – Nível de compressão utilizado para geração do relatório. Valor padrão: MaxCompress.
- - Os valores destacados em verde são os valores válidos para cada respectivo parâmetro.

## Erro Report rendering timeout

Esse erro é apresentado quando o tempo de geração do relatório ultrapassa o tempo limite determinado pelo parâmetro ResponseTimeout.

Como solucionar o problema?

Altere o arquivo de configuração, no parâmetro ResponseTimeout para um valor maior, definindo o tempo que os seus relatórios possam levar para serem gerados.

Para adicionar o arquivo de configuração, deve ser efetuado o download clicando [aqui](http://download.softwell.com.br/maker/ReportController/Reporting.zip) e em seguida efetuar os seguintes passos:

1. Pare todos os processos que se referem ao Report.
2. Abra o arquivo, altere o parâmetro ResponseTimeout para o valor desejado e gere o relatório novamente.

Caminho para o arquivo: C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Webrun 2\reports\

Observações:

1. Para que funcione corretamente é necessário que nenhum arquivo seja excluído.
2. A estrutura "C:\Arquivos de programas\Softwell Solutions\Maker 2.5" é referente a instalações feitas a partir do Dvd Instalador do Maker 2.5. A estrutura "C:\Arquivos de programas\Softwell Solutions\Maker 2.6" refere-se a instalações feitas a partir do Dvd Instalador do Maker 2.6.
