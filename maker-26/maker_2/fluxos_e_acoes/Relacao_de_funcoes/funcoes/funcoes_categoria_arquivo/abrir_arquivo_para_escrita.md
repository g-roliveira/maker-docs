---
title: "Abrir arquivo para escrita"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_arquivo/abrir_arquivo_para_escrita.htm"
---

Descrição:

Abre um arquivo para a edição e retorna uma referência para o arquivo.

Parâmetros:

1. Identificação física,  diretório do arquivo que deseja editar.

2. Falso, para abrir o arquivo para edição sobrepondo o seu conteúdo original, ou verdadeiro, para abrir e apenas inserir novos dados ao conteúdo existente.

![image1179.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1179.gif)

Retorno:

Referência para o arquivo. (Variante)

Observação:

Caso o arquivo não exista, ele será criado automaticamente.

Exemplos:

1. Assumindo os parâmetros como "\\servidor\maquina\diretorio\exemplo.txt" (Letras) e "Verdadeiro" (Lógico), o retorno seria a

referência para o arquivo exemplo.txt, sem apagar o conteúdo existente.

2. Assumindo os parâmetros como "c:/softwellmaker.txt e "Falso", o retorno seria a referência para o arquivo maker.txt,

sobrepondo o conteúdo existente.

Nome real:

ebfFileOpenToWrite

Compatibilidade:

Banco de dados e Servidor
