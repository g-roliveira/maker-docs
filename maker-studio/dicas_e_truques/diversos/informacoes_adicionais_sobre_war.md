---
title: "Informações adicionais sobre os arquivos gerados dentro de um .War"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/diversos/informacoes_adicionais_sobre_war.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Diversos &gt;&gt; Informações adicionais sobre os arquivos gerados dentro de um .War

Segue uma breve explicação dos arquivos gerados dentro de um .WAR. Com essas informações, o usuário pode fazer uma simples atualização (cor de um componente, por exemplo) sem ter que enviar todo o conteúdo do .WAR novamente.

## Referente ao Sistema

• Diretório - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\

• Classe - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\&lt;sigla&gt;.CLASS

• Propriedades - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\&lt;sigla&gt;.XML

• Ações - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\&lt;sigla&gt;.actions.XML

• Tipos de Dados - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\dataTypes.XML

• Dicionário de Dados - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\dictionary.XML

• Menu Principal - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\menu.XML

## Referente a Formulários

• Diretório - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\forms\&lt;formulário&gt;

• Classe - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\forms\&lt;formulário&gt;\&lt;formulário&gt;.CLASS

• Propriedades - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\&lt;formulário&gt;\&lt;formulário&gt;.XML

• Ações - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\&lt;formulário&gt;\&lt;formulário&gt;.actions.XML

## Referente a Componentes

• Diretório - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\forms\&lt;formulário&gt;

• Classe - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\forms\&lt;formulário&gt;\&lt;componente&gt;.CLASS

• Propriedades - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\&lt;formulário&gt;\&lt;componente&gt;.XML

• Ações - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\&lt;formulário&gt;\&lt;componente&gt;.actions.XML

## Referente a Regras

Referente a Regras do tipo Servidor

• Diretório - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\rules\

• Classe - &lt;sistema&gt;\WEB-INF\classes\wfr\com\systems\system_&lt;sigla&gt;\rules\&lt;regra&gt;.CLASS

Referente a Regras do tipo Cliente

• Diretório - &lt;sistema&gt;\jsRule\system_&lt;sigla&gt;\

• Arquivo de API - &lt;sistema&gt;\jsRule\system_&lt;sigla&gt;\webrunFunctions.js

• Todas as Regras - &lt;sistema&gt;\jsRule\system_&lt;sigla&gt;\webrunRules.js.
