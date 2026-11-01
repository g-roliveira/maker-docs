---
title: "Removendo os formulários duplicados do sistema"
source_url: "https://manual.softwell.com.br/docs/dicas-e-truques/maker/removendo_os_formularios_duplicados_do_sistema"
---

Quando as configurações do sistema apresentam inconsistências, você pode tentar resolver resetando-as. Isso se aplica nos seguintes casos:

- Formulários, relatórios ou fluxos externos não são encontrados;
- Opções do sistema, como Requer Autenticação Avaçado, não são salvas ou executadas;
- Eventos do sistemas não são gravados ou executados.

Identificando o problema

Esta solução somente se aplica quando o SQL abaixo retornar mais de 1 (um) registro:

SELECT FR_FORMULARIO.FRM_CODIGO

FROM FR_FORMULARIOinner join FR_FORMULARIO_SISTEMA FRM_SIS on (FRM_SIS.FRM_CODIGO = FR_FORMULARIO.FRM_CODIGO)

WHERE (FR_FORMULARIO.FRM_DESCRICAO = '$_FORMULARIO_DO_SISTEMA') and (FRM_SIS.SIS_CODIGO = 'ALO')

Método rápido

O comando abaixo irá remover todos os formulários do sistema, eliminando as duplicações. Será necessário sair do Maker e entrar novamente após executar esse comando SQL. Para remover todos os formulários do sistema, observe que a sigla ALO deve ser substituída pela sigla do sistema:

DELETE FROM FR_FORMULARIO

WHERE FRM_CODIGO in(select FR_FORMULARIO.FRM_CODIGO FROM FR_FORMULARIO

INNER JOIN FR_FORMULARIO_SISTEMA FRM_SIS on (FRM_SIS.FRM_CODIGO = FR_FORMULARIO.FRM_CODIGO) WHERE (FR_FORMULARIO.FRM_DESCRICAO = '$_FORMULARIO_DO_SISTEMA') and (FRM_SIS.SIS_CODIGO = 'ALO'))

Método mais seguro

Faça o seguinte SQL, onde ALO é o código do sistema:

SELECT FR_FORMULARIO.FRM_CODIGO

FROM FR_FORMULARIO INNER JOIN FR_FORMULARIO_SISTEMA FRM_SIS on (FRM_SIS.FRM_CODIGO = FR_FORMULARIO.FRM_CODIGO)

WHERE (FR_FORMULARIO.FRM_DESCRICAO = '$_FORMULARIO_DO_SISTEMA') and (FRM_SIS.SIS_CODIGO = 'ALO')

Observe a listagem do comando acima e delete a partir do segundo formulário com o comando SQL abaixo, em que 123 é o código do formulário:

DELETE FROM FR_FORMULARIO

WHERE FRM_CODIGO = 123

Atenção: Sugerimos que executem ***backup*** do projeto, pois qualquer configuração previamente feita no sistema será apagada.
