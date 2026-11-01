---
title: "Utilizando o IReport"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/relatorio/utilizando_o_ireport.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Relatório &gt;&gt; Utilizando o IReport

# Utilizando o iReport com o Maker

O iReport é uma ferramenta que provê suporte para a criação de relatórios nos formatos PDF (arquivo somente leitura),
XLS (arquivo do aplicativo Microsoft Excel) e HTML (linguagem de marcação para o ambiente web), os quais são suportados pelo Webrun. Apesar da existência desse suporte, a
Softwell Solutions não se responsabiliza por subsidiar o usuário em como utilizar a ferramenta, descreveremos apenas os recursos básicos para a criação de um relatório conforme a documentação abaixo.

Pré-Requisitos:

- Habilitar a opção: "Conversão dos relatórios para JASPER", para isso no Maker clique em: Projetos  --> Configurações  --> Outros marque o checkbox "Conversão dos relatórios para JASPER", e reinicie o Maker.
- Baixe e Instale a versão homologada pela Softwell Solutions do iReport versão 3.1.2, para isso efetue o download da ferramenta através do site do iReport ou pelo seguinte link:
  &lt;http://www.mirrorservice.org/sites/download.sourceforge.net/pub/sourceforge/i/ir/ireport/iReport/iReport-nb-3.1.2/iReport-nb-3.1.2-windows-installer.exe&gt;
  Após a conclusão do download, efetue a instalação do mesmo. Cabe ainda lembrar que, para a perfeita execução da ferramenta, é necessário previamente ter instalado no computador a Máquina Virtual Java (JDK 5.0) que pode ser obtido no site da Oracle
  &lt;http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-javase5-419410.html&gt;.

Configurando e Acessando o Banco de Dados pelo iReport:

Primeiramente é necessário adicionar o drive JDBC que será útil no momento de configuração do banco de dados, para isso abra a iReport e clique em: Banco de Dados --> Drivers --> Novo Driver JDBC e escolha o diretório onde encontra-se o driver, clicando em Adicionar.

![novo_driver_jdbc.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_driver_jdbc.jpg)

Normalmente o diretório do drive JDBC encontra-se em:

![url_drive.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/url_drive.png)

Uma vez adicionado o driver do postgres (ou outro banco de dados do seu interesse). Crie a conexão com o banco de dados, conforme a imagem abaixo.

![conexao_bd.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/conexao_bd.jpg)

Criando um Relatório Simples no iReport:

Para criar um relatório, clique em Arquivo --> New Empty report, na tela que será aberta, escolha o nome do relatório e o local onde o mesmo será salvo.

![novo_relatorio.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/novo_relatorio.jpg)

Observe que uma página em branco foi aberta, esta página será nossa área de trabalho dos relatórios, verifique que a mesma contém:

- Paleta de Elementos --> utilizado para adicionar diversos elementos para a área de trabalho, sendo estes: Label, Gráfico, Linhas,Imagens, Sub-Relatórios etc.
- Report Inspector --> utlizado para adicionar parâmetros, estilos, váriaveis, campos do banco de dados etc.
- Área Central --> utilizado para montar o relatório em sí, inserindo títulos, cabeçalhos, colunas e rodapé, nesta área também é possivel visualizar o código xml gerado, e visualizar uma prévia do relatório através da aba Preview .

![area_trabalho.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/area_trabalho.jpg)

Inserindo Fonte de Dados no Relatório

Para colocar tabelas e campos no relatório clique com o botão direito do mouse em: report name do Report Inspector e em seguida clique em: Edit Query será aberta uma tela na qual deverá ser informada a consulta desejada.
Esta poderá ser feita de forma manualmente digitando no espaço sql correspondente, os comandos SQL desejados ou através do botão Query Designer.

![report_query.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/report_query.jpg)

Para inserir através do Query Designer clique em:  Query Designer -->  public. Após selecionar o schema público, será possível visualizar todas as tabelas
do banco de dados. Agora iremos adicionar as tabelas que iremos usar em nosso relatório e seus respectivos campos, para isso efetue um duplo clique na tabela sig_funcionario e sig_departamento
e marque no checkbox os campos a serão utilizados. Clique em Ok para finalizar.

![campo_designer.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/campo_designer.jpg)

Após clicar em Ok, é possível visualizar na opção Fields do Report Inspector, os campos que serão utilizados para montar o relatório.

Montando o Relatório com Filtros

Agora estaremos montando o relatório com os campos selecionados anteriormente, a montagem, o posicionamento e a organização dos campos poderá ser feita de duas formas:

Manualmente

Clique em: Fields do Report Inspector e arraste o campo desejado até a banda Detail, coloque na banda Column Header o "label" referente ao campo posicionado.
Para adicionar um label arraste-o da Paleta de elementos. Ajuste o posicionamento de cada campo e clique em Preview para visualizar uma prévia do relatório.

Via Wizard

O Wizard é um assistente, que nos auxiliará a montarmos o relatório de uma forma simples, rápida e fácil, para isso clique em: Arquivo --> Report Wizard e siga os sete passos sugeridos, que por sinal são bastante simples e intuitivos,
conforme a imagem abaixo:

![wizard.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/wizard.jpg)

Tanto manualmente como pelo wizard a nossa área de trabalho ficará assim:

![relatorio_ireport.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/relatorio_ireport.jpg)

Efetuando Filtro via Parâmetro

No iReport

Para filtrarmos um registro do relatório via parâmetro, basta clicar em: Parameters do Report Inspector e em seguida Adicionar Parâmetro,
colocamos o nome do parâmetro de porDepartamento porém você pode colocar o nome que preferir. Ajuste as proriedades do mesmo conforme a imagem abaixo ou conforme a sua necessidade.

![porDepartamento.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/porDepartamento.jpg)

Agora clique com o botão direito do mouse no nome do relatório no Report Inspector e em seguida em Edit Query, no final do comando SQL já existente, adicione a seguinte comando:
WHERE sig_departamento."dep_cod" = $P&#123;porDepartamento&#125; Este trecho é o responsável por filtrar pelo departamento desejado. Caso exista alguma dúvida, Observe na
sexta imagem deste tutorial, a parte grafada do código sql já com esta implementação.

Para selecionar o departamento desejado no iReport, clique em Preview e digite o código desejado do mesmo, conforme a imagem abaixo:

![por_departamento.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/por_departamento.jpg)

No Maker

Agora selecionaremos o filtro no relatório via nome do departamento, para isso acesse o relatório e na aba Dados do relatório, clique em Código SQL,
será aberta a tela conforme a imagem abaixo, observe a numeração da mesma e insira na coluna Critério a variável do respectivo campo,
o parâmetro desejado e a definição dos dados.

![maker_params.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/irep.png)

Clique em Visualizar Impressão, verás a imagem abaixo:

![maker_params_dados.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/maker_params_dados.jpg)

### Integrando com o Maker e Publicando no WebRun

Para visualizar o relatório criado no WebRun crie um relatório vazio pelo Maker e adicione ao menu do sistema.
Este relatório não precisa ter o mesmo nome do relatório criado pelo iReport. Perceba que ao criar um relatório no Maker ele é salvo na tabela FR_RELATORIO. Executando um Select nesta tabela, teremos o seguinte resultado:

![fr_relatoriop.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/irep1.png)

Para integrar o relatório com o webrun, é necessário efetuar mais dois procedimentos, um no maker e outro no iReport.

- No Maker --> Clique em: Utilitários--> Exportar Relatório para Jasper marque o relatório vazio criado anteriormente
  e clique em Exportar exporte-o para o seguinte endereço: ![endereco_exportar.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/irep2.png)

  Observe que após a exportação no diretório acima mencionado o Maker encarregou-se de criar outros três diretório, ficando assim:

  ![diretorio_final.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/diretorio_final.png)

É a pasta "bridge" que servirá como ponte, efetuando a ligação entre o Maker com o iReport, dentro da mesma conterá os relatórios.
Observe que a pasta TRE corresponde a sigla do sistema (treinamento) a pasta com o número 8 corresponde o campo "rel_codigo" da tabela FR_RELATORIO.
Dentro desta pasta serão colocados dois arquivos:

- Relatório criado com o iReports (arquivo de extensão .jrxml)

- Arquivo de configuração chamado "report.data"

- No iReport --> basta salvar o relatório no diretório acima mencionado, para isso clique em Arquivo --> Salvar Como e selecionar o diretório com o mesmo código da tabela FR_RELATORIO, ficando assim:

  ![salvar_ireport.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/salvar_ireport.png)

Altere o conteúdo do "report.data" colocando o nome do relatório feito no iReport, conforme a imagem abaixo:

![arquivo_dataReport.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/arquivo_dataReport.jpg)

O parâmetro "source" da imagem acima deve ser ajustado de acordo com o caminho da sua aplicação.

Feito isso, bastará acessar a aplicação e gerar o relatório.

Observações importantes no Maker:

- Altere o arquivo, report.data com o nome do relatório feito pelo iReport, conforme os passos citados acima (ex: Relatório Exemplo - Lista de Funcionários.jrxml) parte alterada.

- Limpe o Cache da Aplicação

Acessando o Relatório no WebRun

Para acessar o Relatório feito no iReport, e visualizá-lo no WebRun, basta inserir o relatório no menu do Maker e acessá-lo normalmente.

Importante: lembre-se que todos os passos citados acima, deve ter sido feito corretamente para o perfeito funcionamento do relatório, e que o relatório adicionado no Maker, encontra-se vazio, pois neste caso estamos apontando para o relatório gerado no iReport.

![relatorio_webrun.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/relatorio_webrun.jpg)

Veja o Relatório Final gerado

![relatorio_final2.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/relatorio_final2.jpg)

____________________________________________________________________________________________

Informações complementares sobre o iReport, consulte os seguintes links:

&lt;http://community.jaspersoft.com/project/ireport-designer&gt;

&lt;http://pt.scribd.com/doc/14811322/Desenvolvendo-Relatorios-Profissionais-Com-iReport-Para-Netbeans-IDE#download&gt;
