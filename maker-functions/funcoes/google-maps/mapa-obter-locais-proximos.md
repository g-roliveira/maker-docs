---
title: "Mapa - Obter Locais Próximos"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Essa função retorna de forma assíncrona uma lista de locais próximos de acordo a localização e o filtro informado.

## Parâmetro(s)

1. Objeto Mapa. (Variante)
2. Latitude. (Letras)
3. Longitude. (Letras)
4. Raio. (Inteiro, Opcional)
5. Filtro. (Letras) (Ver observação 3)
6. Criar marcador? (Lógico)
7. URL do ícone. (Letras, Opcional)
8. Fluxo de Callback.

## Retorno

Não possui;

## Observações

1. O 1° parâmetro é o retorno da função Mapa - Criar Mapa em uma Moldura.
2. O Raio (2° parâmetro) é definido em km, caso não seja informado o mesmo assumirá o padrão de 1km.
3. Para consultar os tipos suportados consultar https://developers.google.com/places/supported_types?hl=pt-br.
4. O fluxo definido no 8º parâmetro deve conter dois parâmetros que receberão o retorno da função:
4. 1. 1º Lista de JSON com informações dos locais.
4. 2. 2º Lista com as referências dos marcadores, nulo caso o 6º parâmetro esteja definido como falso.
5. A função possuí um limite de 50 km para o raio informado.

## Exemplo

Assumindo o filtro no 5º Parâmetro (airport, hospital, police e etc.).
