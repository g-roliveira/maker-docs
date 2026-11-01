---
title: "Organização de Fluxos através de subfluxos"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/boas_praticas_para_criacao_de_fluxo/organizacao_de_fluxos_atraves_de_subfluxos.htm"
---

A utilização de fluxos com muitos IFs (objeto decisão) e fluxos extensos demais, pode ocasionar erros de compilação devido a uma limitação da Máquina Virtual Java, onde os métodos têm limite de 65, 535 bytes de bytecode. Neste caso é recomendado que o fluxo seja dividido em subfluxos para evitar problemas de compilação no momento de execução da regra.

Por exemplo, temos o fluxo abaixo que realiza envios de e-mail de acordo com os parâmetros (anexo; lista de contatos) e logo após envio, registra o log da operação.

Observe a extensão do mesmo.

![image1663.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1663.jpg)

Esta é uma regra que poderá apresentar problemas ao compilar, tornando difícil também seu entendimento, legibilidade e suporte futuro.

Não existe uma regra de como e quando o fluxo deverá ser divido em subfluxos, isso varia de acordo com a percepção e necessidade do desenvolvedor ou de boas práticas de desenvolvimento internas.

Neste caso dividiremos este fluxo em alguns menores (4 subfluxos), o que irá facilitar o seu entendimento:

![image1664.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1664.jpg)

As áreas em vermelho destacadas são os pontos onde o fluxo principal será divido.

Após ter dividido o fluxo em subfluxos menores, o mesmo ficará:

- Subfluxo 1:

![image1665.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1665.jpg)

- Subfluxo 2:

![image1666.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1666.jpg)

- Subfluxo 3:

![image1667.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1667.jpg)

- Subfluxo 4:

![image1668.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1668.jpg)

- Subfluxo 5

![image1669.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1669.jpg)

- Então o fluxo inicial ficará assim:

![image1670.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1670.jpg)

Com boas práticas, muitos problemas podem ser evitados. Observe que após a divisão do fluxo, o mesmo ficou mais legível e de fácil entendimento para todos os desenvolvedores que vierem a mantê-lo.
