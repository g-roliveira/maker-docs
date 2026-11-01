---
title: "Retornar Constante do Sistema"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Essa função retorna uma constante do sistema.

Parâmetro:
1. Nome da constante do sistema.

## Retorno

Valor da constante do sistema. (Variante)

## Observações

1. Devem ser colocadas os nomes das funções, e não a chamada dela.
2. Para obter algumas constantes do sistema é necessário consultar os arquivos definido na pasta config do Webrun:
Constante database:&lt;propriedade&gt; consultar o arquivo database.xml.
Constante sistema:&lt;grupo&gt;:&lt;chave&gt; consultar o arquivo config.xml. Para mais informações consulte o link do manual: "https://manual.softwell.com.br/#/arquivo_config_xml?id=arquivo-configxml".
3. Para obter uma propriedade avançada do projeto, utilize a constante "Avancadas:NomeDaPropriedade". Ex.: "Avancadas:RedirecionarAoExpirar".
4. Para maiores informações sobre todas as constantes do sistema consulte o link do manual: "https://manual.softwell.com.br/#/usando_funcoes_predefinidas_em_consultas?id=usando-fun%c3%a7%c3%b5es-predefinidas-em-consultas".

## Exemplos

1. Assumindo como parâmetro a constante "sistema" o retorno da função será a sigla do sistema.
2. Assumindo como parâmetro sistema:Agendador:Tempo o retorno será 600000 valor padrão definido.
