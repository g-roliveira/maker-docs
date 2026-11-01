---
title: "Operadores usados na Aba Cálculo"
source_url: "https://manual.softwell.com.br/docs/maker/aba_calculo/operadores_usados_na_aba_calculo"
---

- Atribuição - mostra como atribui um valor a uma variável.

Exemplo:

variable1.value `:=` Date;

- ## Boleano
- - And (E lógico) - liga a condição. A condição é satisfeita quando as duas proposições são verdadeiras.

Exemplo:

If (a `&gt;` 0) and (b `&lt;` 15) then

a `=` a + b;

- Not (negação) - nega uma variável.

Exemplo:

not (a`&gt;` 10);

- Or (OU lógico) - liga uma condição. A condição é satisfeita quando uma das duas proposições é verdadeira.

Exemplo:

If (a `&gt;` 30) or (b `&lt;` 15) then

a `=` a + b;

- Xor (OU-Exclusivo lógico) - liga uma condição. A condição é satisfeita quando uma das duas proposições é falsa.

Exemplo:

If (a `&gt;` 30) and (b `&lt;` 15) then

a `=` a + b;

- ## Matemática
- - - (subtração) - operação realizada entre duas variáveis. Realiza a operação subtração.

Exemplo:

a `=` a - b;

- * (multiplicação) - operação realizada entre duas variáveis. Realiza a operação multiplicação.

Exemplo:

a `=` a * b;

- / (divisão) - operação realizada entre duas variáveis. Realiza a operação divisão.

Exemplo:

a `=` a * b;

- - (adição) - operação realizada entre duas variáveis. Realiza a operação soma.

Exemplo:

a `=` a + b;

- div (divisão inteira) - operação realizada entre duas variáveis. Realiza a operação divisão e o resultado será a parte inteira da divisão.

Exemplo:

a `=` (a div b);

- mod (divisão inteira) - operação realizada entre duas variáveis. Realiza a operação divisão e o resultado será a parte inteira da divisão.

Exemplo:

a :`=` (a mod b);

- ## Relacional
- - `&lt;` (menor que) - realiza comparação de uma ou mais variáveis.

Exemplo:

If (a `&lt;` 6) then

a `=` a + b;

- `` &lt;`= `` (menor ou igual) - realiza comparação de uma ou mais variáveis.

Exemplo:

If (a `` &lt;`= `` 5) then

a `=` a + b;

- `&lt;&gt;` (não igual / diferente) - realiza comparação de uma ou mais variáveis.

Exemplo:

If (a `&lt;&gt;` 7) then

a `=` a + b;

- `=` (igual) - realiza comparação de uma ou mais variáveis.

Exemplo:

If (a = 5) then

a = a + b;

- `&gt;` (maior que) - realiza comparação de uma ou mais variáveis.

Exemplo:

If (a `&gt;` 4) then

a `=` a + b;

- `` &gt;`= `` (igual maior que) - realiza comparação de uma ou mais variáveis.

Exemplo:

If (a `&gt;=` 4) then

a `=` a + b;

- Texto

- (concatenação) - junta as variáveis.

Exemplo:

variable1.text `:=` 'Maker';

variable2.text `:=` 'Softwell';

variable3.text `:=` variable1.text + variable2.text;

## Tipos Enumerados

- Boolean
- - False (falso) - declara a variável com o valor ”falso”.

Exemplo:

variable1.value `:=` False;

- True (verdadeiro): declara a variável com o valor ”verdadeiro”.

Exemplo:

variable1.value `:=` True;
