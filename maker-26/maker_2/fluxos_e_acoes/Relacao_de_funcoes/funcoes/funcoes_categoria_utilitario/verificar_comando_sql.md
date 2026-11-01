---
title: "Verificar Comando SQL"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/verificar_comando_sql.htm"
---

Descrição:

Função usada para verificar se um comando em SQL está correto ou não.

Parâmetros:

1. Consulta. (Comando SQL)

2. Conexão (Variante) (Opcional)

![image1630.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1630.gif)

Retorno:

Caso exista, retorna o erro encontrado no comando SQL, caso contrário, retornará o valor nulo.

Observação:

O retorno é nulo ou mostra a mensagem de erro do comando SQL.

Exemplo:

1. Use a função Verificar Comando SQL.

2. Passe como 1º parâmetro uma constante do tipo letras com a consulta. (ex: select * from fr_acao)

3. Atribua o valor de retorno a uma variável do tipo letras.

Nome Real:

ebfValidSQLCommand

Compatibilidade:

Servidor
