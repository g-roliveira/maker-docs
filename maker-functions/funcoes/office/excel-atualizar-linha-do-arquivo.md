---
title: "Excel - Atualizar Linha do Arquivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=71"
---

**Categoria:** [Office](../../categorias/office)

**Compatibilidade:** Servidor

## Descrição

Essa função atualiza uma linha do arquivo de acordo os parâmetros informados.

## Parâmetro(s)

1. Referência para o arquivo. (Variante)
2. Lista com os dados a serem atualizados. (Variante)
3. Nome da folha. (Letras, Opcional)
4. Número da linha. (Inteiro)
5. Formatação. (Letras, Opcional) (Ver Observação 6)

## Retorno

Não possui.

## Observações

1. Caso na lista seja passado um parâmetro nulo, a célula referente à este parâmetro não será alterado, desta forma, para atualizar apenas uma ou mais colunas do arquivo, basta passar os demais parâmetros da lista como nulo, ex.: [null, "Softwell", "Maker", null, null], assim, apenas as colunas 2 e 3 serão atualizadas em um linha com cinco colunas.
2. Esta função apenas altera as células em que o parâmetro é passado, diferente da função "Excel - Preencher Arquivo" que substitui a linha inteira por uma nova.
3. O terceiro parâmetro, referente ao nome da folha a ser acessada, é opcional. Caso não passado, o arquivo fará atualização da primeira folha.
4. Após a atualização do arquivo, recomenda-se utilizar a função "Excel - Salvar Arquivo", caso contrário nenhuma mudança será salva.
5. Para inserir data, utilize a função Hoje ou Criar Data sem formatação.
6. O quinto parâmetro formatará uma célula do tipo Data, caso não seja informada a formatação a mesma assumirá o valor "dd/MM/yyyy".

## Exemplo

Assumindo os parâmetros como a referência do arquivo, uma lista com os elementos ["Roger", "2", "", "5"], "Folha 1" e 3, a linha 3 da "Folha 1" será atualizada apenas com os valores passados sem alterar outras células.
