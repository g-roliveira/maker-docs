---
title: "Biometria"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/maker/biometria.htm"
---

Função Abrir Leitor Digital da Categoria Biometria.

Esta função ativa o leitor para a captura de uma digital.

Para utilizar o recurso de Biometria, é necessário ter dois campos na tabela do banco de dados. O primeiro campo do tipo inteiro vai corresponder ao código da digital e um outro campo do tipo Blob ou imagem (dependendo do banco de dados) vai corresponder de fato à digital.

Essa função recebe como parâmetro um Fluxo e nele é obrigatório que tenha um parâmetro de entrada (Código da Digital) que vai ser passado pela função.

Utilizando o recurso de Biometria:

1. Insira um componente Imagem no formulário.
2. Defina na propriedade Campo, o campo Blob (conteúdo da digital) e, na propriedade Impressão Digital, defina o campo inteiro (Código da Digital).
3. Ao clicar na imagem, o Leitor Digital vai ser ativado para a captura da digital.

Observação: Para utilizar o recurso de Biometria, é necessário instalar o Servidor de Digitais e o Driver do Dispositivo.

Utilizando a Função Abrir Leitor Digital - Esta vídeoaula demonstra de forma prática o uso da função Abrir Leitor Digital.
