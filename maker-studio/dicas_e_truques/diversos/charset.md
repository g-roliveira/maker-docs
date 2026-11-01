---
title: "charset"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/diversos/charset.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Diversos &gt;&gt; Charset

# Charset

Quando aparecer a mensagem:

Erro: Ao processar a consulta! Observe se todos os filtros foram passados com valores corretos!

![image877.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dis2.png),

Ocorrida na aba "Localizar" do formulário, significa que o charset usado não é compatível com o SGBD.
Para evitar o erro, utilize o charset compatível com o SGBD. [Clique aqui](../../recursos_avancados/suporte_banco_de_dados/consideracoes_gerais#charset) para visualizar os tipos de charset suportado pelos SGBD´s.

Para casos com o DB2 9.5 os seguintes ajustes devem ser feitos:

1. No databases.xml, que por padrão fica no diretório: **C:\Program Files (x86)\Softwell Solutions\Maker Studio\Webrun Studio\config** utilizado, localize o grupo DB2 e em seguida localize o parâmetro AppendSQL4MetaData Substitua o valor da chave item-param de FETCH FIRST 1 ROWS ONLY para ) FETCH FIRST 1 ROWS ONLY.
2. Insira os seguintes itens:

&lt;item&gt;
      &lt;item-name&gt;InsertOnStarSQL4MetaData&lt;/item-name&gt;
      &lt;item-param&gt;SELECT * FROM (&lt;/item-param&gt;
&lt;/item&gt;

&lt;item&gt;
      &lt;item-name&gt;ConcatOperator&lt;/item-name&gt;
      &lt;item-param&gt;||&lt;/item-param&gt;
&lt;/item&gt;

&lt;item&gt;
      &lt;item-name&gt;CaseSensitive&lt;/item-name&gt;
      &lt;item-param&gt;1&lt;/item-param&gt;
&lt;/item&gt;

3. Salvar o databases.xml e reiniciar o Webrun.

Para casos com Postgres UTF8, remover o to_ascii do parâmetro UpperFunctionStart no grupo PostgreSQL e o parênteses ")" do parâmetro UpperFunctionEnd. Após remoção, os parâmetros devem ficar conforme o modelo abaixo:

&lt;item&gt;

      &lt;item-name&gt;UpperFunctionStart&lt;/item-name&gt;

      &lt;item-param&gt;UPPER(&lt;/item-param&gt;

&lt;/item&gt;

&lt;item&gt;

      &lt;item-name&gt;UpperFunctionEnd&lt;/item-name&gt;

      &lt;item-param&gt;)&lt;/item-param&gt;

&lt;/item&gt;

Para ambos os casos, é necessário reiniciar o Webrun após salvar o databases.xml

Observações:

1. Este problema também ocorre quando um UNION estiver associado a um formulário
2. Ao ser removido o to_ascii é necessário alterar o seguinte parâmetro:

Antes:

&lt;item&gt;

   &lt;item-name&gt;removeNonAsciiCharsOnTextSearch&lt;/item-name&gt;

   &lt;item-param&gt;1&lt;/item-param&gt;

&lt;/item&gt;

Depois:

&lt;item&gt;

   &lt;item-name&gt;removeNonAsciiCharsOnTextSearch&lt;/item-name&gt;

   &lt;item-param&gt;0&lt;/item-param&gt;

&lt;/item&gt;
