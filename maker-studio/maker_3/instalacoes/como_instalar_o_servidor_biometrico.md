---
title: "Como instalar o servidor Biométrico"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/instalacoes/como_instalar_o_servidor_biometrico.htm"
---

Para utilizar o recurso de Biometria, é necessário instalar o Servidor de Digitais. Esses recurso esta disponível para uso em um sistema operacional Windows 8 ou superior e podem ser obtidos [**clicando aqui**](http://download.softwell.com.br/suporte/Instaladores/Servidor_de_Digitais.zip)

.

As etapas a serem seguidas para a instalação são:

1. Instale o ![servidor_digitais.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/servidor_digitais.png) na mesma máquina onde se localiza o servidor de banco de dados utilizado no projeto.
2. Siga os passos do assistente de instalação.
3. Reinicie as máquinas para que a instalação surta efeito.

Observações:

1. Os arquivos Digital.FDB, Digital.FID e DB.INI, que ficam contidos no diretório do servidor de digitais, devem ser assegurados por backups constantes, de preferência diário. Isso é responsabilidade do usuário. Lembramos que esses arquivos contém informações da digital que é associada a um número (é o mesmo número que é armazenado no campo selecionado na propriedade Impressão Digital do componente [Imagem](../formulario/componentes/imagem) quando este é utilizado para obtenção de impressão digital).
2. Lembramos que o Servidor de Digitais deve ser instalado no mesmo Servidor de Banco de dados utilizado no projeto.
