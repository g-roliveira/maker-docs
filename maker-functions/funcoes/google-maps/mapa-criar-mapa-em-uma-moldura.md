---
title: "Mapa - Criar Mapa em uma Moldura"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=64"
---

**Categoria:** [Google Maps](../../categorias/google-maps)

**Compatibilidade:** Cliente

## Descrição

Esta função cria um mapa na moldura especificada.

## Parâmetro(s)

1. Formulário.
2. Moldura. (Componente)
3. Zoom. (Inteiro, Opcional)
4. Latitude. (Fracionado)
5. Longitude. (Fracionado)
6. Tipo do Mapa (hybrid, roadmap, satellite ou terrain). (Letras)
7. Objeto JSON contendo as configurações do Mapa. (Variante, Opcional) (Ver observação 4)
8. ID do Mapa (Letras, Opcional) (Requerido caso haja necessidade de criar marcadores) (Valor padrão: 'mapa') (Ver Observação 5)

## Retorno

Mapa Criado. (Variante)

## Observações

1. Utilize a função "Mapa - Importar biblioteca" antes de utilizar esta função.
2. Por determinação da API do GoogleMaps, é recomendado que o Mapa seja criado em um elemento visível na tela. Caso seja necessário criar um Mapa em uma Aba que não esteja ativa, basta utilizar o evento 'Ao Clicar na Aba' e realizar as operações desejadas.
3. As configurações desejadas podem ser obtidas através do link a seguir: https://mapstyle.withgoogle.com
Após configurar o Mapa no link acima, o mesmo devolve um JSON que será semelhante ao código abaixo. Caso o retorno não seja semelhante ao disponível abaixo, copie
o modelo abaixo e atualize apenas a chave "styles".
&#123;
"center": &#123;"lat": -33.86, "lng": 151.209&#125;,
"zoom": 13,
"mapTypeControl": false,
"disableDefaultUI": true,
"styles": [&#123;
"featureType": "poi",
"stylers": [&#123;"visibility": "off"&#125;]
&#125;,
&#123;
"featureType": "transit",
"elementType": "labels.icon",
"stylers": [&#123;"visibility": "off"&#125;]
&#125;]
&#125;
4. Após 21 de Fevereiro de 2024 a Google descontinuou os marcadores antigos do Google Maps e adicionou marcadores novos, para que seja possível utilizar os novos marcadores, é necessário definir um ID para o Mapa, nesse caso o 8º(oitavo) parâmetro.
Caso não seja informado nenhum valor no 8º(oitavo) parâmetro, por padrão, o ID do mapa será 'mapa'.
