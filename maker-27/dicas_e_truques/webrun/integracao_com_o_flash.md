---
title: "Integrando o Flash ao Webrun"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/webrun/integracao_com_o_flash.htm"
---

Adicione o diretório do Webrun em um editor de arquivos flash.

No Adobe Flash os passos são:

1. No menu Editar, clique em preferências ou utilize a tecla de atalho CTRL + U.
2. Selecione a categoria ActionScript e clique no botão "ActionScript 3.0 Configurações".
3. Adicione o diretório do Webrun ("C:\Arquivos de programas\Softwell Solutions\Maker 2.7\Webrun 2\tomcat\webapps\webrun").

No Webrun, apartir da versão 2.5.0.11, existe um arquivo chamado Webrun.as que se encontra na pasta flash no diretório dos arquivos do Webrun.

Neste arquivo, existem duas funções em actionScript, uma para executar regras na camada cliente e outra para executar regras na camada servidor.

Função para chamar regras na camada Cliente:

public static function executeClientRule(ruleName:String, ...ruleParams) : Object &#123;

 if (ExternalInterface.available) &#123;

try &#123;

  return ExternalInterface.call("executeFromActionScript", ruleName, ruleParams, false);

&#125; catch (error:SecurityError) &#123;

    trace("A SecurityError occurred: " + error.message + "\n");

&#125; catch (error:Error) &#123;

    trace("An Error occurred: " + error.message + "\n");

&#125;

    &#125; else &#123;

trace("External interface is not available for this container.");

    &#125;

return null;

&#125;

Esta função recebe, como parâmetro, o nome do fluxo + parâmetros se for necessário.

Função para chamar regras na camada Servidor:

public static function executeServerRule(ruleName:String, ...ruleParams) : Object &#123;

     if (ExternalInterface.available) &#123;

try &#123;

  return ExternalInterface.call("executeFromActionScript", ruleName, ruleParams, true);

&#125; catch (error:SecurityError) &#123;

    trace("A SecurityError occurred: " + error.message + "\n");

&#125; catch (error:Error) &#123;

    trace("An Error occurred: " + error.message + "\n");

&#125;

    &#125; else &#123;

trace("External interface is not available for this container.");

    &#125;

return null;

&#125;

Esta função recebe como parâmetro o nome do fluxo + parâmetros se for necessário.

Código exemplo de uma tela em flash :

package &#123;

    import flash.webrun.*;

    import flash.display.MovieClip;

    import flash.text.TextField;

  public class MinhaClasse extends MovieClip &#123;

   public function MinhaClasse() &#123;

    BOTAO1.addEventListener("click",function() &#123;

  TEXTAREA1.text = "" + Webrun.executeServerRule("Todos os Formulários",TEXTINPUT1.text)

&#125;);

   &#125;

  &#125;

&#125;

Nesse exemplo, foi chamada a função executeServerRole que está na classe Webrun no arquivo Webrun.as e, como parâmetro, foi passado o nome da regra mais o valor do componente TEXTINPUT1. O fluxo irá receber uma letra para efetuar uma seleção no banco de dados, retornando todos os formulários que se iniciem com esta letra.

Esse retorno será visualizado no componente TEXTAREA1, o qual está sendo atribuido no código acima.
