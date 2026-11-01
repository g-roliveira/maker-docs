---
title: "Configuração de Servidores de Relatórios"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/relatorio/configuracao_servidores_relatorios.htm"
---

O objetivo deste item é possibilitar que sejam gerados relatórios a partir de servidores separados. Como exemplo, Servidor Linux.

O primeiro passo é instalar o Gerador de Relatórios no servidor desejado:

1. Acesse o diretório ..\DVD_IMAGE\Support do DVD de Instalação do Maker 2.6;
2. Execute o instalador de relatórios ![image671.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image671.gif) e siga os passos do Assistente de Instalação;
3. Como padrão, será instalado na pasta ..Softwell Solutions\ReportServer\

O segundo passo é criar os Parâmetros de Configuração:

![image426.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image426.jpg)

1. Adicione dois parâmetros:

   1. Servidor = &lt;host&gt;:9193
   2. ServidorRetorno = 1

Observações:

1. É utilizada a porta 9193 como padrão;
2. Para o Servidor de Relatórios funcionar, ele tem que estar com o Firewall desativado.
3. Atualmente, o servidor de relatórios trabalha apenas com o Report Builder 10.
