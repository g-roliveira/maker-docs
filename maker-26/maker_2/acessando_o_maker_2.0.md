---
title: "Acessando o Maker 2.6"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/acessando_o_maker_2.0.htm"
---

De acordo com a instalação, o usuário pode confirmar a criação de atalhos para o Maker na Área de Trabalho e a criação de um menu a partir do botão Iniciar do Windows.

![image1311.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1311.jpg)

Após a instalação do Maker, é criada a estrutura de pastas descritas no tópico [Informações adicionais da estrutura do Maker](../estrutura_maker_e_webrun/informacoes_adicionais_da_estrutura_do_maker).

## Tela Bem-Vindo

![image832.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image832.jpg)

Inicialmente o usuário deve selecionar uma das opções:

- Idioma - selecione o idioma que será utilizado pela ferramenta. Basta clicar na bandeira representando um dos três idiomas possíveis: Português, Inglês ou Espanhol. Após selecionar o idioma, o usuário deve reiniciar o Maker para que a escolha tenha efeito;
- - Observação: O idioma para execução do Maker estará disponível apenas para a versão Enterprise.
- ![image201.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image201.jpg) Novo Projeto - permite a criação de um novo sistema no Maker. Observação entre as versões do Maker:
- na versão Enterprise: é possível a criação de projetos utilizando todos os bancos de dados homologados;
- na versão Professional: é possível a criação de projetos utilizando todos os bancos de dados homologados, exceto o Oracle;
- na versão Standard: é possível a criação de projetos utilizando os bancos de dados PostgreSQL, MySQL e Firebird.

- ![image16.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image16.jpg)Abrir Projeto - permite abrir um sistema criado no Maker.  Deve-se observar que:
- - a versão  Standard apresentará restrições de acesso de múltiplos usuários ao mesmo projeto;
  - os projetos desenvolvidos na versão Standard, uma vez acessados pela versão Professional ou Enterprise, não poderão ser mais acessados pela Standard. O mesmo ocorre para um projeto desenvolvido na versão Professional, ao ser acessado pela versão Enterprise;

Para mais informações sobre as características das versões do Maker, acesse [Recursos e Características das Versões do Maker](../recursos_e_caracteristicas_das_versoes_do_maker).

- ![image17.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image17.jpg) Ajuda - ativa o Manual do Maker.
- ![image18.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image18.jpg) Sair - sai do Maker.
- Quadro Projetos Recentes - permite acessar os sistemas recentemente abertos no Maker ;
- Configurações - acessa opções de conexões do Maker e detalhes sobre atualizações. Apesar de a tela possuir opções reduzidas, observe detalhes no item Configurações do menu Projetos.

Observações:

1. Após a efetuação de login em um projeto criado, o Maker importará automaticamente para o banco de dados no qual foi criado o projeto as funções contidas no arquivo "api_x.x.x.frz" (este arquivo fica na pasta do idioma que está sendo utilizado no Maker, dentro da estrutura de pastas C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Resources).
2. Após a atualização do Maker, caso o usuário acesse um projeto já existente e a última versão do arquivo que contém as funções que foi importado automaticamente pelo Maker no momento da criação do projeto for inferior à nova versão do arquivo que contém as funções, então o Maker mostra uma mensagem questionando o usuário se as funções contidas no novo arquivo devem ser importadas.

Criação do Sistema - Este vídeo demonstra a criação de um novo projeto utilizando assistente.
