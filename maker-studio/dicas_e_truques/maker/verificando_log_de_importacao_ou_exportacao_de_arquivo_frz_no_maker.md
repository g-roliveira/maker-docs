---
title: "Verificando LOG de importação ou exportação de arquivo FRZ no Maker"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/verificando_log_de_importacao_ou_exportacao_de_arquivo_frz_no_maker.htm"
---

![image1671.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image651.png)

Para ativar o log de importação ou exportação destes arquivos, basta criar uma pasta chamada import_export em C:\Documents and Settings\alexsantos\Configurações locais\Dados de aplicativos\Softwell Solutions\Maker 3\debug\

Observação: Caso não exista a pasta debug, deve ser criada manualmente.

Exemplo de log:

Item: 1

17:25:26: Exportando a função: Chamar Serviço Web com certificado digital
17:25:27: Coletando dados do sistema...
17:25:27: Comprimindo o arquivo...
Item: 0
17:25:27: Comprimindo o arquivo de exportação...
Item: 0
Item: 100
17:25:27: Compressão do arquivo finalizada...
17:25:27: Removendo os arquivos temporários...
17:25:27: Remoção realizada com sucesso!
17:25:27: Exportação realizada com sucesso!

Exemplo de erro no log:

Item: 0
11: 09:20: Importando os Formulários...
11:09:20: Erro ao transformar a imagem: "0" em imagem principalPostgreSQL Error Code: (1)
ERROR:  insert or update on table "fr_sistema" violates foreign key constraint "fr_sistema_fk_fr_imag_0f57b84c" DETAIL:  Key (img_codigo)=(0) is not present in table "fr_imagem".
