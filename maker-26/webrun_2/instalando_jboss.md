---
title: "Instalando no JBOSS"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/webrun_2/instalando_jboss.htm"
---

Configuração
para Webrun funcionar corretamente
no JBOSS.

Edite $&#123;jboss.home&#125;/server/default/deploy/jboss-web.deployer/conf/web.xml
e adicione os seguintes parâmetros ao servlet
jsp:

&lt;init-param&gt;

  &lt;param-name&gt;compilerSourceVM&lt;/param-name&gt;

  &lt;param-value&gt;1.5&lt;/param-value&gt;

&lt;/init-param&gt;

&lt;init-param&gt;

  &lt;param-name&gt;compilerTargetVM&lt;/param-name&gt;

  &lt;param-value&gt;1.5&lt;/param-value&gt;

&lt;/init-param&gt;

Exemplo:

&lt;servlet&gt;

  &lt;servlet-name&gt;jsp&lt;/servlet-name&gt;

  &lt;servlet-class&gt;org.apache.jasper.servlet.JspServlet&lt;/servlet-class&gt;

  &lt;init-param&gt;

    &lt;param-name&gt;compilerSourceVM&lt;/param-name&gt;

    &lt;param-value&gt;1.5&lt;/param-value&gt;

  &lt;/init-param&gt;

  &lt;init-param&gt;

    &lt;param-name&gt;compilerTargetVM&lt;/param-name&gt;

    &lt;param-value&gt;1.5&lt;/param-value&gt;

  &lt;/init-param&gt;

 ...

&lt;/servlet&gt;
