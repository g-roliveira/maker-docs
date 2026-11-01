---
title: "Gmail - Enviar Email - Oauth 2.0"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Envia uma mensagem instantaneamente para o(s) destinatário(s), utilizando o SMTP do GMAIL com o Oauth2.0.

1. Token de acesso. (Letras)
2. Nome do Aplicativo (Letras) (Ver Observação 4)
3. Remetente (Letras)
4. Destinatários (Variante) (Ver Observação 2)
5. Assunto (Letras)
6. Mensagem (Variante)
7. HTML? (Lógico)
8. Lista de anexos (Variante) (Ver Observação 3)

## Retorno

Não possui.

## Observações

1. Os destinatários podem ser passados separados por "," e serão enviados como "TO". Se for necessário
enviar email como "TO", "CC" e/ou "BCC", é necessário utilizar a função "Email - Criar lista de destinatários".
2. Para passar apenas um anexo, é possível passar apenas o caminho do arquivo. Se for preciso passar
vários anexos, é necessário passar uma lista de caminhos dos arquivos.
3. Caso o 7º parâmetro seja Verdadeiro, a mensagem será renderizada como HTML, obedecendo a todas as
regras da linguagem.
3. O 3º parâmetro, além do email do remetente, também poderá ser informado o nome do mesmo. Para isso
deve ser informado o nome que será mostrado e em seguida o email. O email deve ser envolvido por &lt;&gt;.
Ex: Passando Nome e email: Carlos Santos &lt;carlos@gmail.com&gt;
Passando apenas email: carlos@gmail.com
4. Nome do aplicativo cadastrado no Google Cloud.
