---
title: "Montador de Expressões - Propriedade Cor Condicional"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/montador_expressoes_propriedade_cor_condicional.htm"
---

Esse Montador de Expressão é característica da [Propriedade Cor Condicional](maker_2/formulario/propriedades_e_eventos) do componente [Grade](maker_2/formulario/componentes/grade).

É muito utilizado para adicionar cor nos campos da tabela.

![image417.jpg](image417.jpg)

A tela é composta por várias áreas:

- Condição - local onde escreve-se a condição para formatação;
- Operadores - utilizado para atribuir valor:

- Campo - permite escolher campos disponíveis na consulta do formulário. Após selecionar o campo, utilize o botão ![image648.gif](image648.gif) (adicionar).

Exemplos:

&lt;campo&gt; = &lt;inteiro&gt;

STM_CAD_ID = 1

&lt;campo&gt; = &lt;valor inteiro&gt;

Fun_idade = 18 ou Fun_idade &gt; 18

&lt;campo&gt; = &lt;valor fracionado&gt;

Fun_salario = 3489.90

- Operadores - parte composta pelo teclado numérico e o ponto (observar que utiliza-se o padrão norte americano para separar casas decimais);

- Operadores Aritméticos:

- Botão ![image649.gif](image649.gif) - divisão;
- Botão ![image650.gif](image650.gif) - multiplicação;
- Botão ![image655.gif](image655.gif) - operador para retornar o resultado da divisão de inteiros;
- Botão ![image651.gif](image651.gif) - soma;
- Botão ![image652.gif](image652.gif) - subtração;

- Botões ![image653.gif](image653.gif) - foi depreciado. Utilize o botão ![image654.gif](image654.gif), pois a resultado será o resto (módulo) da operação inteira;

- Operadores Relacionais - estes operadores permitem comparar duas ou mais variáveis:

Exemplo:

&lt;campo&gt; = &lt;campo&gt;

Fun_codigo = fun_setor_codigo

&lt;campo&gt; = "&lt;null&gt;"

Fun_tel = ""

Observação: Os tipos dos campos devem ser iguais;

- Operadores Lógicos - composto pelos botões ![image656.gif](image656.gif), ![image657.gif](image657.gif) e ![image658.gif](image658.gif);

Exemplo:

&lt;campo&gt;

Fun_ativo

Observação: Adicionar apenas o campo lógico, pois retornará True ou False;

Importante: Para o tipo Lógico (acima citado) é aplicável a partir da Versão Webrun 2.2.0.8m.

- Precedência - botões que são utilizados para separar sentenças (uso de parênteses);

- String - são delimitadores de caracteres;

Exemplo

&lt;campo&gt; = "&lt;String&gt;"

fun_nome = "Machado de Assis"

Importante: Para o tipo String (acima citado) é aplicável a partir da Versão Webrun 2.2.0.8m.

- Botão ![image659.gif](image659.gif) - verifica a condição transcrita no local Condição.

- Botão ![image660.gif](image660.gif) - confirma a condição criada. Retorna a tela Editor condicional de cores para grade;
- Botão ![image661.gif](image661.gif) - fecha a tela Montador de Expressão sem confirmação da condição. Retornando a tela Editor condicional de cores para grade.
