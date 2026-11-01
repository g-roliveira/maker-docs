---
title: "Iniciar Download"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Utilizada para fazer o download de um arquivo passando o endereço do mesmo.
O caminho deve ser relativo ao diretório do deploy webrun, e deve começar por "/tmp/" ou "/download/" ou "/upload/"
ou "/downloads/" ou "/uploads.

## Parâmetro(s)

1. URL do arquivo que será baixado. (Ex: /tmp/arquivo.zip) (Letras)
2. WEB: Indica se deve ser exibido uma mensagem informativa, com o link do arquivo. (Lógico)
3. WEB: Indica se o arquivo deve ser excluído do servidor após o download. (Lógico) (Opcional)

## Retorno

WEB: Não possui.
Maker Mobile: Retorna o caminho completo do arquivo salvo.

## Observações

1. Caso o caminho da URL não seja relativo ao diretório do deploy do webrun, o download não iniciará automaticamente.
Ex: http://sistemas.webrun.com.br/tmp/arquivo.zip
2. Se o 2° parâmetro for verdadeiro aparecerá uma mensagem informando o endereço do arquivo, e iniciará o download. Se for falso apenas iniciará o download do arquivo. No Maker Mobile: Indica o nome (com extensão) do arquivo que será baixado.
3. Caso a função seja utilizada para a plataforma Maker Mobile, o segundo parâmetro deverá ser informado o nome (com extensão) para o arquivo que será salvo. A função retornará automaticamente o caminho do arquivo salvo (Maker Mobile)
4. Se o 3° parâmetro for verdadeiro, o arquivo será excluído do servidor após o download ser concluído com sucesso. Caso o download falhe, o arquivo é mantido. Se não for informado, o valor padrão é falso (o arquivo não é excluído).
5. A exclusão não se aplica a arquivos das pastas "/upload/" e "/uploads/", que são sempre mantidos.
6. Se o 2° e o 3° parâmetros forem verdadeiros, o link exibido na mensagem informativa ficará indisponível após o download, pois o arquivo terá sido excluído.
