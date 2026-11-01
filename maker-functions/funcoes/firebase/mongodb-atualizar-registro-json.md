---
title: "MongoDB - Atualizar Registro (JSON)"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Servidor

## Descrição

Atualizar documento ou registro.

## Parâmetro(s)

1. Referência da conexão. (Variante)
2. Nome do Banco de Dados. Ex: "BD_TESTE"; (Letras)
3. Nome da coleção. Ex:"Empresa". (Letras)
4. Critério de busca do documento a ser alterado (Mapa). (Variante, Opcional)
5. Dados a serem atualizados (Texto em formato JSON). (Letras)

## Retorno

Não possui.

## Observação

Se o parâmetro de critério for omitido, todos os documentos da coleção serão atualizados.

## Exemplo

Critério:
* MAPA: "Criar objeto mapa com parâmetros" com a função "criar lista a partir do elementos", informando sempre chave e valor.
* Os operadores mais conhecidos (&gt;, &gt;=, &lt;, &lt;=, !=, in, !in, or, and, not e nor), podem ser utilizados no critério de busca.
* Caso deseje algum operador diferente do citado acima, consulte a documentação: https://docs.mongodb.com/manual/reference/operator/query/
Documento novo:
&#123;
"empresa": "Softwell Solutions",
"tel": "+55 (71) 2108 3800",
"endereco": &#123;
"bairro": "Trobogy",
"cep": "41.730-101",
"complemento": "Parque tecnológico da Bahia, Salas 204, 205 e 206 ",
"logradouro": " Edf. Tecnocentro - R. Mundo 121 - Trobogy",
"cidade": "Salvador",
"uf": "BA"
&#125;
&#125;
