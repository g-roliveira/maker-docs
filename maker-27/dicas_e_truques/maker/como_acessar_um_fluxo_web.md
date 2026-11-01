---
title: "Como acessar um Fluxo Web"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/maker/como_acessar_um_fluxo_web.htm"
---

É possível acessar um fluxo via web. O exemplo apresentado fará o cadastramento de um Estado na tabela GER_ESTADO.

Siga os passos abaixo:

1º Passo : Criação do fluxo.

1. Adicione ![image680.jpg](../../image680.jpg) e utilize a função Executar Atualização. Ao clicar no parâmetro SQL Atualização, a tela Propriedade será aberta:

![image1376.jpg](../../image1376.jpg)

Clique em ![image732.gif](../../image732.gif). Abrirá a tela Construtor SQL: Inserção. No campo Tabela, selecione GER_ESTADO. Em seguida, serão apresentados os campos da tabela.

1. Clique em Cod (est_cod) e adicione o valor 15:

![image1377.jpg](../../image1377.jpg)

2. No campo Nome (est_nome) adicione o texto Rio Grande do Norte:

![image1378.jpg](../../image1378.jpg)

A tela Construtor SQL: Inserção deverá ficar assim:

![image1090.jpg](../../image1090.jpg)

2. Salve o fluxo na camada Servidor.
3. Após ter salvado o fluxo, localize o fluxo na aba Objeto Fluxos. Clique com o botão direito do mouse e selecione a opção Web:

![image1092.jpg](../../image1092.jpg)

4. Salve o projeto.

2º Passo: criação da homepage utilizando a linguagem HTML. Abra um editor de texto e digite o código abaixo:

&lt;html&gt;

&lt;head&gt;

&lt;meta http-equiv="Content-Type" context="text/html:"&gt;

&lt;/head&gt;

&lt;body&gt;

&lt;form method="POST" action="http://127.0.0.1:8080/webrun/Fluxo na web.rule?sys=GDA" &gt;

&lt;input type="submit" value="CLIQUE" id="botao" name="botao" /&gt;

&lt;/form&gt;

&lt;/body&gt;

&lt;/html&gt;

3º Passo: abra o arquivo HTML criado e clique no botão:

![image943.jpg](../../image943.jpg)

Observação: Consulte a tabela GER_ESTADO e verifique a criação do registro:

![image1095.jpg](../../image1095.jpg)

Informações complementares:

- Para acessar um exemplo de envios de arquivo via fluxo Web. clique [aqui](enviando_arquivos_via_fluxo_web).
- O sistema que utilizará esta funcionalidade (Fluxo Web) não deverá conter instância.
- No código, a URL é montada da seguinte forma: http://[IP]:[Porta]/webrun/[Nome da regra].rule?sys=[Sigla do sistema]. O nome da regra deve ser exatemente como foi definido no fluxo, incluindo espaços, acentos e outros.
- Parâmetros: os parâmetros podem ser passados via GET ou POST. É obrigatório o parâmetro "sys" que define o código do sistema. O campo do código acima "value" refere-se ao código do sistema. Se houver parâmetro de entrada, é necessário defini-lo da mesma forma. Por exemplo: Se o nome do parâmetro for "Código do Cliente", esse mesmo nome deverá ser atribuído a um componente da página (&lt;input type="text" name "Código do Cliente"/&gt;). Também é possível submeter um arquivo (bytes) - &lt;input type="file"&gt; - como parâmetro de entrada da regra. O retorno da regra irá para a saída do POST efetuado. O retorno será uma String ou bytes, dependendo do retorno do fluxo.
- Restrição: Não é possível utilizar como parâmetro de entrada da regra os nomes "sys", "formlD" ou locale".
