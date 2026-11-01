---
title: "$_FORMULARIO_DO_SISTEMA"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/_formulario_do_sistema.htm"
---

O formulário denominado $_FORMULARIO_DO_SISTEMA é criado automaticamente pelo Maker para guardar as propriedades do sistema utilizado.

Neste formulário, as seguintes propriedades são armazenadas:

1. Propriedades da área de trabalho.
2. Formulários, relatórios e fluxos externos.
3. Conexões adicionais.
4. Fluxos Web.
5. Webservices.
6. Versão da API de funções.

As informações acima são armazenadas na tabela FR_PROPRIEDADE que faz junção com a tabela FR_FORMULARIO onde os formulários estão armazenados.

Para cada sistema numa mesma base de dados, existirá um formulário $_FORMULARIO_DO_SISTEMA específico.

Para visualizar as propriedades com os seus respectivos valores, utilize o select abaixo:

select

   p.pro_nome as propriedade,

   p.pro_valor as valor

from

   fr_propriedade p

join

   fr_formulario f on f.frm_codigo = p.frm_codigo

where

   f.frm_descricao = '$_FORMULARIO_DO_SISTEMA'

Caso este formulário seja apagado, o mesmo será recriado no próximo acesso ao sistema.
