---
title: "Tabela - Inserir célula em uma linha"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_tabela/tabela_inserir_celula_em_uma_linha.htm"
---

Descrição:

Insere uma célula em uma linha

Parâmetros:

1. Formulário

2. Linha

3. Largura da célula (Opcional)

4. Alinhamento (Opcional)

    Valores aceitados:

       + left (Esquerda)

       + center (Centro)

       + right (Direita)

5. Cor do fundo (Opcional)

6. Cor da borda (Opcional)

7. Quantidade de linhas ocupadas (Opcional)

8. Quantidade de colunas ocupadas (Opcional)

9. Conteúdo (Opcional)

10. Folha de estilo (Opcional) Ex: "background-color: #000000"

![image1292.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1292.jpg)

Retorno:

GUID da célula

Observações:

1. O parâmetro dois é obtido com a função "Tabela - Inserir linha em uma tabela"

2. Para a utilização da função no servidor é necessário passar o parâmetro "Linha" em branco e ter utilizado a função "Tabela - Inserir linha em uma tabela"  antes. A célula irá ser inserida na útima linha criada na tela.

Nome Real:

ebfHTMLTableCreateCell

Compatibilidade:

Cliente e Servidor
