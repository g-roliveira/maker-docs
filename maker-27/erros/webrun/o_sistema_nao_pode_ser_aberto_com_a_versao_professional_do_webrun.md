---
title: "O sistema não pode ser aberto com a versão Professional do Webrun!"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/erros/webrun/o_sistema_nao_pode_ser_aberto_com_a_versao_professional_do_webrun.htm"
---

![image1774.jpg](../../image1774.jpg)

Causa: Isso ocorre, quando o Maker não armazena o valor correto durante a criação do novo projeto.

Solução:

Isso ocorre, quando o Maker não armazena o valor correto durante a criação do novo projeto.

Siga os passos:

1. Feche o Maker;
2. Abra o Windows Explorar e acesse a pasta C:\Documents and Settings\&lt;usuário&gt;\Configurações locais\Dados de aplicativos\Softwell Solutions\Maker 2;
3. Abra o arquivo maker2.ini
4. Adicione a linha AllowFixSysCheck=1 no agrupamento [Maker]:

![image1775.jpg](../../image1775.jpg)

5. Salve a modificação executada no arquivo;
6. Em seguida, por meio do Maker, abra o projeto no qual houve o problema do não reconhecimento da versão e ative o item Lista de Sistemas do menu Projeto. Assim que a tela aparecer, navegue até o sistema no qual houve o problema e clique sobre o botão Atualizar a licença para a versão Enterprise.

![image1776.jpg](../../image1776.jpg)

7. Por fim, reinicie o Webrun para que este reconheça as novas configurações do projeto.
