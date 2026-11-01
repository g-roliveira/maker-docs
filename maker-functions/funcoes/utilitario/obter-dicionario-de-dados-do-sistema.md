---
title: "Obter Dicionário de Dados do Sistema"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Essa função retorna um objeto JSON contendo informações do dicionário de dados do sistema, como:
1. Nome da Tabela
2. Descrição da Tabela
3. Campo
4. Descrição
5. Valor Padrão

Parâmetro:
1. Ignorar tabelas padrões? (FR's) (Lógico).

## Retorno

Retorna um objeto JSON contendo as informações do dicionário de dados.

## Observações

1. O modelo do objeto JSON segue o formato abaixo:

&#123;
"dictionary_tables_name": &#123;
"mkr_pais": "Países"
&#125;,
"dictionary_tables_fields": &#123;
"mkr_pais": [
&#123;
"campo": "mkr_pas_id",
"descricao": "id",
"valorPadrao": ""
&#125;,
&#123;
"campo": "mkr_sof_nome",
"descricao": "País",
"valorPadrao": ""
&#125;
]
&#125;
&#125;

2. Quando a opção de ignorar as tabelas padrões for verdadeira, tabelas iniciadas com (fr_) serão ignoradas na obtenção das informações.
