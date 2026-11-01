---
title: "Obter o Pai de um Elemento XML"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_xml/obter_o_pai_de_um_elemento_xml.htm"
---

Descrição:

Obtém o Elemento acima do Sub-Elemento

Parâmetros:

1. Objeto XML.

![image1078.gif](../../../../../image1078.gif)

Retorno:

Não possui

Exemplos:

Tendo uma XML onde o Sub-Elemento é  &lt;MAKER&gt;Flow&lt;/MAKER&gt; e acima dele tem um Elemento pai

    &lt;TEXTO&gt;

   &lt;MAKER&gt;Flow&lt;/MAKER&gt;

    &lt;/TEXTO&gt;

    Então o seu Elemento pai é "&lt;TEXTO&gt;"

Nome Real:

ebfXMLGetParentElement

Compatibilidade:

Cliente e Servidor
