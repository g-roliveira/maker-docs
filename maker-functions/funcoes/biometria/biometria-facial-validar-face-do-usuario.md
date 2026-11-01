---
title: "Biometria Facial - Validar Face do Usuário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=25"
---

**Categoria:** [Biometria](../../categorias/biometria)

**Compatibilidade:** Cliente

## Descrição

Esta função realiza três validações de segurança antes de seguir para a autenticação do usuário, sendo elas:

1. Detecção Facial: Garante que há um rosto humano na câmera.
2. Posicionamento: Exige que o rosto esteja centralizado e na distância correta.
3. Prova de Vida (Liveness): Aguarda uma piscada de olhos para confirmar a presença física.

Parâmetro:
1. Flluxo servidor que será executado após a captura. (Fluxo)

## Retorno

Não possui.

## Observações

1. Após a validação bem-sucedida, o componente captura a imagem em Base64
e submete automaticamente para o Fluxo (Regra) de servidor informado no parâmetro.
