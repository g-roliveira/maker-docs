---
title: "Arquivo ADMIN.XML"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/estrutura_maker_e_webrun/arquivo_admin_xml.htm"
---

Neste arquivo, é possível fazer a alteração do Login e da Senha do administrador que tem acesso às Configurações no Webrun. Este arquivo encontra-se na pasta C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\config.

![image767.gif](../image767.gif)

A alteração do Login ocorre na linha renomeando 'admin':

&lt;item-param&gt;admin&lt;/item-param&gt;

A alteração da senha ocorre na linha renomeando 'webrun':

&lt;item-param&gt;webrun&lt;/item-param&gt;

Observação: Depois que é feita a alteração, deverá reiniciar o Webrun.
