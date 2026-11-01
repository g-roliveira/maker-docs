---
title: "Obter imagem da câmera ou galeria"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém a imagem da câmera ou galeria do dispositivo móvel.

## Parâmetro(s)

1. Fluxo que será executado caso a imagem seja obtida com sucesso.
2. Fluxo que será executado caso haja algum erro durante a execução da função.
3. Qualidade da imagem (1 a 100%). (Inteiro)
4. Tipo de Abertura. (Letras, Opcional)
0. Padrão: Será aberta uma caixa de diálogo padrão (permitindo a escolha de câmera ou galeria);
1. Câmera: A câmera será aberta diretamente;
2. Galeria: A galeria será aberta diretamente.
5. Seleção múltipla? (Apenas para o modo Galeria) (Lógico)

## Retorno

Não possui.

## Observações

1. O fluxo chamado no primeiro parâmetro, caso a imagem seja obtida com sucesso, receberá o caminho da imagem que foi gravada/obtida.
2. Se o fluxo chamado tiver o intuito de alterar o valor de um componente imagem, utilize a função "Alterar imagem do
componente".
3. A execução do fluxo não é interrompida com a chamada desta função.
## Observações

4. Caso seja informação Seleção Múltipla e seja informada a opção 2 (Galeria), o fluxo de sucesso receberá uma lista contendo um ou mais arquivos selecionados.
