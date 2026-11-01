---
title: "Componente Integração"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/Mapa_Importar_Callback.html"
---

# Chamada de um fluxo de Callback na função "Mapa - Importar Biblioteca"

A chamada de um fluxo de Callback evita erros no processo de criação do Mapa.

A utilização dessa função era recomendada no evento 'Ao Entrar' do formulário devido ao tempo de importação dos Script's, com a utilização do fluxo de Callback o procedimento pode ser feito a qualquer momento, e mais, sem possibilidade de erros relacionados à falta de bibliotecas. Veja abaixo um exemplo de como utilizar essa funcionalidade:

### Utilizando a função Mapa - Importar Biblioteca

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/MapaImportarBibliotecaFluxo.png)

No processamento acima utilizamos a função passando a chave do mapa(opcional), o fluxo de Callback(este fluxo só será executado quando a importação do script for concluída) e a lista de parâmetros do fluxo(opcional), nesse exemplo passamos apenas a latitude e longitude. Veja o exemplo:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/MapaImportarBiblioteca.png)

### Fluxo de Callback (Este fluxo só será executado após a conclusão da importação das bibliotecas)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/MapaCriarMapaFluxo.png)

No processamento acima utilizamos a função 'Mapa - Criar Mapa na Moldura' utilizando os parâmetros passados pro fluxo.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/novidades/imagemnovos/MapaCriarMapa.png)
