---
title: "Como instalar o servidor Biométrico"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/instalacoes/como_instalar_o_servidor_biometrico.htm"
---

Para utilizar o recurso de Biometria, é necessário instalar o Servidor de Digitais e o Driver do dispositivo. Esses dois recursos estão disponíveis para uso em um sistema operacional Windows 2000 ou superior e podem ser obtidos no diretório ..\DVD_IMAGE\Support\Servidor de Digitais do DVD de Instalação do Maker 2.5.

![image9.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image9.jpg)

O modelo de identificador biométrico homologado atualmente é o Nitgen FingKey Hamster. Para maiores informações, acesse o site do fabricante:

&lt;http://www.nitgen.com.br/Produtos/HamsterI.aspx&gt;)

As etapas a serem seguidas para a instalação são:

1. Instale no servidor (máquina onde se localiza o banco de dados utilizado no projeto) o ![image7.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image7.gif). A instalação será quase automática;
2. Abra o arquivo compactado ![image8.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image8.gif).
3. Selecione a pasta Software.
4. Execute o arquivo ![image9.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image9.gif).
5. Siga os passos do assistente de instalação.
6. Repita os procedimentos do passo 2 ao 5 em todas as máquinas cliente.
7. Reinicie as máquinas para que a instalação surta efeito.

Observações:

1. O Maker não dá suporte à leitura biométrica em sistemas operacionais de 64 bits.
2. Os arquivos Digital.FDB, Digital.FID e DB.INI, que ficam contidos no diretório do servidor de digitais, devem ser assegurados por backups constantes, de preferência diário. Isso é responsabilidade do usuário. Lembramos que esses arquivos contém informações da digital que é associada a um número (é o mesmo número que é armazenado no campo selecionado na propriedade Impressão Digital do componente [Imagem](../formulario/componentes/imagem) quando este é utilizado para obtenção de impressão digital).

Instalando Servidor Biométrico - Este vídeo demonstra como instalar o servidor biométrico.
