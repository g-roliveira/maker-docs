---
title: "Mapa - Desenhar Rota Dinâmica"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Esta função traça rota entre dois pontos.

## Parâmetro(s)

1. Mapa. (Variante)
2. Origem Latitude. (Letras)
3. Origem Longitude. (Letras)
4. Destino Latitude. (Letras)
5. Destino Longitude. (Letras)
6. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING). (Letras)
7. Ícone. (Variante) (Ver Observação 3)
8. Posição Inicial do Ícone na Rota. (Inteiro) (Ver Observação 4)
9. Flexibilidade do Ícone? (Define se o ícone deve rotacionar de acordo com a rota) (Lógico)
10. Cor da Linha. (Hexadecimal ou constante Cor);
11. Opacidade da Linha (Ex: 0.3, 0.5 1.0, quanto mais próximo de 0, mais transparente fica). (Letras)
12. Callback que receberá o objeto de resposta do traçado. (Fluxo)
13. Lista de parâmetros adicionais. (Variante, Opcional)
14. Callback de erro. (Fluxo)
15. Lista de parâmetros adicionais para o callback de erro. (Variante, Opcional)
16. Lista de pontos. (Variante, Opcional)

## Retorno

Uma lista contendo Referência da rota traçada.

## Observações

1. O 1º Parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura".
2. As coordenadas precisam ter coerência para que a rota seja traçada.
3. O 7º Parâmetro é o retorno da função "Mapa - Criar Ícone Para Rota Dinâmica".
4. Posição do ícone na rota, sendo 0 a origem e 100 o destino.
5. O callback de erro recebe no 1º parâmetro o status referente ao erro.
