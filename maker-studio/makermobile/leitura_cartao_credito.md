---
title: "Obter os dados do cartão de crédito"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/leitura_cartao_credito.html"
---

- Para utilizar a função de leitura e validação de cartão de crédito, basta utilizá-la no Maker com a função *Cartão de Crédito - Obter dados*.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/credit_card.png)

  Esta função passará um JSON para o fluxo do primeiro parâmetro, caso obtenha sucesso na leitura/validação.
- Ao executar a função, será aberto um formulário com a câmera, capaz de identificar os números contidos no cartão e validá-los.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/cardio.png)
  > Esta função não possui suporte a leitura de **cartões de débito**.
- OBS: Será escaneado o número do cartão de crédito e será retornado um JSON com todos os dados do cartão de crédito.
