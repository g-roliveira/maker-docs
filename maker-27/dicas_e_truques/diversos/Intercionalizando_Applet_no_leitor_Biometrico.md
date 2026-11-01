---
title: "Internacionalizando Applet no leitor Biométrico"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/diversos/Intercionalizando_Applet_no_leitor_Biometrico.htm"
---

# Internacionalizando Applet do Leitor Biométrico

A partir do Webrun 2.5.0.30, a Softwell Solutions disponibilizou uma nova versão do applet do leitor biométrico internacionalizado. Com isto, o applet irá se apresentar em inglês ou português, de acordo com a língua selecionada no seu sistema.

Para visualizar as alterações, devem-se seguir alguns passos:

1. Parar o servidor de aplicações.

2. Excluir os arquivos temporários do JAVA.

Painel de Controle -> Java

![image1109.jpg](../../image1109.jpg)

Na aba General, verifique as configurações dos arquivos temporários do JAVA clicando em Settings.

Então será aberta uma nova janela de configurações de arquivos temporários.

![image1110.jpg](../../image1110.jpg)

Clique em "Delete Files...". Após isso, o applet terá sido removido com sucesso.

3. Excluir a pasta NBIo do usuário corrente.

Exclua a pasta C:/Documents and Settings/usuário/NBIo

4. Inicie novamente o servidor de aplicações.

Após isso, o applet internacionalizado estará disponível.
