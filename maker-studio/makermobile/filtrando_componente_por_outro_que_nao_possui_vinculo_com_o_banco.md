---
title: "Filtrando componente por outro que não possui vinculo com o banco"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/filtrando_componente_por_outro_que_nao_possui_vinculo_com_o_banco.html"
---

Crie um novo formulário com o nome **Cadastro de Cidades**, o formulário não possui fonte de dados.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/filtrando_componente_por_outro.jpg)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/filtrando_componente_2.jpg)

Adicione um componente **Lista** e na propriedade Lista, informe os seguintes valores e para a propriedade nome determine "Estado".

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/filtrando_componente_3.jpg)

Em seguida adicione um componente **Lista Dupla**, o sql do componente deverá ficar da seguinte maneira.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/filtrando_componente_4.jpg)

Observe o critério **COMPONENTE_Estado**, através dele o componente será filtrado.
Para a propriedade Campo Chave determine **cid_id** e para a propriedade Campo Lista determinde **cid_nome**.
Como resultado final o formulário ficará da seguinte forma.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/filtrando_componente_5.jpg)

Salve o formulário, exporte a aplicação para a plataforma desejada e execute-a.
