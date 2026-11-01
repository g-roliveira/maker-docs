---
title: "Incluir Dados Registro Corrente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=30"
---

**Categoria:** [Navegação](../../categorias/navegacao)

**Compatibilidade:** Todas as camadas

## Descrição

Inclui os dados como um novo registro no banco.

Parâmetro:
Não possui.

## Retorno

Não possui.

## Observações

1. O uso desta função tem uma melhor performance quando usada em regras clientes.
2. Caso ocorra um erro durante a inserção dos dados no banco, não é possível capturar a exceção com as funções
try/catch, pois a função simula a gravação de um registro que está sendo editado e, em seguida, gravado no formulário.
Caso deseje tratar as exceções, deve ser utilizada a função "Executar Atualização".
