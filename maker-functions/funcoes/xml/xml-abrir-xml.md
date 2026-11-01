---
title: "XML - Abrir XML"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função cria um objeto XML passando como parâmetro o texto no formato em XML e atribui o objeto criado a uma
variável do tipo Variante.

## Parâmetro(s)

1. Texto em XML. (Letras)
2. Charset. (Letras, Opcional) (Servidor)

## Retorno

Objeto XML. (Variante)

## Observação

No 2º Parâmetro, deverá ser informado o charset do arquivo. Caso não seja passado o charset, a função adotará o charset corrente do Webrun.

## Exemplos

1. Assumindo o 1º parâmetro sendo:
&lt;?xml version="1.0" encoding="ISO-8859-1"?&gt;
&lt;CURSO&gt;
&lt;DISCIPLINA&gt;
&lt;OBJETIVO&gt;
Ensinar XML
&lt;/OBJETIVO&gt;
&lt;METODOLOGIA&gt;
Laboratório
&lt;/METODOLOGIA&gt;
&lt;AVALIACAO&gt;
3 provas
&lt;/AVALIACAO&gt;
&lt;/DISCIPLINA&gt;
&lt;/CURSO&gt;
O retorno será a criação do objeto XML.
2. Exemplos de Charset: UTF-8, ISO-8859-1.
