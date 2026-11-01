---
title: "Tipos de Dados"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/tipos_de_dados/tipos_de_dados.htm"
---

Esta tela permite definir Máscaras para formatação da exibição de dados para formulários. Acesse esse recurso por meio do menu Projeto e deste clique em Tipos de Dados.

![image69.gif](../../image69.gif)

A tela possui uma Barra de Ferramentas para a navegação e edição dos registros e os seguintes campos:

- Descrição - local para determinar o nome da máscara;
- [Máscaras](../mascaras)- é a expressão que define a aparência dos dados apresentados nos campos (componentes) do formulário. Abaixo consta uma imagem que exemplifica a utilização da máscara no campo CPF:

![image917.jpg](../../image917.jpg)

Observações:

1. Qualquer tipo de dados, com a descrição iniciada com "HORA" será validada pelo Webrun como o tipo HORA.
2. A máscara de CPF, CNPJ e CEP só se aplica a campos do tipo VARCHAR.
3. As máscaras CPF e CNPJ servem para formatação dos componentes e validação das informações. Ao inserir os dados nos campos vinculados às máscaras e gravá-los, é lançada uma mensagem de erro se os valores forem inválidos;
4. O Webrun se baseia pelos nome CPF ou CNPJ para efetuar a validação, caso o desenvolvedor modifique o nome desses tipos, não ocorrerá validação.

![image31.jpg](../../image31.jpg)

Criando Tipos de Dados - este vídeo demonstra os passos para a criação de novos tipos de dados e  sua aplicação.
