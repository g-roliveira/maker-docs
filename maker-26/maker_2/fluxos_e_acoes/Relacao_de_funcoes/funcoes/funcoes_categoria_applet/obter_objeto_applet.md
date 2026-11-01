---
title: "Obter Objeto Applet"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_applet/obter_objeto_applet.htm"
---

Descrição:

Obtém um objeto applet e passa para um fluxo.

Parâmetros:

1.  Caminho do arquivo .jar

2.  Caminho do arquivo .class dentro do .jar

3.  Nome da regra que será chamada pela função

![image1056.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1056.gif)

Exemplo:

1.  Parâmetro: "apps/STextPrinter.jar".

2 . Parâmetro: "wfr.sys.HTMLInterface.HTMLTextPrinterApplet.class".

3.  Parâmetro: "Teste Applet".

Se o objeto applet for iniciado a regra "Teste Applet" vai ser chamada recebendo o objeto applet como parâmetro. Este exemplo está no aqruivo frz "http://suporte.softwell.com.br/maker/exemplos/Applet/Obter%20Objeto%20Applet.FRZ"

Observações:

1.  A regra que será chamada tem que ser cliente.

2.  A regra que será chamada tem que ter um parâmetro e do tipo Variante que receberá o objeto applet.

3.  Para chamar um método do applet utilizar a função "invocar método".

Nome Real:

ebfGetAppletObject

Compatibilidade:

Cliente
