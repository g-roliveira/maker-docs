---
title: "Parâmetros de Configuração - Agendador"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/webrun_2/parametro_configuracao/parametros_configuracao_agendador.htm"
---

Aqui se definem parâmetros para configurar o agendador de tarefas.

Na tela Parâmetros de Configuração, ao clicar no componente ![image596.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image596.gif), mostra o componente Tempo:

![image1532.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1532.jpg)

Observar os seguintes componentes da tela do grupo:

- ![image598.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image598.gif) - permite criar um novo parâmetro para o grupo;
- ![image597.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image597.gif) - permite excluir o parâmetro e seus valores. O controle de check ao lado de cada parâmetro será utilizado para esse fim;
- ![image599.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image599.gif) - Permite excluir um valor do parâmetro. podem existir muitos valores para cada parâmetro;
- ![image600.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image600.gif) - Permite adicionar um novo valor ao parâmetro. podem existir muitos valores para cada parâmetro.

Abaixo, verifique os principais parâmetros para o grupo Agendador:

- Tempo - define o tempo para a execução das tarefas, expressando um valor em milessegundos;
- Tarefas - tarefas para serem executas. Ex: arquivos .BAT.
- TempoPermanenciaRelatorio - Define o tempo de permanência do relatório na pasta "...(contexto Webrun)\WFRReports\Generated", valor determinado em milissegundos;

Observação: A verificação dos parâmetros Tarefas e TempoPermanenciaRelatorio é realizada de acordo com o intervalo definido no parâmetro Tempo. Ex.: Caso o valor do parâmetro Tempo seja definido 120s, a cada 2 minutos a verificação dos demais parâmetro será executada.
