---
title: "Jasper - Gerar Relatório"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=62"
---

**Categoria:** [Relatório](../../categorias/relatorio)

**Compatibilidade:** Servidor

## Descrição

Esta função gera um arquivo de saída a partir de um relatório Jasper (JRXML).

## Parâmetro(s)

1. Caminho para o arquivo JRXML. (Letras) (Ver observação 1)
2. Caminho para o arquivo de saída. (Letras) (Ver observação 1)
3. Mapa de Parâmetros. (Variante, Opcional)
4. Formato do arquivo de saída. (Letras)
5. Atualizar arquivo binário JASPER? (Lógico, Opcional)
6. Abrir arquivo gerado? (Lógico, Opcional)
7. Conexão adicional. (Variante, Opcional)
8. Ordenação. (Variante, Opcional)

## Retorno

Não possui.

## Observações

1. O 1º e 2º parâmetro deve caminho relativo a partir do contexto ou absoluto do seus respectivos parâmetros.
1. Formatos suportados no 4º Parâmetro:
PDF, HTML, TXT, RTF, XML, XLSX, DOCX, PPTX, JPG, PNG, GIF, ODS, ODT e CSV.
2. Caso não exista o arquivo binário JASPER, será criado um independente da opção escolhida no parâmetro 5.
3. A ordenação deve estar no formato: campo1|[0|1][;campo2|[0|1][;campoN|[0|1]]], sendo:
"0" descendente e "1" ascendente. (Opcional) Exemplo: cod_pessoa|1;nome|0
