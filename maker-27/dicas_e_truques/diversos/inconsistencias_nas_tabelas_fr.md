---
title: "Inconsistências nas tabelas FR_"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/diversos/inconsistencias_nas_tabelas_fr.htm"
---

Aqui você encontrará solução para alguns dos problemas que podem ocorrer na estrutura interna das tabelas do Maker.

## Formulário não encontrados na exportação do WAR

Se o sistema que você estiver tentando exportar para WAR/JAR apresentar erros de Formulário não encontrado ou algo similiar no sistema gerado e não apresentar esse erro quando você usa o webrun.war genérico, provavelmente você tem formulários que estão no mesmo banco de dados, mas não fazem parte do seus sistemas, por isso não são exportados junto com os demais formulários do sistema. Para solucionar tal situação, é necessário localizar todos os formulários que estão associados a eventos ou propriedades de botão, grades e outros componentes e que não estão vinculados ao sistema, e vinculá-los (não copie) pelo repositório.

Há uma procedure que automatiza esse processo. Para isso, faça o seguinte:

1. Crie a procedure MKR_CORRIGIR_FORMULARIOS_DO_SISTEMA.
2. Execute-a passando a Sigla (3 letras) do sistema com problemas.
3. Execute MKR_CORRIGIR_FORMULARIOS_DO_SISTEMA 'COD'.

Código para MS-SQL Server:

CREATE PROCEDURE dbo.MKR_CORRIGIR_FORMULARIOS_DO_SISTEMA @SIS varchar(3)AS

BEGIN WHILE (EXISTS(select * from FR_PROPRIEDADE P

INNER JOIN FR_FORMULARIO f on (cast(f.FRM_CODIGO as varchar) = p.PRO_VALOR) --Exclue os formulários que não existem

INNER JOIN FR_FORMULARIO_SISTEMA fs on (fs.FRM_CODIGO = p.FRM_CODIGO) and (fs.SIS_CODIGO = @SIS) where (P.PRO_NOME='CodigoForm') and (isNumeric(p.PRO_VALOR) = 1) and (p.PRO_VALOR not in ('-1', '0'))          and (p.PRO_VALOR not in (select cast(fs2.FRM_CODIGO as varchar) from FR_FORMULARIO_SISTEMA fs2                                   where (fs2.SIS_CODIGO = @SIS)))))

BEGIN -- Insere os formulários no sistema

insert into FR_FORMULARIO_SISTEMA (FRM_CODIGO, SIS_CODIGO) select distinct case when isNumeric(p.PRO_VALOR) = 1 then cast(cast(p.PRO_VALOR as float) as int) else null end, @SIS from FR_PROPRIEDADE P

INNER JOIN FR_FORMULARIO f on (cast(f.FRM_CODIGO as varchar) = p.PRO_VALOR) --Exclue os formulários que não existem

INNER JOIN FR_FORMULARIO_SISTEMA fs on (fs.FRM_CODIGO = p.FRM_CODIGO) and                                               (fs.SIS_CODIGO = @SIS)

where (P.PRO_NOME='CodigoForm') and (isNumeric(p.PRO_VALOR) = 1)

and (p.PRO_VALOR not in ('-1', '0')) and (p.PRO_VALOR not in (select cast(fs2.FRM_CODIGO as varchar)

from FR_FORMULARIO_SISTEMA fs2 where (fs2.SIS_CODIGO = @SIS)))

END

WHILE (EXISTS(select * from FR_PARAMETRO p

LEFT OUTER JOIN FR_FORMULARIO f on (f.FRM_GUID = p.PAR_VALOR)

INNER JOIN FR_FORMULARIO f1 on (cast(f1.FRM_CODIGO as varchar)= case

when (len(p.PAR_VALOR) &gt; 10) then

cast(f.FRM_CODIGO as varchar)

else

p.PAR_VALOR

end) --Exclue os formulários que não existem

INNER JOIN FR_FORMULARIO_SISTEMA fs on (fs.FRM_CODIGO = p.FRM_CODIGO) and                                                             (fs.SIS_CODIGO = @SIS)

where ((p.PAR_NOME = 'Código de Formulário') or (p.PAR_NOME = 'Cod.Formulario')) and

(case when (len(p.PAR_VALOR) &gt; 10) then

cast(f.FRM_CODIGO as varchar)

else

p.PAR_VALOR end not in (select cast(fs2.FRM_CODIGO as varchar)

from FR_FORMULARIO_SISTEMA fs2

where (fs2.SIS_CODIGO = @SIS)))))

BEGIN insert into FR_FORMULARIO_SISTEMA (FRM_CODIGO, SIS_CODIGO)

select distinct

case

when (len(p.PAR_VALOR) &gt; 10) then

cast(f.FRM_CODIGO as varchar)

else

cast(cast(p.PAR_VALOR as float) as int)

end as c1, @SIS

from FR_PARAMETRO p

LEFT OUTER JOIN FR_FORMULARIO f on (f.FRM_GUID = p.PAR_VALOR)

INNER JOIN FR_FORMULARIO f1 on (cast(f1.FRM_CODIGO as varchar) = case

when (len(p.PAR_VALOR) &gt; 10) then

cast(f.FRM_CODIGO as varchar)

else

p.PAR_VALOR

end) --Exclue os formulários que não existem

INNER JOIN FR_FORMULARIO_SISTEMA fs on (fs.FRM_CODIGO = p.FRM_CODIGO) and                                                             (fs.SIS_CODIGO = @SIS)

where ((p.PAR_NOME = 'Código de Formulário') or (p.PAR_NOME = 'Cod.Formulario')) and

(case when (len(p.PAR_VALOR) &gt; 10) then

cast(f.FRM_CODIGO as varchar)

else

p.PAR_VALOR

end not in (select cast(fs2.FRM_CODIGO as varchar)

from FR_FORMULARIO_SISTEMA fs2

where (fs2.SIS_CODIGO = @SIS)))

ENDEND

Observação: A procedure abaixo foi feita para MS-SQL Server, mas pode ser adaptada facilmente para outros SGDB's.

## Problemas de FK entre FR_FORMULARIO e FR_FORMULARIO_SISTEMA

Se você experimentar mensagens de erro do tipo: "Violation of PRIMARY KEY constraint 'PK_FR_FORMULARIO_SISTEMA'. Cannot insert duplicate key in object 'dbo.FR_FORMULARIO_SISTEMA", provavelmente houve algum erro na criação das estruturas das FRs e a chave estrangeira entre as tabelas FR_FORMULARIO e FR_FORMULARIO_SISTEMA não foi criada.

Para corrigir tal problema, primeiro, remova o lixo da tabela FR_FORMULARIO com o comando abaixo:

delete from FR_FORMULARIO_SISTEMA where FRM_CODIGO not in (select FRM_CODIGO from FR_FORMULARIO)

Depois, crie a chave estrangeira entre as duas tabelas de acordo com a sintaxe do seu banco. Esta FK é do tipo CASCADE, ou seja, quando se deleta um formulário, o registro correspondente é removido da tabela FR_FORMULARIO_SISTEMA.
