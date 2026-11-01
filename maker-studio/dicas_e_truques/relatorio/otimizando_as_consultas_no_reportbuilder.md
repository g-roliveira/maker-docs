---
title: "Otimizando as consultas no ReportBuilder"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/relatorio/otimizando_as_consultas_no_reportbuilder.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Relatório &gt;&gt; Otimizando as consultas no ReportBuilder

Ao utilizar várias fontes de dados com Join's, fica a cargo do ReportBuilder fazer o filtro com estes join's.

Exemplificando:

Temos duas fontes de dados A e B. Estas fontes de dados fazem join entre si com um campo qualquer. O que é feito: o ReportBuilder faz a consulta no banco, traz todos os registros de cada fonte de dados e só depois que o join entre as fontes de dados será feito.

Isso sobrecarrega o Gerador de relatórios, pois fica a cargo do mesmo fazer o procedimento que o SGBD faria melhor.

Para resolver este problema, deve-se utilizar o mínimo de fonte de dados possível.

Veja as imagens abaixo:

**Várias fontes de dados:**

![image1282.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1282.jpg)

Uma fonte de dados:

![image1280.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1280.jpg)

Um outro ponto que pode otimizar as consultas no ReportBuilder é a utilização de agrupamentos ao invés de subrelatórios. A utilização de subrelatórios muitas vezes força o usuário a ter várias fontes de dados, aí tem-se o problema citado acima. Veja a imagem abaixo, note que no exemplo, utiliza-se vários subrelatórios para agrupar os registros:

![image1286.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1286.jpg)

Uma solução para este problema é a utilização de agrupamentos do próprio ReportBuilder. Veja a imagem abaixo, note que no lugar dos subrelatórios, utilizou-se agrupamentos:

![image1287.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1287.jpg)

Feito os procedimentos citados acima, em muitos casos o ganho em performance é bastante significativo.

Observação: Há outros fatores que podem influenciar no momento da geração dos relatórios: memória física disponível, quantidade de registros consultados e capacidade de processamento da CPU por exemplo podem atrasar na geração dos mesmos
