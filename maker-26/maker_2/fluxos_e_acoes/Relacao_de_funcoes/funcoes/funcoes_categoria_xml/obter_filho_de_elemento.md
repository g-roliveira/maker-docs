---
title: "Obter Filho de Elemento"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_xml/obter_filho_de_elemento.htm"
---

Descrição:

Retorna o primeiro sub-elemento do elemento passado como parâmetro

Parâmetros:

1. Objeto XML

2. Nome do Elemento

![image1076.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1076.gif)

Retorno:

A variável de Retorno deverá ser do tipo variante.Retorna o primeiro sub-elemento

Observação:

A linguagem XML é definida como o formato universal para dados estruturados na Web. Para saber mais sobre o assunto, pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).

Exemplos:

Tendo uma XML onde o elemento é:

    &lt;TEXTO&gt;

   &lt;SQL&gt;Sequel&lt;/SQL&gt;

                        &lt;MAKER&gt;Flow&lt;/MAKER&gt;

    &lt;/TEXTO&gt;

    Então o retorno seria "&lt;SQL&gt;"

Nome Real:

ebfXMLGetChildElement

Compatibilidade:

Cliente e Servidor
