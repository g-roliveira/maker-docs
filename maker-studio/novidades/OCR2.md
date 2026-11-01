---
title: "OCR"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/OCR2.html"
---

Com a funcionalidade OCR é possível obter textos a partir de arquivos no formato PDF, PNG, JPG e TIFF.
Desta forma é possível automatizar o preenchimento de formulários, aumentando a produtividade, evitando possíveis erros desta operação.

## Observações:

1. As imagens para serem usadas no OCR devem ser digitalizadas com resolução de pelo menos 200 DPI (ponto por polegada) para 400 DPI em monocromático (preto e branco) ou em escala de cinza. A digitalização em resoluções mais altas não resultará necessariamente em uma melhor precisão de reconhecimento. As taxas de sucesso reais dependem muito da qualidade da imagem digitalizada. As configurações típicas para digitalização são 300 DPI e 1 bpp (bit por pixel) preto e branco.

2. Por questões de otimização essa biblioteca é disponibilizada como um pacote extra do Webrun Studio, para maiores informações de como obter o pacote e realizar as configurações necessárias [Clique aqui](configuracao_OCR).

## Abaixo segue um exemplo da utilização desta funcionalidade.

Funções que serão utilizadas:

- **Upload.**
- **OCR - Ler Texto de Arquivo.**
- **Tamanho.**
- **Subsequência.**
- **Letras.**
- **Quebrar Texto.**
- **Obter Objeto da Lista.**
- **Alterar Valor do Componente.**

## Estrutura dos fluxos:

### Fluxo 1

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/estrutura.png)

1. Utilizamos a função **Upload** para que seja informado o arquivo a terá o texto obtido, informando no terceiro parâmetro o fluxo que será executado quando o upload estiver finalizado.
![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/OCRUpload.png)

### Fluxo 2

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/estrutura1.png)

1. No primeiro processamento utilizamos a função **OCR - Obter Texto de Arquivo** informando como primeiro parâmetro o caminho do arquivo enviado para o servidor e segundo parâmetro o idioma do arquivo, obtendo o texto.
![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/OCRFuncao.png)2. No segundo processamento iremos tratar o texto para que seja retornado uma lista de informações para que futuramente possamos alterar os campos do formulário.
![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/ocr_proc2.png)3. No subfluxo iremos passar como parâmetro a lista obtida.
![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/ocr_proc3.png)

### Fluxo 3

![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/estrutura2.png)

O fluxo 3 é o responsável por realizar a modificação do formulário com as informações obtidas, como o mesmo segue a mesma sequência lógica de alteração, apenas o primeiro processamento será demonstrado.
Para maior esclarecimento basta realizar o download do exemplo [**clicando aqui.**](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_OCR.zip).

1. No primeiro processamento utilizamos a função **Alterar Valor do Componente** obtendo a informação referente ao nome a ser cadastrado conforme o arquivo que teve o texto extraído.
![](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/ocr_proc4.png)

Assista o vídeo do exemplo:
