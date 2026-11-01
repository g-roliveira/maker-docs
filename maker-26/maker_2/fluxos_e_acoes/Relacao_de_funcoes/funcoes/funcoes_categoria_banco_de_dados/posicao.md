---
title: "Posição"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/posicao.htm"
---

Descrição:

Função usada para obter em qual posição corrente da consulta passada como parâmetro. Vide descrições das funções (Próximo Registro), (Primeiro Registro), (Último Registro) e (Registro Anterior).

Parâmetros:

1. Consulta (variável tabela).

![image1430.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1430.gif)

Retorno:

Retorna em a posição do registro corrente (primeiro registro da consulta retorna 1).

Exemplo:

1. Define uma consulta com a função (Abrir Consulta), usando o Wizard SQL.

2. Como essa função tem o retorno uma variável do tipo tabela, pode-se usá-la diretamente na função (Posição). Insere a cima a função (Posição) e clica no botão salvar.

3. Atribui o retorno a uma variável do tipo inteira.

4. Observe que a variável escolhida receberá o retorno da função (Posição).

Observações:

1. Uma consulta que não sofreu nenhuma alteração, retornará a posição corrente 1.

2. A depender do banco de dados, a posição inicial pode variar.

Nome Real:

ebfResultSetRecNo

Compatibilidade:

Banco de dados e Servidor
