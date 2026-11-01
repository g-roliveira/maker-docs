---
title: "Caixa de Texto do tipo Data"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/comportamento_caixa_data.html"
---

# Comportamento do componente Caixa de Texto do tipo Data

O componente caixa de texto possui algumas peculariedades ao ser selecionado o tipo **data** no Maker Mobile. Por exemplo, no webrun é possível digitar uma data manualmente, no Maker Mobile não. Observe a imagem abaixo:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/caixa_de_texto_tipo_data_1.png)

Como pode-se notar, o componente não permite uma inserção direta de dados, sendo necessário que o usuário selecione o calendário ao lado e em seguida determinar o dia, mês, ano, hora, minuto e segundo.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/componente_caixa_texto_2.jpg)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/componente_caixa_de_texto_2.png)

Caso o tipo do campo vinculado ao componente seja *Datetime* e a propriedade *Tipo* esteja configurada como "Livre", será exibido um calendário com data e horas para seleção. Caso a propriedade *Tipo* esteja configurada como "Data", será apresentado um calendário com data, apenas. A prioridade para exibição sempre será da propriedade conteúdo do componente.
