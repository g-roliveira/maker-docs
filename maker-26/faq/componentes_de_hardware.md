---
title: "Componentes de Hardware"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/faq/componentes_de_hardware.htm"
---

## Comunicação com o Hardware, acessando dispositivos?

Além da utilização de DLLs para acesso aos drivers de comunicação com o periférico em questão, também é possível adicionar Applets aos softwares desenvolvidos no Maker.

## O Maker possui recursos de comunicação com periféricos?

Sim, por meio de funções de fluxo, pode-se controlar o funcionamento de periféricos do tipo impressoras fiscais e outros equipamentos eletronicamente conectáveis.

## Há suporte à impressora fiscal e não fiscal?

Toda a API da Bematech está implementada no Maker. Impressoras de outros fabricantes podem ser adicionadas sem a intervenção da Softwell, já que o Maker é expansível, não necessitando de alterações para dar suporte a Hardware adicional.

Observação: No Maker 2.6, foram adicionadas 178 funções para impressões bematech Fiscal ou não Fiscal.
Essas funções estão disponíveis na pasta Support no DVD de instalação do Maker 2.6
Para adicionar ao sistema, basta importar o arquivo .frz pelo Maker.

## Impressão em modo TEXTO (DOS)?

É possível escrever diretamente na porta LPT1 ('/dev/lp0' nos sistemas Unix-Like), assim, também é possível enviar comandos de formatação para a impressora, obtendo controle total sobre a impressão.

## Quais são os leitores biométricos suportados?

- Nitgen Fingerprint reader Fingkey Hamster I
- Nitgen Fingerprint reader Fingkey Hamster II

## É possível utilizar leitores de código de barras?

Sim.
