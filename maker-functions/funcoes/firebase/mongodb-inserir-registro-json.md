---
title: "MongoDB - Inserir Registro (JSON)"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=72"
---

**Categoria:** [Firebase](../../categorias/firebase)

**Compatibilidade:** Servidor

## Descrição

Insere um documento ou registro.

## Parâmetro(s)

1. Referência da conexão. (Variante)
2. Nome do Banco de Dados, Ex: "BD_TESTE". (Letras)
3. Nome da coleção, Ex:"Funcionário". (Letras)
4. Documento a ser inserido (Texto em formato JSON). (Variante)

## Retorno

ObjectID. (Variante)

## Exemplo

Documento a ser inserido
- JSON : Texto em formato de JSON deve ser da seguinte forma:
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
