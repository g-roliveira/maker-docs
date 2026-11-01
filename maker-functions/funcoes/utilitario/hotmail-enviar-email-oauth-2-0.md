---
title: "Hotmail - Enviar Email - Oauth 2.0"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Envia uma mensagem instantaneamente para o(s) destinatário(s), utilizando o SMTP do Hotmail com o Oauth2.0.

## Parâmetro(s)

1. Token de acesso. (Letras) (Ver Observação 1)
2. Remetente. (Letras)
3. Destinatários. (Variante) (Ver Observação 2)
4. Assunto. (Letras)
5. Mensagem. (Variante)
6. HTML? (Lógico)
7. Lista de anexos. (Variante) (Ver Observação 3)

## Retorno

Não possui.

## Observações

1. Token de acesso gerado fazendo uma requisção para o serviço de Cloud da Microsoft(Azure).
2. Os destinatários podem ser passados separados por "," e serão enviados como "TO". Se for necessário
enviar email como "TO", "CC" e/ou "BCC", é necessário utilizar a função "Email - Criar lista de destinatários".
3. Para passar apenas um anexo, é possível passar apenas o caminho do arquivo. Se for preciso passar
vários anexos, é necessário passar uma lista de caminhos dos arquivos.
3. Caso o 7º parâmetro seja Verdadeiro, a mensagem será renderizada como HTML, obedecendo a todas as
regras da linguagem.
3. O 3º parâmetro, além do email do remetente, também poderá ser informado o nome do mesmo. Para isso
deve ser informado o nome que será mostrado e em seguida o email. O email deve ser envolvido por &lt;&gt;.
Ex: Passando Nome e email: Carlos Santos &lt;carlos@gmail.com&gt;
Passando apenas email: carlos@gmail.com
