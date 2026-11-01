---
title: "Obter o valor de um Elemento XML"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_xml/obter_o_valor_de_um_elemento_xml.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Obtém todo o conteúdo e  todos os sub-elementos que estão dentro do Elemento.

Parâmetros:

1. Objeto XML (nó do elemento)

![image1079.gif](../../_assets/image1079.gif)

Exemplo:

Se temos  então

    &lt;TEXTO&gt;

            Maker Flow

            &lt;SQL&gt;Sequel&lt;/SQL&gt;

            &lt;MAKER&gt;Flow&lt;/MAKER&gt;

    &lt;/TEXTO&gt;

    Então o retorno seria: Maker Flow , &lt;SQL&gt;Sequel&lt;/SQL&gt; e &lt;MAKER&gt;Flow&lt;/MAKER&gt;

Nome Real:

ebfXMLGetElementValue

Compatibilidade:

Cliente e Servidor
