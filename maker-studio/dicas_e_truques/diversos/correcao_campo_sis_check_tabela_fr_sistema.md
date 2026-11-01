---
title: "Correção do campo SIS_CHECK da tabela FR_SISTEMA"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/diversos/correcao_campo_sis_check_tabela_fr_sistema.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Diversos &gt;&gt; Correção do campo SIS_CHECK da tabela FR_SISTEMA

Este recurso é aplicado para ajustar o valor do campo SIS_CHECK, da tabela FR_SISTEMA, quando estiver aparecendo a mensagem que não pode abrir um projeto:

Erro: O sistema não pode ser aberto com a versão Professional do Webrun!

![image428.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sis2.png)

Isso ocorre, quando o Maker não armazena o valor correto durante a criação do novo projeto.

Siga os passos:

1. Feche o Maker;
2. Abra o Windows Explorar e acesse a pasta C:\Documents and Settings\&lt;usuário&gt;\Configurações locais\Dados de aplicativos\Softwell Solutions\Maker 3;
3. Abra o arquivo maker3.ini;
4. Adicione a linha AllowFixSysCheck=1 no agrupamento [Maker]:

![image429.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sis3.png)

5. Salve a modificação executada no arquivo;
6. Em seguida, por meio do Maker, abra o projeto no qual houve o problema do não reconhecimento da versão e ative o item Lista de Sistemas do menu Projeto. Assim que a tela aparecer, navegue até o sistema no qual houve o problema e clique sobre o botão Atualizar a licença para a versão 3.

![image430.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sis4.png)

7. Por fim, reinicie o Webrun para que este reconheça as novas configurações do projeto.
