---
title: "Excel"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/funcoes_excel.html"
---

# Funções para manipulação de arquivo Excel

O Excel é o aplicativo de planilhas mais utilizado e amplamente disponível no mercado. Ele é uma das ferramentas mais fundamentais no trabalho de empresas e pessoas no mundo todo e oferece uma infinidade de possibilidades de tarefas que facilitam a vida nos escritórios.

As novas funcionalidades de manipulação de arquivos Office Excel visa facilitar a criação e edição de Planilhas, otimizando o tempo e experiência do usuário. Entre as principais vantagens estão:

- Criar e editar arquivos sem a necessidades de ter o pacote Office Excel instalado
- Transferência automatizada de informações do sistema para planilhas Excel, evitando assim o processo de Copiar e Colar dados e eliminando os possíveis erros decorrentes dessas operações
- Exibição do conteúdo das Planilhas em tela sem a necessidade de abrir o programa Office Excel, economizando assim o tempo de carregamento destes programas

## Observações:

1. Essas funções só possuem suporte para arquivos Excel 2007 e superiores.
2. Existem limitações para a criação de linhas e células utilizando as funções de manipulação do arquivo. **[Para maiores informações, clique aqui](https://poi.apache.org/apidocs/org/apache/poi/ss/SpreadsheetVersion.html)**

## Abaixo segue a exemplificação da funcionalidade:

Para criar um novo arquivo Excel é necessário apenas informar o local onde o arquivo será salvo e o nome do arquivo com a extensão (.xlsx preferencialmente).

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/CriarArquivoExcel.png)

Para abrir um arquivo Excel é necessário informar o endereço do arquivo e o nome do arquivo com a extensão. Essa função irá retornar a referência do arquivo, que é necessaria para manipular e salvar o documento.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/AbrirArquivoExcel.png)

Para preencher o arquivo Excel com os dados passados através de uma lista de listas, é necessário informar a referência do arquivo que se deseja alterar.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/PreencherArquivoExcel.png)

Realiza a leitura do arquivo Excel retornando os dados como uma lista de listas. É necessário informar a referência do arquivo.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/LerDadosExcel.png)

Para editar os dados de um registro da planilha Excel. É necessário informar a referência do arquivo Excel, os novos dados que serão inseridos e o número da linha que será atualizada.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/AtualizarLinhaExcel.png)

Para deletar uma linha do arquivo Excel. É necessário informar a referência do arquivo e a linha que se deseja exclui. Se o último parâmetro não for informado, o conteúdo da linha será deletado e a linha ficará em branco.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/DeletarLinhaExcel.png)

Para salvar as alterações realizadas no arquivo Excel após as operações de Atualizar Linha do Arquivo, Deletar Linha do Arquivo e Preencher Arquivo é necessário utilizar a função Excel - Salvar Arquivo. É necessário informar a referência do arquivo Excel.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/SalvarArquivoExcel.png)

Para realizar a inserção de uma nova folha no arquivo excel desejado, basta utilizar a função  Excel - Criar Nova Folha  e informar como parâmetro o local do arquivo e o nome da nova folha.

Planilha antes de utilizar a função:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/excelfolha1.PNG)

Utilizando a função:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/excelnovafolha.PNG)

Resultado:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/excelfolha2.PNG)

# Vídeo Demonstração Maker Studio do Sistema de Exemplo Excel

[Clique aqui para realizar o download do Exemplo Excel](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_Excel.frz)
