---
title: "Spinner - Criar"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Essa função tem por objetivo criar um elemento Spinner de acordo os parâmetros informados.

## Parâmetro(s)

1. Referência do Elemento Pai. (Variante, Opcional).
2. Classe adicional. (Letras, Opcional)

## Retorno

Referência do Elemento. (Variante)

## Observações

1. Quando o primeiro parâmetro não é informado o mesmo assume como valor o corpo da pagina.
2. Para maiores informações sobre Spinners e as classes adicionais acessar: https://getbootstrap.com/docs/4.4/components/spinners/
3. Essa função bloqueia o acesso do elemento pai, ou seja, o elemento ficará bloqueado até que a função "Spinner - Remover" seja executada.
4. O 2° parâmetro pode receber, por exemplo: "spinner-border text-primary".
